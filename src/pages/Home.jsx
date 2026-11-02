import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import HeroSlider from '../components/home/HeroSlider';
import { PLATFORMS_DATA } from '../data/platformsData';
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

      <div className="relative bg-[#F8FAFC] dark:bg-[#071526] text-[#0F294A] dark:text-slate-100 transition-colors duration-250">

        {/* Subtle Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60" />

        {/* =========================================================================
            SECTION 1: FULL-WIDTH IMMERSIVE ENTERPRISE HERO BANNER SLIDER
        ========================================================================= */}
        <section className="relative z-10 w-full">
          <HeroSlider />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
            {/* Authentic Enterprise Architecture Triple Card */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white bg-card-surface rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center transition-colors">
              <div className="text-xl font-extrabold text-[#0F294A] text-navy-primary">One Portfolio</div>
              <p className="text-xs font-semibold text-slate-500 text-slate-body mt-1">Mission FTC™ Strategy</p>
            </div>
            <div className="bg-white bg-card-surface rounded-2xl p-6 border-2 border-orange-200/80 dark:border-orange-500/40 shadow-sm text-center relative transition-colors">
              <div className="text-xl font-extrabold text-[#F27A24]">12 Platforms</div>
              <p className="text-xs font-semibold text-slate-500 text-slate-body mt-1">Specialized Digital Solutions</p>
            </div>
            <div className="bg-white bg-card-surface rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center transition-colors">
              <div className="text-xl font-extrabold text-[#0D9488] dark:text-teal-400">One Foundation</div>
              <p className="text-xs font-semibold text-slate-500 text-slate-body mt-1">NKTech Enterprise Platform™</p>
            </div>
          </div>

          {/* 3 Real Product Telemetry Pods */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pod 1: Tirvona */}
            <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                  Tourism & Pilgrimage
                </span>
                <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors">
                Tirvona™
              </h3>
              <p className="text-xs text-[#64748B] text-slate-body mt-2 line-clamp-2 leading-relaxed">
                Unified destination management system with virtual darshan queues, multi-language guide apps, and visitor telemetry.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">NEP Pilgrim Core</span>
                <Link to="/platforms/tirvona/" className="text-[#F27A24] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Platform →
                </Link>
              </div>
            </div>

            {/* Pod 2: BharatBN */}
            <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                  Business Discovery
                </span>
                <Globe2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0F294A] text-navy-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                BharatBN™
              </h3>
              <p className="text-xs text-[#64748B] text-slate-body mt-2 line-clamp-2 leading-relaxed">
                India’s business discovery network connecting verified MSMEs, distributors, and buyers across regional trade corridors.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">B2B Trade Network</span>
                <Link to="/platforms/bharatbn/" className="text-blue-600 dark:text-blue-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Platform →
                </Link>
              </div>
            </div>

            {/* Pod 3: BizORM */}
            <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/20">
                  ORM & Reviews
                </span>
                <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="flex items-center gap-3">
                <img src="/assets/bizorm-logo.jpg" alt="BizORM Logo" className="h-8 w-auto object-contain rounded" />
                <h3 className="text-xl font-extrabold text-[#0F294A] text-navy-primary group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  BizORM™
                </h3>
              </div>
              <p className="text-xs text-[#64748B] text-slate-body mt-2 line-clamp-2 leading-relaxed">
                Customer experience & online reputation management system with QR review capture and multi-location analytics.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Commercial Product</span>
                <Link to="/platforms/bizorm/" className="text-teal-600 dark:text-teal-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Platform →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* =========================================================================
            SECTION 2: INTRODUCTION (EDITORIAL CORPORATE ARCHITECTURE)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-8 sm:p-14 lg:p-18 shadow-sm transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                  CORPORATE PHILOSOPHY & CAPABILITY
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight leading-tight transition-colors">
                  Technology Expertise. <br />
                  Business Understanding. <br />
                  <span className="text-[#1E5086] dark:text-blue-400">Long-Term Vision.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#475569] text-slate-body leading-relaxed transition-colors">
                  <p>
                    At Bizwoke Nova™, we design, develop, and deliver scalable enterprise software, AI-powered automation platforms, mobile applications, and digital transformation solutions.
                  </p>
                  <p>
                    From custom technology solutions to specialized digital platforms, we help organizations modernize operations, improve efficiency, and unlock new growth opportunities.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#0F294A] text-navy-primary">
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-[#F27A24]" /> Custom Enterprise Software
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] dark:text-teal-400" /> Autonomous AI & Agents
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-[#1E5086] dark:text-blue-400" /> 12 Scalable Digital Platforms
                  </div>
                </div>
              </div>

              {/* Option A Brand Architecture Box */}
              <div className="lg:col-span-5">
                <div className="bg-[#F8FAFC] bg-surface-elevated rounded-2xl border border-slate-200 p-7 space-y-5 transition-colors">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/60">
                    <span className="text-xs font-extrabold text-[#0F294A] text-navy-primary uppercase tracking-wider">Corporate Architecture</span>
                    <span className="text-[10px] font-bold text-[#F27A24] bg-orange-100 dark:bg-orange-500/20 px-2.5 py-0.5 rounded-full">
                      Option A Approved
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    <div className="p-4 rounded-xl bg-white dark:bg-[#112A4A] border border-slate-200/90 dark:border-slate-700/80 shadow-xs transition-colors">
                      <div className="text-xs text-[#F27A24] font-extrabold uppercase tracking-wider">Primary Corporate Brand</div>
                      <div className="text-lg font-extrabold text-[#0F294A] text-navy-primary mt-0.5">Bizwoke Nova™</div>
                      <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Enterprise Technology, AI Solutions & Digital Transformation</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-[#112A4A] border border-slate-200/90 dark:border-slate-700/80 shadow-xs transition-colors">
                      <div className="text-xs text-[#0D9488] dark:text-teal-400 font-extrabold uppercase tracking-wider">Portfolio Growth Strategy</div>
                      <div className="text-lg font-extrabold text-[#0F294A] text-navy-primary mt-0.5">Mission FTC™</div>
                      <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">One Portfolio. Many Platforms. One Technology Foundation.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-[#112A4A] border border-slate-200/90 dark:border-slate-700/80 shadow-xs transition-colors">
                      <div className="text-xs text-[#1E5086] dark:text-blue-400 font-extrabold uppercase tracking-wider">Shared Technology Foundation</div>
                      <div className="text-lg font-extrabold text-[#0F294A] text-navy-primary mt-0.5">NKTech Enterprise Platform™ (NEP)</div>
                      <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Shared core capabilities, identity, multi-tenancy, and security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: OUR DIGITAL PLATFORMS (12 PRODUCTS CAROUSEL)
        ========================================================================= */}
        <section id="platforms" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                12 PROPRIETARY DIGITAL PLATFORMS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight mt-2 transition-colors">
                One Vision. Multiple Digital Platforms.
              </h2>
              <p className="text-base sm:text-lg text-[#475569] text-slate-body mt-2 max-w-2xl transition-colors">
                Specialized enterprise software products and digital networks, each architected to solve distinct institutional and market needs.
              </p>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F294A] hover:bg-slate-50 dark:hover:bg-white/10 text-[#0F294A] text-navy-primary flex items-center justify-center transition-all shadow-xs"
                aria-label="Previous platform"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F294A] hover:bg-slate-50 dark:hover:bg-white/10 text-[#0F294A] text-navy-primary flex items-center justify-center transition-all shadow-xs"
                aria-label="Next platform"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  activeCategory === cat
                    ? 'bg-[#0F294A] dark:bg-[#F27A24] text-white border-[#0F294A] dark:border-[#F27A24] shadow-xs'
                    : 'bg-white dark:bg-[#0F294A] text-slate-600 text-slate-body hover:text-[#0F294A] border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Horizontal Scrolling Cards Container */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-4 no-scrollbar scroll-smooth"
          >
            {filteredPlatforms.map((p, idx) => (
              <div
                key={p.id}
                className="min-w-[320px] sm:min-w-[360px] max-w-[380px] rounded-3xl border border-slate-200/90 bg-white bg-card-surface p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group shrink-0 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-700/60">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Platform {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      p.maturityStatus === 'Live' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20' :
                      p.maturityStatus === 'Pilot' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20' :
                      'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20'
                    }`}>
                      {p.maturityStatus}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-bold text-[#0D9488] dark:text-teal-400 mt-1">{p.category}</div>
                  <p className="text-sm text-[#475569] text-slate-body mt-3 line-clamp-3 leading-relaxed">
                    {p.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">NEP Platform Core</span>
                  <Link
                    to={p.path}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0F294A] text-navy-primary bg-white dark:bg-[#0F294A] hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all"
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
              Technology Built Around Real Business Challenges.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] text-slate-body transition-colors">
              We design and deliver scalable software architectures, autonomous workflows, and digital capabilities for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.title}
                  to={srv.path}
                  className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${srv.color} group-hover:scale-105 transition-all`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#475569] text-slate-body mt-3 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-[#F27A24] transition-colors">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0F294A] text-navy-primary bg-white dark:bg-[#0F294A] hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all"
            >
              <span>View All 14 Professional Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: FULL-WIDTH EDITORIAL SECTION (HIGH CONTRAST)
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[40px] bg-[#0F294A] text-white p-8 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-slate-700/60">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                EMPOWERING INDIA'S DIGITAL FUTURE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Empowering Businesses Through Intelligent Technology.
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                We believe true digital infrastructure connects technology, people, processes, and economic opportunities into a coherent, resilient ecosystem.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact/?type=consultation"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] shadow-lg shadow-orange-500/25 transition-all inline-flex items-center gap-2 group"
                >
                  <span>Schedule an Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about-us/"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
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
          <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-8 sm:p-14 lg:p-18 shadow-sm transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1E5086] dark:text-blue-400">
                  SHARED TECHNOLOGY FOUNDATION
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
                  One Platform. One Technology Foundation.
                </h2>
                <p className="text-base sm:text-lg text-[#475569] text-slate-body leading-relaxed transition-colors">
                  The NKTech Enterprise Platform™ (NEP) powers all 12 Bizwoke Nova digital platforms, delivering shared security, unified identity, high-throughput APIs, and AI workflow automation.
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <img src="/assets/nktech-logo.jpg" alt="NKTech Logo" className="h-10 w-auto object-contain rounded" />
                <div>
                  <div className="text-xs font-bold text-[#0F294A] text-navy-primary">NEP Stack Core</div>
                  <div className="text-[11px] text-slate-500 text-slate-body">Shared Infrastructure</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {nepFoundation.map((cap) => {
                const CIcon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] bg-surface-elevated p-6 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/20 text-[#1E5086] dark:text-blue-400 flex items-center justify-center mb-4 group-hover:bg-[#0F294A] dark:group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                      <CIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#0F294A] text-navy-primary group-hover:text-[#1E5086] dark:group-hover:text-blue-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#64748B] text-slate-body mt-2 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#0F294A] text-navy-primary shrink-0">
                  <Cpu className="w-6 h-6 text-[#1E5086] dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F294A] text-navy-primary">Explore Deep Architecture Specifications</h4>
                  <p className="text-xs text-slate-500 text-slate-body">Multi-tenant data isolation, zero-trust encryption, and API adapters</p>
                </div>
              </div>
              <Link
                to="/technology/"
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#0F294A] dark:bg-[#2563EB] hover:bg-[#1E3A5F] dark:hover:bg-blue-600 transition-colors shrink-0"
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D9488] dark:text-teal-400">
              ECONOMIC SECTORS & DOMAINS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
              Industries We Serve.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] text-slate-body transition-colors">
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
                  className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl transition-all group shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200/80 dark:border-teal-500/20 text-[#0D9488] dark:text-teal-400 flex items-center justify-center mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-all">
                      <IIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#0F294A] text-navy-primary group-hover:text-[#0D9488] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#64748B] text-slate-body mt-2.5 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-slate-500 text-slate-body group-hover:text-[#0D9488] transition-colors">
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
          <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-8 sm:p-14 lg:p-18 shadow-sm transition-colors">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                ENGINEERING RIGOR & STEWARDSHIP
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
                Technology That Moves Business Forward.
              </h2>
              <p className="text-base sm:text-lg text-[#475569] text-slate-body transition-colors">
                Why forward-thinking enterprises, civic bodies, and institutions partner with Bizwoke Nova.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff) => (
                <div
                  key={diff.title}
                  className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] bg-surface-elevated p-7 hover:shadow-md transition-all group"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-[#0F294A] text-navy-primary border border-slate-200 dark:border-slate-700 shadow-xs">
                    {diff.badge}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0F294A] text-navy-primary group-hover:text-[#F27A24] transition-colors mt-3">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] text-slate-body mt-2.5 leading-relaxed">
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
          <div className="rounded-3xl border-2 border-orange-200 dark:border-orange-500/40 bg-orange-50/50 dark:bg-orange-500/10 p-8 sm:p-14 lg:p-18 relative overflow-hidden shadow-sm transition-colors">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                LONG-TERM CORPORATE PORTFOLIO STRATEGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
                Mission FTC™
              </h2>
              <p className="text-lg font-bold text-[#1E5086] dark:text-blue-300">
                One Portfolio. Many Platforms. One Technology Foundation.
              </p>
              <p className="text-base text-[#475569] text-slate-body leading-relaxed transition-colors">
                Mission FTC is Bizwoke Nova’s long-term portfolio initiative dedicated to engineering, nurturing, and scaling specialized digital platforms across India’s core economic infrastructure.
              </p>
              <div className="pt-4">
                <Link
                  to="/about-us/#vision"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] hover:bg-[#1E3A5F] dark:hover:bg-[#DE6713] transition-colors shadow-sm"
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
              Enterprise Value & Operational Impact.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] text-slate-body transition-colors">
              Verified engineering feedback and performance principles across our deployed systems.
            </p>
          </div>

          {/* Floating Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-8 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-slate-500 text-slate-body uppercase tracking-wider">Operational Reliability</div>
              <p className="text-sm text-[#475569] text-slate-body italic leading-relaxed">
                "Architecting high-availability infrastructure requires strict separation of tenant data and resilient failovers. The NEP foundation ensures mission-critical platforms remain uninterrupted."
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#0F294A] text-navy-primary">Enterprise Architecture Team</span>
                <span className="text-[#0D9488] dark:text-teal-400 font-semibold">NEP Core Infrastructure</span>
              </div>
            </div>

            <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-8 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-slate-500 text-slate-body uppercase tracking-wider">Reputation & Feedback</div>
              <p className="text-sm text-[#475569] text-slate-body italic leading-relaxed">
                "BizORM gave multi-location retail and healthcare institutions automated review collection and instant sentiment alerts, transforming raw ratings into measurable operational improvements."
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#0F294A] text-navy-primary">Customer Experience Lead</span>
                <span className="text-[#F27A24] font-semibold">BizORM™ Operations</span>
              </div>
            </div>

            <div className="bg-white bg-card-surface rounded-3xl border border-slate-200/90 p-8 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-slate-500 text-slate-body uppercase tracking-wider">Scalable Delivery</div>
              <p className="text-sm text-[#475569] text-slate-body italic leading-relaxed">
                "Moving from disconnected legacy workflows to unified cloud portals empowered our field teams with real-time dispatch, transparent audit trails, and zero paperwork bottlenecks."
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#0F294A] text-navy-primary">Solutions Delivery Lead</span>
                <span className="text-[#1E5086] dark:text-blue-300 font-semibold">Civic & Enterprise Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: FINAL HIGH-IMPACT CTA
        ========================================================================= */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[40px] border border-orange-200 dark:border-orange-500/40 bg-white bg-card-surface p-8 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-lg transition-colors">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
                AWAKENING YOUR SUCCESS
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0F294A] text-navy-primary tracking-tight transition-colors">
                Let's Build What's Next.
              </h2>
              <p className="text-base sm:text-lg text-[#475569] text-slate-body leading-relaxed transition-colors">
                Have a business challenge, technology idea or digital transformation requirement? Let's explore how we can build it together.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact/?type=consultation"
                  className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] shadow-lg shadow-orange-500/25 transition-all inline-flex items-center gap-2 group"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact/"
                  className="px-8 py-4 rounded-full font-bold text-sm text-[#0F294A] text-navy-primary bg-slate-50 dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-300 dark:border-slate-700 transition-colors"
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
