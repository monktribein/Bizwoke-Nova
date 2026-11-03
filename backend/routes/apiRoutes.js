import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendNotificationEmail } from '../services/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../data/leads.json');

// Ensure data folder and file exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
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

const router = express.Router();

// 1. Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Bizwoke Nova Enterprise API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 2. Contact & General Multi-Channel Enquiry
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
      ip: req.ip || req.headers['x-forwarded-for'],
      userAgent: req.headers['user-agent'],
      createdAt: new Date().toISOString()
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

// 3. Platform Product Demonstration Request
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
      createdAt: new Date().toISOString()
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

// 4. Strategic Partnership Application
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
      createdAt: new Date().toISOString()
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

// 5. Careers & Job Application
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
      createdAt: new Date().toISOString()
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

// 6. Professional Service Enquiry
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
      createdAt: new Date().toISOString()
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

// 7. Leads Audit Endpoint (Read-only list of stored leads)
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

export default router;

