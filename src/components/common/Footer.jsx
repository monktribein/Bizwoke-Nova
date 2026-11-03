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
          {/* Col 1: Corporate Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="default" size="lg" />
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Bizwoke Nova™ is an enterprise technology, AI solutions, and digital transformation company. We engineer scalable software, mission-critical platforms, and connected digital ecosystems for enterprises, institutions, and government bodies.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Portfolio Strategy:</span>
                <span className="text-[#0D9488] font-bold">Mission FTC™</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Shared Tech Foundation:</span>
                <span className="text-[#2563EB] font-bold">NKTech Enterprise Platform™ (NEP)</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#F27A24] border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white transition-all shadow-2xs hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.98 0 1.76.78 1.76 1.75s-.78 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#F27A24] border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white transition-all shadow-2xs hover:scale-105"
                aria-label="X Twitter Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#F27A24] border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white transition-all shadow-2xs hover:scale-105"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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
