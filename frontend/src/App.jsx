import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Platforms from './pages/Platforms';
import PlatformDetail from './pages/PlatformDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Technology from './pages/Technology';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Admin Console Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

export default function App() {
  return (
    <ThemeProvider>
      <AdminAuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/about/" element={<About />} />
            <Route path="/about" element={<About />} />
            
            {/* Technology Foundation */}
            <Route path="/technology/" element={<Technology />} />
            
            {/* Strategic Partnerships, Careers & Contact */}
            <Route path="/partners/" element={<Partners />} />
            <Route path="/careers/" element={<Careers />} />
            <Route path="/contact/" element={<Contact />} />

            {/* Digital Platforms Directory & 12 Platform Routes */}
            <Route path="/platforms/" element={<Platforms />} />
            <Route path="/platforms/:slug/" element={<PlatformDetail />} />
            
            {/* Industry Solutions Directory & 8 Sector Routes */}
            <Route path="/solutions/" element={<Solutions />} />
            <Route path="/solutions/:slug/" element={<SolutionDetail />} />
            <Route path="/solutions/ai-business-automation/" element={<PlatformDetail overrideSlug="ai-business-automation" />} />

            {/* Professional Services Directory & 14 Service Routes */}
            <Route path="/services/" element={<Services />} />
            <Route path="/services/:slug/" element={<ServiceDetail />} />

            {/* Secure Admin Console Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AdminAuthProvider>
    </ThemeProvider>
  );
}
