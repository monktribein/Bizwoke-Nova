import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-white dark:bg-[#071322] text-slate-600 dark:text-slate-300 pt-8 pb-6 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Sitemap & Corporate Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-6 border-b border-slate-200 dark:border-slate-800">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-3">
            <BrandLogo variant="default" size="md" />
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Enterprise Technology, AI Solutions & Next-Gen Digital Infrastructure. Awakening Your Success through scalable, connected platforms.
            </p>

            {/* Direct Contact: Phone, Email, Location */}
            <div className="space-y-2 text-xs pt-1">
              <a
                href="tel:+911204567890"
                className="flex items-center gap-2 hover:text-[#F27A24] transition-colors group w-fit"
              >
                <span className="w-6 h-6 rounded-md bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:bg-[#F27A24] group-hover:text-white transition-all">
                  <Phone className="w-3 h-3" />
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-[#F27A24]">
                  +91 (0) 120-BIZWOKE
                </span>
              </a>

              <a
                href="mailto:contact@bizwoke.com"
                className="flex items-center gap-2 hover:text-[#F27A24] transition-colors group w-fit"
              >
                <span className="w-6 h-6 rounded-md bg-blue-500/10 text-[#2563EB] dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                  <Mail className="w-3 h-3" />
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-[#F27A24]">
                  contact@bizwoke.com
                </span>
              </a>

              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-md bg-teal-500/10 text-[#0D9488] dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </span>
                <span className="leading-snug text-slate-600 dark:text-slate-300 text-xs max-w-xs">
                  Sector 62, Noida, Uttar Pradesh 201309, India
                </span>
              </div>
            </div>

            {/* Real Branded Social Icons */}
            <div className="pt-1 flex items-center gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bizwoke/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-2xs"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.98 0 1.76.78 1.76 1.75s-.78 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com/bizwoke"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-2xs"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/bizwoke"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-2xs"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@bizwoke"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-2xs"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/monktribein/Bizwoke-Nova"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#24292F] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-2xs"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Digital Platforms */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Platforms
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>
                <Link to="/platforms/tirvona/" className="hover:text-[#F27A24] transition-colors">Tirvona™</Link>
              </li>
              <li>
                <Link to="/platforms/bharatbn/" className="hover:text-[#F27A24] transition-colors">BharatBN™</Link>
              </li>
              <li>
                <Link to="/platforms/bizorm/" className="hover:text-[#F27A24] transition-colors">BizORM™</Link>
              </li>
              <li>
                <Link to="/platforms/pravixo/" className="hover:text-[#F27A24] transition-colors">Pravixo™</Link>
              </li>
              <li>
                <Link to="/platforms/political-management-erp/" className="hover:text-[#F27A24] transition-colors">Political Management ERP™</Link>
              </li>
              <li>
                <Link to="/platforms/" className="font-semibold text-[#F27A24] hover:underline pt-0.5 inline-block">
                  All 12 Platforms →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Capabilities */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>
                <Link to="/services/enterprise-software-development/" className="hover:text-[#F27A24] transition-colors">Enterprise Software & ERP</Link>
              </li>
              <li>
                <Link to="/services/ai-automation-services/" className="hover:text-[#F27A24] transition-colors">AI & Automation</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development/" className="hover:text-[#F27A24] transition-colors">Mobile Engineering</Link>
              </li>
              <li>
                <Link to="/technology/" className="hover:text-[#F27A24] transition-colors">NEP Architecture</Link>
              </li>
              <li>
                <Link to="/services/" className="font-semibold text-[#F27A24] hover:underline pt-0.5 inline-block">
                  All 14 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>
                <Link to="/about-us/" className="hover:text-[#F27A24] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/partners/" className="hover:text-[#F27A24] transition-colors">Strategic Partnerships</Link>
              </li>
              <li>
                <Link to="/careers/" className="hover:text-[#F27A24] transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-[#F27A24] transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/contact/?type=privacy" className="hover:text-[#F27A24] transition-colors">Privacy & Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Bizwoke Nova™. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-[#0D9488] font-semibold">Mission FTC™</span>
            <span>•</span>
            <span className="text-[#2563EB] font-semibold">NEP Enterprise Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
