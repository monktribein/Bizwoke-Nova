// Base API & Media URL configuration for local dev, Vercel, and Render deployments
const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.startsWith('192.168.') ||
  window.location.hostname.startsWith('10.')
);

export const RENDER_BACKEND_URL = 'https://bizwoke-nova.onrender.com';

// In local dev, leave API_BASE empty so Vite proxies /api and /uploads to local backend (http://localhost:5000)
// In production (Vercel/bizwoke.com), use VITE_API_URL or fallback to RENDER_BACKEND_URL
export const API_BASE = isLocal
  ? ''
  : (import.meta.env.VITE_API_URL || RENDER_BACKEND_URL).replace(/\/+$/, '');

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
 * Resolves media URL:
 * - External (http/https/data): returns as-is
 * - /assets/...: public static asset bundled with frontend
 * - /uploads/...:
 *    - In local dev: relative path (proxied by Vite to localhost:5000)
 *    - In production: direct absolute URL to Render backend (e.g. https://bizwoke-nova.onrender.com/uploads/...)
 */
export function resolveMediaUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  if (path.startsWith('/uploads')) {
    return isLocal ? path : `${RENDER_BACKEND_URL}${path}`;
  }
  return path;
}
