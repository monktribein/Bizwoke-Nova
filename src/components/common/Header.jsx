import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import {
  ChevronDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Globe2,
  Briefcase,
  PhoneCall,
  Landmark,
  Compass,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Track scroll position for header shadow/backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
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
    { name: 'Tirvona™', category: 'Tourism & Religious Hubs', path: '/platforms/tirvona/', icon: Compass, color: 'text-amber-600 bg-amber-50' },
    { name: 'BharatBN™', category: 'Business Discovery & Growth', path: '/platforms/bharatbn/', icon: Globe2, color: 'text-blue-600 bg-blue-50' },
    { name: 'BizORM™', category: 'Customer Experience & ORM', path: '/platforms/bizorm/', icon: ShieldCheck, color: 'text-teal-600 bg-teal-50' },
    { name: 'Pravixo™', category: 'Creator Commerce & Influencer', path: '/platforms/pravixo/', icon: Sparkles, color: 'text-purple-600 bg-purple-50' },
    { name: 'Political ERP™', category: 'Political Intelligence', path: '/platforms/political-management-erp/', icon: Users, color: 'text-indigo-600 bg-indigo-50' },
    { name: 'ULB ERP Enterprise™', category: 'Urban Governance', path: '/platforms/ulb-erp/', icon: Landmark, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const solutionsPreview = [
    { title: 'Government & Public Admin', path: '/solutions/government-public-administration/', icon: Landmark },
    { title: 'Tourism & Religious Destinations', path: '/solutions/tourism-hospitality-destinations/', icon: Compass },
    { title: 'Manufacturing & Industrial', path: '/solutions/manufacturing-industrial/', icon: Factory },
    { title: 'Healthcare & Wellness', path: '/solutions/healthcare-wellness/', icon: HeartPulse },
    { title: 'Retail, MSMEs & Business Networks', path: '/solutions/retail-msme-business/', icon: ShoppingBag },
    { title: 'Transportation & Logistics', path: '/solutions/transportation-logistics/', icon: Truck },
  ];

  const servicesPreview = [
    { title: 'Enterprise Software & ERP', path: '/services/enterprise-software-development/', desc: 'Custom enterprise systems & architecture' },
    { title: 'AI Automation & Agents', path: '/services/ai-automation-services/', desc: 'Autonomous workflows, NLP & intelligence' },
    { title: 'Mobile & Web Platforms', path: '/services/mobile-app-development/', desc: 'High-performance scalable applications' },
    { title: 'AI SEO & Digital Growth', path: '/services/ai-seo-services/', desc: 'Modern search, AEO & discovery engineering' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/' ? 'text-[#246BCE] bg-blue-50/60' : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about-us/"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/about-us/' ? 'text-[#246BCE] bg-blue-50/60' : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* Platforms Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('platforms')}
                onMouseEnter={() => setActiveDropdown('platforms')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname.startsWith('/platforms')
                    ? 'text-[#246BCE] bg-blue-50/60'
                    : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'platforms'}
              >
                <span>Platforms</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'platforms' ? 'rotate-180 text-[#246BCE]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'platforms' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full pt-2 w-[460px] animate-fadeIn"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-4 overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Digital Platform Portfolio
                        </span>
                        <p className="text-xs text-slate-500">12 Specialized Enterprise Products</p>
                      </div>
                      <Link
                        to="/platforms/"
                        className="text-xs font-semibold text-[#246BCE] hover:text-[#10233F] flex items-center gap-1"
                      >
                        Explore All 12 <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {platformsPreview.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className={`p-1.5 rounded-md ${item.color} mt-0.5 shrink-0`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-[#246BCE] transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">{item.category}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Shared NEP Architecture Tag */}
                    <div className="mt-3 pt-3 border-t border-slate-100 bg-[#F6F8FB] -mx-4 -mb-4 p-3 px-4 flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Powered by NKTech Enterprise Platform™</span>
                      <Link to="/technology/" className="font-semibold text-[#17A6A1] hover:underline flex items-center gap-1">
                        NEP Architecture <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industry Solutions Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('solutions')}
                onMouseEnter={() => setActiveDropdown('solutions')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname.startsWith('/solutions')
                    ? 'text-[#246BCE] bg-blue-50/60'
                    : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Industry Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#246BCE]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full pt-2 w-[440px] animate-fadeIn"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-4">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Target Industry Sectors
                      </span>
                      <Link
                        to="/solutions/"
                        className="text-xs font-semibold text-[#246BCE] hover:text-[#10233F] flex items-center gap-1"
                      >
                        All 8 Sectors <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {solutionsPreview.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            to={item.path}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-700 hover:text-[#246BCE] transition-colors"
                          >
                            <Icon className="w-4 h-4 text-slate-400" />
                            <span className="line-clamp-1">{item.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setActiveDropdown('services')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#246BCE] bg-blue-50/60'
                    : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#246BCE]' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'services' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full pt-2 w-[440px] animate-fadeIn"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-4">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Professional Services Catalogue
                      </span>
                      <Link
                        to="/services/"
                        className="text-xs font-semibold text-[#246BCE] hover:text-[#10233F] flex items-center gap-1"
                      >
                        All 14 Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <div className="space-y-1.5">
                      {servicesPreview.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-[#246BCE]">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/technology/"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/technology/' ? 'text-[#246BCE] bg-blue-50/60' : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
              }`}
            >
              Technology (NEP)
            </Link>

            <Link
              to="/partners/"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/partners/' ? 'text-[#246BCE] bg-blue-50/60' : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
              }`}
            >
              Partners
            </Link>

            <Link
              to="/careers/"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/careers/' ? 'text-[#246BCE] bg-blue-50/60' : 'text-slate-700 hover:text-[#10233F] hover:bg-slate-50'
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#0F294A] hover:text-[#F27A24] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact/?type=consultation"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#0F294A] hover:bg-[#F27A24] active:bg-[#DE6713] rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#10233F] hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white border-t border-slate-200 z-50 overflow-y-auto px-6 py-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Home
              </Link>
              <Link
                to="/about-us/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                About Us
              </Link>
              <Link
                to="/platforms/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Platforms (12 Products)</span>
                <span className="text-xs bg-blue-100 text-[#246BCE] font-bold px-2 py-0.5 rounded">All</span>
              </Link>
              <Link
                to="/solutions/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Industry Solutions
              </Link>
              <Link
                to="/services/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Professional Services
              </Link>
              <Link
                to="/technology/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Technology Foundation (NEP)
              </Link>
              <Link
                to="/partners/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Strategic Partnerships
              </Link>
              <Link
                to="/careers/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Careers
              </Link>
              <Link
                to="/contact/"
                className="py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                Contact & Enquiries
              </Link>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
            <Link
              to="/contact/?type=demo"
              className="w-full inline-flex justify-center items-center py-3 text-sm font-semibold text-white bg-[#10233F] rounded-lg"
            >
              Request a Product Demo
            </Link>
            <div className="text-center text-xs text-slate-400">
              Bizwoke Nova™ • Building Digital Infrastructure for a Smarter India.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
