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
    <footer className="bg-[#0F294A] text-slate-300 pt-16 pb-12 border-t border-slate-700/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner */}
        <div className="bg-[#143761] rounded-3xl p-8 sm:p-10 mb-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              Awakening Your Success • Mission FTC™
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Building Digital Infrastructure for a Smarter India.
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              One Portfolio. Many Platforms. One Technology Foundation. Explore enterprise software, AI systems, and specialized digital platforms.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <Link
              to="/platforms/"
              className="px-6 py-3 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-full transition-all shadow-md inline-flex items-center gap-2 group"
            >
              <span>Explore Platforms</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact/"
              className="px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-full transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Multi-Column Sitemap & Corporate Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/60">
          {/* Col 1: Corporate Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Bizwoke Nova™ is an enterprise technology, AI solutions, and digital transformation company. We engineer scalable software, mission-critical platforms, and connected digital ecosystems for enterprises, institutions, and government bodies.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Portfolio Strategy:</span>
                <span className="text-[#17A6A1]">Mission FTC™</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Shared Tech Foundation:</span>
                <span className="text-[#3b82f6]">NKTech Enterprise Platform™ (NEP)</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#246BCE] border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#246BCE] border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="X Twitter Profile"
              >
                x
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#246BCE] border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="GitHub Profile"
              >
                git
              </a>
            </div>
          </div>

          {/* Col 2: Digital Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              Digital Platforms
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/platforms/tirvona/" className="hover:text-white transition-colors">Tirvona™ (Tourism & Destinations)</Link>
              </li>
              <li>
                <Link to="/platforms/bharatbn/" className="hover:text-white transition-colors">BharatBN™ (Business Network)</Link>
              </li>
              <li>
                <Link to="/platforms/bizorm/" className="hover:text-white transition-colors">BizORM™ (CX & Reviews)</Link>
              </li>
              <li>
                <Link to="/platforms/pravixo/" className="hover:text-white transition-colors">Pravixo™ (Creator Commerce)</Link>
              </li>
              <li>
                <Link to="/platforms/political-management-erp/" className="hover:text-white transition-colors">Political Management ERP™</Link>
              </li>
              <li>
                <Link to="/platforms/ulb-erp/" className="hover:text-white transition-colors">ULB ERP Enterprise™</Link>
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
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/services/enterprise-software-development/" className="hover:text-white transition-colors">Enterprise Software & ERP</Link>
              </li>
              <li>
                <Link to="/services/ai-automation-services/" className="hover:text-white transition-colors">AI & Process Automation</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development/" className="hover:text-white transition-colors">Mobile App Engineering</Link>
              </li>
              <li>
                <Link to="/services/ai-seo-services/" className="hover:text-white transition-colors">AI SEO & Digital Growth</Link>
              </li>
              <li>
                <Link to="/solutions/" className="hover:text-white transition-colors">8 Industry Solutions</Link>
              </li>
              <li>
                <Link to="/technology/" className="hover:text-white transition-colors">NKTech Platform (NEP)</Link>
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
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/about-us/" className="hover:text-white transition-colors">About Bizwoke Nova</Link>
              </li>
              <li>
                <Link to="/about-us/#vision" className="hover:text-white transition-colors">Mission FTC™ Strategy</Link>
              </li>
              <li>
                <Link to="/partners/" className="hover:text-white transition-colors">Strategic Partnerships</Link>
              </li>
              <li>
                <Link to="/careers/" className="hover:text-white transition-colors">Careers & Fellowships</Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-white transition-colors">Contact & Enquiries</Link>
              </li>
              <li>
                <Link to="/contact/?type=privacy" className="hover:text-white transition-colors">Privacy & Data Governance</Link>
              </li>
              <li>
                <Link to="/contact/?type=terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Verification & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Bizwoke Nova™. All rights reserved. Awakening Your Success.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Option A Brand Architecture</span>
            <span>•</span>
            <span className="text-[#17A6A1]">Mission FTC™ Initiative</span>
            <span>•</span>
            <span className="text-[#3b82f6]">NEP Enterprise Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
