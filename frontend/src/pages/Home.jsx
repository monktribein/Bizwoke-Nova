import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import HeroSlider from '../components/home/HeroSlider';
import { PLATFORMS_DATA } from '../data/platformsData';
import { fadeUp, viewportConfig } from '../utils/motion';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe2,
  Users2,
  CheckCircle2,
  Compass,
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  GraduationCap,
  Lock,
  Workflow,
  BarChart3,
  Cloud,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Bot,
  Code2,
  LayoutGrid,
  Search
} from 'lucide-react';

/* ---------------------------------------------------------------------------
   Small shared pieces
   Design system: one hairline rule that draws in above every section, a square
   marker + sentence-case label in a left rail, left-aligned headings, and a
   different body layout per section (table rows, ledger, dark spec grid,
   interactive index, pull-quotes) instead of one repeated card.
--------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];
const mask = { hidden: { y: '115%' }, visible: { y: 0, transition: { duration: 0.9, ease: EASE } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function Rule({ dark = false }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, ease: EASE }}
      className={`h-px origin-left ${dark ? 'bg-white/30' : 'bg-[#0F294A]/30 dark:bg-white/25'}`}
    />
  );
}

function Label({ children, dark = false, marker = 'bg-[#F27A24]' }) {
  return (
    <div className="flex items-start gap-2.5 text-sm font-semibold">
      <span className={`mt-[7px] w-2 h-2 shrink-0 ${marker}`} />
      <span className={dark ? 'text-white/70' : 'text-slate-600 dark:text-slate-300'}>{children}</span>
    </div>
  );
}

function SectionHead({ label, title, intro, children, size = 'lg', dark = false, marker }) {
  const sizes = { lg: 'text-3xl sm:text-5xl', xl: 'text-5xl sm:text-7xl lg:text-8xl' };
  return (
    <div className="mb-6 sm:mb-14">
      <Rule dark={dark} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-10 pt-3 sm:pt-6">
        <div className="lg:col-span-3">
          <Label dark={dark} marker={marker}>{label}</Label>
        </div>
        <div className="lg:col-span-9 space-y-3 sm:space-y-4">
          <h2 className={`${sizes[size]} font-extrabold tracking-tight leading-[1.08] sm:leading-[1.05] ${dark ? 'text-white' : 'text-[#0F294A] text-navy-primary'}`}>
            {title}
          </h2>
          {intro && (
            <p className={`text-sm sm:text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/70' : 'text-[#475569] text-slate-body'}`}>
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

const sectionCls = 'py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto';
const statusDot = (s) => (s === 'Live' ? 'bg-emerald-500' : s === 'Pilot' ? 'bg-blue-500' : 'bg-amber-500');

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [mobileIndustryListOpen, setMobileIndustryListOpen] = useState(false);
  const [showAllNEP, setShowAllNEP] = useState(false);
  const carouselRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const platforms = PLATFORMS_DATA;
  const categories = ['All', 'Governance', 'Tourism', 'Commerce', 'Industry', 'Healthcare', 'Transport', 'Business'];

  const filteredPlatforms = activeCategory === 'All'
    ? platforms
    : platforms.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Seamless infinite loop: duplicate items so cards scroll continuously without edge stops
  const displayPlatforms = useMemo(() => {
    if (!filteredPlatforms.length) return [];
    let base = [...filteredPlatforms];
    while (base.length < 8) {
      base = [...base, ...filteredPlatforms];
    }
    return [...base, ...base];
  }, [filteredPlatforms]);

  // Reset scroll to start when active category changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  // Continuous Seamless Infinite Carousel Glide (silky smooth ~42px/sec, no stops or jerks)
  useEffect(() => {
    let animId;
    let lastTime = performance.now();
    const speed = 42; // pixels per second

    const step = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isCarouselPaused && carouselRef.current) {
        const el = carouselRef.current;
        const half = el.scrollWidth / 2;
        if (half > 0) {
          el.scrollLeft += speed * delta;
          if (el.scrollLeft >= half) {
            el.scrollLeft -= half;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isCarouselPaused, displayPlatforms.length]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const el = carouselRef.current;
      const half = el.scrollWidth / 2;
      const scrollAmount = direction === 'left' ? -360 : 360;

      if (direction === 'left' && el.scrollLeft < 360 && half > 0) {
        el.scrollLeft += half;
      }

      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // Pause continuous scroll temporarily on manual navigation
      setIsCarouselPaused(true);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        setIsCarouselPaused(false);
      }, 3500);
    }
  };

  /* ------------------------------- DATA ------------------------------- */

  const pods = [
    {
      name: "Tirvona™", logo: "/assets/tirvona-logo.png", alt: "Tirvona Logo", icon: Compass,
      tag: "Tourism & Pilgrimage", meta: "NEP Pilgrim Core", to: "/platforms/tirvona/",
      desc: "Unified destination management system with virtual darshan queues, multi-language guide apps, and visitor telemetry.",
      tagCls: "text-amber-700 dark:text-amber-300", iconCls: "text-amber-600 dark:text-amber-400",
      nameHover: "group-hover:text-[#F27A24]", linkCls: "text-[#F27A24]", bar: "bg-amber-500"
    },
    {
      name: "BharatBN™", logo: "/assets/bharatbn-logo.webp", alt: "BharatBN Logo", icon: Globe2,
      tag: "Business Discovery", meta: "B2B Trade Network", to: "/platforms/bharatbn/",
      desc: "India’s business discovery network connecting verified MSMEs, distributors, and buyers across regional trade corridors.",
      tagCls: "text-blue-700 dark:text-blue-300", iconCls: "text-blue-600 dark:text-blue-400",
      nameHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400", linkCls: "text-blue-600 dark:text-blue-400", bar: "bg-blue-500"
    },
    {
      name: "BizORM™", logo: "/assets/bizorm-logo.jpg", alt: "BizORM Logo", icon: ShieldCheck,
      tag: "ORM & Reviews", meta: "Commercial Product", to: "/platforms/bizorm/",
      desc: "Customer experience & online reputation management system with QR review capture and multi-location analytics.",
      tagCls: "text-teal-700 dark:text-teal-300", iconCls: "text-teal-600 dark:text-teal-400",
      nameHover: "group-hover:text-teal-600 dark:group-hover:text-teal-400", linkCls: "text-teal-600 dark:text-teal-400", bar: "bg-teal-500"
    }
  ];

  // Section 4: Enterprise Capabilities (8 Core Services)
  const coreServices = [
    {
      title: "Enterprise Software Development",
      path: "/services/enterprise-software-development/",
      desc: "Custom enterprise architectures, ERP systems, core backend infrastructure, and scalable mission-critical business platforms.",
      icon: Layers,
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200/60 dark:border-blue-500/20",
      badge: "Core Engineering"
    },
    {
      title: "AI & Business Automation",
      path: "/services/ai-automation-services/",
      desc: "Autonomous workflow agents, specialized LLM integration, conversational intelligence, and intelligent process automation.",
      icon: Sparkles,
      color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border-teal-200/60 dark:border-teal-500/20",
      badge: "Intelligent Systems"
    },
    {
      title: "Mobile App Development",
      path: "/services/mobile-app-development/",
      desc: "High-performance iOS, Android, and cross-platform mobile apps engineered for field workforce and large-scale consumer networks.",
      icon: Globe2,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200/60 dark:border-indigo-500/20",
      badge: "Mobile & Edge"
    },
    {
      title: "ERP & CRM Solutions",
      path: "/services/enterprise-software-development/",
      desc: "End-to-end organizational resource planning, multi-department telemetry, CRM pipelines, and unified executive dashboards.",
      icon: LayoutGrid,
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200/60 dark:border-amber-500/20",
      badge: "Operations"
    },
    {
      title: "Website Development",
      path: "/services/mobile-app-development/",
      desc: "High-speed corporate websites, dynamic stakeholder portals, headless CMS architectures, and enterprise web applications.",
      icon: Code2,
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200/60 dark:border-purple-500/20",
      badge: "Digital Portals"
    },
    {
      title: "Digital Transformation",
      path: "/services/technology-consulting/",
      desc: "Strategic modernization of legacy workflows, institutional digital roadmaps, paperless transitions, and data digitization.",
      icon: Cpu,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200/60 dark:border-emerald-500/20",
      badge: "Transformation"
    },
    {
      title: "SEO & Digital Growth",
      path: "/services/ai-seo-services/",
      desc: "Next-generation generative search optimization (AEO/GEO), technical SEO infrastructure, and high-intent organic discovery.",
      icon: Search,
      color: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 border-orange-200/60 dark:border-orange-500/20",
      badge: "Growth Engineering"
    },
    {
      title: "Technology Consulting",
      path: "/services/technology-consulting/",
      desc: "Enterprise architecture reviews, sovereign cloud roadmaps, security compliance audits, and strategic tech stewardship.",
      icon: ShieldCheck,
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200/60 dark:border-cyan-500/20",
      badge: "Advisory"
    }
  ];

  // Section 6: NEP Foundation (shared capabilities)
  const nepFoundation = [
    { title: "AI & Automation Engine", icon: Bot, desc: "Private LLM inference, autonomous bots, and cognitive data pipelines across platforms." },
    { title: "Identity & Access (IAM)", icon: Lock, desc: "Granular RBAC, single sign-on, citizen/worker KYC, and cryptographic session protection." },
    { title: "Multi-Tenant SaaS Core", icon: Layers, desc: "Strict database tenant isolation with dynamic white-labeling and sovereign regional data isolation." },
    { title: "Workflow Management", icon: Workflow, desc: "Visual SLA-governed task routers and event-driven state engines with audit tracing." },
    { title: "Analytics & Reporting", icon: BarChart3, desc: "Real-time stream telemetry, executive KPI intelligence walls, and automated compliance reports." },
    { title: "API & Interoperability", icon: Zap, desc: "High-throughput REST/GraphQL gateways and standardized national public API adapters." },
    { title: "Cloud Infrastructure", icon: Cloud, desc: "Multi-region redundant Kubernetes clusters with automated load balancing and continuous failover." },
    { title: "Security & Monitoring", icon: ShieldCheck, desc: "AES-256 encryption at rest, TLS 1.3 in transit, automated vulnerability alerts, and ISO compliance." }
  ];

  // Section 7: Industries We Serve (8 Verticals)
  const industries = [
    { title: "Government & Public Administration", icon: Landmark, desc: "Urban local bodies, citizen portals, compliance registries, and civic workflow automation.", path: "/solutions/government-public-administration/" },
    { title: "Tourism & Religious Hubs", icon: Compass, desc: "Pilgrim queues, cultural asset digitization, multi-language guide apps, and visitor tracking.", path: "/solutions/tourism-hospitality-destinations/" },
    { title: "Manufacturing & Industrial", icon: Factory, desc: "Workforce intelligence, plant telemetry, supply-chain monitoring, and attendance tracking.", path: "/solutions/manufacturing-industrial/" },
    { title: "Healthcare & Wellness", icon: HeartPulse, desc: "Ayush tele-consultation, clinic digitization, patient records, and health worker coordination.", path: "/solutions/healthcare-wellness/" },
    { title: "Retail, MSMEs & Commerce", icon: ShoppingBag, desc: "B2B discovery, regional seller networks, digital catalogs, and local commerce logistics.", path: "/solutions/retail-msme-business/" },
    { title: "Transportation & Logistics", icon: Truck, desc: "Driver networks, fleet verification, real-time dispatch, and interstate logistics telemetry.", path: "/solutions/transportation-logistics/" },
    { title: "Political & Public Engagement", icon: Users2, desc: "Cadre coordination, ward intelligence, constituency communication, and sentiment analysis.", path: "/solutions/political-public-engagement/" },
    { title: "Education & Professional Services", icon: GraduationCap, desc: "Institutional portals, professional credentials, digital training workflows, and assessment engines.", path: "/solutions/education-professional-services/" }
  ];

  // Section 8: Why Bizwoke Nova (6 Differentiators)
  const differentiators = [
    {
      title: "Business-Focused Technology",
      desc: "We build systems directly anchored to real unit economics, organizational bottlenecks, and measurable ROI — not abstract tech demos.",
      badge: "Value-Driven"
    },
    {
      title: "Enterprise-Ready Architecture",
      desc: "Engineered from day one for continuous uptime, cryptographic data isolation, multi-tenant security, and zero single-point-of-failure.",
      badge: "Resilient"
    },
    {
      title: "AI-First Approach",
      desc: "Autonomous workflow agents, document intelligence, and real-time operational decision support woven natively into every platform.",
      badge: "Intelligent"
    },
    {
      title: "Industry-Specific Thinking",
      desc: "Domain-tuned architectures reflecting how Indian municipalities, factories, tourism hubs, and businesses actually operate on the ground.",
      badge: "Ground-Tuned"
    },
    {
      title: "Integrated Digital Capabilities",
      desc: "Unified technology ecosystems where ERP, customer reviews, commerce, and field logistics speak to each other seamlessly.",
      badge: "Connected"
    },
    {
      title: "Long-Term Technology Partnerships",
      desc: "We act as your dedicated engineering backbone with continuous maintenance, infrastructure monitoring, and technology evolution.",
      badge: "Enduring"
    }
  ];

  const quotes = [
    {
      tag: "Operational Reliability",
      text: "\"Architecting high-availability infrastructure requires strict separation of tenant data and resilient failovers. The NEP foundation ensures mission-critical platforms remain uninterrupted.\"",
      who: "Enterprise Architecture Team", what: "NEP Core Infrastructure", whatCls: "text-[#0D9488] dark:text-teal-400", rule: "border-[#0D9488]"
    },
    {
      tag: "Reputation & Feedback",
      text: "\"BizORM gave multi-location retail and healthcare institutions automated review collection and instant sentiment alerts, transforming raw ratings into measurable operational improvements.\"",
      who: "Customer Experience Lead", what: "BizORM™ Operations", whatCls: "text-[#F27A24]", rule: "border-[#F27A24]"
    },
    {
      tag: "Scalable Delivery",
      text: "\"Moving from disconnected legacy workflows to unified cloud portals empowered our field teams with real-time dispatch, transparent audit trails, and zero paperwork bottlenecks.\"",
      who: "Solutions Delivery Lead", what: "Civic & Enterprise Systems", whatCls: "text-[#1E5086] dark:text-blue-300", rule: "border-[#1E5086]"
    }
  ];

  const ind = industries[activeIndustry];
  const IndIcon = ind.icon;

  return (
    <>
      <SEOHead
        title="Bizwoke Nova™ — Building Digital Infrastructure for a Smarter India"
        description="Bizwoke Nova™ is an enterprise technology, AI solutions, and digital transformation company powering 12 specialized platforms built on the NKTech Enterprise Platform™."
        canonical="/"
      />

      <div className="relative bg-[#F8FAFC] text-[#0F294A]">

        {/* Subtle Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60" />

        {/* ===================== SECTION 1: HERO SLIDER + PORTFOLIO STRIP ===================== */}
        <section className="relative z-10 w-full pt-0">
          <HeroSlider />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 sm:pb-3">
            {/* Creative Architectural Capsule Ribbon: Ultra-Compact & Interactive */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-700/60 bg-white/95 dark:bg-[#0F294A]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(15,41,74,0.06)] p-1.5 sm:p-2 grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700/60"
            >
              {/* Segment 1: One Portfolio */}
              <Link
                to="/about-us/#mission-ftc"
                className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 p-2 sm:px-4 sm:py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all"
                title="Explore Mission FTC™ 10-Year Strategy"
              >
                <div className="hidden xs:flex w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#0F294A] dark:text-white items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0F294A] dark:text-blue-400 group-hover:rotate-45 transition-transform" />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <span className="text-xs xs:text-sm sm:text-base font-black tracking-tight text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors truncate">
                      One Portfolio
                    </span>
                    <span className="hidden xl:inline-flex text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      FTC™
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                    Mission FTC™ Strategy
                  </p>
                </div>
                <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>

              {/* Segment 2: 12 Platforms */}
              <a
                href="#platforms"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('#platforms');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 p-2 sm:px-4 sm:py-2.5 rounded-xl hover:bg-orange-50/50 dark:hover:bg-white/[0.04] transition-all"
                title="Browse all 12 specialized enterprise platforms"
              >
                <div className="hidden xs:flex w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-orange-500/10 text-[#F27A24] items-center justify-center shrink-0 border border-orange-500/20">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F27A24] group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <span className="text-xs xs:text-sm sm:text-base font-black tracking-tight text-[#F27A24] truncate">
                      12 Platforms
                    </span>
                    <span className="hidden xl:inline-flex text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-[#DE6713] dark:bg-orange-500/20 dark:text-orange-300">
                      All Live
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                    Specialized Digital Solutions
                  </p>
                </div>
                <ArrowRight className="hidden md:block w-3.5 h-3.5 text-[#F27A24] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              {/* Segment 3: One Foundation */}
              <Link
                to="/technology/"
                className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 p-2 sm:px-4 sm:py-2.5 rounded-xl hover:bg-teal-50/50 dark:hover:bg-white/[0.04] transition-all"
                title="Explore the NKTech Enterprise Platform (NEP) shared architecture"
              >
                <div className="hidden xs:flex w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-teal-500/10 text-[#0D9488] items-center justify-center shrink-0 border border-teal-500/20">
                  <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D9488] group-hover:rotate-90 transition-transform duration-300" />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <span className="text-xs xs:text-sm sm:text-base font-black tracking-tight text-[#0D9488] dark:text-teal-400 group-hover:underline truncate">
                      One Foundation
                    </span>
                    <span className="hidden xl:inline-flex text-[9px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-[#0D9488] dark:bg-teal-500/20 dark:text-teal-300">
                      NEP Core
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                    NKTech Enterprise Platform™
                  </p>
                </div>
                <ArrowRight className="hidden md:block w-3.5 h-3.5 text-[#0D9488] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </motion.div>

            {/* Featured platforms: one ledger panel, three columns */}
            <div className="mt-3.5 sm:mt-5 grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-slate-200/90 bg-white bg-card-surface overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700/60 shadow-xs">
              {pods.map((p) => {
                const PIcon = p.icon;
                return (
                  <div key={p.name} className="group relative p-4.5 sm:p-7 flex flex-col transition-colors hover:bg-slate-50/80 dark:hover:bg-white/[0.03]">
                    <span className={`absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${p.bar}`} />
                    <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                      <span className={`text-[11px] sm:text-xs font-bold ${p.tagCls}`}>{p.tag}</span>
                      <PIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${p.iconCls}`} />
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <img src={p.logo} alt={p.alt} className="h-7 sm:h-8 w-auto object-contain rounded" />
                      <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F294A] dark:text-white transition-colors ${p.nameHover}`}>{p.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 mt-2.5 sm:mt-3 line-clamp-2 sm:line-clamp-3 leading-relaxed flex-1">{p.desc}</p>
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                      <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{p.meta}</span>
                      <Link to={p.to} className={`${p.linkCls} font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                        View Platform →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 2: INTRODUCTION ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <Rule />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8">
            <div className="lg:col-span-7 space-y-6">
              <Label>Corporate philosophy & capability</Label>
              <motion.h2
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="text-4xl sm:text-6xl font-extrabold text-[#0F294A] text-navy-primary tracking-tighter leading-[1.02]"
              >
                <span className="block overflow-hidden pb-1"><motion.span variants={mask} className="block">Technology Expertise.</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span variants={mask} className="block">Business Understanding.</motion.span></span>
                <span className="block overflow-hidden pb-2"><motion.span variants={mask} className="block text-[#1E5086] dark:text-blue-400">Long-Term Vision.</motion.span></span>
              </motion.h2>
              <div className="space-y-4 text-base sm:text-lg text-[#475569] text-slate-body leading-relaxed max-w-xl">
                <p>
                  At Bizwoke Nova™, we design, develop, and deliver scalable enterprise software, AI-powered automation platforms, mobile applications, and digital transformation solutions.
                </p>
                <p>
                  From custom technology solutions to specialized digital platforms, we help organizations modernize operations, improve efficiency, and unlock new growth opportunities.
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-7 gap-y-2.5 text-sm font-bold text-[#0F294A] text-navy-primary">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F27A24]" /> Custom Enterprise Software</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D9488] dark:text-teal-400" /> Autonomous AI & Agents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1E5086] dark:text-blue-400" /> 12 Scalable Digital Platforms</li>
              </ul>
            </div>

            {/* Architecture as a connected tree */}
            <div className="lg:col-span-5 lg:pt-9">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-300 dark:border-slate-700/60">
                <span className="text-sm font-extrabold text-[#0F294A] text-navy-primary">Corporate Architecture</span>
                <span className="text-xs font-bold text-[#F27A24]">Option A Approved</span>
              </div>
              <div className="relative pl-8 space-y-8">
                <motion.span
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: EASE }}
                  className="absolute left-[4px] top-2 bottom-2 w-px origin-top bg-slate-300 dark:bg-slate-600"
                />
                {[
                  { k: "Primary Corporate Brand", t: "Bizwoke Nova™", d: "Enterprise Technology, AI Solutions & Digital Transformation", c: "text-[#F27A24]", dot: "bg-[#F27A24]" },
                  { k: "Portfolio Growth Strategy", t: "Mission FTC™", d: "One Portfolio. Many Platforms. One Technology Foundation.", c: "text-[#0D9488] dark:text-teal-400", dot: "bg-[#0D9488]" },
                  { k: "Shared Technology Foundation", t: "NKTech Enterprise Platform™ (NEP)", d: "Shared core capabilities, identity, multi-tenancy, and security", c: "text-[#1E5086] dark:text-blue-400", dot: "bg-[#1E5086]" }
                ].map((n) => (
                  <div key={n.t} className="relative">
                    <span className={`absolute -left-8 top-1.5 w-[9px] h-[9px] ${n.dot} ring-4 ring-[#F8FAFC] dark:ring-transparent`} />
                    <div className={`text-xs font-bold ${n.c}`}>{n.k}</div>
                    <div className="text-xl font-extrabold text-[#0F294A] text-navy-primary mt-0.5 tracking-tight">{n.t}</div>
                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{n.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 3: PLATFORMS CAROUSEL ===================== */}
        <section id="platforms" className={`${sectionCls} relative z-10 overflow-hidden`}>
          <SectionHead
            label="12 proprietary digital platforms"
            title="One Vision. Multiple Digital Platforms."
            intro="Specialized enterprise software products and digital networks, each architected to solve distinct institutional and market needs."
          />

          <div className="flex items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-700/60">
            {/* Category tabs with sliding underline */}
            <div className="min-w-0 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-6 w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                      activeCategory === cat ? 'text-[#0F294A] dark:text-white' : 'text-slate-500 hover:text-[#0F294A] dark:hover:text-white'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <motion.span layoutId="platform-tab" className="absolute left-0 right-0 -bottom-px h-[3px] bg-[#F27A24]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 pb-2 shrink-0">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0F294A] hover:border-[#F27A24] hover:text-[#F27A24] text-[#0F294A] text-navy-primary flex items-center justify-center transition-colors"
                aria-label="Previous platform"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0F294A] hover:border-[#F27A24] hover:text-[#F27A24] text-[#0F294A] text-navy-primary flex items-center justify-center transition-colors"
                aria-label="Next platform"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Cards Container with Smooth Auto-Scroll */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onTouchStart={() => setIsCarouselPaused(true)}
            onTouchEnd={() => {
              if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
              resumeTimerRef.current = setTimeout(() => setIsCarouselPaused(false), 2500);
            }}
            onWheel={() => {
              setIsCarouselPaused(true);
              if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
              resumeTimerRef.current = setTimeout(() => setIsCarouselPaused(false), 2000);
            }}
            className="w-full max-w-full overflow-x-auto pb-3 pt-6 no-scrollbar min-w-0"
          >
            <div className="flex items-stretch gap-5 w-max">
              {displayPlatforms.map((p, idx) => (
                <div
                  key={`${p.id}-${idx}`}
                  className="w-[82vw] sm:w-[340px] min-w-[260px] sm:min-w-[320px] max-w-[360px] rounded-xl border border-slate-200/90 hover:border-[#F27A24]/60 bg-white bg-card-surface p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200 group shrink-0"
                >
                  <div>
                    <div className="flex items-end justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-700/60">
                      <span className="text-xs font-semibold text-slate-400 flex items-baseline gap-2">
                        Platform
                        <span className="text-3xl font-black tracking-tighter text-slate-300 dark:text-slate-600 group-hover:text-[#F27A24] transition-colors">
                          {String((idx % filteredPlatforms.length) + 1).padStart(2, '0')}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${statusDot(p.maturityStatus)}`} />
                        {p.maturityStatus}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {p.logo && p.logo !== '/assets/favicon.svg' && (
                        <img src={p.logo} alt={`${p.name} Logo`} className="h-7 w-auto object-contain rounded shrink-0" />
                      )}
                      <Link to={p.route || `/platforms/${p.slug}/`}>
                        <h3 className="text-xl font-extrabold tracking-tight text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors">
                          {p.name}
                        </h3>
                      </Link>
                    </div>
                    <div className="text-xs font-bold text-[#0D9488] dark:text-teal-400 mt-1">{p.category}</div>
                    <p className="text-sm text-[#475569] text-slate-body mt-2.5 line-clamp-3 leading-relaxed">
                      {p.shortDesc || p.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">NEP Platform Core</span>
                    <Link
                      to={p.route || `/platforms/${p.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F294A] text-navy-primary hover:text-[#F27A24] transition-colors cursor-pointer"
                    >
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Link
              to="/platforms/"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#0F294A] text-navy-primary border-b-2 border-[#F27A24] pb-0.5 hover:text-[#F27A24] transition-colors"
            >
              <span>Explore Complete Platforms Directory (All 12)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ===================== SECTION 4: CORE SERVICES (ruled index) ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <SectionHead
            label="Full-stack professional services"
            title="Technology Built Around Real Business Challenges."
            intro="We design and deliver scalable software architectures, autonomous workflows, and digital capabilities for modern enterprises."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14 border-b border-slate-300 dark:border-slate-700/60">
            {coreServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.title}
                  to={srv.path}
                  className="group relative flex items-start gap-4 py-6 border-t border-slate-300 dark:border-slate-700/60"
                >
                  <span aria-hidden className="absolute inset-y-0 -inset-x-3 bg-[#F27A24]/[0.07] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <div className={`relative w-11 h-11 shrink-0 rounded-lg border flex items-center justify-center ${srv.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="relative flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-extrabold tracking-tight text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors">
                        {srv.title}
                      </h3>
                      <span className="hidden sm:inline text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">{srv.badge}</span>
                    </div>
                    <span className="sm:hidden text-xs font-semibold text-slate-500 dark:text-slate-400">{srv.badge}</span>
                    <p className="text-sm text-[#475569] text-slate-body mt-1.5 leading-relaxed">{srv.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-[#F27A24] transition-colors">
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-6">
            <Link
              to="/services/"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#0F294A] text-navy-primary border-b-2 border-[#F27A24] pb-0.5 hover:text-[#F27A24] transition-colors"
            >
              <span>View All 14 Professional Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ===================== SECTION 5: EDITORIAL STATEMENT ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <SectionHead
            label="Empowering India's digital future"
            title="Empowering Businesses Through Intelligent Technology."
            intro="We believe true digital infrastructure connects technology, people, processes, and economic opportunities into a coherent, resilient ecosystem."
          >
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                to="/contact/?type=consultation"
                className="px-7 py-3 rounded-full font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] transition-colors inline-flex items-center gap-2 group"
              >
                <span>Schedule an Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about-us/"
                className="px-7 py-3 rounded-full font-bold text-sm text-[#0F294A] text-navy-primary border border-slate-400 dark:border-slate-600 hover:border-[#0F294A] dark:hover:border-white transition-colors inline-block"
              >
                Our Leadership & Story
              </Link>
            </div>
          </SectionHead>
        </section>

        {/* ===================== SECTION 6: NEP FOUNDATION (dark spec grid) ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <div className="rounded-2xl bg-[#0F294A] dark:bg-[#0A1C33] dark:border dark:border-white/10 text-white p-4.5 sm:p-10 lg:p-12">
            <SectionHead
              dark
              marker="bg-orange-400"
              label="Shared technology foundation"
              title="One Platform. One Technology Foundation."
              intro="The NKTech Enterprise Platform™ (NEP) powers all 12 Bizwoke Nova digital platforms, delivering shared security, unified identity, high-throughput APIs, and AI workflow automation."
            >
              <div className="inline-flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                <span className="bg-white rounded-md p-1 sm:p-1.5 shrink-0">
                  <img src="/assets/nktech-logo.jpg" alt="NKTech Logo" className="h-7 sm:h-8 w-auto object-contain" />
                </span>
                <div>
                  <div className="text-xs font-bold text-white">NEP Stack Core</div>
                  <div className="text-[11px] text-white/60">Shared Infrastructure</div>
                </div>
              </div>
            </SectionHead>

            {/* Responsive Foundation Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden">
              {nepFoundation.map((cap, i) => {
                const CIcon = cap.icon;
                const isHiddenOnMobile = !showAllNEP && i >= 4;

                return (
                  <div
                    key={cap.title}
                    className={`group relative bg-[#0F294A] dark:bg-[#0A1C33] p-3.5 sm:p-6 transition-colors hover:bg-[#16396a] dark:hover:bg-[#10284a] ${
                      isHiddenOnMobile ? 'hidden sm:block' : 'block'
                    }`}
                  >
                    {/* status LED */}
                    <span
                      aria-hidden
                      className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.35}s`, animationDuration: '2.4s' }}
                    />
                    <CIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mb-2 sm:mb-5 group-hover:-translate-y-0.5 transition-transform" />
                    <h3 className="text-xs sm:text-base font-extrabold tracking-tight text-white leading-snug">{cap.title}</h3>
                    <p className="text-[11px] sm:text-sm text-white/60 mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-none leading-snug sm:leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Mobile Expand / Collapse Control */}
            <div className="sm:hidden mt-3.5 text-center">
              <button
                type="button"
                onClick={() => setShowAllNEP(!showAllNEP)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-400 bg-white/10 hover:bg-white/15 border border-white/15 active:bg-white/20 transition-colors"
              >
                <span>{showAllNEP ? 'Show Core 4 Specs' : 'View All 8 NEP Capabilities (+4)'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showAllNEP ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">Explore Deep Architecture Specifications</h4>
                <p className="hidden sm:block text-sm text-white/60 mt-0.5">Multi-tenant data isolation, zero-trust encryption, and API adapters</p>
              </div>
              <Link
                to="/technology/"
                className="w-full sm:w-auto text-center shrink-0 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#0F294A] bg-white hover:bg-orange-100 transition-colors inline-block"
              >
                View NEP Technology Overview →
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 7: INDUSTRIES (interactive index) ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <SectionHead
            marker="bg-[#0D9488]"
            label="Economic sectors & domains"
            title="Industries We Serve."
            intro="Purpose-built digital architectures engineered for high-stake sectors across the Indian economic landscape."
          />

          {/* ===================== DESKTOP LAYOUT (lg:grid) ===================== */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-14">
            <ul className="lg:col-span-7 border-b border-slate-300 dark:border-slate-700/60">
              {industries.map((it, i) => {
                const active = i === activeIndustry;
                const ItIcon = it.icon;
                return (
                  <li key={it.title} className="border-t border-slate-300 dark:border-slate-700/60">
                    <button
                      onMouseEnter={() => setActiveIndustry(i)}
                      onFocus={() => setActiveIndustry(i)}
                      onClick={() => setActiveIndustry(i)}
                      aria-pressed={active}
                      className="relative w-full flex items-center gap-4 py-4 sm:py-5 text-left"
                    >
                      {active && <motion.span layoutId="industry-bar" className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0D9488]" />}
                      <ItIcon className={`ml-4 w-5 h-5 shrink-0 transition-colors ${active ? 'text-[#0D9488] dark:text-teal-400' : 'text-slate-400'}`} />
                      <span className={`flex-1 text-lg sm:text-2xl font-extrabold tracking-tight leading-snug transition-colors ${active ? 'text-[#0F294A] text-navy-primary' : 'text-slate-400 dark:text-slate-500'}`}>
                        {it.title}
                      </span>
                      <ArrowRight className={`w-5 h-5 shrink-0 transition-all ${active ? 'text-[#0D9488] dark:text-teal-400 translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 rounded-2xl border border-slate-200/90 bg-white bg-card-surface p-7 sm:p-9 overflow-hidden min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="relative"
                  >
                    <IndIcon aria-hidden className="absolute -right-6 -top-6 w-40 h-40 text-[#0D9488]/10" strokeWidth={1} />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-[#0D9488] text-white flex items-center justify-center mb-6">
                        <IndIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-[#0F294A] text-navy-primary leading-snug">{ind.title}</h3>
                      <p className="text-base text-[#475569] text-slate-body mt-3 leading-relaxed">{ind.desc}</p>
                      <Link
                        to={ind.path}
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] dark:text-teal-400 border-b-2 border-current pb-0.5"
                      >
                        <span>View Solutions</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ===================== MOBILE LAYOUT (< lg) ===================== */}
          {/* Whichever option is clicked: content opens immediately, other options hide! */}
          <div className="lg:hidden space-y-3.5">
            {/* 1-Tap Quick Pill Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4">
              {industries.map((it, i) => {
                const active = i === activeIndustry;
                const ItIcon = it.icon;
                return (
                  <button
                    key={it.title}
                    type="button"
                    onClick={() => {
                      setActiveIndustry(i);
                      setMobileIndustryListOpen(false);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                      active
                        ? 'bg-[#0D9488] text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <ItIcon className="w-3.5 h-3.5" />
                    <span>{it.title.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Toggle Full List Bar */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-semibold text-slate-500 dark:text-slate-400">
                Industry {activeIndustry + 1} of {industries.length}
              </span>
              <button
                type="button"
                onClick={() => setMobileIndustryListOpen(!mobileIndustryListOpen)}
                className="inline-flex items-center gap-1 font-bold text-[#0D9488] dark:text-teal-400 hover:underline"
              >
                <span>{mobileIndustryListOpen ? 'Hide Other Options ▲' : 'Browse All 8 Industries ▼'}</span>
              </button>
            </div>

            {/* Expandable Options List (when clicked, option content opens & options hide) */}
            <AnimatePresence>
              {mobileIndustryListOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 shadow-md"
                >
                  {industries.map((it, i) => {
                    const active = i === activeIndustry;
                    const ItIcon = it.icon;
                    return (
                      <li key={it.title}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveIndustry(i);
                            setMobileIndustryListOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-3.5 text-left text-xs font-bold transition-colors ${
                            active
                              ? 'bg-teal-50 dark:bg-teal-950/40 text-[#0D9488] dark:text-teal-400'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="inline-flex items-center gap-2.5">
                            <ItIcon className="w-4 h-4 shrink-0 text-[#0D9488]" />
                            <span>{it.title}</span>
                          </span>
                          {active && (
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#0D9488] text-white">
                              Active
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Active Content Card: instantly opens right here */}
            <div className="rounded-2xl border border-teal-500/25 bg-gradient-to-br from-white to-teal-50/40 dark:from-slate-900 dark:to-teal-950/30 p-5 sm:p-6 relative overflow-hidden shadow-sm">
              <IndIcon aria-hidden className="absolute -right-4 -top-4 w-32 h-32 text-[#0D9488]/10" strokeWidth={1} />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-[#0D9488] text-white flex items-center justify-center mb-3.5 shadow-sm">
                  <IndIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#0F294A] dark:text-white leading-snug">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {ind.desc}
                </p>
                <Link
                  to={ind.path}
                  className="group mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D9488] dark:text-teal-400 border-b-2 border-current pb-0.5"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 8: DIFFERENTIATORS ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <SectionHead
            label="Engineering rigor & stewardship"
            title="Technology That Moves Business Forward."
            intro="Why forward-thinking enterprises, civic bodies, and institutions partner with Bizwoke Nova."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {differentiators.map((diff, i) => (
              <div key={diff.title} className="group relative pt-5">
                <span className="absolute top-0 left-0 right-0 h-px bg-slate-300 dark:bg-slate-700/60" />
                <motion.span
                  initial={{ scaleX: 0.15 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                  className="absolute top-0 left-0 h-[3px] w-full origin-left bg-[#F27A24]"
                />
                <span className="text-xs font-bold text-[#F27A24]">{diff.badge}</span>
                <h3 className="text-xl font-extrabold tracking-tight text-[#0F294A] text-navy-primary mt-2">{diff.title}</h3>
                <p className="text-sm sm:text-base text-[#475569] text-slate-body mt-3 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SECTION 9: MISSION FTC ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <SectionHead
            size="xl"
            label="Long-term corporate portfolio strategy"
            title={<>Mission FTC<span className="text-[#F27A24]">™</span></>}
          >
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E5086] dark:text-blue-300 max-w-2xl">
              One Portfolio. Many Platforms. One Technology Foundation.
            </p>
            <p className="text-base sm:text-lg text-[#475569] text-slate-body leading-relaxed max-w-2xl">
              Mission FTC is Bizwoke Nova’s long-term portfolio initiative dedicated to engineering, nurturing, and scaling specialized digital platforms across India’s core economic infrastructure.
            </p>
            <div className="pt-2">
              <Link
                to="/about-us/#vision"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] hover:bg-[#1E3A5F] dark:hover:bg-[#DE6713] transition-colors"
              >
                <span>Read Corporate Vision & Roadmap</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </SectionHead>
        </section>

        {/* ===================== SECTION 10: IMPACT (pull quotes) ===================== */}
        <section className={`${sectionCls} relative z-10`}>
          <SectionHead
            label="Stakeholder impact & collaboration"
            title="Enterprise Value & Operational Impact."
            intro="Verified engineering feedback and performance principles across our deployed systems."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Featured quote */}
            <figure className={`lg:col-span-7 border-l-4 pl-6 sm:pl-8 ${quotes[0].rule} flex flex-col justify-between gap-8`}>
              <div>
                <figcaption className="text-sm font-bold text-slate-500 text-slate-body">{quotes[0].tag}</figcaption>
                <blockquote className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight leading-snug text-[#0F294A] text-navy-primary">
                  {quotes[0].text}
                </blockquote>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 text-sm">
                <span className="font-extrabold text-[#0F294A] text-navy-primary">{quotes[0].who}</span>
                <span className={`font-semibold ${quotes[0].whatCls}`}>{quotes[0].what}</span>
              </div>
            </figure>

            <div className="lg:col-span-5 space-y-10">
              {quotes.slice(1).map((q) => (
                <figure key={q.tag} className={`border-l-4 pl-6 ${q.rule}`}>
                  <figcaption className="text-sm font-bold text-slate-500 text-slate-body">{q.tag}</figcaption>
                  <blockquote className="mt-3 text-base text-[#475569] text-slate-body leading-relaxed">{q.text}</blockquote>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="font-extrabold text-[#0F294A] text-navy-primary">{q.who}</span>
                    <span className={`font-semibold ${q.whatCls}`}>{q.what}</span>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 11: FINAL CTA ===================== */}
        <section className={`${sectionCls} !pb-0 relative z-10`}>
          <div className="relative overflow-hidden rounded-2xl bg-[#F27A24] text-[#0F294A] p-8 sm:p-14 lg:p-20">
            <div aria-hidden className="absolute -right-28 -bottom-28 w-[26rem] h-[26rem] rounded-full border-[44px] border-[#0F294A]/10" />
            <div aria-hidden className="absolute -right-4 -bottom-4 w-52 h-52 rounded-full border-[22px] border-[#0F294A]/10" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-2.5 text-sm font-bold">
                  <span className="w-2 h-2 bg-[#0F294A]" />
                  Awakening your success
                </div>
                <h2 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95]">
                  Let's Build What's Next.
                </h2>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed font-medium">
                  Have a business challenge, technology idea or digital transformation requirement? Let's explore how we can build it together.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact/?type=consultation"
                    className="px-7 py-3 rounded-full font-bold text-sm text-white bg-[#0F294A] hover:bg-[#1E3A5F] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact/"
                    className="px-7 py-3 rounded-full font-bold text-sm text-[#0F294A] border-2 border-[#0F294A] hover:bg-[#0F294A]/10 transition-colors inline-block"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
