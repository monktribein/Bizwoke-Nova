// Base API URL configuration for local dev, Vercel, and Render deployments
export const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const API_ENDPOINTS = {
  contact: `${API_BASE}/api/contact`,
  demo: `${API_BASE}/api/demo`,
  partner: `${API_BASE}/api/partner`,
  careers: `${API_BASE}/api/careers`,
  serviceEnquiry: `${API_BASE}/api/service-enquiry`,
  leads: `${API_BASE}/api/leads`,
  health: `${API_BASE}/api/health`,
};

