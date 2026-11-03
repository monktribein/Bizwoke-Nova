import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
import { cardVariant, staggerContainer, fadeUp, viewportConfig } from '../utils/motion';
import {
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Users2,
  Building,
  CheckCircle2,
  Compass,
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck
} from 'lucide-react';

export default function Platforms() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Business', 'Governance', 'Tourism', 'Commerce', 'Industry', 'Healthcare', 'Transport'];

  const filteredPlatforms = useMemo(() => {
    return PLATFORMS_DATA.filter((platform) => {
      const matchesCategory = selectedCategory === 'All' || platform.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        platform.name.toLowerCase().includes(q) ||
        platform.tagline.toLowerCase().includes(q) ||
        platform.description.toLowerCase().includes(q) ||
        platform.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const whoWeServeList = [
    { title: "Businesses and MSMEs", desc: "Digital visibility, reputation intelligence, automated billing, and ERP operations." },
    { title: "Enterprise Organizations", desc: "Custom software architecture, workforce analytics, and digital transformation." },
    { title: "Government Departments", desc: "Citizen engagement portals, monitoring systems, and digital governance." },
    { title: "Urban Local Bodies (ULBs)", desc: "Municipal property tax, GIS tracking, sanitation fleets, and civic 311 grievances." },
    { title: "Religious & Hospitality Institutions", desc: "Pilgrim crowd management, dharamshala inventory, and sacred destination hubs." },
    { title: "Manufacturers & Industrial Plants", desc: "Shop-floor biometric access, contractor compliance, and plant OEE intelligence." },
    { title: "Healthcare & Wellness Providers", desc: "ABDM-compliant EHR, AYUSH practitioner accreditation, and tele-health." },
    { title: "Transport & Logistics Businesses", desc: "Commercial driver digital identity passports, fleet recruitment, and loyalty." },
    { title: "Political Organizations", desc: "Constituency management, public issue tracking, and grassroots war rooms." },
    { title: "Creators & Commerce Brands", desc: "Structured influencer campaign contracts, milestone escrow, and GMV attribution." }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="Our Digital Platforms & Enterprise Software Products | Bizwoke Nova"
        description="Explore Bizwoke Nova's portfolio of digital platforms for tourism, business discovery, customer experience, political management, governance, manufacturing, healthcare and enterprise operations."
      />

      {/* Hero Section */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-10 pb-12 relative overflow-hidden">
        {/* Clean enterprise background gradient & ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 dark:from-[#071322] dark:via-[#0A1C33] dark:to-[#08172b] pointer-events-none" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-gradient-to-br from-[#F27A24]/10 via-[#F27A24]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-[#F27A24]/30 text-xs font-bold text-[#F27A24] uppercase tracking-wider">
              <span>OUR DIGITAL PLATFORMS — BIZWOKE NOVA TECHNOLOGY PORTFOLIO</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
              Digital Platforms Built for <br />
              <span className="text-[#F27A24]">Real-World Challenges.</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-200">
              Specialized technology. Connected capabilities. Scalable opportunities.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our growing portfolio of enterprise software products, digital marketplaces, intelligent management systems, and industry-specific technology platforms. Each platform is designed to address a distinct business or institutional need while contributing to our long-term vision of building connected digital infrastructure.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#directory"
                className="px-6 py-3 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center gap-2 group"
              >
                <span>Explore Platforms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                to="/partners/"
                className="px-6 py-3 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition-all"
              >
                Become a Technology Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Interactive Filters */}
      <section id="directory" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar: Search & Category Pills */}
          <div className="bg-white dark:bg-[#0F294A] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-5">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Client-side Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by platform name, domain, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-white placeholder:text-slate-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Status Note */}
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 self-center">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                <span>Showing {filteredPlatforms.length} of {PLATFORMS_DATA.length} Platforms</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filters:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#0F294A] dark:bg-[#F27A24] text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-[#0A1C33] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#143761] border border-transparent dark:border-slate-700/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms Grid (All 12) */}
          {filteredPlatforms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-[#0F294A] rounded-2xl p-16 text-center border border-slate-200/90 dark:border-slate-700/60 space-y-3"
            >
              <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">No platforms match your search</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Try clearing your search query or selecting "All" categories.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-2 px-4 py-2 text-xs font-bold text-[#F27A24] bg-orange-500/10 rounded-lg hover:bg-orange-500/20"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredPlatforms.map((platform) => (
                  <motion.div
                    layout
                    key={platform.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -2, transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="bg-white dark:bg-[#0F294A] rounded-2xl p-7 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 dark:hover:border-[#F27A24]/60 shadow-none hover:shadow-none transition-colors flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      {/* Card Top: ID and Verified Maturity Badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-[#F27A24]/30">
                          {platform.id}
                        </span>
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                            platform.maturityStatus === 'Live'
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                              : platform.maturityStatus === 'Pilot'
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                              : platform.maturityStatus === 'Early Access'
                              ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                          }`}
                          title="Verified Product Maturity Status"
                        >
                          {platform.maturityStatus}
                        </span>
                      </div>

                      {/* Title & Category */}
                      <div className="flex items-center gap-3">
                        {platform.logo && platform.logo !== '/assets/favicon.svg' && (
                          <img src={platform.logo} alt={`${platform.name} Logo`} className="h-9 w-auto object-contain rounded-lg p-0.5 bg-white border border-slate-200/80 shadow-none" />
                        )}
                        <div>
                          <h3 className="text-2xl font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                            {platform.name}
                          </h3>
                          <div className="text-xs font-bold text-[#0D9488] dark:text-teal-400 mt-0.5">
                            {platform.categoryLabel}
                          </div>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 italic">
                        "{platform.tagline}"
                      </p>

                      {/* Concise Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {platform.description}
                      </p>

                      {/* Sample Key Solutions */}
                      <div className="pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
                          Core Capabilities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {platform.coreModules.slice(0, 3).map((mod, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-[#F8FAFC] dark:bg-[#0A1C33] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200/70 dark:border-slate-700"
                            >
                              {mod.name}
                            </span>
                          ))}
                          {platform.coreModules.length > 3 && (
                            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 px-1 py-0.5">
                              +{platform.coreModules.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        to={platform.route}
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#0F294A] dark:text-slate-200 bg-[#F8FAFC] dark:bg-[#0A1C33] group-hover:bg-[#F27A24] group-hover:text-white dark:group-hover:bg-[#F27A24] dark:group-hover:text-white rounded-lg border border-slate-200/80 dark:border-slate-700 transition-all shadow-none"
                      >
                        <span>Explore {platform.id}. {platform.name.replace('™', '')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* The Technology Advantage: NEP Foundation */}
      <section className="py-12 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 text-[#0F294A] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              The Technology Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F294A]">
              Different Platforms. One Shared Technology Vision.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our technology strategy is built around reusable enterprise capabilities that can support multiple applications and industries. Through the <strong className="text-[#0F294A]">NKTech Enterprise Platform™ (NEP)</strong>, we aim to standardize essential capabilities, improve interoperability, and reduce duplicated development effort.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "AI and Automation",
              "Multi-Tenant Architecture",
              "Identity & Access Management",
              "Workflow Management",
              "Data Analytics & Reporting",
              "API Integrations",
              "Subscription & Billing",
              "Cloud Infrastructure & Security"
            ].map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/90 flex items-center gap-3 shadow-xs hover:border-[#F27A24]/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F27A24] shrink-0" />
                <span className="text-sm font-semibold text-[#0F294A]">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-12 bg-white dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Client & Institutional Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Who We Serve Across Our Portfolio
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Our digital platforms and technology solutions are engineered to serve diverse organizational scales and public-facing stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeServeList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-200/90 dark:border-slate-700/60 space-y-2 hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#F27A24] uppercase tracking-wider">
                  Sector 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us & Final CTA */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#0F294A] rounded-3xl p-8 sm:p-14 border border-slate-200/90 dark:border-slate-700/60 shadow-sm text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Explore Opportunities Across Our Technology Portfolio.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We welcome conversations with enterprise customers, institutional partners, distribution partners, technology collaborators, and organizations interested in deploying or integrating our solutions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/partners/"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact/?type=demo"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0A1C33] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200 dark:border-slate-700 rounded-xl transition-colors"
              >
                Request a Product Demonstration
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Find the Right Technology for Your Organization • Bizwoke Nova™ — One Technology Foundation. Multiple Industry Platforms.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}