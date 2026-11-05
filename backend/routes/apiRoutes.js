import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendNotificationEmail } from '../services/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../data/leads.json');
const BANNERS_FILE = path.join(__dirname, '../data/banners.json');

// Ensure data folder and files exist
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}
if (!fs.existsSync(BANNERS_FILE)) {
  fs.writeFileSync(BANNERS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Ensure uploads/banners directory exists
const uploadsDir = path.join(__dirname, '../uploads/banners');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

function saveLead(lead) {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const leads = JSON.parse(raw || '[]');
    leads.unshift(lead);
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving lead to disk:', err);
  }
}

function getBanners() {
  try {
    if (!fs.existsSync(BANNERS_FILE)) return [];
    const raw = fs.readFileSync(BANNERS_FILE, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Error reading banners:', err);
    return [];
  }
}

function saveBanners(banners) {
  try {
    fs.writeFileSync(BANNERS_FILE, JSON.stringify(banners, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving banners:', err);
    return false;
  }
}

const router = express.Router();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BizwokeAdmin2026!';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@bizwoke.com';

// ---------------------------------------------------------------------------
// 1. Health check
// ---------------------------------------------------------------------------
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Bizwoke Nova Enterprise API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// ---------------------------------------------------------------------------
// 2. Admin Authentication Endpoints
// ---------------------------------------------------------------------------
router.post('/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password required' });
  }

  if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
    const tokenPayload = {
      email: ADMIN_EMAIL,
      role: 'Super Admin',
      issuedAt: Date.now()
    };
    const token = Buffer.from(JSON.stringify(tokenPayload)).toString('base64');
    return res.json({
      success: true,
      token,
      user: {
        email: ADMIN_EMAIL,
        name: 'Bizwoke Administrator',
        role: 'Super Admin'
      }
    });
  }

  res.status(401).json({ success: false, error: 'Invalid email or password' });
});

router.get('/admin/verify', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ authenticated: false });
  const token = authHeader.replace(/^Bearer\s+/, '');
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    if (payload && payload.email === ADMIN_EMAIL) {
      return res.json({ authenticated: true, user: payload });
    }
  } catch (e) {
    // invalid token
  }
  res.status(401).json({ authenticated: false });
});

// ---------------------------------------------------------------------------
// 3. Contact & General Multi-Channel Enquiry
// ---------------------------------------------------------------------------
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, organization, message, enquiryType, honeypot } = req.body;

    // Honeypot spam protection
    if (honeypot) {
      return res.status(200).json({ success: true, message: 'Enquiry received' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.'
      });
    }

    const lead = {
      id: `lead_${Date.now()}`,
      type: enquiryType || 'general',
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      organization: organization ? organization.trim() : null,
      message: message.trim(),
      status: 'new',
      notes: '',
      ip: req.ip || req.headers['x-forwarded-for'],
      userAgent: req.headers['user-agent'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveLead(lead);

    await sendNotificationEmail({
      subject: `New ${lead.type.toUpperCase()} Enquiry: ${lead.name}`,
      leadData: {
        'Enquiry Pathway': lead.type,
        'Name': lead.name,
        'Email': lead.email,
        'Phone': lead.phone,
        'Organization': lead.organization,
        'Message': lead.message
      }
    });

    res.status(200).json({
      success: true,
      message: 'Enquiry successfully logged and dispatched.',
      leadId: lead.id
    });
  } catch (error) {
    console.error('API Error in /contact:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// 4. Platform Product Demonstration Request
// ---------------------------------------------------------------------------
router.post('/demo', async (req, res) => {
  try {
    const { name, email, organization, message, platformName, honeypot } = req.body;

    if (honeypot) return res.status(200).json({ success: true });
    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const lead = {
      id: `demo_${Date.now()}`,
      type: 'product_demo',
      platform: platformName || 'Unspecified Platform',
      name: name.trim(),
      email: email.trim(),
      organization: organization ? organization.trim() : null,
      message: message ? message.trim() : null,
      status: 'new',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveLead(lead);

    await sendNotificationEmail({
      subject: `Product Demo Request for ${lead.platform}: ${lead.name}`,
      leadData: {
        'Platform Requested': lead.platform,
        'Name': lead.name,
        'Email': lead.email,
        'Organization': lead.organization,
        'Notes': lead.message
      }
    });

    res.status(200).json({ success: true, message: 'Demo request recorded', leadId: lead.id });
  } catch (error) {
    console.error('API Error in /demo:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// 5. Strategic Partnership Application
// ---------------------------------------------------------------------------
router.post('/partner', async (req, res) => {
  try {
    const { name, email, company, partnerType, message, honeypot } = req.body;

    if (honeypot) return res.status(200).json({ success: true });
    if (!name || !email || !company) {
      return res.status(400).json({ success: false, error: 'Name, email, and company are required.' });
    }

    const lead = {
      id: `partner_${Date.now()}`,
      type: 'partnership_application',
      partnerType: partnerType || 'General',
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      message: message ? message.trim() : null,
      status: 'new',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveLead(lead);

    await sendNotificationEmail({
      subject: `Partnership Application: ${lead.company} (${lead.partnerType})`,
      leadData: {
        'Partner Track': lead.partnerType,
        'Company': lead.company,
        'Contact Name': lead.name,
        'Email': lead.email,
        'Objectives': lead.message
      }
    });

    res.status(200).json({ success: true, message: 'Partnership application received', leadId: lead.id });
  } catch (error) {
    console.error('API Error in /partner:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// 6. Careers & Job Application
// ---------------------------------------------------------------------------
router.post('/careers', async (req, res) => {
  try {
    const { name, email, role, portfolio, message, honeypot } = req.body;

    if (honeypot) return res.status(200).json({ success: true });
    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const lead = {
      id: `career_${Date.now()}`,
      type: 'job_application',
      role: role || 'General Engineering',
      name: name.trim(),
      email: email.trim(),
      portfolio: portfolio ? portfolio.trim() : null,
      message: message ? message.trim() : null,
      status: 'new',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveLead(lead);

    await sendNotificationEmail({
      subject: `Job Application for ${lead.role}: ${lead.name}`,
      leadData: {
        'Role': lead.role,
        'Candidate Name': lead.name,
        'Email': lead.email,
        'Portfolio / GitHub': lead.portfolio,
        'Message': lead.message
      }
    });

    res.status(200).json({ success: true, message: 'Application submitted', leadId: lead.id });
  } catch (error) {
    console.error('API Error in /careers:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// 7. Professional Service Enquiry
// ---------------------------------------------------------------------------
router.post('/service-enquiry', async (req, res) => {
  try {
    const { name, email, phone, details, serviceTitle, honeypot } = req.body;

    if (honeypot) return res.status(200).json({ success: true });
    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const lead = {
      id: `service_${Date.now()}`,
      type: 'service_proposal',
      serviceTitle: serviceTitle || 'Enterprise Service',
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      details: details ? details.trim() : null,
      status: 'new',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveLead(lead);

    await sendNotificationEmail({
      subject: `Service Proposal Request for ${lead.serviceTitle}: ${lead.name}`,
      leadData: {
        'Service Line': lead.serviceTitle,
        'Client Name': lead.name,
        'Email': lead.email,
        'Phone': lead.phone,
        'Requirements': lead.details
      }
    });

    res.status(200).json({ success: true, message: 'Service inquiry recorded', leadId: lead.id });
  } catch (error) {
    console.error('API Error in /service-enquiry:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// 8. Leads Audit & Management Endpoints
// ---------------------------------------------------------------------------
router.get('/leads', (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const leads = JSON.parse(raw || '[]');
    res.json({
      count: leads.length,
      leads: leads
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to read leads' });
  }
});

router.patch('/leads/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const leads = JSON.parse(raw || '[]');
    const leadIndex = leads.findIndex(l => l.id === id);
    if (leadIndex === -1) {
      return res.status(404).json({ success: false, error: 'Lead not found' });
    }

    if (status !== undefined) leads[leadIndex].status = status;
    if (notes !== undefined) leads[leadIndex].notes = notes;
    leads[leadIndex].updatedAt = new Date().toISOString();

    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    res.json({ success: true, lead: leads[leadIndex] });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to update lead' });
  }
});

router.delete('/leads/:id', (req, res) => {
  try {
    const { id } = req.params;
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const leads = JSON.parse(raw || '[]');
    const filtered = leads.filter(l => l.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
    res.json({ success: true, message: 'Lead removed', count: filtered.length });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to delete lead' });
  }
});

router.get('/leads/stats', (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const leads = JSON.parse(raw || '[]');
    const total = leads.length;
    const today = new Date().toISOString().slice(0, 10);
    const todayCount = leads.filter(l => l.createdAt && l.createdAt.startsWith(today)).length;

    const byType = {};
    const byStatus = { new: 0, contacted: 0, in_progress: 0, closed: 0 };

    leads.forEach(l => {
      const t = l.type || 'general';
      byType[t] = (byType[t] || 0) + 1;
      const s = l.status || 'new';
      byStatus[s] = (byStatus[s] || 0) + 1;
    });

    res.json({
      total,
      today: todayCount,
      byType,
      byStatus
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to compute stats' });
  }
});

// ---------------------------------------------------------------------------
// 9. Banner Management Endpoints
// ---------------------------------------------------------------------------

// Public endpoint for active banners (sorted by order)
router.get('/banners', (req, res) => {
  try {
    const banners = getBanners();
    const activeBanners = banners
      .filter(b => b.active !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
    res.json({
      count: activeBanners.length,
      banners: activeBanners
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch banners' });
  }
});

// Admin endpoint for all banners (including inactive)
router.get('/banners/admin', (req, res) => {
  try {
    const banners = getBanners();
    banners.sort((a, b) => (a.order || 0) - (b.order || 0));
    res.json({
      count: banners.length,
      banners
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch admin banners' });
  }
});

// Create new banner
router.post('/banners', (req, res) => {
  try {
    const { name, title, image, webp, mobileImage, mobileWebp, primaryLink, alt, order, active } = req.body;
    if (!title || !image) {
      return res.status(400).json({ success: false, error: 'Title and Desktop Image are required' });
    }

    const banners = getBanners();
    const newBanner = {
      id: `banner_${Date.now()}`,
      name: name || title,
      title: title.trim(),
      image,
      webp: webp || image,
      mobileImage: mobileImage || image,
      mobileWebp: mobileWebp || webp || image,
      primaryLink: primaryLink || '/services/',
      alt: alt || title,
      order: typeof order === 'number' ? order : banners.length + 1,
      active: active !== undefined ? active : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    banners.push(newBanner);
    saveBanners(banners);

    res.status(201).json({ success: true, banner: newBanner });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to create banner' });
  }
});

// Update banner
router.put('/banners/:id', (req, res) => {
  try {
    const { id } = req.params;
    const banners = getBanners();
    const idx = banners.findIndex(b => b.id === id);
    if (idx === -1) {
      return res.status(404).json({ success: false, error: 'Banner not found' });
    }

    const fields = req.body;
    banners[idx] = {
      ...banners[idx],
      ...fields,
      updatedAt: new Date().toISOString()
    };

    saveBanners(banners);
    res.json({ success: true, banner: banners[idx] });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to update banner' });
  }
});

// Delete banner
router.delete('/banners/:id', (req, res) => {
  try {
    const { id } = req.params;
    const banners = getBanners();
    const filtered = banners.filter(b => b.id !== id);
    saveBanners(filtered);
    res.json({ success: true, message: 'Banner deleted', count: filtered.length });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to delete banner' });
  }
});

// Reorder banners
router.post('/banners/reorder', (req, res) => {
  try {
    const { orderIds } = req.body;
    if (!Array.isArray(orderIds)) {
      return res.status(400).json({ success: false, error: 'orderIds array required' });
    }

    const banners = getBanners();
    const idMap = new Map(banners.map(b => [b.id, b]));

    const reordered = [];
    orderIds.forEach((id, index) => {
      if (idMap.has(id)) {
        const item = idMap.get(id);
        item.order = index + 1;
        item.updatedAt = new Date().toISOString();
        reordered.push(item);
        idMap.delete(id);
      }
    });

    for (const item of idMap.values()) {
      item.order = reordered.length + 1;
      reordered.push(item);
    }

    saveBanners(reordered);
    res.json({ success: true, banners: reordered });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to reorder banners' });
  }
});

// Restore default sample banners
router.post('/banners/restore-defaults', (req, res) => {
  try {
    const defaultBanners = [
      {
        id: "banner-1",
        name: "Technology & AI Solutions",
        title: "Technology & AI Solutions for Business Growth — Formerly NKTech (Since 2012)",
        image: "/assets/banners/banner-tech-ai-solutions-hd.jpg",
        webp: "/assets/banners/banner-tech-ai-solutions-hd.webp",
        mobileImage: "/assets/banners/banner-tech-ai-solutions-hd.webp",
        primaryLink: "/services/",
        alt: "Bizwoke Nova - Technology & AI Solutions for Business Growth",
        order: 1,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "banner-2",
        name: "AI & Agentic AI",
        title: "AI & Agentic AI Solutions for Real Business Impact",
        image: "/assets/banners/banner-agentic-ai-hd.jpg",
        webp: "/assets/banners/banner-agentic-ai-hd.webp",
        mobileImage: "/assets/banners/banner-agentic-ai-hd.webp",
        primaryLink: "/services/ai-automation-services/",
        alt: "Bizwoke Nova - AI & Agentic AI Solutions for Real Business Impact",
        order: 2,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "banner-3",
        name: "BharatBN™",
        title: "BharatBN™ — India's Local Business Search & SEO Platform",
        image: "/assets/banners/banner-bharatbn-hd.jpg",
        webp: "/assets/banners/banner-bharatbn-hd.webp",
        mobileImage: "/assets/banners/banner-bharatbn-hd.webp",
        primaryLink: "/platforms/bharatbn/",
        alt: "BharatBN - India's Local Business Search & SEO Platform",
        order: 3,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "banner-4",
        name: "BizORM™",
        title: "BizORM™ — Smart Review & Reputation Management Platform",
        image: "/assets/banners/banner-bizorm-hd.jpg",
        webp: "/assets/banners/banner-bizorm-hd.webp",
        mobileImage: "/assets/banners/banner-bizorm-hd.webp",
        primaryLink: "/platforms/bizorm/",
        alt: "BizORM - Smart Review & Reputation Management Platform",
        order: 4,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "banner-5",
        name: "Digital Ecosystem",
        title: "A Complete Digital Ecosystem for a Connected India",
        image: "/assets/banners/banner-digital-ecosystem-hd.jpg",
        webp: "/assets/banners/banner-digital-ecosystem-hd.webp",
        mobileImage: "/assets/banners/banner-digital-ecosystem-hd.webp",
        primaryLink: "/platforms/",
        alt: "Bizwoke Nova - A Complete Digital Ecosystem for a Connected India",
        order: 5,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    saveBanners(defaultBanners);
    res.json({ success: true, message: 'Default banners restored', count: defaultBanners.length, banners: defaultBanners });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to restore default banners' });
  }
});

// Upload & save cropped image
router.post('/banners/upload', async (req, res) => {
  try {
    const { imageBase64, filename, type } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ success: false, error: 'No image data provided' });
    }

    const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ success: false, error: 'Invalid base64 image data' });
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');

    let ext = 'webp';
    if (mimeType.includes('png')) ext = 'png';
    else if (mimeType.includes('jpeg') || mimeType.includes('jpg')) ext = 'jpg';

    const prefix = type === 'mobile' ? 'mobile-banner' : 'desktop-banner';
    const safeBase = (filename ? filename.replace(/[^a-zA-Z0-9_-]/g, '_') : prefix);
    const safeName = `${safeBase}_${Date.now()}.${ext}`;

    const targetDir = path.join(__dirname, '../uploads/banners');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetPath = path.join(targetDir, safeName);
    fs.writeFileSync(targetPath, buffer);

    const publicUrl = `/uploads/banners/${safeName}`;

    res.status(200).json({
      success: true,
      url: publicUrl,
      filename: safeName,
      size: buffer.length
    });
  } catch (err) {
    console.error('Error in /banners/upload:', err);
    res.status(500).json({ success: false, error: 'Failed to process image upload' });
  }
});

export default router;
