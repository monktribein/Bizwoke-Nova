import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';
import {
  Home,
  Layers,
  Sparkles,
  ShieldCheck,
  Users,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Globe2,
  PhoneCall,
  Landmark,
  Compass,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  ChevronDown,
  Info,
  Handshake,
  Briefcase,
  Search
} from 'lucide-react';

/**
 * ActiveTabNotch
 * Modern Floating Navbar Active Tab Notch.
 * Elevated circular bulb protruding upwards above the navbar rim,
 * with smooth cubic Bézier concave fillet wings blending seamlessly into the capsule.
 */
function ActiveTabNotch({ icon: Icon, label }) {
  // Capsule body color
  const barBg = '#FFFFFF';

  return (
    <div className="relative flex flex-col items-center justify-center min-w-[48px] sm:min-w-[60px] xl:min-w-[66px] h-[48px] sm:h-[52px]">
      {/* Elevated Circular Bulb */}
      <div className="absolute -top-3 sm:-top-4 flex items-center justify-center z-10">
        {/* Left Concave Fillet Wing */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -left-[13px] sm:-left-[15px] bottom-0 pointer-events-none hidden xs:block sm:block"
          style={{ color: barBg }}
        >
          <path
            d="M 0 16 C 8 16, 16 8, 16 0 L 16 16 L 0 16 Z"
            fill="currentColor"
          />
        </svg>

        {/* Central Circular Bulb */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-slate-200/90 bg-white shadow-md transition-all">
          {/* Inner Sunrise Orange Core Badge */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F27A24] text-white flex items-center justify-center shadow-sm">
            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
        </div>

        {/* Right Concave Fillet Wing */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -right-[13px] sm:-right-[15px] bottom-0 pointer-events-none hidden xs:block sm:block"
          style={{ color: barBg }}
        >
          <path
            d="M 0 0 C 0 8, 8 16, 16 16 L 0 16 L 0 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Active Tab Label */}
      <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wide mt-4 sm:mt-5 select-none transition-colors text-[#0F294A]">
        {label}
      </span>
    </div>
  );
}

export default function Header({ onOpenSearch }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const platformsPreview = [
    { name: 'Tirvona™', category: 'Tourism & Religious Hubs', path: '/platforms/tirvona/', logo: '/assets/tirvona-logo.png', icon: Compass, color: 'text-amber-500 bg-amber-500/10' },
    { name: 'BharatBN™', category: 'Business Discovery & Growth', path: '/platforms/bharatbn/', logo: '/assets/bharatbn-logo.webp', icon: Globe2, color: 'text-blue-500 bg-blue-500/10' },
    { name: 'BizORM™', category: 'Customer Experience & ORM', path: '/platforms/bizorm/', logo: '/assets/bizorm-logo.jpg', icon: ShieldCheck, color: 'text-teal-500 bg-teal-500/10' },
    { name: 'Pravixo™', category: 'Creator Commerce & Influencer', path: '/platforms/pravixo/', logo: '/assets/pravixo-logo.png', icon: Sparkles, color: 'text-purple-500 bg-purple-500/10' },
    { name: 'Political ERP™', category: 'Political Intelligence', path: '/platforms/political-management-erp/', logo: '/assets/political-erp-logo.jpg', icon: Users, color: 'text-indigo-500 bg-indigo-500/10' },
    { name: 'ULB ERP Enterprise™', category: 'Urban Governance', path: '/platforms/ulb-erp/', icon: Landmark, color: 'text-emerald-500 bg-emerald-500/10' },
  ];

  const solutionsPreview = [
    { title: 'Government & Public Admin', path: '/solutions/government-public-administration/', icon: Landmark },
    { title: 'Tourism & Religious Destinations', path: '/solutions/tourism-hospitality-destinations/', icon: Compass },
    { title: 'Manufacturing & Industrial', path: '/solutions/manufacturing-industrial/', icon: Factory },
    { title: 'Healthcare & Wellness', path: '/solutions/healthcare-wellness/', icon: HeartPulse },
    { title: 'Retail, MSMEs & Networks', path: '/solutions/retail-msme-business/', icon: ShoppingBag },
    { title: 'Transportation & Logistics', path: '/solutions/transportation-logistics/', icon: Truck },
  ];

  const servicesPreview = [
    { title: 'Enterprise Software & ERP', path: '/services/enterprise-software-development/', desc: 'Custom enterprise systems & architecture' },
    { title: 'AI Automation & Agents', path: '/services/ai-automation-services/', desc: 'Autonomous workflows, NLP & intelligence' },
    { title: 'Mobile & Web Platforms', path: '/services/mobile-app-development/', desc: 'High-performance scalable applications' },
    { title: 'AI SEO & Digital Growth', path: '/services/ai-seo-services/', desc: 'Modern search, AEO & discovery engineering' },
  ];

  // Primary desktop navigation tabs
  const navTabs = [
    {
      id: 'home',
      name: 'Home',
      path: '/',
      icon: Home,
      isActive: location.pathname === '/'
    },
    {
      id: 'about',
      name: 'About',
      path: '/about-us/',
      icon: Info,
      isActive: location.pathname === '/about-us/'
    },
    {
      id: 'platforms',
      name: 'Platforms',
      path: '/platforms/',
      icon: Layers,
      hasDropdown: true,
      isActive: location.pathname.startsWith('/platforms')
    },
    {
      id: 'solutions',
      name: 'Solutions',
      path: '/solutions/',
      icon: Landmark,
      hasDropdown: true,
      isActive: location.pathname.startsWith('/solutions')
    },
    {
      id: 'services',
      name: 'Services',
      path: '/services/',
      icon: Sparkles,
      hasDropdown: true,
      isActive: location.pathname.startsWith('/services')
    },
    {
      id: 'technology',
      name: 'NEP Tech',
      path: '/technology/',
      icon: Cpu,
      isActive: location.pathname === '/technology/'
    },
    {
      id: 'partners',
      name: 'Partners',
      path: '/partners/',
      icon: Handshake,
      isActive: location.pathname === '/partners/'
    },
    {
      id: 'careers',
      name: 'Careers',
      path: '/careers/',
      icon: Briefcase,
      isActive: location.pathname === '/careers/'
    }
  ];

  return (
    <>
      {/* ================= DESKTOP FLOATING CAPSULE HEADER ================= */}
      <header
        className="sticky top-2 sm:top-3.5 z-50 transition-all duration-300 px-2.5 sm:px-6 lg:px-8 max-w-full"
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Floating Capsule Bar */}
          <div
            className="relative rounded-full px-3 sm:px-5 transition-all duration-300 flex items-center justify-between border backdrop-blur-xl bg-white/95 text-[#0F294A] border-slate-200/90 shadow-[0_12px_36px_-10px_rgba(15,41,74,0.12)] min-h-[52px] sm:min-h-[60px]"
          >
            {/* Left: Authentic Brand Logo */}
            <div className="flex items-center shrink-0 pr-2 sm:pr-3">
              <BrandLogo variant="default" size="sm" showTagline={false} />
            </div>

            {/* Center: Floating Navigation Dock with Dribbble-Style Elevated Notch */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const active = tab.isActive;

                return (
                  <div key={tab.id} className="relative">
                    {tab.hasDropdown ? (
                      <div
                        onMouseEnter={() => setActiveDropdown(tab.id)}
                        className="relative"
                      >
                        <button
                          type="button"
                          onClick={() => toggleDropdown(tab.id)}
                          className="flex items-center justify-center focus:outline-none"
                        >
                          {active ? (
                            <ActiveTabNotch icon={Icon} label={tab.name} />
                          ) : (
                            <div className="flex flex-col items-center justify-center min-w-[60px] xl:min-w-[66px] h-[52px] py-1 px-2 rounded-full transition-all duration-200 group hover:opacity-100">
                              <Icon
                                className="w-3.5 h-3.5 transition-colors text-slate-500 group-hover:text-[#0F294A]"
                              />
                              <div className="flex items-center gap-0.5 mt-1">
                                <span
                                  className="text-[10px] font-semibold tracking-wide transition-colors text-slate-600 group-hover:text-[#0F294A]"
                                >
                                  {tab.name}
                                </span>
                                <ChevronDown
                                  className={`w-2.5 h-2.5 transition-transform duration-200 ${
                                    activeDropdown === tab.id ? 'rotate-180 text-[#F27A24]' : 'opacity-40 group-hover:opacity-80'
                                  }`}
                                />
                              </div>
                            </div>
                          )}
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={tab.path}
                        className="flex items-center justify-center focus:outline-none"
                      >
                        {active ? (
                          <ActiveTabNotch icon={Icon} label={tab.name} />
                        ) : (
                          <div className="flex flex-col items-center justify-center min-w-[60px] xl:min-w-[66px] h-[52px] py-1 px-2 rounded-full transition-all duration-200 group hover:opacity-100">
                            <Icon
                              className="w-3.5 h-3.5 transition-colors text-slate-500 group-hover:text-[#0F294A]"
                            />
                            <span
                              className="text-[10px] font-semibold tracking-wide mt-1 transition-colors text-slate-600 group-hover:text-[#0F294A]"
                            >
                              {tab.name}
                            </span>
                          </div>
                        )}
                      </Link>
                    )}

                    {/* Dropdown: Platforms Mega Menu */}
                    <AnimatePresence>
                      {tab.id === 'platforms' && activeDropdown === 'platforms' && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[470px] z-50"
                        >
                          <div
                            className="rounded-2xl shadow-2xl border p-4 overflow-hidden backdrop-blur-xl bg-white text-[#0F294A] border-slate-200/90 shadow-[0_16px_40px_rgba(15,41,74,0.12)]"
                          >
                            <div
                              className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100"
                            >
                              <div>
                                <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
                                  12 Digital Platforms
                                </span>
                                <p className="text-[11px] text-slate-500">
                                  Specialized Enterprise Products
                                </p>
                              </div>
                              <Link
                                to="/platforms/"
                                className="text-xs font-bold flex items-center gap-1 transition-colors text-[#0F294A] hover:text-[#F27A24]"
                              >
                                Explore All 12 <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {platformsPreview.map((item) => {
                                const PIcon = item.icon;
                                return (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    className="flex items-start gap-2.5 p-2 rounded-xl transition-colors group hover:bg-slate-50"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 p-1 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                      {item.logo ? (
                                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain rounded" />
                                      ) : (
                                        <div className={`w-full h-full rounded ${item.color} flex items-center justify-center`}>
                                          <PIcon className="w-3.5 h-3.5" />
                                        </div>
                                      )}
                                    </div>
                                    <div>
                                      <div
                                        className="text-xs font-bold transition-colors text-slate-900 group-hover:text-[#F27A24]"
                                      >
                                        {item.name}
                                      </div>
                                      <div className="text-[10px] line-clamp-1 text-slate-500">
                                        {item.category}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            <div
                              className="mt-3 pt-3 border-t -mx-4 -mb-4 p-3 px-4 flex items-center justify-between text-xs border-slate-100 bg-[#F8FAFC]"
                            >
                              <span className="text-slate-600 font-medium text-[11px]">
                                Shared Foundation: NKTech Enterprise Platform™
                              </span>
                              <Link to="/technology/" className="font-bold text-[#F27A24] hover:underline flex items-center gap-1 text-[11px]">
                                NEP Architecture <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Dropdown: Solutions */}
                    <AnimatePresence>
                      {tab.id === 'solutions' && activeDropdown === 'solutions' && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[440px] z-50"
                        >
                          <div
                            className="rounded-2xl shadow-2xl border p-4 backdrop-blur-xl bg-white text-[#0F294A] border-slate-200/90 shadow-[0_16px_40px_rgba(15,41,74,0.12)]"
                          >
                            <div
                              className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100"
                            >
                              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
                                8 Industry Solutions
                              </span>
                              <Link
                                to="/solutions/"
                                className="text-xs font-bold flex items-center gap-1 transition-colors text-[#0F294A] hover:text-[#F27A24]"
                              >
                                All Sectors <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              {solutionsPreview.map((item) => {
                                const SIcon = item.icon;
                                return (
                                  <Link
                                    key={item.title}
                                    to={item.path}
                                    className="flex items-center gap-2 p-2 rounded-lg text-xs font-medium transition-colors text-slate-700 hover:text-[#F27A24] hover:bg-slate-50"
                                  >
                                    <SIcon className="w-3.5 h-3.5 opacity-60 shrink-0" />
                                    <span className="line-clamp-1 text-[11px] font-semibold">{item.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Dropdown: Services Mega Menu */}
                    <AnimatePresence>
                      {tab.id === 'services' && activeDropdown === 'services' && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[440px] z-50"
                        >
                          <div
                            className="rounded-2xl shadow-2xl border p-4 backdrop-blur-xl bg-white text-[#0F294A] border-slate-200/90 shadow-[0_16px_40px_rgba(15,41,74,0.12)]"
                          >
                            <div
                              className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100"
                            >
                              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
                                14 Professional Services
                              </span>
                              <Link
                                to="/services/"
                                className="text-xs font-bold flex items-center gap-1 transition-colors text-[#0F294A] hover:text-[#F27A24]"
                              >
                                All Services <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <div className="space-y-1.5">
                              {servicesPreview.map((item) => (
                                <Link
                                  key={item.title}
                                  to={item.path}
                                  className="block p-2 rounded-lg transition-colors group hover:bg-slate-50"
                                >
                                  <div
                                    className="text-xs font-bold transition-colors text-slate-800 group-hover:text-[#F27A24]"
                                  >
                                    {item.title}
                                  </div>
                                  <div className="text-[11px] line-clamp-1 text-slate-500">
                                    {item.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Global Search + Contact CTA + Discuss Project Button */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenSearch}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 hover:text-[#0F294A] bg-slate-100/80 hover:bg-slate-200/70 rounded-full transition-all border border-slate-200/80 group"
                title="Search platforms, services & solutions (Ctrl + K)"
                aria-label="Open Command Palette"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F27A24] transition-colors" />
                <span className="font-medium">Search</span>
                <kbd className="text-[10px] font-semibold bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400">
                  ⌘K
                </kbd>
              </button>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact/"
                  className="text-xs font-bold px-2.5 py-1.5 transition-colors inline-block text-slate-600 hover:text-[#0F294A]"
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact/?type=consultation"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] rounded-full shadow-md hover:shadow-lg transition-all group shrink-0"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Header Menu Trigger */}
            <div className="flex items-center lg:hidden gap-1 sm:gap-1.5 shrink-0">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 sm:p-2 rounded-full text-slate-700 hover:text-[#0F294A] hover:bg-slate-100 transition-colors"
                aria-label="Search site"
              >
                <Search className="w-4 h-4" />
              </button>
              <Link
                to="/contact/?type=project"
                className="text-[11px] font-bold text-white bg-[#F27A24] px-2.5 sm:px-3 py-1.5 rounded-full shadow-xs whitespace-nowrap"
              >
                Discuss
              </Link>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="p-1.5 sm:p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Navigation Slide-out Drawer */}
        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-x-4 top-[72px] rounded-3xl shadow-2xl border p-6 z-50 max-h-[80vh] overflow-y-auto bg-white text-[#0F294A] border-slate-200"
            >
              <div className="space-y-3">
                <div className="font-extrabold text-xs uppercase tracking-wider text-[#F27A24] mb-2 flex items-center justify-between">
                  <span>Enterprise Navigation</span>
                </div>

                {/* Mobile Search Quick Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    if (onOpenSearch) onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-600 text-xs font-medium transition-colors border border-slate-200/70"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#F27A24]" />
                    <span>Search 12 platforms, services...</span>
                  </span>
                  <kbd className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400 font-semibold">
                    ⌘K
                  </kbd>
                </button>
                <Link to="/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  Home
                </Link>
                <Link to="/about-us/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  About Us
                </Link>
                <Link to="/platforms/" className="block py-2 text-sm font-bold border-b border-slate-100 flex items-center justify-between">
                  <span>Platforms (12 Products)</span>
                  <span className="text-[10px] font-bold bg-[#F27A24]/20 text-[#F27A24] px-2 py-0.5 rounded-full">All 12</span>
                </Link>
                <Link to="/solutions/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  Solutions (8 Industries)
                </Link>
                <Link to="/services/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  Services (14 Offerings)
                </Link>
                <Link to="/technology/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  NKTech Enterprise Platform (NEP)
                </Link>
                <Link to="/partners/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  Strategic Partnerships
                </Link>
                <Link to="/careers/" className="block py-2 text-sm font-bold border-b border-slate-100">
                  Careers & Culture
                </Link>
                <Link to="/contact/" className="block py-2 text-sm font-bold text-[#F27A24]">
                  Contact & Enquiries
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= MOBILE FLOATING BOTTOM CAPSULE DOCK ================= */}
      <div className="lg:hidden fixed bottom-3 sm:bottom-4 inset-x-2 sm:inset-x-4 z-50 max-w-sm mx-auto">
        <div
          className="relative rounded-full px-1.5 sm:px-2 py-1 shadow-[0_12px_36px_rgba(15,41,74,0.18)] border flex items-center justify-around backdrop-blur-xl bg-white/95 text-[#0F294A] border-slate-200/90 min-h-[50px] sm:min-h-[58px]"
        >
          {/* Mobile Tab 1: Home */}
          <Link to="/" className="flex-1 flex items-center justify-center focus:outline-none">
            {location.pathname === '/' ? (
              <ActiveTabNotch icon={Home} label="Home" />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Home className="w-4 h-4 text-slate-500" />
                <span className="text-[9px] font-medium mt-1 text-slate-600">Home</span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 2: Platforms */}
          <Link to="/platforms/" className="flex-1 flex items-center justify-center focus:outline-none">
            {location.pathname.startsWith('/platforms') ? (
              <ActiveTabNotch icon={Layers} label="Platforms" />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Layers className="w-4 h-4 text-slate-500" />
                <span className="text-[9px] font-medium mt-1 text-slate-600">Platforms</span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 3: Solutions */}
          <Link to="/solutions/" className="flex-1 flex items-center justify-center focus:outline-none">
            {location.pathname.startsWith('/solutions') ? (
              <ActiveTabNotch icon={Landmark} label="Solutions" />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Landmark className="w-4 h-4 text-slate-500" />
                <span className="text-[9px] font-medium mt-1 text-slate-600">Solutions</span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 4: Services */}
          <Link to="/services/" className="flex-1 flex items-center justify-center focus:outline-none">
            {location.pathname.startsWith('/services') ? (
              <ActiveTabNotch icon={Sparkles} label="Services" />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Sparkles className="w-4 h-4 text-slate-500" />
                <span className="text-[9px] font-medium mt-1 text-slate-600">Services</span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 5: Contact */}
          <Link to="/contact/" className="flex-1 flex items-center justify-center focus:outline-none">
            {location.pathname === '/contact/' ? (
              <ActiveTabNotch icon={PhoneCall} label="Contact" />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <PhoneCall className="w-4 h-4 text-slate-500" />
                <span className="text-[9px] font-medium mt-1 text-slate-600">Contact</span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
