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
  Server,
  Star,
  Activity,
  Check,
  Play,
  Pause
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
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000; // 6 seconds per slide

  const slides = [
    {
      id: 1,
      tag: "MISSION FTC™ • CORE PLATFORM FOUNDATION",
      status: "12 PLATFORMS ACTIVE • TIER-4 DC",
      titleMain: "BUILDING DIGITAL INFRASTRUCTURE",
      titleHighlight: "FOR A SMARTER INDIA.",
      subtitle: "Enterprise Software • Autonomous AI Solutions • Mission-Critical Systems",
      description: "Bizwoke Nova™ engineers sovereign enterprise software, citizen portals, and specialized industry platforms. Built on the unified NKTech Enterprise Platform™ (NEP), standardizing security, AI automation, and multi-tenant scale.",
      primaryCTA: { label: "Explore Our Platforms", to: "#platforms", isHash: true },
      secondaryCTA: { label: "Discuss Your Project", to: "/contact/?type=project" },
      image: "/assets/slider-infrastructure.jpg",
      imageAlt: "Enterprise software engineering team building scalable systems",
      smartChips: [
        { icon: Layers, label: "NKTech Core", value: "NEP™ Unified Architecture", highlight: true },
        { icon: Zap, label: "Latency", value: "Sub-15ms National Edge", highlight: false },
        { icon: Lock, label: "Security", value: "Zero-Trust Sovereign Hosting", highlight: false }
      ],
      metricWidget: {
        title: "Platform Ecosystem",
        primaryStat: "12 Digital Products",
        subStat: "Government • MSME • Tourism • Industry",
        icon: Globe2
      }
    },
    {
      id: 2,
      tag: "SEARCH INTELLIGENCE • REPUTATION SYSTEMS",
      status: "AI SENTIMENT RADAR ACTIVE",
      titleMain: "ACCELERATE SEARCH PRESENCE",
      titleHighlight: "& CUSTOMER TRUST.",
      subtitle: "Turn Real-Time Customer Experience into 5-Star Brand Equity & Market Dominance",
      description: "Dominate organic search presence and regional business discovery with BizORM™ and BharatBN™. Capture on-premise feedback instantly via QR, resolve negative sentiment privately before public damage, and convert happy customers into verified 5-star Google reviews.",
      primaryCTA: { label: "Explore BizORM™ Platform", to: "/platforms/bizorm/" },
      secondaryCTA: { label: "Explore BharatBN™", to: "/platforms/bharatbn/" },
      image: "/assets/slider-analytics.jpg",
      imageAlt: "Real-time enterprise analytics and business performance telemetry dashboard",
      smartChips: [
        { icon: Star, label: "Review Capture", value: "+340% 5-Star Google Reviews", highlight: true },
        { icon: TrendingUp, label: "Search Presence", value: "High-Intent Discovery Across India", highlight: false },
        { icon: ShieldCheck, label: "ORM Protection", value: "70% Negative Escalations Prevented", highlight: false }
      ],
      metricWidget: {
        title: "Reputation Intelligence",
        primaryStat: "4.9 ★★★★★ Rating",
        subStat: "Instant Feedback to Brand Equity",
        icon: Sparkles
      }
    },
    {
      id: 3,
      tag: "NKTECH ENTERPRISE PLATFORM™ • HIGH CONCURRENCY",
      status: "HIGH-AVAILABILITY CLUSTER: 99.99%",
      titleMain: "HIGH-CONCURRENCY ENTERPRISE ERP",
      titleHighlight: "& SCALABLE SYSTEMS.",
      subtitle: "Engineered for Massive Transactional Volume, Municipal ULBs & Plant Operations",
      description: "Standardized microservices for high-concurrency municipal property tax, workforce biometric tracking, and sacred destination portals. Built with sovereign Tier-4 MeitY cloud hosting, automated GST compliance, and zero single-point-of-failure.",
      primaryCTA: { label: "Schedule Architecture Review", to: "/contact/?type=consultation" },
      secondaryCTA: { label: "Explore NEP Architecture", to: "/technology/" },
      image: "/assets/slider-datacenter.jpg",
      imageAlt: "Tier-4 sovereign enterprise datacenter server racks with glowing cabling",
      smartChips: [
        { icon: Server, label: "High Concurrency", value: "100,000+ Concurrent Transactions", highlight: true },
        { icon: Cpu, label: "Compliance", value: "MeitY Empanelled • DPDP Compliant", highlight: false },
        { icon: Activity, label: "Uptime SLA", value: "99.99% Fault-Tolerant Redundancy", highlight: false }
      ],
      metricWidget: {
        title: "Enterprise Core SLA",
        primaryStat: "99.99% Uptime",
        subStat: "Indian Tier-4 Sovereign Datacenters",
        icon: Cpu
      }
    }
  ];

  // Auto-scroll progress and interval
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / slideDuration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(interval);
  }, [isPaused, slides.length, currentSlide]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const current = slides[currentSlide];

  return (
    <div
      className="relative w-full overflow-hidden bg-[#071526] text-white select-none border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Enterprise Banner Carousel"
    >
      {/* Background Cinematic Atmosphere & Grid Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#F27A24]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#1E5086]/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Panoramic Slide Container */}
      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-[640px] lg:min-h-[700px] flex flex-col justify-between">
        
        {/* Banner Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F27A24] animate-pulse" />
            <span className="font-extrabold uppercase tracking-widest text-[#F27A24]">
              {current.tag}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{current.status}</span>
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-400 font-medium">
              Bizwoke Nova™ Enterprise Technology Portfolio
            </span>
          </div>
        </div>

        {/* Banner Core: 2-Column High-Impact Widescreen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto py-8">
          
          {/* Left Hero Column: Big Bold Headline + Smart Description + Dual CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline (Bold, High-Contrast, Enterprise Aesthetic) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              {current.titleMain} <br />
              <span className="text-[#F27A24] drop-shadow-sm">{current.titleHighlight}</span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-lg sm:text-xl font-bold text-slate-200 leading-snug">
              {current.subtitle}
            </p>

            {/* Detailed Explanatory Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              {current.description}
            </p>

            {/* 3 Smart Live Telemetry Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 max-w-2xl">
              {current.smartChips.map((chip, cIdx) => {
                const ChipIcon = chip.icon;
                return (
                  <div
                    key={cIdx}
                    className={`p-3 rounded-xl border transition-all ${
                      chip.highlight
                        ? 'bg-orange-500/10 border-orange-500/40 text-white'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <ChipIcon className={`w-3.5 h-3.5 ${chip.highlight ? 'text-[#F27A24]' : 'text-slate-400'}`} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {chip.label}
                      </span>
                    </div>
                    <div className="text-xs font-bold truncate">
                      {chip.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {current.primaryCTA.isHash ? (
                <a
                  href={current.primaryCTA.to}
                  className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C95B0F] shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all inline-flex items-center gap-2 group"
                >
                  <span>{current.primaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  to={current.primaryCTA.to}
                  className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C95B0F] shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all inline-flex items-center gap-2 group"
                >
                  <span>{current.primaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              <Link
                to={current.secondaryCTA.to}
                className="px-8 py-4 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all inline-flex items-center gap-2"
              >
                <span>{current.secondaryCTA.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Column: Real Enterprise Photography + Smart Floating Device Mockups */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Widescreen Visual Container with Bezel */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-[#0F294A] aspect-[16/10] group">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Live Telemetry Beacon */}
                <div className="absolute top-3.5 left-3.5 bg-[#0A1C33]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-ping" />
                  <span>Real Platform Feed</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#0F294A]/90 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium truncate">
                    {current.imageAlt}
                  </span>
                  <span className="text-[#F27A24] font-bold shrink-0 ml-2">Verified</span>
                </div>
              </div>

              {/* Floating Smart Metric Widget (Layered Depth) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#0F294A]/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-[#F27A24]/15 border border-[#F27A24]/30 text-[#F27A24] flex items-center justify-center shrink-0">
                  <current.metricWidget.icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {current.metricWidget.title}
                  </div>
                  <div className="text-base sm:text-lg font-black text-white truncate">
                    {current.metricWidget.primaryStat}
                  </div>
                  <div className="text-[11px] text-[#0D9488] font-semibold truncate">
                    {current.metricWidget.subStat}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Widescreen Bottom Navigation & Interactive Progress Tabs */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 3 Interactive Smart Tabs with Animated Progress Bars */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full md:w-auto md:flex-1 md:max-w-2xl">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`relative text-left p-3 sm:p-3.5 rounded-xl border transition-all overflow-hidden ${
                  currentSlide === idx
                    ? 'bg-white/10 border-orange-500/50 shadow-md ring-1 ring-orange-500/30'
                    : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400'
                }`}
              >
                {/* Active Slide Progress Fill Bar */}
                {currentSlide === idx && (
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-[#F27A24]/20 border-r-2 border-[#F27A24] transition-all duration-75 pointer-events-none"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold ${currentSlide === idx ? 'text-[#F27A24]' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    {currentSlide === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24]" />
                    )}
                  </div>
                  <div className={`text-xs font-bold mt-1 truncate ${currentSlide === idx ? 'text-white' : 'text-slate-300'}`}>
                    {idx === 0 ? "Digital Infrastructure" : idx === 1 ? "Search & Trust" : "Enterprise ERP"}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Controls: Play/Pause Indicator & Next/Prev Navigation */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#F27A24]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-slate-400" />
                  <span className="hidden sm:inline">Auto-scroll</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F27A24] border border-white/15 text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Previous Banner"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F27A24] border border-white/15 text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Next Banner"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}