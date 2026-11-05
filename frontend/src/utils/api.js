// Base API URL configuration for local dev, Vercel, and Render deployments
const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.startsWith('192.168.') ||
  window.location.hostname.startsWith('10.')
);

// In local dev, leave API_BASE empty so Vite proxies /api and /uploads to local backend (http://localhost:5000)
// In production (Vercel/bizwoke.com), use VITE_API_URL pointing to the hosted backend
export const API_BASE = isLocal
  ? ''
  : (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const API_ENDPOINTS = {
  contact: `${API_BASE}/api/contact`,
  demo: `${API_BASE}/api/demo`,
  partner: `${API_BASE}/api/partner`,
  careers: `${API_BASE}/api/careers`,
  serviceEnquiry: `${API_BASE}/api/service-enquiry`,
  leads: `${API_BASE}/api/leads`,
  leadsStats: `${API_BASE}/api/leads/stats`,
  health: `${API_BASE}/api/health`,
  adminLogin: `${API_BASE}/api/admin/login`,
  adminVerify: `${API_BASE}/api/admin/verify`,
  banners: `${API_BASE}/api/banners`,
  bannersAdmin: `${API_BASE}/api/banners/admin`,
  bannerUpload: `${API_BASE}/api/banners/upload`,
  bannersReorder: `${API_BASE}/api/banners/reorder`,
  bannersRestoreDefaults: `${API_BASE}/api/banners/restore-defaults`,
};

/**
 * Resolves media URL: handles local /assets, uploaded /uploads with API_BASE, and external URLs
 */
export function resolveMediaUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  if (path.startsWith('/uploads')) {
    return API_BASE ? `${API_BASE}${path}` : path;
  }
  return path;
}
