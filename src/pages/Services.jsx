import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Search,
  Filter,
  BarChart3,
  Globe2,
  Code2,
  Wrench
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Software Engineering',
    'Artificial Intelligence',
    'Enterprise Systems',
    'Digital Platforms',
    'Digital Growth',
    'Reputation & Brand',
    'Specialized Outreach'
  ];

  const filteredServices = SERVICES_DATA.filter((srv) => {
    const matchesCat = selectedCategory === 'All' || srv.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      srv.title.toLowerCase().includes(q) ||
      srv.seoTarget.toLowerCase().includes(q) ||
      srv.shortDescription.toLowerCase().includes(q) ||
      srv.tagline.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="Professional Technology & Digital Services | Bizwoke Nova"
        description="Comprehensive enterprise software development, AI automation, ERP solutions, website engineering, and high-impact digital growth services."
      />

      {/* Hero */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-[#F27A24]/30 text-xs font-bold text-[#F27A24] uppercase tracking-wider">
              <span>PROFESSIONAL SERVICES CATALOGUE — BIZWOKE NOVA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
              Enterprise Engineering, AI & <br />
              <span className="text-[#F27A24]">Digital Growth Services.</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-200">
              Pragmatic Technology Solutions Designed Around Your Business Processes.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We provide end-to-end custom technology delivery, AI automation architectures, mission-critical enterprise systems, and strategic digital marketing services for organizations seeking measurable commercial and operational outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue & Filters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar */}
          <div className="bg-white dark:bg-[#0F294A] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-5">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by service name, capability, or keyword..."
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
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5 self-center">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                <span>Showing {filteredServices.length} of {SERVICES_DATA.length} Service Lines</span>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter by:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
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

          {/* Services Grid (All 14) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-[#0F294A] rounded-2xl p-7 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 dark:hover:border-[#F27A24]/60 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-[#F27A24]/30">
                      {service.category}
                    </span>
                    <span className="text-xs font-black text-slate-400 dark:text-slate-500">
                      #{service.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="text-[11px] font-bold text-[#0D9488] dark:text-teal-400 mt-1">
                      SEO Focus: {service.seoTarget}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 italic">
                    "{service.tagline}"
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Scope bullets */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {service.scope.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to={`/services/${service.slug}/`}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#0F294A] dark:text-slate-200 bg-[#F8FAFC] dark:bg-[#0A1C33] group-hover:bg-[#F27A24] group-hover:text-white dark:group-hover:bg-[#F27A24] dark:group-hover:text-white rounded-lg border border-slate-200/80 dark:border-slate-700 transition-all shadow-sm"
                  >
                    <span>View Service Scope & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Service Consultation CTA */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
            Custom Development & Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
            Need a Bespoke Architecture Consultation?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our enterprise architects evaluate your existing infrastructure, codebase, and business objectives to formulate a clear, fixed-scope engineering proposal.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/?type=consultation"
              className="px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center gap-2 group"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/platforms/"
              className="px-8 py-3.5 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200 dark:border-slate-700 rounded-xl transition-colors"
            >
              Explore Our Owned Platforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}