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
    <footer className="bg-[#10233F] text-slate-300 pt-16 pb-12 border-t border-[#1d3e70]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Banner */}
        <div className="bg-[#143761] rounded-2xl p-8 mb-16 border border-[#F27A24]/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
              Awakening Your Success • Mission FTC™
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Building Digital Infrastructure for a Smarter India.
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              One Portfolio. Many Platforms. One Technology Foundation. Explore enterprise software, AI systems, and specialized digital platforms.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/platforms/"
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl transition-all shadow-md inline-flex items-center gap-1.5"
            >
              Explore Platforms <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact/"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/60 rounded-xl transition-colors"
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
                <span className="text-[#246BCE]">NKTech Enterprise Platform™ (NEP)</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#246BCE] flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#246BCE] flex items-center justify-center text-white transition-colors"
                aria-label="X Twitter Profile"
              >
                x
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#246BCE] flex items-center justify-center text-white transition-colors"
                aria-label="GitHub Profile"
              >
                git
              </a>
            </div>
          </div>

          {/* Col 2: Digital Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platforms Portfolio
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/platforms/tirvona/" className="hover:text-white transition-colors">
                  Tirvona™ (Tourism)
                </Link>
              </li>
              <li>
                <Link to="/platforms/bharatbn/" className="hover:text-white transition-colors">
                  BharatBN™ (Discovery)
                </Link>
              </li>
              <li>
                <Link to="/platforms/bizorm/" className="hover:text-white transition-colors">
                  BizORM™ (Experience/ORM)
                </Link>
              </li>
              <li>
                <Link to="/platforms/pravixo/" className="hover:text-white transition-colors">
                  Pravixo™ (Creator Commerce)
                </Link>
              </li>
              <li>
                <Link to="/platforms/political-management-erp/" className="hover:text-white transition-colors">
                  Political Management ERP™
                </Link>
              </li>
              <li>
                <Link to="/platforms/ulb-erp/" className="hover:text-white transition-colors">
                  ULB ERP Enterprise™
                </Link>
              </li>
              <li>
                <Link to="/platforms/" className="text-[#17A6A1] font-semibold flex items-center gap-1 hover:underline pt-1">
                  View All 12 Platforms <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services & Sectors
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/services/enterprise-software-development/" className="hover:text-white transition-colors">
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation-services/" className="hover:text-white transition-colors">
                  AI Automation & Workflows
                </Link>
              </li>
              <li>
                <Link to="/services/erp-crm-development/" className="hover:text-white transition-colors">
                  Custom ERP & CRM
                </Link>
              </li>
              <li>
                <Link to="/services/ai-seo-services/" className="hover:text-white transition-colors">
                  AI SEO & Search Discovery
                </Link>
              </li>
              <li>
                <Link to="/solutions/government-public-administration/" className="hover:text-white transition-colors">
                  Government & Public Admin
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing-industrial/" className="hover:text-white transition-colors">
                  Manufacturing & Industry
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-[#17A6A1] font-semibold flex items-center gap-1 hover:underline pt-1">
                  All 14 Professional Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Corporate Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#246BCE] shrink-0 mt-0.5" />
                <span>Sector 62, Noida, Uttar Pradesh, Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#246BCE] shrink-0" />
                <a href="mailto:contact@bizwoke.com" className="hover:text-white transition-colors">
                  contact@bizwoke.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#246BCE] shrink-0" />
                <span>+91 120-BIZWOKE</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700/60">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Quick Corporate Links
              </span>
              <div className="flex flex-col space-y-1.5 text-xs">
                <Link to="/about-us/" className="hover:text-white">About Bizwoke Nova</Link>
                <Link to="/technology/" className="hover:text-white">NKTech Foundation (NEP)</Link>
                <Link to="/partners/" className="hover:text-white">Partnership Programs</Link>
                <Link to="/careers/" className="hover:text-white">Careers & Hiring</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Verification Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Bizwoke Nova™. All rights reserved. Technology foundation powered by NKTech Enterprise Platform™ (NEP). Portfolio strategy: Mission FTC™.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact/?type=privacy" className="hover:text-slate-200">
              Privacy Policy
            </Link>
            <Link to="/contact/?type=terms" className="hover:text-slate-200">
              Terms of Service
            </Link>
            <Link to="/technology/#security" className="hover:text-slate-200">
              Security & Compliance
            </Link>
            <a href="/sitemap.xml" className="hover:text-slate-200">
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
