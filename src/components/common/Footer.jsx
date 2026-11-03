import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { COMPANY_DATA } from '../../data/companyData';
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-white text-slate-600 pt-10 pb-8 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-blue-50/60 rounded-3xl p-6 sm:p-8 mb-8 border border-orange-200/80 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              Awakening Your Success • Mission FTC™
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F294A] tracking-tight">
              Building Digital Infrastructure for a Smarter India.
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              One Portfolio. Many Platforms. One Technology Foundation. Explore enterprise software, AI systems, and specialized digital platforms.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10 w-full lg:w-auto">
            <Link
              to="/platforms/"
              className="px-6 py-2.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2 group"
            >
              <span>Explore Platforms</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact/"
              className="px-6 py-2.5 text-sm font-bold text-[#0F294A] bg-white hover:bg-slate-50 border border-slate-300 rounded-full transition-colors shadow-xs inline-flex items-center justify-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Multi-Column Sitemap & Corporate Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-slate-200">
          {/* Col 1: Corporate Brand Identity & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="default" size="lg" />
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              Bizwoke Nova™ is an enterprise technology, AI solutions, and digital transformation company. We engineer scalable software, mission-critical platforms, and connected digital ecosystems for enterprises, institutions, and government bodies.
            </p>

            {/* Direct Contact: Phone, Email, Location */}
            <div className="pt-2 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <a
                href="tel:+911204567890"
                className="flex items-center gap-2.5 hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors group w-fit"
              >
                <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:bg-[#F27A24] group-hover:text-white transition-all shadow-2xs">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-[#F27A24]">
                  +91 (0) 120-BIZWOKE
                </span>
              </a>

              <a
                href="mailto:contact@bizwoke.com"
                className="flex items-center gap-2.5 hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors group w-fit"
              >
                <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#2563EB] dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-2xs">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-[#F27A24]">
                  contact@bizwoke.com
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-teal-500/10 text-[#0D9488] dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20 mt-0.5 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span className="leading-relaxed text-slate-600 dark:text-slate-300 max-w-xs">
                  Sector 62, Noida, Uttar Pradesh 201309, Delhi NCR, India
                </span>
              </div>
            </div>

            {/* Strategic Anchors */}
            <div className="pt-1 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Portfolio Strategy:</span>
                <span className="text-[#0D9488] font-bold">Mission FTC™</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Shared Tech Foundation:</span>
                <span className="text-[#2563EB] font-bold">NKTech Enterprise Platform™ (NEP)</span>
              </div>
            </div>

            {/* Real Branded Social Icons */}
            <div className="pt-3 flex items-center gap-2.5">
              {/* LinkedIn - Official Brand Blue */}
              <a
                href="https://www.linkedin.com/company/bizwoke/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-200 shadow-2xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.98 0 1.76.78 1.76 1.75s-.78 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
                </svg>
              </a>

              {/* X (formerly Twitter) - Official Black */}
              <a
                href="https://twitter.com/bizwoke"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-200 shadow-2xs"
                aria-label="X (Twitter) Profile"
                title="X (Twitter)"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram - Official Brand Gradient */}
              <a
                href="https://instagram.com/bizwoke"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-200 shadow-2xs"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube - Official Brand Red */}
              <a
                href="https://youtube.com/@bizwoke"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-200 shadow-2xs"
                aria-label="YouTube Channel"
                title="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* GitHub - Official Dark Octocat */}
              <a
                href="https://github.com/monktribein/Bizwoke-Nova"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#24292F] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-200 shadow-2xs"
                aria-label="GitHub Repository"
                title="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Digital Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              Digital Platforms
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/platforms/tirvona/" className="hover:text-[#0F294A] transition-colors">Tirvona™ (Tourism & Destinations)</Link>
              </li>
              <li>
                <Link to="/platforms/bharatbn/" className="hover:text-[#0F294A] transition-colors">BharatBN™ (Business Network)</Link>
              </li>
              <li>
                <Link to="/platforms/bizorm/" className="hover:text-[#0F294A] transition-colors">BizORM™ (CX & Reviews)</Link>
              </li>
              <li>
                <Link to="/platforms/pravixo/" className="hover:text-[#0F294A] transition-colors">Pravixo™ (Creator Commerce)</Link>
              </li>
              <li>
                <Link to="/platforms/political-management-erp/" className="hover:text-[#0F294A] transition-colors">Political Management ERP™</Link>
              </li>
              <li>
                <Link to="/platforms/ulb-erp/" className="hover:text-[#0F294A] transition-colors">ULB ERP Enterprise™</Link>
              </li>
              <li>
                <Link to="/platforms/" className="font-bold text-[#F27A24] hover:underline pt-1 inline-block">
                  View All 12 Platforms →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/services/enterprise-software-development/" className="hover:text-[#0F294A] transition-colors">Enterprise Software & ERP</Link>
              </li>
              <li>
                <Link to="/services/ai-automation-services/" className="hover:text-[#0F294A] transition-colors">AI & Process Automation</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development/" className="hover:text-[#0F294A] transition-colors">Mobile App Engineering</Link>
              </li>
              <li>
                <Link to="/services/ai-seo-services/" className="hover:text-[#0F294A] transition-colors">AI SEO & Digital Growth</Link>
              </li>
              <li>
                <Link to="/solutions/" className="hover:text-[#0F294A] transition-colors">8 Industry Solutions</Link>
              </li>
              <li>
                <Link to="/technology/" className="hover:text-[#0F294A] transition-colors">NKTech Platform (NEP)</Link>
              </li>
              <li>
                <Link to="/services/" className="font-bold text-[#F27A24] hover:underline pt-1 inline-block">
                  View All 14 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/about-us/" className="hover:text-[#0F294A] transition-colors">About Bizwoke Nova</Link>
              </li>
              <li>
                <Link to="/about-us/#vision" className="hover:text-[#0F294A] transition-colors">Mission FTC™ Strategy</Link>
              </li>
              <li>
                <Link to="/partners/" className="hover:text-[#0F294A] transition-colors">Strategic Partnerships</Link>
              </li>
              <li>
                <Link to="/careers/" className="hover:text-[#0F294A] transition-colors">Careers & Fellowships</Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-[#0F294A] transition-colors">Contact & Enquiries</Link>
              </li>
              <li>
                <Link to="/contact/?type=privacy" className="hover:text-[#0F294A] transition-colors">Privacy & Data Governance</Link>
              </li>
              <li>
                <Link to="/contact/?type=terms" className="hover:text-[#0F294A] transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Verification & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Bizwoke Nova™. All rights reserved. Awakening Your Success.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Option A Brand Architecture</span>
            <span>•</span>
            <span className="text-[#0D9488] font-semibold">Mission FTC™ Initiative</span>
            <span>•</span>
            <span className="text-[#2563EB] font-semibold">NEP Enterprise Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
