import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/apiRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Ensure uploads directory exists and is served statically
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}
const bannersUploadsPath = path.join(uploadsPath, 'banners');
if (!fs.existsSync(bannersUploadsPath)) {
  fs.mkdirSync(bannersUploadsPath, { recursive: true });
}
app.use('/uploads', express.static(uploadsPath));

// Request logging in development
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`[API ${req.method}] ${req.path} - ${new Date().toISOString()}`);
  }
  next();
});

// Mount API routes
app.use('/api', apiRoutes);

// Optional: Serve frontend build in production mode if dist/ exists
const distPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Fallback handler
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  res.status(200).send('Bizwoke Nova Enterprise API Server Active. Run `npm run build` to generate frontend bundle.');
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Bizwoke Nova Enterprise Backend Server Active`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📋 Leads audit: http://localhost:${PORT}/api/leads`);
  console.log(`====================================================`);
});
