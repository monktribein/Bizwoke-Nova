import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Server,
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
  Building,
  GraduationCap,
  ExternalLink,
  Lock,
  Workflow,
  BarChart3,
  CreditCard,
  Cloud,
  ChevronLeft,
  ChevronRight,
  Bot,
  Terminal,
  Activity,
  Code2,
  LayoutGrid,
  Search,
  Check
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const carouselRef = useRef(null);

  // 12 Platforms data
  const platforms = PLATFORMS_DATA;

  const categories = ['All', 'Governance', 'Tourism', 'Commerce', 'Industry', 'Healthcare', 'Transport', 'Business'];

  const filteredPlatforms = activeCategory === 'All'
    ? platforms
    : platforms.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Section 4: Enterprise Capabilities (8 Core Services)
  const coreServices = [
    {
      title: "Enterprise Software Development",
      path: "/services/enterprise-software-development/",
      desc: "Custom enterprise architectures, ERP systems, core backend infrastructure, and scalable mission-critical business platforms.",
      icon: Layers,
      accent: "from-blue-500/20 to-transparent",
      badge: "Core Engineering"
    },
    {
      title: "AI & Business Automation",
      path: "/services/ai-automation-services/",
      desc: "Autonomous workflow agents, specialized LLM integration, conversational intelligence, and intelligent process automation.",
      icon: Sparkles,
      accent: "from-teal-500/20 to-transparent",
      badge: "Intelligent Systems"
    },
    {
      title: "Mobile App Development",
      path: "/services/mobile-app-development/",
      desc: "High-performance iOS, Android, and cross-platform mobile apps engineered for field workforce and large-scale consumer networks.",
      icon: Globe2,
      accent: "from-indigo-500/20 to-transparent",
      badge: "Mobile & Edge"
    },
    {
      title: "ERP & CRM Solutions",
      path: "/services/enterprise-software-development/",
      desc: "End-to-end organizational resource planning, multi-department telemetry, CRM pipelines, and unified executive dashboards.",
      icon: LayoutGrid,
      accent: "from-amber-500/20 to-transparent",
      badge: "Operations"
    },
    {
      title: "Website Development",
      path: "/services/mobile-app-development/",
      desc: "High-speed corporate websites, dynamic stakeholder portals, headless CMS architectures, and enterprise web applications.",
      icon: Code2,
      accent: "from-purple-500/20 to-transparent",
      badge: "Digital Portals"
    },
    {
      title: "Digital Transformation",
      path: "/services/technology-consulting/",
      desc: "Strategic modernization of legacy workflows, institutional digital roadmaps, paperless transitions, and data digitization.",
      icon: Cpu,
      accent: "from-emerald-500/20 to-transparent",
      badge: "Transformation"
    },
    {
      title: "SEO & Digital Growth",
      path: "/services/ai-seo-services/",
      desc: "Next-generation generative search optimization (AEO/GEO), technical SEO infrastructure, and high-intent organic discovery.",
      icon: Search,
      accent: "from-orange-500/20 to-transparent",
      badge: "Growth Engineering"
    },
    {
      title: "Technology Consulting",
      path: "/services/technology-consulting/",
      desc: "Enterprise architecture reviews, sovereign cloud roadmaps, security compliance audits, and strategic tech stewardship.",
      icon: ShieldCheck,
      accent: "from-cyan-500/20 to-transparent",
      badge: "Advisory"
    }
  ];

  // Section 6: NEP Foundation (10 Shared Capabilities)
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

  return (
    <>
      <SEOHead
        title="Bizwoke Nova™ — Building Digital Infrastructure for a Smarter India"
        description="Bizwoke Nova™ is an enterprise technology, AI solutions, and digital transformation company powering 12 specialized platforms built on the NKTech Enterprise Platform™."
        canonical="/"
      />

      <div className="relative overflow-hidden bg-[#08090B] text-white">

        {/* Ambient Warm Gradient Background Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-radial from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none z-0" />
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-radial from-blue-600/10 to-transparent blur-3xl pointer-events-none z-0" />

        {/* =========================================================================
            SECTION 1: CINEMATIC HERO
        ========================================================================= */}
        <section className="relative z-10 pt-16 sm:pt-24 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                ENTERPRISE TECHNOLOGY • AI SOLUTIONS • DIGITAL TRANSFORMATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Building Digital Infrastructure <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                for a
              </span>{' '}
              <span className="bg-gradient-to-r from-[#F27A24] via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Smarter India.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#A7ADB8] max-w-3xl mx-auto leading-relaxed font-normal">
              Technology that connects businesses, empowers institutions, and accelerates growth.
              From specialized digital platforms to custom AI architectures, we build scalable software for real-world impact.
            </p>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#platforms"
                className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all inline-flex items-center gap-2 group"
              >
                <span>Explore Our Platforms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact/?type=project"
                className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#171A20] hover:bg-[#20242D] border border-white/10 hover:border-white/20 transition-all inline-flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
              </Link>
            </div>
          </div>

          {/* Cinematic Hero Interface Composition (Floating Infrastructure Cards) */}
          <div className="mt-16 sm:mt-20 relative">
            {/* Ambient Backlight Rim */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F27A24]/10 to-transparent blur-2xl rounded-3xl -z-10" />

            {/* Central Master Container */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#111318]/90 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden">
              {/* Header Telemetry Bar */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    NKTech Enterprise Platform™ • Live Ecosystem Telemetry
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17A6A1]" /> 12 Active Platforms
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#246BCE]" /> 8 Economic Verticals
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24]" /> 99.98% Architecture Uptime
                  </span>
                </div>
              </div>

              {/* 3 Interactive Highlight Pods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pod 1: Tirvona & Destinations */}
                <div className="rounded-2xl border border-white/10 bg-[#171A20] p-6 hover:border-orange-500/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Destination Platform
                    </span>
                    <Compass className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F27A24] transition-colors">
                    Tirvona™
                  </h3>
                  <p className="text-xs text-[#A7ADB8] mt-2 line-clamp-2">
                    Unified religious & cultural destination management system with queue telemetry and digital offerings.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">NEP Pilgrim Core</span>
                    <Link to="/platforms/tirvona/" className="text-[#F27A24] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Platform →
                    </Link>
                  </div>
                </div>

                {/* Pod 2: BharatBN MSME Network */}
                <div className="rounded-2xl border border-white/10 bg-[#171A20] p-6 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Business Discovery
                    </span>
                    <Globe2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    BharatBN™
                  </h3>
                  <p className="text-xs text-[#A7ADB8] mt-2 line-clamp-2">
                    India’s business discovery network connecting MSMEs, distributors, and buyers across tier 2/3 clusters.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">B2B Directory</span>
                    <Link to="/platforms/bharatbn/" className="text-blue-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Platform →
                    </Link>
                  </div>
                </div>

                {/* Pod 3: BizORM CX Engine */}
                <div className="rounded-2xl border border-white/10 bg-[#171A20] p-6 hover:border-teal-500/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      ORM & CX Intelligence
                    </span>
                    <ShieldCheck className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    BizORM™
                  </h3>
                  <p className="text-xs text-[#A7ADB8] mt-2 line-clamp-2">
                    Enterprise reputation management, QR review capture, multi-location analytics, and customer feedback.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Live In Production</span>
                    <Link to="/platforms/bizorm/" className="text-teal-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Platform →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTRODUCTION (EDITORIAL LAYOUT)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#111318] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
            {/* Ambient warm gradient circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-orange-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                  CORPORATE PHILOSOPHY & CAPABILITY
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Technology Expertise. <br />
                  Business Understanding. <br />
                  <span className="text-slate-400">Long-Term Vision.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#A7ADB8] leading-relaxed">
                  <p>
                    At Bizwoke Nova™, we design, develop, and operate scalable enterprise software, AI-powered automation platforms, mobile applications, and digital transformation solutions.
                  </p>
                  <p>
                    We understand that technology must solve tangible problems on the ground. Whether digitizing municipal governance workflows, managing high-volume pilgrim hubs, or automating multi-factory workforce operations, we unite software craftsmanship with commercial pragmatism.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 bg-[#171A20] px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#F27A24]" /> Custom Enterprise Software
                  </div>
                  <div className="flex items-center gap-2 bg-[#171A20] px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#17A6A1]" /> Autonomous AI & Agents
                  </div>
                  <div className="flex items-center gap-2 bg-[#171A20] px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#246BCE]" /> 12 Scalable Digital Platforms
                  </div>
                </div>
              </div>

              {/* Graphic Composition: Option A Corporate Hierarchy */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-[#171A20] p-8 space-y-6 shadow-2xl relative">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Architecture</span>
                    <span className="text-[10px] font-bold text-[#F27A24] bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
                      Option A Approved
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#111318] border border-white/10">
                      <div className="text-xs text-[#F27A24] font-bold">Primary Corporate Brand</div>
                      <div className="text-lg font-extrabold text-white mt-1">Bizwoke Nova™</div>
                      <p className="text-xs text-slate-400 mt-1">Enterprise Technology, AI Solutions & Digital Transformation</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#111318] border border-white/10">
                      <div className="text-xs text-[#17A6A1] font-bold">Portfolio Growth Strategy</div>
                      <div className="text-lg font-extrabold text-white mt-1">Mission FTC™</div>
                      <p className="text-xs text-slate-400 mt-1">One Portfolio. Many Platforms. One Technology Foundation.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#111318] border border-white/10">
                      <div className="text-xs text-[#246BCE] font-bold">Shared Technology Foundation</div>
                      <div className="text-lg font-extrabold text-white mt-1">NKTech Enterprise Platform™ (NEP)</div>
                      <p className="text-xs text-slate-400 mt-1">Shared core capabilities, identity, multi-tenancy, and security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: OUR DIGITAL PLATFORMS (HORIZONTAL SLIDER / CAROUSEL)
        ========================================================================= */}
        <section id="platforms" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                12 PROPRIETARY DIGITAL PLATFORMS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                One Vision. Multiple Digital Platforms.
              </h2>
              <p className="text-base sm:text-lg text-[#A7ADB8] mt-3 max-w-2xl">
                Specialized enterprise software products and digital networks, each architected to solve distinct institutional and market needs.
              </p>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-12 h-12 rounded-full border border-white/10 bg-[#171A20] hover:bg-white/10 text-white flex items-center justify-center transition-all"
                aria-label="Previous platform"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-12 h-12 rounded-full border border-white/10 bg-[#171A20] hover:bg-white/10 text-white flex items-center justify-center transition-all"
                aria-label="Next platform"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  activeCategory === cat
                    ? 'bg-[#F27A24] text-white border-[#F27A24] shadow-lg shadow-orange-500/20'
                    : 'bg-[#171A20] text-slate-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Horizontal Scrolling Cards Container */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth"
          >
            {filteredPlatforms.map((p, idx) => (
              <div
                key={p.id}
                className="min-w-[320px] sm:min-w-[360px] max-w-[380px] rounded-3xl border border-white/10 bg-[#171A20] p-7 flex flex-col justify-between hover:border-white/20 hover:bg-[#1C2028] transition-all duration-300 group shrink-0 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Platform {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      p.maturityStatus === 'Live' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      p.maturityStatus === 'Pilot' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {p.maturityStatus}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-[#F27A24] transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#17A6A1] mt-1">{p.category}</div>
                  <p className="text-sm text-[#A7ADB8] mt-3 line-clamp-3 leading-relaxed">
                    {p.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">NEP Foundation</span>
                  <Link
                    to={p.path}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#F27A24] transition-colors"
                  >
                    <span>Explore Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/platforms/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#171A20] hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
            >
              <span>Explore Complete Platforms Directory (All 12)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ENTERPRISE CAPABILITIES (8 CORE SERVICES)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              FULL-STACK PROFESSIONAL SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Technology Built Around Real Business Challenges.
            </h2>
            <p className="text-base sm:text-lg text-[#A7ADB8]">
              We design and deliver scalable software architectures, autonomous workflows, and digital capabilities for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.title}
                  to={srv.path}
                  className="rounded-3xl border border-white/10 bg-[#171A20] p-7 flex flex-col justify-between hover:border-white/20 hover:bg-[#1C2028] transition-all duration-300 group relative overflow-hidden shadow-lg"
                >
                  {/* Subtle top ambient glow */}
                  <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${srv.accent} pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-[#F27A24] transition-all">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#F27A24] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#A7ADB8] mt-3 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors relative z-10">
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#171A20] hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
            >
              <span>View All 14 Professional Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: FULL-WIDTH CINEMATIC SECTION
        ========================================================================= */}
        <section className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="rounded-[40px] sm:rounded-[48px] border border-white/10 bg-gradient-to-b from-[#111318] via-[#141820] to-[#0E1117] p-8 sm:p-16 lg:p-24 relative overflow-hidden text-center shadow-2xl">
            {/* Ambient Radial Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-orange-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                EMPOWERING INDIA'S DIGITAL FUTURE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Businesses Through Intelligent Technology.
              </h2>
              <p className="text-lg sm:text-xl text-[#A7ADB8] leading-relaxed">
                We believe true digital infrastructure connects technology, people, processes, and economic opportunities into a coherent, resilient ecosystem.
              </p>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact/?type=consultation"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2 group"
                >
                  <span>Schedule an Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about-us/"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Our Leadership & Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: OUR TECHNOLOGY FOUNDATION (NKTech Platform™ - NEP)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#111318] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
            <div className="max-w-3xl mb-16 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#246BCE]">
                SHARED TECHNOLOGY FOUNDATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                One Platform. One Technology Foundation.
              </h2>
              <p className="text-base sm:text-lg text-[#A7ADB8] leading-relaxed">
                The NKTech Enterprise Platform™ (NEP) powers all 12 Bizwoke Nova digital platforms, delivering shared security, unified identity, high-throughput APIs, and AI workflow automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {nepFoundation.map((cap, idx) => {
                const CIcon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-white/10 bg-[#171A20] p-6 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#246BCE] flex items-center justify-center mb-4 group-hover:bg-[#246BCE] group-hover:text-white transition-all">
                      <CIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#246BCE] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#A7ADB8] mt-2 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-[#171A20] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <Cpu className="w-6 h-6 text-[#246BCE]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Explore Deep Architecture Specifications</h4>
                  <p className="text-xs text-slate-400">Multi-tenant data isolation, zero-trust encryption, and API adapters</p>
                </div>
              </div>
              <Link
                to="/technology/"
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#246BCE] hover:bg-blue-600 transition-colors shrink-0"
              >
                View NEP Technology Overview →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: INDUSTRIES WE SERVE (8 VERTICALS)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#17A6A1]">
              ECONOMIC SECTORS & DOMAINS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Industries We Serve.
            </h2>
            <p className="text-base sm:text-lg text-[#A7ADB8]">
              Purpose-built digital architectures engineered for high-stake sectors across the Indian economic landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => {
              const IIcon = ind.icon;
              return (
                <Link
                  key={ind.title}
                  to={ind.path}
                  className="rounded-3xl border border-white/10 bg-[#171A20] p-6 flex flex-col justify-between hover:border-teal-500/30 hover:bg-[#1C2028] transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-[#17A6A1] flex items-center justify-center mb-4 group-hover:bg-[#17A6A1] group-hover:text-white transition-all">
                      <IIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#17A6A1] transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#A7ADB8] mt-2.5 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                    <span>View Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: WHY BIZWOKE NOVA (6 DIFFERENTIATORS)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#111318] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                ENGINEERING RIGOR & STEWARDSHIP
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Technology That Moves Business Forward.
              </h2>
              <p className="text-base sm:text-lg text-[#A7ADB8]">
                Why forward-thinking enterprises, civic bodies, and institutions partner with Bizwoke Nova.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff) => (
                <div
                  key={diff.title}
                  className="rounded-2xl border border-white/10 bg-[#171A20] p-7 hover:border-white/20 transition-all group"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {diff.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F27A24] transition-colors mt-3">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB8] mt-2.5 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: MISSION FTC™ (STRATEGIC INITIATIVE)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] border border-orange-500/20 bg-gradient-to-r from-[#171A20] via-[#111318] to-[#171A20] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                LONG-TERM CORPORATE PORTFOLIO STRATEGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Mission FTC™
              </h2>
              <p className="text-lg font-semibold text-slate-300">
                One Portfolio. Many Platforms. One Technology Foundation.
              </p>
              <p className="text-base text-[#A7ADB8] leading-relaxed">
                Mission FTC is Bizwoke Nova’s long-term portfolio initiative dedicated to engineering, nurturing, and scaling specialized digital platforms across India’s core economic infrastructure.
              </p>
              <div className="pt-4">
                <Link
                  to="/about-us/#vision"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] transition-colors shadow-lg shadow-orange-500/20"
                >
                  <span>Read Corporate Vision & Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: TESTIMONIALS / ENTERPRISE IMPACT SHOWCASE
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              STAKEHOLDER IMPACT & COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Value & Operational Impact.
            </h2>
            <p className="text-base sm:text-lg text-[#A7ADB8]">
              Verified engineering feedback and performance principles across our deployed systems.
            </p>
          </div>

          {/* Floating Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-[#171A20] p-8 space-y-4 relative overflow-hidden">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operational Reliability</div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "Architecting high-availability infrastructure requires strict separation of tenant data and resilient failovers. The NEP foundation ensures mission-critical platforms remain uninterrupted."
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Enterprise Architecture Team</span>
                <span className="text-[#17A6A1]">NEP Core Infrastructure</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#171A20] p-8 space-y-4 relative overflow-hidden">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reputation & Feedback</div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "BizORM gave multi-location retail and healthcare institutions automated review collection and instant sentiment alerts, transforming raw ratings into measurable operational improvements."
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Customer Experience Lead</span>
                <span className="text-[#F27A24]">BizORM™ Operations</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#171A20] p-8 space-y-4 relative overflow-hidden">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Scalable Delivery</div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "Moving from disconnected legacy workflows to unified cloud portals empowered our field teams with real-time dispatch, transparent audit trails, and zero paperwork bottlenecks."
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Solutions Delivery Lead</span>
                <span className="text-[#246BCE]">Civic & Enterprise Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: FINAL HIGH-IMPACT CTA
        ========================================================================= */}
        <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[40px] border border-orange-500/30 bg-gradient-to-b from-[#171A20] via-[#111318] to-[#08090B] p-8 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Ambient orange glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-orange-500/20 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                AWAKENING YOUR SUCCESS
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Let's Build What's Next.
              </h2>
              <p className="text-base sm:text-lg text-[#A7ADB8] leading-relaxed">
                Have a business challenge, technology idea or digital transformation requirement? Let's explore how we can build it together.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact/?type=consultation"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2 group"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact/"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
