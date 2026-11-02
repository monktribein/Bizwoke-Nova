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
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="Professional Technology & Digital Services | Bizwoke Nova"
        description="Comprehensive enterprise software development, AI automation, ERP solutions, website engineering, and high-impact digital growth services."
      />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#246BCE] uppercase tracking-wider">
              <span>PROFESSIONAL SERVICES CATALOGUE — BIZWOKE NOVA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              Enterprise Engineering, AI & <br />
              <span className="text-[#246BCE]">Digital Growth Services.</span>
            </h1>
            <p className="text-xl font-semibold text-slate-700">
              Pragmatic Technology Solutions Designed Around Your Business Processes.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              We provide end-to-end custom technology delivery, AI automation architectures, mission-critical enterprise systems, and strategic digital marketing services for organizations seeking measurable commercial and operational outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue & Filters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by service name, capability, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                />
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Showing {filteredServices.length} of {SERVICES_DATA.length} Service Lines
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
                      ? 'bg-[#10233F] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
                className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#246BCE]/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#246BCE] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-xs font-extrabold text-slate-400">
                      #{service.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#17A6A1] mt-1">
                      SEO Focus: {service.seoTarget}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 italic">
                    "{service.tagline}"
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Scope bullets */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.scope.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#17A6A1] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}/`}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#10233F] bg-[#F6F8FB] group-hover:bg-[#10233F] group-hover:text-white rounded-lg border border-slate-200/80 transition-all shadow-sm"
                  >
                    <span>View Service Scope & Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Service Consultation CTA */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
            Custom Development & Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
            Need a Bespoke Architecture Consultation?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our enterprise architects evaluate your existing infrastructure, codebase, and business objectives to formulate a clear, fixed-scope engineering proposal.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/?type=consultation"
              className="px-8 py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/platforms/"
              className="px-8 py-3.5 text-sm font-bold text-[#10233F] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Explore Our Owned Platforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
