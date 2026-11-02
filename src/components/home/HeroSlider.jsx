import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Cpu,
  Layers,
  BarChart3,
  Globe2,
  Lock,
  Zap,
  TrendingUp,
  Server
} from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('slide');
      const idx = parseInt(param, 10);
      if (!isNaN(idx) && idx >= 1 && idx <= 3) return idx - 1;
    }
    return 0;
  });
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      eyebrow: "AWAKENING YOUR SUCCESS • MISSION FTC™",
      titleStart: "Building Digital Infrastructure",
      titleAccent: "for a Smarter India.",
      subtitle: "Technology that connects businesses, empowers institutions, and accelerates growth.",
      description: "From specialized digital platforms to custom enterprise software, we engineer scalable, mission-critical systems designed to modernize operations, improve efficiency, and unlock new growth opportunities across India.",
      primaryCTA: { label: "Explore Our Platforms", to: "#platforms", isHash: true },
      secondaryCTA: { label: "Discuss Your Project", to: "/contact/?type=project" },
      image: "/assets/slider-infrastructure.jpg",
      imageAlt: "Real enterprise software engineering team and collaborative technical workplace",
      badge: {
        icon: Layers,
        title: "12 Digital Platforms",
        desc: "Unified on NKTech Enterprise Platform™"
      },
      stats: [
        { label: "Platform Portfolio", value: "12 Products" },
        { label: "Core Foundation", value: "NKTech NEP™" },
        { label: "Architecture", value: "Multi-Tenant" }
      ]
    },
    {
      id: 2,
      eyebrow: "SEARCH INTELLIGENCE • REPUTATION SYSTEMS",
      titleStart: "Accelerate Enterprise Visibility",
      titleAccent: "& Customer Trust.",
      subtitle: "Turn real customer interactions into lasting brand equity and organic search dominance.",
      description: "Harness real-time on-premise review intelligence with BizORM™ and regional business discovery with BharatBN™. Eliminate negative public reviews, streamline customer feedback, and dominate organic search presence.",
      primaryCTA: { label: "Explore BizORM™ Platform", to: "/platforms/bizorm/" },
      secondaryCTA: { label: "Explore BharatBN™", to: "/platforms/bharatbn/" },
      image: "/assets/slider-analytics.jpg",
      imageAlt: "Real-time enterprise analytics and business performance telemetry dashboard",
      badge: {
        icon: TrendingUp,
        title: "300%+ Review Growth",
        desc: "Instant QR feedback to 5-star Google reviews"
      },
      stats: [
        { label: "Review Conversion", value: "300%+" },
        { label: "Negative Mitigation", value: "Up to 70%" },
        { label: "Search Discovery", value: "High-Intent" }
      ]
    },
    {
      id: 3,
      eyebrow: "NKTECH ENTERPRISE PLATFORM™ • HIGH CONCURRENCY",
      titleStart: "Robust, Scalable Architecture",
      titleAccent: "Built for Massive Scale.",
      subtitle: "Zero-trust security, sovereign Indian cloud hosting, and fault-tolerant microservices.",
      description: "Engineered from the ground up for high-traffic municipal governance, factory workforce intelligence, and sacred destination portals with sub-second response times and 99.99% uptime guarantees.",
      primaryCTA: { label: "Explore NEP Architecture", to: "/technology/" },
      secondaryCTA: { label: "Schedule Tech Review", to: "/contact/?type=consultation" },
      image: "/assets/slider-datacenter.jpg",
      imageAlt: "Tier-4 sovereign enterprise datacenter server racks and fiber optic connectivity",
      badge: {
        icon: Server,
        title: "Tier-4 Indian Datacenters",
        desc: "MeitY-compliant zero-trust security"
      },
      stats: [
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Data Residency", value: "100% Sovereign" },
        { label: "Security", value: "Zero-Trust IAM" }
      ]
    }
  ];

  // Auto-scroll effect (changes every 6 seconds unless user is hovering)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];
  const BadgeIcon = current.badge.icon;

  return (
    <div
      className="relative z-10 pt-6 sm:pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Enterprise Solutions Slider"
    >
      {/* Main Slider Container with Dual-Mode Enterprise Card Finish */}
      <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1C33] border border-slate-200/90 dark:border-slate-700/80 shadow-xl shadow-slate-200/50 dark:shadow-black/40 transition-all duration-300">
        
        {/* Subtle background ambient glow matching brand */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F27A24]/10 dark:bg-[#F27A24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0F294A]/10 dark:bg-[#1E5086]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Slide Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center min-h-[580px]">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center animate-fadeIn">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50/90 dark:bg-orange-500/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#F27A24]">
                {current.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-[1.12] transition-colors">
              {current.titleStart} <br />
              <span className="text-[#F27A24]">{current.titleAccent}</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg font-bold text-slate-700 dark:text-slate-200 leading-snug">
              {current.subtitle}
            </p>

            {/* Detailed Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {current.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#F8FAFC] dark:bg-[#0F294A] p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-center"
                >
                  <div className="text-sm sm:text-base font-black text-[#0F294A] dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {current.primaryCTA.isHash ? (
                <a
                  href={current.primaryCTA.to}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C95B0F] shadow-md shadow-orange-500/20 hover:shadow-lg transition-all inline-flex items-center gap-2 group"
                >
                  <span>{current.primaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  to={current.primaryCTA.to}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C95B0F] shadow-md shadow-orange-500/20 hover:shadow-lg transition-all inline-flex items-center gap-2 group"
                >
                  <span>{current.primaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              <Link
                to={current.secondaryCTA.to}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200/90 dark:border-slate-700/80 transition-all inline-flex items-center gap-2"
              >
                <span>{current.secondaryCTA.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Real, High-Quality Photography with Depth Floating Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              
              {/* Image Frame with Enterprise Bezel */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-2xl bg-slate-900 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient vignette to blend edges cleanly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Top Corner Product Tag */}
                <div className="absolute top-3 left-3 bg-[#0F294A]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Real Enterprise Telemetry</span>
                </div>
              </div>

              {/* Floating Bottom Card Overlap */}
              <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 right-3 sm:right-6 bg-white/95 dark:bg-[#0F294A]/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 text-[#F27A24] flex items-center justify-center shrink-0">
                  <BadgeIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white truncate">
                    {current.badge.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-300 truncate">
                    {current.badge.desc}
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] dark:text-teal-400 shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Slider Bottom Controls: Left/Right Arrows + Indicators + Auto-Scroll Pause indicator */}
        <div className="relative z-20 px-6 sm:px-10 py-4 bg-slate-50/80 dark:bg-[#071526]/80 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
          
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currentSlide === idx
                    ? 'bg-[#0F294A] dark:bg-[#F27A24] text-white shadow-sm ring-2 ring-orange-500/30'
                    : 'bg-white dark:bg-[#0F294A] text-slate-500 dark:text-slate-400 hover:text-[#0F294A] dark:hover:text-white border border-slate-200 dark:border-slate-700'
                }`}
                title={`Switch to slide ${idx + 1}`}
              >
                <span>0{idx + 1}</span>
                <span className="hidden sm:inline text-[11px] font-semibold opacity-90">
                  {idx === 0 ? "Infrastructure" : idx === 1 ? "Visibility" : "Architecture"}
                </span>
              </button>
            ))}
          </div>

          {/* Auto-scroll Status & Prev/Next Arrows */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:inline">
              {isPaused ? "Paused on hover" : "Auto-scrolling every 6s"}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white dark:bg-[#0F294A] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-white hover:bg-[#F27A24] hover:text-white dark:hover:bg-[#F27A24] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white dark:bg-[#0F294A] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-white hover:bg-[#F27A24] hover:text-white dark:hover:bg-[#F27A24] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}