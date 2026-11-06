import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import { cardVariant, staggerContainer } from '../utils/motion';
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
  Wrench,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceViewMode, setServiceViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [showAllServicesInGrid, setShowAllServicesInGrid] = useState(false);
  const [isServicePaused, setIsServicePaused] = useState(false);
  const serviceCarouselRef = useRef(null);
  const servicePauseTimerRef = useRef(null);

  const pauseServiceTemporarily = (duration = 7000) => {
    setIsServicePaused(true);
    if (servicePauseTimerRef.current) clearTimeout(servicePauseTimerRef.current);
    servicePauseTimerRef.current = setTimeout(() => {
      setIsServicePaused(false);
    }, duration);
  };

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

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((srv) => {
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
  }, [selectedCategory, searchQuery]);

  // Reset active index when filter or search changes
  useEffect(() => {
    setActiveServiceIdx(0);
    if (serviceCarouselRef.current) {
      serviceCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory, searchQuery]);

  // Auto-scroll for Services Carousel (Gentle pace ~4.5s, not fast, pauses on user interaction)
  useEffect(() => {
    if (serviceViewMode !== 'carousel' || isServicePaused || filteredServices.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveServiceIdx((prevIdx) => {
        const nextIdx = (prevIdx + 1) % filteredServices.length;
        if (serviceCarouselRef.current) {
          const container = serviceCarouselRef.current;
          const cardWidth = container.offsetWidth * 0.85;
          container.scrollTo({
            left: nextIdx * (cardWidth + 12),
            behavior: 'smooth'
          });
        }
        return nextIdx;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [serviceViewMode, isServicePaused, filteredServices.length]);

  const handlePrevService = () => {
    pauseServiceTemporarily(7000);
    if (serviceCarouselRef.current && filteredServices.length > 0) {
      const newIdx = Math.max(0, activeServiceIdx - 1);
      const container = serviceCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({ left: newIdx * (cardWidth + 12), behavior: 'smooth' });
      setActiveServiceIdx(newIdx);
    }
  };

  const handleNextService = () => {
    pauseServiceTemporarily(7000);
    if (serviceCarouselRef.current && filteredServices.length > 0) {
      const newIdx = Math.min(filteredServices.length - 1, activeServiceIdx + 1);
      const container = serviceCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({ left: newIdx * (cardWidth + 12), behavior: 'smooth' });
      setActiveServiceIdx(newIdx);
    }
  };

  const handleServiceScroll = (e) => {
    const container = e.target;
    const cardWidth = container.offsetWidth * 0.85 + 12;
    if (cardWidth > 0 && filteredServices.length > 0) {
      const newIdx = Math.round(container.scrollLeft / cardWidth);
      if (newIdx >= 0 && newIdx < filteredServices.length && newIdx !== activeServiceIdx) {
        setActiveServiceIdx(newIdx);
      }
    }
  };

  const scrollToServiceIndex = (idx) => {
    pauseServiceTemporarily(7000);
    if (serviceCarouselRef.current && filteredServices.length > 0) {
      const container = serviceCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.85 + 12;
      container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      setActiveServiceIdx(idx);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Software Engineering':
        return Code2;
      case 'Artificial Intelligence':
        return Sparkles;
      case 'Enterprise Systems':
        return Layers;
      case 'Digital Platforms':
        return Globe2;
      case 'Digital Growth':
        return BarChart3;
      case 'Reputation & Brand':
        return ShieldCheck;
      case 'Specialized Outreach':
        return Cpu;
      default:
        return Wrench;
    }
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="Professional Technology & Digital Services | Bizwoke Nova"
        description="Comprehensive enterprise software development, AI automation, ERP solutions, website engineering, and high-impact digital growth services."
      />

      {/* Hero */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-10 pb-12 relative overflow-hidden">
        {/* Clean enterprise background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 dark:from-[#071322] dark:via-[#0A1C33] dark:to-[#08172b] pointer-events-none" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-gradient-to-br from-[#F27A24]/10 via-[#F27A24]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

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

            {/* Trust Highlights */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0F294A] border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                14 Dedicated Service Lines
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0F294A] border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                100% IP & Source Ownership
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0F294A] border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                SLA-Backed Delivery
              </span>
            </div>

            <div className="pt-2 flex items-center gap-2 sm:gap-4">
              <a
                href="#catalogue"
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-1.5 group shrink-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                to="/contact/?type=consultation"
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition-all inline-flex items-center justify-center shrink-0"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue & Filters */}
      <section id="catalogue" className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Controls Bar: Compact & Concise */}
          <div className="bg-white dark:bg-[#0F294A] p-3 sm:p-4 rounded-xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services or capabilities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-1.5 sm:py-2 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-white placeholder:text-slate-400 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium inline-flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="hidden sm:inline">Showing {filteredServices.length} of {SERVICES_DATA.length} Service Lines</span>
                <span className="sm:hidden font-bold">{filteredServices.length} of {SERVICES_DATA.length}</span>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#F27A24]" />
                <span className="hidden sm:inline">Filter:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#0F294A] dark:bg-[#F27A24] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-[#0A1C33] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#143761] border border-transparent dark:border-slate-700/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile View Toggle & Count Row */}
            <div className="flex md:hidden items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'} Available
              </span>
              <div className="flex items-center bg-slate-100 dark:bg-[#0A1C33] p-0.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
                <button
                  type="button"
                  onClick={() => setServiceViewMode('carousel')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                    serviceViewMode === 'carousel'
                      ? 'bg-white dark:bg-[#0F294A] text-[#F27A24] shadow-xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Swipe ({filteredServices.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceViewMode('grid')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                    serviceViewMode === 'grid'
                      ? 'bg-white dark:bg-[#0F294A] text-[#F27A24] shadow-xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <LayoutGrid className="w-3 h-3" />
                  <span>Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* Services Content: Empty / Mobile Carousel / Mobile Grid / Desktop Grid */}
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-[#0F294A] rounded-2xl p-16 text-center border border-slate-200/90 dark:border-slate-700/60 space-y-3"
            >
              <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">No services match your search</h3>
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
            <>
              {/* MOBILE VIEW 1: Ultra-Compact Swipe Carousel (Default on Mobile) */}
              {serviceViewMode === 'carousel' && (
                <div className="md:hidden space-y-3">
                  <div
                    ref={serviceCarouselRef}
                    onScroll={handleServiceScroll}
                    onTouchStart={() => pauseServiceTemporarily(8000)}
                    onMouseEnter={() => setIsServicePaused(true)}
                    onMouseLeave={() => setIsServicePaused(false)}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 pt-1 px-1 -mx-1 scrollbar-none"
                    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
                  >
                    {filteredServices.map((service) => {
                      const IconComp = getCategoryIcon(service.category);
                      return (
                        <div
                          key={service.id}
                          className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-white dark:bg-[#0F294A] rounded-2xl p-4 border border-slate-200/90 dark:border-slate-700/60 shadow-xs flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            {/* Header: Icon + Category + ID */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-[#F27A24]/20">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <span className="text-[11px] font-bold text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2 py-0.5 rounded-full border border-[#F27A24]/30">
                                  {service.category}
                                </span>
                              </div>
                              <span className="text-xs font-black text-slate-400 dark:text-slate-500 font-mono">
                                #{service.id}
                              </span>
                            </div>

                            {/* Title & Specialization */}
                            <div>
                              <h3 className="text-base font-black text-[#0F294A] dark:text-white leading-snug line-clamp-1">
                                {service.title}
                              </h3>
                              <div className="text-[11px] font-semibold text-[#0D9488] dark:text-teal-400 truncate mt-0.5">
                                Specialization: {service.seoTarget}
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                              {service.shortDescription}
                            </p>

                            {/* Deliverables Chips */}
                            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                              {service.scope.slice(0, 2).map((item, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] font-medium bg-[#F8FAFC] dark:bg-[#0A1C33] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200/70 dark:border-slate-700 truncate max-w-[140px]"
                                >
                                  {item}
                                </span>
                              ))}
                              {service.scope.length > 2 && (
                                <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                                  +{service.scope.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Bottom Row CTA */}
                          <div className="pt-2.5 mt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                              Enterprise Scope
                            </span>
                            <Link
                              to={`/services/${service.slug}/`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] px-3 py-1.5 rounded-lg shadow-xs transition-all"
                            >
                              <span>Explore</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Carousel Indicators & Controls */}
                  <div className="flex items-center justify-between pt-1 px-1">
                    <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] scrollbar-none py-1">
                      {filteredServices.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => scrollToServiceIndex(idx)}
                          aria-label={`Go to service ${idx + 1}`}
                          className={`h-1.5 transition-all rounded-full shrink-0 ${
                            activeServiceIdx === idx
                              ? 'w-6 bg-[#F27A24]'
                              : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono">
                        {String(activeServiceIdx + 1).padStart(2, '0')} / {String(filteredServices.length).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevService}
                          disabled={activeServiceIdx === 0}
                          aria-label="Previous service"
                          className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextService}
                          disabled={activeServiceIdx === filteredServices.length - 1}
                          aria-label="Next service"
                          className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MOBILE VIEW 2: Compact Grid (When toggled on mobile) */}
              {serviceViewMode === 'grid' && (
                <div className="md:hidden space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(showAllServicesInGrid ? filteredServices : filteredServices.slice(0, 4)).map((service) => {
                      const IconComp = getCategoryIcon(service.category);
                      return (
                        <div
                          key={service.id}
                          className="bg-white dark:bg-[#0F294A] rounded-2xl p-4 border border-slate-200/90 dark:border-slate-700/60 shadow-xs flex flex-col justify-between hover:border-[#F27A24]/40 transition-colors"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-[#F27A24]/20">
                                  <IconComp className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[10px] font-bold text-[#F27A24] bg-orange-500/10 px-2 py-0.5 rounded-full border border-[#F27A24]/20">
                                  {service.category}
                                </span>
                              </div>
                              <span className="text-xs font-black text-slate-400 font-mono">
                                #{service.id}
                              </span>
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-[#0F294A] dark:text-white truncate">
                                {service.title}
                              </h4>
                              <div className="text-[10px] font-semibold text-[#0D9488] dark:text-teal-400 truncate mt-0.5">
                                {service.seoTarget}
                              </div>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                              {service.shortDescription}
                            </p>
                          </div>
                          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span className="text-[10px] font-medium text-slate-400">
                              Custom Scope
                            </span>
                            <Link
                              to={`/services/${service.slug}/`}
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#F27A24] hover:text-[#DE6713]"
                            >
                              <span>Explore</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {filteredServices.length > 4 && (
                    <button
                      type="button"
                      onClick={() => setShowAllServicesInGrid(!showAllServicesInGrid)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700/80 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#F27A24] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>
                        {showAllServicesInGrid
                          ? 'Show Top 4 Services'
                          : `View All ${filteredServices.length} Services (+${filteredServices.length - 4})`}
                      </span>
                      {showAllServicesInGrid ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              )}

              {/* DESKTOP VIEW: Full 3-Column Grid of Short, Modern Cards (Hidden on Mobile) */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => {
                  const IconComp = getCategoryIcon(service.category);
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-[#0F294A] rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 dark:hover:border-[#F27A24]/60 transition-all flex flex-col justify-between group shadow-xs hover:shadow-sm"
                    >
                      <div className="space-y-3">
                        {/* Header: Icon + Category + ID */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center group-hover:scale-105 transition-transform border border-[#F27A24]/20">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-[#F27A24]/30">
                              {service.category}
                            </span>
                          </div>
                          <span className="text-xs font-black text-slate-400 dark:text-slate-500 font-mono">
                            #{service.id}
                          </span>
                        </div>

                        {/* Title & Domain Specialization */}
                        <div>
                          <h3 className="text-lg font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors leading-snug truncate">
                            {service.title}
                          </h3>
                          <div className="text-xs font-semibold text-[#0D9488] dark:text-teal-400 truncate mt-0.5">
                            Specialization: {service.seoTarget}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {service.shortDescription}
                        </p>

                        {/* Deliverables Scope Chips */}
                        <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                          {service.scope.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-[#F8FAFC] dark:bg-[#0A1C33] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200/70 dark:border-slate-700 truncate max-w-[150px]"
                            >
                              {item}
                            </span>
                          ))}
                          {service.scope.length > 3 && (
                            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                              +{service.scope.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Desktop Bottom CTA */}
                      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                          {service.category}
                        </span>
                        <Link
                          to={`/services/${service.slug}/`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] px-3.5 py-1.5 rounded-lg shadow-xs transition-all group-hover:shadow"
                        >
                          <span>Explore Scope</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Engineering Excellence & Guarantees */}
      <section className="py-12 bg-white dark:bg-[#0A1C33] border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Enterprise Delivery Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Engineered for Scalability, Security & Full Ownership.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Every engagement is backed by disciplined engineering practices, modular architecture, and complete intellectual property transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "100% IP Transfer",
                desc: "You retain complete ownership of all source code, databases, and deployment assets upon release.",
                icon: ShieldCheck
              },
              {
                title: "Cloud-Native Modular Architecture",
                desc: "Microservices and clean APIs that scale effortlessly without locking you into proprietary platforms.",
                icon: Layers
              },
              {
                title: "Dedicated Engineering Pods",
                desc: "Cross-functional teams of enterprise architects, full-stack devs, and DevOps engineers.",
                icon: Code2
              },
              {
                title: "Measurable Commercial ROI",
                desc: "Solutions architected directly around quantifiable efficiency, throughput, and revenue targets.",
                icon: BarChart3
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-200/90 dark:border-slate-700/60 space-y-2.5 hover:border-[#F27A24]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F294A] dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Service Consultation CTA */}
      <section className="py-12 bg-[#F8FAFC] dark:bg-[#081528]">
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
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2 group"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/platforms/"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200 dark:border-slate-700 rounded-xl transition-colors inline-flex items-center justify-center"
            >
              Explore Our Owned Platforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}