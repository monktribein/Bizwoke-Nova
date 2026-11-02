import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Sun,
  Moon
} from 'lucide-react';

/**
 * ActiveTabNotch
 * Precision recreation of the Dribbble "Modern Floating Navbar UI Kit" active tab bulb.
 * Features an elevated circular badge protruding upwards above the navbar rim,
 * flanked by mathematical cubic-Bézier concave fillet wings on both sides for a seamless,
 * organic transition into the capsule body.
 */
function ActiveTabNotch({ icon: Icon, label, isDark }) {
  // Capsule body color to blend wings seamlessly
  const barBg = isDark ? '#0B1326' : '#FFFFFF';

  return (
    <div className="relative flex flex-col items-center justify-center min-w-[72px] h-[58px]">
      {/* Elevated Circular Bulb popping up above the navbar rim */}
      <div className="absolute -top-5 flex items-center justify-center z-10">
        {/* Left Concave Fillet Wing (Smooth Bézier Shoulder) */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -left-[15px] bottom-0 pointer-events-none"
          style={{ color: barBg }}
        >
          <path
            d="M 0 16 C 8 16, 16 8, 16 0 L 16 16 L 0 16 Z"
            fill="currentColor"
          />
        </svg>

        {/* Central Circular Bulb */}
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
            isDark
              ? 'bg-[#0B1326] border-slate-700/80 shadow-[0_8px_24px_rgba(0,0,0,0.6)]'
              : 'bg-white border-slate-200/90 shadow-[0_8px_20px_rgba(15,41,74,0.18)]'
          }`}
        >
          {/* Inner Sunrise Orange Core Badge */}
          <div className="w-8 h-8 rounded-full bg-[#F27A24] text-white flex items-center justify-center shadow-md">
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Right Concave Fillet Wing (Smooth Bézier Shoulder) */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -right-[15px] bottom-0 pointer-events-none"
          style={{ color: barBg }}
        >
          <path
            d="M 0 0 C 0 8, 8 16, 16 16 L 0 16 L 0 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Active Tab Label sitting inside the capsule bar */}
      <span
        className={`text-[11px] font-extrabold tracking-wide mt-5 select-none transition-colors ${
          isDark ? 'text-white' : 'text-[#0F294A]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // Default to Dark Obsidian theme matching the signature black navbar from the Dribbble shot
  const [navTheme, setNavTheme] = useState('dark');
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isDark = navTheme === 'dark';

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
    { name: 'Tirvona™', category: 'Tourism & Religious Hubs', path: '/platforms/tirvona/', icon: Compass, color: 'text-amber-500 bg-amber-500/10' },
    { name: 'BharatBN™', category: 'Business Discovery & Growth', path: '/platforms/bharatbn/', icon: Globe2, color: 'text-blue-500 bg-blue-500/10' },
    { name: 'BizORM™', category: 'Customer Experience & ORM', path: '/platforms/bizorm/', icon: ShieldCheck, color: 'text-teal-500 bg-teal-500/10' },
    { name: 'Pravixo™', category: 'Creator Commerce & Influencer', path: '/platforms/pravixo/', icon: Sparkles, color: 'text-purple-500 bg-purple-500/10' },
    { name: 'Political ERP™', category: 'Political Intelligence', path: '/platforms/political-management-erp/', icon: Users, color: 'text-indigo-500 bg-indigo-500/10' },
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
      id: 'about',
      name: 'About',
      path: '/about-us/',
      icon: Info,
      isActive: location.pathname === '/about-us/'
    }
  ];

  return (
    <>
      {/* ================= DESKTOP FLOATING CAPSULE HEADER ================= */}
      <header
        className="sticky top-4 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8"
        ref={dropdownRef}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Floating Capsule Bar */}
          <div
            className={`relative rounded-full px-5 py-2 sm:px-6 transition-all duration-300 flex items-center justify-between border ${
              isDark
                ? 'bg-[#0B1326]/95 text-white backdrop-blur-xl border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.45)]'
                : 'bg-white/95 text-[#0F294A] backdrop-blur-xl border-slate-200/90 shadow-[0_16px_40px_rgba(15,41,74,0.12)]'
            }`}
            style={{ minHeight: '62px' }}
          >
            {/* Left: Brand Logo */}
            <div className="flex items-center shrink-0 pr-2">
              <BrandLogo variant={isDark ? 'light' : 'default'} size="sm" showTagline={false} />
            </div>

            {/* Center: Floating Capsule Navigation Dock with Dribbble-Style Elevated Notch */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                            <ActiveTabNotch icon={Icon} label={tab.name} isDark={isDark} />
                          ) : (
                            <div className="flex flex-col items-center justify-center min-w-[68px] h-[58px] py-1 px-2.5 rounded-full transition-all duration-200 group hover:opacity-100">
                              <Icon
                                className={`w-4 h-4 transition-colors ${
                                  isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-[#0F294A]'
                                }`}
                              />
                              <div className="flex items-center gap-0.5 mt-1">
                                <span
                                  className={`text-[10px] font-semibold tracking-wide transition-colors ${
                                    isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-[#0F294A]'
                                  }`}
                                >
                                  {tab.name}
                                </span>
                                <ChevronDown
                                  className={`w-3 h-3 transition-transform duration-200 ${
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
                          <ActiveTabNotch icon={Icon} label={tab.name} isDark={isDark} />
                        ) : (
                          <div className="flex flex-col items-center justify-center min-w-[68px] h-[58px] py-1 px-2.5 rounded-full transition-all duration-200 group hover:opacity-100">
                            <Icon
                              className={`w-4 h-4 transition-colors ${
                                isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-[#0F294A]'
                              }`}
                            />
                            <span
                              className={`text-[10px] font-semibold tracking-wide mt-1 transition-colors ${
                                isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-[#0F294A]'
                              }`}
                            >
                              {tab.name}
                            </span>
                          </div>
                        )}
                      </Link>
                    )}

                    {/* Dropdown: Platforms */}
                    {tab.id === 'platforms' && activeDropdown === 'platforms' && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[460px] animate-fadeIn z-50"
                      >
                        <div
                          className={`rounded-2xl shadow-2xl border p-4 overflow-hidden backdrop-blur-2xl ${
                            isDark
                              ? 'bg-[#0B1326]/98 text-white border-slate-700/80 shadow-[0_24px_60px_rgba(0,0,0,0.6)]'
                              : 'bg-white text-[#0F294A] border-slate-200/90 shadow-[0_20px_50px_rgba(15,41,74,0.15)]'
                          }`}
                        >
                          <div
                            className={`flex items-center justify-between pb-3 mb-2 border-b ${
                              isDark ? 'border-slate-800' : 'border-slate-100'
                            }`}
                          >
                            <div>
                              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
                                12 Digital Platforms
                              </span>
                              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                Specialized Enterprise Products
                              </p>
                            </div>
                            <Link
                              to="/platforms/"
                              className={`text-xs font-bold flex items-center gap-1 transition-colors ${
                                isDark ? 'text-white hover:text-[#F27A24]' : 'text-[#0F294A] hover:text-[#F27A24]'
                              }`}
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
                                  className={`flex items-start gap-2.5 p-2 rounded-xl transition-colors group ${
                                    isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'
                                  }`}
                                >
                                  <div className={`p-1.5 rounded-lg ${item.color} mt-0.5 shrink-0`}>
                                    <PIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div
                                      className={`text-xs font-bold transition-colors ${
                                        isDark
                                          ? 'text-white group-hover:text-[#F27A24]'
                                          : 'text-slate-900 group-hover:text-[#F27A24]'
                                      }`}
                                    >
                                      {item.name}
                                    </div>
                                    <div
                                      className={`text-[10px] line-clamp-1 ${
                                        isDark ? 'text-slate-400' : 'text-slate-500'
                                      }`}
                                    >
                                      {item.category}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div
                            className={`mt-3 pt-3 border-t -mx-4 -mb-4 p-3 px-4 flex items-center justify-between text-xs ${
                              isDark
                                ? 'border-slate-800 bg-[#070D1B]'
                                : 'border-slate-100 bg-[#F8FAFC]'
                            }`}
                          >
                            <span className={isDark ? 'text-slate-400 font-medium text-[11px]' : 'text-slate-600 font-medium text-[11px]'}>
                              Powered by NKTech Enterprise Platform™
                            </span>
                            <Link to="/technology/" className="font-bold text-[#F27A24] hover:underline flex items-center gap-1 text-[11px]">
                              NEP Architecture <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Dropdown: Solutions */}
                    {tab.id === 'solutions' && activeDropdown === 'solutions' && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[440px] animate-fadeIn z-50"
                      >
                        <div
                          className={`rounded-2xl shadow-2xl border p-4 backdrop-blur-2xl ${
                            isDark
                              ? 'bg-[#0B1326]/98 text-white border-slate-700/80 shadow-[0_24px_60px_rgba(0,0,0,0.6)]'
                              : 'bg-white text-[#0F294A] border-slate-200/90 shadow-[0_20px_50px_rgba(15,41,74,0.15)]'
                          }`}
                        >
                          <div
                            className={`flex items-center justify-between pb-3 mb-2 border-b ${
                              isDark ? 'border-slate-800' : 'border-slate-100'
                            }`}
                          >
                            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
                              8 Industry Solutions
                            </span>
                            <Link
                              to="/solutions/"
                              className={`text-xs font-bold flex items-center gap-1 transition-colors ${
                                isDark ? 'text-white hover:text-[#F27A24]' : 'text-[#0F294A] hover:text-[#F27A24]'
                              }`}
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
                                  className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium transition-colors ${
                                    isDark
                                      ? 'text-slate-300 hover:text-[#F27A24] hover:bg-white/5'
                                      : 'text-slate-700 hover:text-[#F27A24] hover:bg-slate-50'
                                  }`}
                                >
                                  <SIcon className="w-3.5 h-3.5 opacity-60 shrink-0" />
                                  <span className="line-clamp-1 text-[11px] font-semibold">{item.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Dropdown: Services */}
                    {tab.id === 'services' && activeDropdown === 'services' && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[440px] animate-fadeIn z-50"
                      >
                        <div
                          className={`rounded-2xl shadow-2xl border p-4 backdrop-blur-2xl ${
                            isDark
                              ? 'bg-[#0B1326]/98 text-white border-slate-700/80 shadow-[0_24px_60px_rgba(0,0,0,0.6)]'
                              : 'bg-white text-[#0F294A] border-slate-200/90 shadow-[0_20px_50px_rgba(15,41,74,0.15)]'
                          }`}
                        >
                          <div
                            className={`flex items-center justify-between pb-3 mb-2 border-b ${
                              isDark ? 'border-slate-800' : 'border-slate-100'
                            }`}
                          >
                            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F27A24]">
                              14 Professional Services
                            </span>
                            <Link
                              to="/services/"
                              className={`text-xs font-bold flex items-center gap-1 transition-colors ${
                                isDark ? 'text-white hover:text-[#F27A24]' : 'text-[#0F294A] hover:text-[#F27A24]'
                              }`}
                            >
                              All Services <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                          <div className="space-y-1.5">
                            {servicesPreview.map((item) => (
                              <Link
                                key={item.title}
                                to={item.path}
                                className={`block p-2 rounded-lg transition-colors group ${
                                  isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'
                                }`}
                              >
                                <div
                                  className={`text-xs font-bold group-hover:text-[#F27A24] transition-colors ${
                                    isDark ? 'text-white' : 'text-slate-800'
                                  }`}
                                >
                                  {item.title}
                                </div>
                                <div
                                  className={`text-[11px] line-clamp-1 ${
                                    isDark ? 'text-slate-400' : 'text-slate-500'
                                  }`}
                                >
                                  {item.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Group: Theme Toggle + Contact + Discuss Project Button */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Theme Toggle Pill (Switch between Dark & Light Dribbble UI Kit Styles) */}
              <button
                type="button"
                onClick={() => setNavTheme(isDark ? 'light' : 'dark')}
                title={isDark ? 'Switch to Light Floating Dock' : 'Switch to Dark Floating Dock'}
                className={`p-2 rounded-full border transition-all ${
                  isDark
                    ? 'border-slate-700/80 bg-white/5 text-amber-400 hover:bg-white/10'
                    : 'border-slate-200 bg-slate-100/80 text-slate-700 hover:bg-slate-200'
                }`}
                aria-label="Toggle navbar aesthetic"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <Link
                to="/contact/"
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#0F294A]'
                }`}
              >
                Contact
              </Link>

              <Link
                to="/contact/?type=consultation"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] rounded-full shadow-md hover:shadow-lg transition-all group shrink-0"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Header Menu Trigger */}
            <div className="flex items-center lg:hidden">
              <Link
                to="/contact/?type=project"
                className="text-[11px] font-bold text-white bg-[#F27A24] px-3 py-1.5 rounded-full mr-2"
              >
                Discuss
              </Link>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className={`p-2 rounded-full ${isDark ? 'text-white' : 'text-slate-700'}`}
                aria-label="Toggle navigation"
              >
                {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Navigation Slide-out Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed inset-x-4 top-[74px] bg-[#0B1326] text-white rounded-3xl shadow-2xl border border-slate-700/80 p-6 z-50 max-h-[80vh] overflow-y-auto">
            <div className="space-y-3">
              <div className="font-extrabold text-xs uppercase tracking-wider text-[#F27A24] mb-2 flex items-center justify-between">
                <span>Enterprise Menu</span>
                <button
                  onClick={() => setNavTheme(isDark ? 'light' : 'dark')}
                  className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-full flex items-center gap-1"
                >
                  {isDark ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3" />}
                  <span>{isDark ? 'Light Dock' : 'Dark Dock'}</span>
                </button>
              </div>
              <Link to="/" className="block py-2 text-sm font-bold border-b border-slate-800">
                Home
              </Link>
              <Link to="/about-us/" className="block py-2 text-sm font-bold border-b border-slate-800">
                About Bizwoke Nova
              </Link>
              <Link to="/platforms/" className="block py-2 text-sm font-bold border-b border-slate-800 flex items-center justify-between">
                <span>12 Digital Platforms</span>
                <span className="text-[10px] font-bold bg-[#F27A24]/20 text-[#F27A24] px-2 py-0.5 rounded-full">All 12</span>
              </Link>
              <Link to="/solutions/" className="block py-2 text-sm font-bold border-b border-slate-800">
                8 Industry Solutions
              </Link>
              <Link to="/services/" className="block py-2 text-sm font-bold border-b border-slate-800">
                14 Professional Services
              </Link>
              <Link to="/technology/" className="block py-2 text-sm font-bold border-b border-slate-800">
                NKTech Enterprise Platform (NEP)
              </Link>
              <Link to="/partners/" className="block py-2 text-sm font-bold border-b border-slate-800">
                Strategic Partnerships
              </Link>
              <Link to="/careers/" className="block py-2 text-sm font-bold border-b border-slate-800">
                Careers & Culture
              </Link>
              <Link to="/contact/" className="block py-2 text-sm font-bold">
                Contact & Enquiries
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ================= MOBILE FLOATING BOTTOM CAPSULE DOCK ================= */}
      {/* Inspired directly by the Dribbble Modern Floating Navbar UI Kit */}
      <div className="lg:hidden fixed bottom-4 inset-x-4 z-50 max-w-sm mx-auto">
        <div
          className={`relative rounded-full px-2 py-1 shadow-[0_16px_40px_rgba(0,0,0,0.5)] border flex items-center justify-around backdrop-blur-xl ${
            isDark
              ? 'bg-[#0B1326]/95 text-white border-slate-700/80'
              : 'bg-white/95 text-[#0F294A] border-slate-200/90 shadow-[0_12px_36px_rgba(15,41,74,0.18)]'
          }`}
          style={{ minHeight: '60px' }}
        >
          {/* Mobile Tab 1: Home */}
          <Link
            to="/"
            className="flex-1 flex items-center justify-center focus:outline-none"
          >
            {location.pathname === '/' ? (
              <ActiveTabNotch icon={Home} label="Home" isDark={isDark} />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Home className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-[9px] font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Home
                </span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 2: Platforms */}
          <Link
            to="/platforms/"
            className="flex-1 flex items-center justify-center focus:outline-none"
          >
            {location.pathname.startsWith('/platforms') ? (
              <ActiveTabNotch icon={Layers} label="Platforms" isDark={isDark} />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Layers className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-[9px] font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Platforms
                </span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 3: Solutions */}
          <Link
            to="/solutions/"
            className="flex-1 flex items-center justify-center focus:outline-none"
          >
            {location.pathname.startsWith('/solutions') ? (
              <ActiveTabNotch icon={Landmark} label="Solutions" isDark={isDark} />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Landmark className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-[9px] font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Solutions
                </span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 4: Services */}
          <Link
            to="/services/"
            className="flex-1 flex items-center justify-center focus:outline-none"
          >
            {location.pathname.startsWith('/services') ? (
              <ActiveTabNotch icon={Sparkles} label="Services" isDark={isDark} />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-[9px] font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Services
                </span>
              </div>
            )}
          </Link>

          {/* Mobile Tab 5: Contact */}
          <Link
            to="/contact/"
            className="flex-1 flex items-center justify-center focus:outline-none"
          >
            {location.pathname === '/contact/' ? (
              <ActiveTabNotch icon={PhoneCall} label="Contact" isDark={isDark} />
            ) : (
              <div className="flex flex-col items-center justify-center py-1">
                <PhoneCall className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-[9px] font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Contact
                </span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
