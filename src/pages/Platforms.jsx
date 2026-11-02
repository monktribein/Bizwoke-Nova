import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
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
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="Our Digital Platforms & Enterprise Software Products | Bizwoke Nova"
        description="Explore Bizwoke Nova's portfolio of digital platforms for tourism, business discovery, customer experience, political management, governance, manufacturing, healthcare and enterprise operations."
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#246BCE] uppercase tracking-wider">
              <span>OUR DIGITAL PLATFORMS — BIZWOKE NOVA TECHNOLOGY PORTFOLIO</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              Digital Platforms Built for <br />
              <span className="text-[#246BCE]">Real-World Challenges.</span>
            </h1>
            <p className="text-xl font-semibold text-slate-700">
              Specialized technology. Connected capabilities. Scalable opportunities.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our growing portfolio of enterprise software products, digital marketplaces, intelligent management systems, and industry-specific technology platforms. Each platform is designed to address a distinct business or institutional need while contributing to our long-term vision of building connected digital infrastructure.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#directory"
                className="px-6 py-3 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-sm transition-all"
              >
                Explore Platforms
              </a>
              <Link
                to="/partners/"
                className="px-6 py-3 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                Become a Technology Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Interactive Filters */}
      <section id="directory" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar: Search & Category Pills */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Client-side Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by platform name, domain, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Status Note */}
              <div className="text-xs text-slate-500 flex items-center gap-1.5 self-center">
                <ShieldCheck className="w-4 h-4 text-[#17A6A1]" />
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
                      ? 'bg-[#10233F] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms Grid (All 12) */}
          {filteredPlatforms.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center border border-slate-200/90 space-y-3">
              <h3 className="text-lg font-bold text-slate-800">No platforms match your search</h3>
              <p className="text-sm text-slate-500">
                Try clearing your search query or selecting "All" categories.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-2 px-4 py-2 text-xs font-bold text-[#246BCE] bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#246BCE]/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Card Top: ID and Verified Maturity Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-400">
                        {platform.id}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                          platform.maturityStatus === 'Live'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : platform.maturityStatus === 'Pilot'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : platform.maturityStatus === 'Early Access'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                        title="Verified Product Maturity Status"
                      >
                        {platform.maturityStatus}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                        {platform.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#17A6A1] mt-0.5">
                        {platform.categoryLabel}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-slate-700 italic">
                      "{platform.tagline}"
                    </p>

                    {/* Concise Description */}
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {platform.description}
                    </p>

                    {/* Sample Key Solutions */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {platform.coreModules.slice(0, 3).map((mod, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium bg-[#F6F8FB] text-slate-700 px-2 py-0.5 rounded border border-slate-200/70"
                          >
                            {mod.name}
                          </span>
                        ))}
                        {platform.coreModules.length > 3 && (
                          <span className="text-[11px] font-medium text-slate-400 px-1 py-0.5">
                            +{platform.coreModules.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={platform.route}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#10233F] bg-[#F6F8FB] group-hover:bg-[#10233F] group-hover:text-white rounded-lg border border-slate-200/80 transition-all shadow-sm"
                    >
                      <span>Explore {platform.id}. {platform.name.replace('™', '')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* The Technology Advantage: NEP Foundation */}
      <section className="py-20 bg-[#10233F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17A6A1]">
              The Technology Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Different Platforms. One Shared Technology Vision.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Our technology strategy is built around reusable enterprise capabilities that can support multiple applications and industries. Through the <strong className="text-white">NKTech Enterprise Platform™ (NEP)</strong>, we aim to standardize essential capabilities, improve interoperability, and reduce duplicated development effort.
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
                className="bg-[#162f55]/80 p-4 rounded-xl border border-slate-700/60 flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#17A6A1] shrink-0" />
                <span className="text-sm font-semibold text-slate-200">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Client & Institutional Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Who We Serve Across Our Portfolio
            </h2>
            <p className="text-base text-slate-600">
              Our digital platforms and technology solutions are engineered to serve diverse organizational scales and public-facing stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeServeList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F6F8FB] border border-slate-200/90 space-y-2 hover:border-[#246BCE]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#246BCE] uppercase tracking-wider">
                  Sector 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#10233F]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us & Final CTA */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Explore Opportunities Across Our Technology Portfolio.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We welcome conversations with enterprise customers, institutional partners, distribution partners, technology collaborators, and organizations interested in deploying or integrating our solutions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/partners/"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact/?type=demo"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Request a Product Demonstration
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Find the Right Technology for Your Organization • Bizwoke Nova™ — One Technology Foundation. Multiple Industry Platforms.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
