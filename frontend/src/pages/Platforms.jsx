import React, { useState, useMemo, useRef, useEffect } from 'react';
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
  Truck,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Platforms() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [platformViewMode, setPlatformViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [activePlatformIdx, setActivePlatformIdx] = useState(0);
  const [showAllPlatformsInGrid, setShowAllPlatformsInGrid] = useState(false);
  const [isPlatformPaused, setIsPlatformPaused] = useState(false);
  const platformCarouselRef = useRef(null);
  const platformPauseTimerRef = useRef(null);

  const [sectorViewMode, setSectorViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [activeSectorIdx, setActiveSectorIdx] = useState(0);
  const [showAllSectorsInGrid, setShowAllSectorsInGrid] = useState(false);
  const [isSectorPaused, setIsSectorPaused] = useState(false);
  const sectorCarouselRef = useRef(null);
  const sectorPauseTimerRef = useRef(null);

  const pausePlatformTemporarily = (duration = 7000) => {
    setIsPlatformPaused(true);
    if (platformPauseTimerRef.current) clearTimeout(platformPauseTimerRef.current);
    platformPauseTimerRef.current = setTimeout(() => {
      setIsPlatformPaused(false);
    }, duration);
  };

  const pauseSectorTemporarily = (duration = 7000) => {
    setIsSectorPaused(true);
    if (sectorPauseTimerRef.current) clearTimeout(sectorPauseTimerRef.current);
    sectorPauseTimerRef.current = setTimeout(() => {
      setIsSectorPaused(false);
    }, duration);
  };

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

  // Reset active platform index when filter or search changes
  useEffect(() => {
    setActivePlatformIdx(0);
    if (platformCarouselRef.current) {
      platformCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory, searchQuery]);

  // Auto-scroll for Platforms Carousel (Gentle pace ~4.5s, not fast, pauses on user interaction)
  useEffect(() => {
    if (platformViewMode !== 'carousel' || isPlatformPaused || filteredPlatforms.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActivePlatformIdx((prevIdx) => {
        const nextIdx = (prevIdx + 1) % filteredPlatforms.length;
        if (platformCarouselRef.current) {
          const container = platformCarouselRef.current;
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
  }, [platformViewMode, isPlatformPaused, filteredPlatforms.length]);

  const handlePrevPlatform = () => {
    pausePlatformTemporarily(7000);
    if (platformCarouselRef.current && filteredPlatforms.length > 0) {
      const newIdx = Math.max(0, activePlatformIdx - 1);
      const container = platformCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({ left: newIdx * (cardWidth + 12), behavior: 'smooth' });
      setActivePlatformIdx(newIdx);
    }
  };

  const handleNextPlatform = () => {
    pausePlatformTemporarily(7000);
    if (platformCarouselRef.current && filteredPlatforms.length > 0) {
      const newIdx = Math.min(filteredPlatforms.length - 1, activePlatformIdx + 1);
      const container = platformCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({ left: newIdx * (cardWidth + 12), behavior: 'smooth' });
      setActivePlatformIdx(newIdx);
    }
  };

  const handlePlatformScroll = (e) => {
    const container = e.target;
    const cardWidth = container.offsetWidth * 0.85 + 12;
    if (cardWidth > 0 && filteredPlatforms.length > 0) {
      const newIdx = Math.round(container.scrollLeft / cardWidth);
      if (newIdx >= 0 && newIdx < filteredPlatforms.length && newIdx !== activePlatformIdx) {
        setActivePlatformIdx(newIdx);
      }
    }
  };

  const scrollToPlatformIndex = (idx) => {
    pausePlatformTemporarily(7000);
    if (platformCarouselRef.current && filteredPlatforms.length > 0) {
      const container = platformCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.85 + 12;
      container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      setActivePlatformIdx(idx);
    }
  };

  const whoWeServeList = [
    { id: "01", title: "Businesses and MSMEs", desc: "Digital visibility, reputation intelligence, automated billing, and ERP operations.", icon: Building },
    { id: "02", title: "Enterprise Organizations", desc: "Custom software architecture, workforce analytics, and digital transformation.", icon: Layers },
    { id: "03", title: "Government Departments", desc: "Citizen engagement portals, monitoring systems, and digital governance.", icon: Landmark },
    { id: "04", title: "Urban Local Bodies (ULBs)", desc: "Municipal property tax, GIS tracking, sanitation fleets, and civic 311 grievances.", icon: Compass },
    { id: "05", title: "Religious & Hospitality Institutions", desc: "Pilgrim crowd management, dharamshala inventory, and sacred destination hubs.", icon: Sparkles },
    { id: "06", title: "Manufacturers & Industrial Plants", desc: "Shop-floor biometric access, contractor compliance, and plant OEE intelligence.", icon: Factory },
    { id: "07", title: "Healthcare & Wellness Providers", desc: "ABDM-compliant EHR, AYUSH practitioner accreditation, and tele-health.", icon: HeartPulse },
    { id: "08", title: "Transport & Logistics Businesses", desc: "Commercial driver digital identity passports, fleet recruitment, and loyalty.", icon: Truck },
    { id: "09", title: "Political Organizations", desc: "Constituency management, public issue tracking, and grassroots war rooms.", icon: Users2 },
    { id: "10", title: "Creators & Commerce Brands", desc: "Structured influencer campaign contracts, milestone escrow, and GMV attribution.", icon: ShoppingBag }
  ];

  // Auto-scroll for Sectors Carousel (Gentle pace ~5s, not fast, pauses on user interaction)
  useEffect(() => {
    if (sectorViewMode !== 'carousel' || isSectorPaused || whoWeServeList.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveSectorIdx((prevIdx) => {
        const nextIdx = (prevIdx + 1) % whoWeServeList.length;
        if (sectorCarouselRef.current) {
          const container = sectorCarouselRef.current;
          const cardWidth = container.offsetWidth * 0.82;
          container.scrollTo({
            left: nextIdx * (cardWidth + 12),
            behavior: 'smooth'
          });
        }
        return nextIdx;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [sectorViewMode, isSectorPaused, whoWeServeList.length]);

  const handlePrevSector = () => {
    pauseSectorTemporarily(7000);
    if (sectorCarouselRef.current) {
      const newIdx = Math.max(0, activeSectorIdx - 1);
      const container = sectorCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.82;
      container.scrollTo({ left: newIdx * (cardWidth + 12), behavior: 'smooth' });
      setActiveSectorIdx(newIdx);
    }
  };

  const handleNextSector = () => {
    pauseSectorTemporarily(7000);
    if (sectorCarouselRef.current) {
      const newIdx = Math.min(whoWeServeList.length - 1, activeSectorIdx + 1);
      const container = sectorCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.82;
      container.scrollTo({ left: newIdx * (cardWidth + 12), behavior: 'smooth' });
      setActiveSectorIdx(newIdx);
    }
  };

  const handleSectorScroll = (e) => {
    const container = e.target;
    const cardWidth = container.offsetWidth * 0.82 + 12;
    if (cardWidth > 0) {
      const newIdx = Math.round(container.scrollLeft / cardWidth);
      if (newIdx >= 0 && newIdx < whoWeServeList.length && newIdx !== activeSectorIdx) {
        setActiveSectorIdx(newIdx);
      }
    }
  };

  const scrollToSectorIndex = (idx) => {
    pauseSectorTemporarily(7000);
    if (sectorCarouselRef.current) {
      const container = sectorCarouselRef.current;
      const cardWidth = container.offsetWidth * 0.82 + 12;
      container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      setActiveSectorIdx(idx);
    }
  };

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

            <div className="pt-2 flex items-center gap-2 sm:gap-4">
              <a
                href="#directory"
                className="px-3.5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 group shrink-0"
              >
                <span>Explore Platforms</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                to="/partners/"
                className="px-3.5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition-all inline-flex items-center justify-center text-center shrink-0"
              >
                <span className="hidden sm:inline">Become a Technology Partner</span>
                <span className="sm:hidden">Become a Partner</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Interactive Filters */}
      <section id="directory" className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Controls Bar: Compact & Concise */}
          <div className="bg-white dark:bg-[#0F294A] p-3 sm:p-4 rounded-xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between gap-3">
              {/* Client-side Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search platforms or domains..."
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

              {/* Status Note */}
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium inline-flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                <span className="hidden sm:inline">Showing {filteredPlatforms.length} of {PLATFORMS_DATA.length} Platforms</span>
                <span className="sm:hidden font-bold">{filteredPlatforms.length} of {PLATFORMS_DATA.length}</span>
              </div>
            </div>

            {/* Category Filter Pills */}
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

            {/* Mobile View Toggle & Count */}
            <div className="flex md:hidden items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                {filteredPlatforms.length} {filteredPlatforms.length === 1 ? 'Platform' : 'Platforms'} Available
              </span>
              <div className="flex items-center bg-slate-100 dark:bg-[#0A1C33] p-0.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
                <button
                  type="button"
                  onClick={() => setPlatformViewMode('carousel')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                    platformViewMode === 'carousel'
                      ? 'bg-white dark:bg-[#0F294A] text-[#F27A24] shadow-xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Swipe ({filteredPlatforms.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlatformViewMode('grid')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 ${
                    platformViewMode === 'grid'
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

          {/* Platforms Content: Empty / Mobile Carousel / Mobile Grid / Desktop Grid */}
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
            <>
              {/* MOBILE VIEW 1: Ultra-Compact Swipe Carousel (Default on Mobile) */}
              {platformViewMode === 'carousel' && (
                <div className="md:hidden space-y-3">
                  <div
                    ref={platformCarouselRef}
                    onScroll={handlePlatformScroll}
                    onTouchStart={() => pausePlatformTemporarily(8000)}
                    onMouseEnter={() => setIsPlatformPaused(true)}
                    onMouseLeave={() => setIsPlatformPaused(false)}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 pt-1 px-1 -mx-1 scrollbar-none"
                    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
                  >
                    {filteredPlatforms.map((platform) => (
                      <div
                        key={platform.id}
                        className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-white dark:bg-[#0F294A] rounded-2xl p-4 border border-slate-200/90 dark:border-slate-700/60 shadow-xs flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          {/* Top Row: ID + Logo + Title + Status */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              {platform.logo && platform.logo !== '/assets/favicon.svg' ? (
                                <img
                                  src={platform.logo}
                                  alt={`${platform.name} Logo`}
                                  className="h-8 w-auto object-contain rounded-md p-0.5 bg-white border border-slate-200/80 shrink-0"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-[#F27A24]/20">
                                  <Cpu className="w-4 h-4" />
                                </div>
                              )}
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[10px] font-black text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-1.5 py-0.5 rounded border border-[#F27A24]/20 leading-none">
                                    {platform.id}
                                  </span>
                                  <h3 className="text-base font-black text-[#0F294A] dark:text-white truncate">
                                    {platform.name}
                                  </h3>
                                </div>
                                <div className="text-[11px] font-semibold text-[#0D9488] dark:text-teal-400 truncate mt-0.5">
                                  {platform.categoryLabel}
                                </div>
                              </div>
                            </div>

                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                                platform.maturityStatus === 'Live'
                                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                                  : platform.maturityStatus === 'Pilot'
                                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                                  : platform.maturityStatus === 'Early Access'
                                  ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {platform.maturityStatus}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                            {platform.description}
                          </p>

                          {/* Core Capabilities Chips */}
                          <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                            {platform.coreModules.slice(0, 2).map((mod, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium bg-[#F8FAFC] dark:bg-[#0A1C33] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200/70 dark:border-slate-700 truncate max-w-[140px]"
                              >
                                {mod.name}
                              </span>
                            ))}
                            {platform.coreModules.length > 2 && (
                              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                                +{platform.coreModules.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Bottom Row CTA */}
                        <div className="pt-2.5 mt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                            {platform.category}
                          </span>
                          <Link
                            to={platform.route}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] px-3 py-1.5 rounded-lg shadow-xs transition-all"
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Indicators & Controls */}
                  <div className="flex items-center justify-between pt-1 px-1">
                    <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] scrollbar-none py-1">
                      {filteredPlatforms.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => scrollToPlatformIndex(idx)}
                          aria-label={`Go to platform ${idx + 1}`}
                          className={`h-1.5 transition-all rounded-full shrink-0 ${
                            activePlatformIdx === idx
                              ? 'w-6 bg-[#F27A24]'
                              : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono">
                        {String(activePlatformIdx + 1).padStart(2, '0')} / {String(filteredPlatforms.length).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevPlatform}
                          disabled={activePlatformIdx === 0}
                          aria-label="Previous platform"
                          className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextPlatform}
                          disabled={activePlatformIdx === filteredPlatforms.length - 1}
                          aria-label="Next platform"
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
              {platformViewMode === 'grid' && (
                <div className="md:hidden space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(showAllPlatformsInGrid ? filteredPlatforms : filteredPlatforms.slice(0, 4)).map((platform) => (
                      <div
                        key={platform.id}
                        className="bg-white dark:bg-[#0F294A] rounded-2xl p-4 border border-slate-200/90 dark:border-slate-700/60 shadow-xs flex flex-col justify-between hover:border-[#F27A24]/40 transition-colors"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              {platform.logo && platform.logo !== '/assets/favicon.svg' ? (
                                <img
                                  src={platform.logo}
                                  alt={`${platform.name} Logo`}
                                  className="h-7 w-auto object-contain rounded-md p-0.5 bg-white border border-slate-200/80 shrink-0"
                                />
                              ) : (
                                <div className="w-7 h-7 rounded-md bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-[#F27A24]/20">
                                  <Cpu className="w-3.5 h-3.5" />
                                </div>
                              )}
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[10px] font-black text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-1.5 py-0.5 rounded border border-[#F27A24]/20 leading-none">
                                    {platform.id}
                                  </span>
                                  <h4 className="text-sm font-black text-[#0F294A] dark:text-white truncate">
                                    {platform.name}
                                  </h4>
                                </div>
                                <div className="text-[10px] font-semibold text-[#0D9488] dark:text-teal-400 truncate mt-0.5">
                                  {platform.categoryLabel}
                                </div>
                              </div>
                            </div>
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border shrink-0 ${
                                platform.maturityStatus === 'Live'
                                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                                  : platform.maturityStatus === 'Pilot'
                                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                                  : platform.maturityStatus === 'Early Access'
                                  ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {platform.maturityStatus}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                            {platform.description}
                          </p>
                        </div>
                        <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-medium text-slate-400">
                            {platform.category}
                          </span>
                          <Link
                            to={platform.route}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#F27A24] hover:text-[#DE6713]"
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredPlatforms.length > 4 && (
                    <button
                      type="button"
                      onClick={() => setShowAllPlatformsInGrid(!showAllPlatformsInGrid)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700/80 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#F27A24] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>
                        {showAllPlatformsInGrid
                          ? 'Show Top 4 Platforms'
                          : `View All ${filteredPlatforms.length} Platforms (+${filteredPlatforms.length - 4})`}
                      </span>
                      {showAllPlatformsInGrid ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              )}

              {/* DESKTOP VIEW: Full 3-Column Grid of Short, Sleek Cards (Hidden on Mobile) */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlatforms.map((platform) => (
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-[#0F294A] rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 dark:hover:border-[#F27A24]/60 transition-all flex flex-col justify-between group shadow-xs hover:shadow-sm"
                  >
                    <div className="space-y-3">
                      {/* Top Row: ID + Logo + Title + Status */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          {platform.logo && platform.logo !== '/assets/favicon.svg' ? (
                            <img
                              src={platform.logo}
                              alt={`${platform.name} Logo`}
                              className="h-9 w-auto object-contain rounded-lg p-0.5 bg-white border border-slate-200/80 shrink-0"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 border border-[#F27A24]/20">
                              <Cpu className="w-4 h-4" />
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-black text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2 py-0.5 rounded border border-[#F27A24]/20 leading-none">
                                {platform.id}
                              </span>
                              <h3 className="text-lg font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors truncate">
                                {platform.name}
                              </h3>
                            </div>
                            <div className="text-xs font-semibold text-[#0D9488] dark:text-teal-400 truncate mt-0.5">
                              {platform.categoryLabel}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${
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

                      {/* Tagline & Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {platform.description}
                      </p>

                      {/* Core Capabilities Chips */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                        {platform.coreModules.slice(0, 3).map((mod, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium bg-[#F8FAFC] dark:bg-[#0A1C33] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200/70 dark:border-slate-700 truncate max-w-[150px]"
                          >
                            {mod.name}
                          </span>
                        ))}
                        {platform.coreModules.length > 3 && (
                          <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                            +{platform.coreModules.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Desktop Card Bottom CTA */}
                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                        {platform.category}
                      </span>
                      <Link
                        to={platform.route}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] px-3.5 py-1.5 rounded-lg shadow-xs transition-all group-hover:shadow"
                      >
                        <span>Explore Platform</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
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
      <section className="py-10 sm:py-12 bg-white dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Section Header with Mobile View Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
                Client & Institutional Reach
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
                Who We Serve Across Our Portfolio
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300">
                Our digital platforms and technology solutions are engineered to serve diverse organizational scales and public-facing stakeholders.
              </p>
            </div>

            {/* Mobile View Toggle: Swipe Carousel vs Compact Grid */}
            <div className="flex md:hidden items-center self-start bg-slate-100 dark:bg-[#0A1C33] p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/60 shrink-0">
              <button
                type="button"
                onClick={() => setSectorViewMode('carousel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  sectorViewMode === 'carousel'
                    ? 'bg-white dark:bg-[#0F294A] text-[#F27A24] shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Swipe (10)</span>
              </button>
              <button
                type="button"
                onClick={() => setSectorViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  sectorViewMode === 'grid'
                    ? 'bg-white dark:bg-[#0F294A] text-[#F27A24] shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Compact Grid</span>
              </button>
            </div>
          </div>

          {/* MOBILE VIEW 1: Ultra-Compact Swipe Carousel (Default on Mobile) */}
          {sectorViewMode === 'carousel' && (
            <div className="md:hidden space-y-3">
              <div
                ref={sectorCarouselRef}
                onScroll={handleSectorScroll}
                onTouchStart={() => pauseSectorTemporarily(8000)}
                onMouseEnter={() => setIsSectorPaused(true)}
                onMouseLeave={() => setIsSectorPaused(false)}
                className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 pt-1 px-1 -mx-1 scrollbar-none"
                style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
              >
                {whoWeServeList.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className="w-[82vw] max-w-[320px] shrink-0 snap-center p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-200/90 dark:border-slate-700/60 shadow-xs flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2 py-0.5 rounded-full border border-[#F27A24]/30 uppercase tracking-wider">
                            Sector {item.id}
                          </span>
                          <div className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-[#0F294A] dark:text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Indicators & Controls */}
              <div className="flex items-center justify-between pt-1 px-1">
                <div className="flex items-center gap-1.5">
                  {whoWeServeList.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToSectorIndex(idx)}
                      aria-label={`Go to sector ${idx + 1}`}
                      className={`h-1.5 transition-all rounded-full ${
                        activeSectorIdx === idx
                          ? 'w-6 bg-[#F27A24]'
                          : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono">
                    {String(activeSectorIdx + 1).padStart(2, '0')} / {String(whoWeServeList.length).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrevSector}
                      disabled={activeSectorIdx === 0}
                      aria-label="Previous sector"
                      className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextSector}
                      disabled={activeSectorIdx === whoWeServeList.length - 1}
                      aria-label="Next sector"
                      className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOBILE VIEW 2: Compact 2-Column Grid (when toggled on mobile) */}
          {sectorViewMode === 'grid' && (
            <div className="md:hidden space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                {(showAllSectorsInGrid ? whoWeServeList : whoWeServeList.slice(0, 4)).map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-200/90 dark:border-slate-700/60 flex flex-col justify-between space-y-2 hover:border-[#F27A24]/40 transition-colors"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-[#F27A24] bg-orange-500/10 px-1.5 py-0.5 rounded uppercase">
                            {item.id}
                          </span>
                          <IconComponent className="w-3.5 h-3.5 text-[#F27A24]" />
                        </div>
                        <h4 className="text-xs font-bold text-[#0F294A] dark:text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Show All / Show Less button */}
              <button
                type="button"
                onClick={() => setShowAllSectorsInGrid(!showAllSectorsInGrid)}
                className="w-full py-2 px-3 rounded-lg bg-slate-100 dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700/80 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#F27A24] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>
                  {showAllSectorsInGrid ? 'Show Top 4 Sectors' : `View All ${whoWeServeList.length} Sectors (+6)`}
                </span>
                {showAllSectorsInGrid ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}

          {/* DESKTOP VIEW: Full 3-Column Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeServeList.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-200/90 dark:border-slate-700/60 space-y-3 hover:border-[#F27A24]/40 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F27A24] uppercase tracking-wider">
                      Sector {item.id}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F294A] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
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