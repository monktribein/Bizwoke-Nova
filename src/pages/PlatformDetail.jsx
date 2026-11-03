import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  cardVariant,
  cardHoverProps,
  buttonHoverProps,
  viewportConfig
} from '../utils/motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Building2,
  Users2,
  ChevronRight,
  FileCheck,
  Lock,
  Workflow,
  BarChart3,
  ExternalLink,
  MessageSquare,
  Zap,
  Server,
  Compass,
  AlertCircle,
  HelpCircle,
  Check,
  Globe2,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function PlatformDetail({ overrideSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = overrideSlug || routeSlug;
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  const platform = PLATFORMS_DATA.find((p) => p.slug === slug);

  if (!platform) {
    return <Navigate to="/platforms/" replace />;
  }

  // Filter other platforms for the bottom platform switcher
  const otherPlatforms = PLATFORMS_DATA.filter((p) => p.slug !== platform.slug).slice(0, 4);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          platformName: platform.name
        })
      });
    } catch (err) {
      console.warn('Backend call failed:', err);
    }
    setDemoSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title={`${platform.name} | ${platform.tagline} — Bizwoke Nova`}
        description={platform.description}
      />

      {/* Breadcrumb Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 py-3 text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/platforms/" className="hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors">Our Platforms</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0F294A] dark:text-white font-bold">{platform.name}</span>
        </div>
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Ambient Subtle Glowing Backdrop Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F27A24]/10 dark:bg-[#F27A24]/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Content */}
            <motion.div
              variants={staggerContainer(0.08, 0.05)}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6"
            >
              {/* Badges Cluster */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/15 px-3 py-1 rounded-full border border-[#F27A24]/30">
                  <Sparkles className="w-3 h-3 text-[#F27A24]" />
                  {platform.categoryLabel}
                </span>

                <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border ${
                  platform.maturityStatus === 'Live'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                    : platform.maturityStatus === 'Pilot'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                    : platform.maturityStatus === 'Early Access'
                    ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}>
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      platform.maturityStatus === 'Live' ? 'bg-emerald-500' : platform.maturityStatus === 'Pilot' ? 'bg-blue-500' : 'bg-amber-500'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      platform.maturityStatus === 'Live' ? 'bg-emerald-600' : platform.maturityStatus === 'Pilot' ? 'bg-blue-600' : 'bg-amber-600'
                    }`} />
                  </span>
                  Status: {platform.maturityStatus}
                </span>

                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  Platform #{platform.id}
                </span>
              </motion.div>

              {/* Title & Logo Header */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 sm:gap-5">
                {platform.logo && (
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-[#081528] border border-slate-200/90 dark:border-slate-700 shadow-sm shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={platform.logo}
                      alt={`${platform.name} Logo`}
                      className="h-12 sm:h-14 w-auto object-contain"
                    />
                  </motion.div>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
                  {platform.name}
                </h1>
              </motion.div>

              {/* Tagline Accent */}
              <motion.div variants={fadeUp} className="border-l-3 border-[#F27A24] pl-4 py-0.5">
                <p className="text-xl sm:text-2xl font-bold text-[#F27A24] tracking-tight">
                  "{platform.tagline}"
                </p>
              </motion.div>

              {/* Hero Subtitle / Description */}
              <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {platform.heroSubtitle || platform.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-4">
                <motion.a
                  {...buttonHoverProps}
                  href="#request-demo"
                  className="px-8 py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md shadow-orange-500/20 transition-all inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>{platform.primaryCTA}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.div {...buttonHoverProps}>
                  <Link
                    to="/partners/"
                    className="px-6 py-3.5 text-sm font-bold text-[#0F294A] dark:text-slate-200 bg-slate-100 dark:bg-[#0F294A] hover:bg-slate-200 dark:hover:bg-[#143761] border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition-all inline-flex items-center gap-2"
                  >
                    <span>Become a Partner</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Security & NEP Trust Seal */}
              <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                  <span>Powered by NKTech Enterprise Platform™ (NEP) Shared Architecture</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Creative Enterprise Architecture HUD Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white dark:bg-[#0F294A] text-[#0F294A] dark:text-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6 relative overflow-hidden border border-slate-200/90 dark:border-slate-700/80"
              >
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F27A24] via-amber-400 to-[#0D9488]" />

                {/* Header with Live Telemetry */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#F27A24]">
                      ENTERPRISE SPECIFICATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F294A] dark:text-white">
                      {platform.name} Architecture
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>NEP Core Verified</span>
                  </div>
                </div>

                {/* Spec Stack */}
                <div className="space-y-3.5 text-sm">
                  {/* Item 1: Sector & Category */}
                  <div className="p-3.5 bg-[#F8FAFC] dark:bg-[#0A1C33] rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-[#F27A24] shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">
                        Domain / Category
                      </span>
                      <span className="text-[#0F294A] dark:text-white font-bold text-sm">
                        {platform.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Item 2: Core Value Outcome (Highlighted Accent) */}
                  <div className="p-4 bg-gradient-to-br from-orange-50/70 via-white to-amber-50/40 dark:from-[#143761] dark:via-[#0F294A] dark:to-[#0A1C33] rounded-xl border border-orange-200/90 dark:border-orange-500/30 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-[#F27A24] text-white">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#F27A24]">
                        Core Business Value Outcome
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#0F294A] dark:text-white leading-relaxed">
                      {platform.businessValue}
                    </p>
                  </div>

                  {/* Item 3: Deployment Options (Interactive Chips) */}
                  <div className="p-3.5 bg-[#F8FAFC] dark:bg-[#0A1C33] rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">
                        Deployment Topology
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-[#0F294A] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-slate-200">
                        Cloud Multi-Tenant SaaS
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-[#0F294A] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-slate-200">
                        Dedicated VPC
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-[#0F294A] border border-slate-200 dark:border-slate-700 text-[#0F294A] dark:text-slate-200">
                        Hybrid Edge
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Metadata & Telemetry */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">
                    Product Index: <strong className="text-[#0F294A] dark:text-white">#{platform.id}</strong>
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Specification</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY FRICTION VS ENGINEERED SOLUTION */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              STRATEGIC PROBLEM & ENGINE RESOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Bridging Operational Deficits with Precision Engineering
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Legacy systems rely on disconnected manual handoffs. {platform.name} replaces institutional bottlenecks with automated digital workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* The Industry Friction (Problem Card) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#0F294A] rounded-3xl p-8 sm:p-10 border border-rose-200/80 dark:border-rose-900/40 shadow-sm space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>The Industry Friction</span>
                </div>
                <span className="text-xs font-bold text-rose-500/70">Legacy Vulnerabilities</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0F294A] dark:text-white">
                Operational Challenges & Inefficiencies
              </h3>

              <div className="space-y-4">
                {platform.problemStatement.map((prob, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariant}
                    className="p-4 rounded-xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 flex items-start gap-3.5 text-sm text-slate-700 dark:text-slate-300 hover:border-rose-300 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      ✕
                    </span>
                    <p className="leading-relaxed font-medium">{prob}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The Engineered Solution (Solution Card) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#0F294A] rounded-3xl p-8 sm:p-10 border border-teal-200/80 dark:border-teal-900/40 shadow-sm space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488] dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Engineered Solution</span>
                </div>
                <span className="text-xs font-bold text-teal-600/70">NEP Accelerated</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0F294A] dark:text-white">
                How {platform.name} Solves This
              </h3>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {platform.solutionOverview}
              </p>

              {/* Business Value Guarantee Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent dark:from-orange-500/20 border-l-4 border-[#F27A24] space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F27A24]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#F27A24]">
                    Measurable Business Impact
                  </span>
                </div>
                <p className="text-sm font-bold text-[#0F294A] dark:text-white leading-relaxed">
                  {platform.businessValue}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES & ARCHITECTURAL CAPABILITIES */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              MODULAR CAPABILITY MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Core Modules & Capabilities
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each module is engineered as an enterprise-grade microservice, providing high availability, rapid transaction throughput, and total API interoperability.
            </p>
          </motion.div>

          {/* Modules Grid */}
          <motion.div
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {platform.coreModules.map((module, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                {...cardHoverProps}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 hover:bg-white dark:hover:bg-[#143761] transition-all space-y-4 group shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#F27A24] flex items-center justify-center text-xs font-black group-hover:bg-[#F27A24] group-hover:text-white transition-colors">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="p-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#0D9488]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                    {module.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {module.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-semibold text-slate-400 dark:text-slate-500 flex items-center justify-between">
                  <span>Standardized Microservice</span>
                  <span className="text-[#0D9488]">Active</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TARGET STAKEHOLDERS & PERSONAS */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              STAKEHOLDER ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Designed for Key Stakeholders & Organizations
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Role-optimized interfaces and granular access permissions designed specifically for field operators, administrative directors, and executive leadership.
            </p>
          </motion.div>

          {/* Stakeholders Grid */}
          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {platform.targetUsers.map((persona, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white dark:bg-[#0F294A] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/60 shadow-sm flex items-start gap-4 sm:gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 text-[#F27A24] flex items-center justify-center shrink-0 border border-orange-200/60 dark:border-orange-500/30">
                  <Users2 className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#F27A24]">
                      Stakeholder Tier 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0F294A] dark:text-white leading-snug">
                    {persona}
                  </h4>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Granular Role-Based Portal & Workflows</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / 4-STAGE OPERATIONAL WORKFLOW */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              EXECUTION LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              How {platform.name} Operates
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              A frictionless 4-phase deployment and operational journey from onboarding through to continuous analytics.
            </p>
          </motion.div>

          {/* Workflow Stepper Grid */}
          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {platform.workflow.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/60 relative space-y-3 shadow-xs hover:border-[#F27A24]/40 hover:bg-white dark:hover:bg-[#143761] transition-all group"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 text-[#F27A24]">
                    Stage {item.step}
                  </span>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-[#F27A24]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. NEP ARCHITECTURAL FOUNDATION (UNDER THE HOOD) */}
      <section className="py-16 bg-gradient-to-br from-orange-50/60 via-white to-blue-50/60 dark:from-[#0A1C33] dark:via-[#081528] dark:to-[#0F294A] text-[#0F294A] dark:text-white border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              UNDER THE HOOD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F294A] dark:text-white">
              NKTech Enterprise Platform™ Foundation
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {platform.name} is powered by the unified NEP core, inheriting enterprise security, high concurrency processing, and sovereign compliance without redundant infrastructure overhead.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {platform.nepIntegration.map((integration, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white dark:bg-[#0F294A] p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm space-y-3 hover:border-[#F27A24]/60 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center font-black text-xs">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-bold text-[#F27A24] uppercase tracking-wider">
                    NEP Architectural Pillar
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                  {integration}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. COMMERCIAL ENGAGEMENT MODELS */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              DEPLOYMENT & LICENSING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Commercial Engagement Models
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Flexible, transparent procurement frameworks engineered for public institutions, growing MSMEs, and large enterprise consortia.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {platform.engagementModels.map((model, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`bg-white dark:bg-[#0F294A] rounded-2xl p-7 sm:p-8 border shadow-sm space-y-4 relative ${
                  idx === 0
                    ? 'border-[#F27A24]/60 ring-1 ring-[#F27A24]/30'
                    : 'border-slate-200/90 dark:border-slate-700/60'
                }`}
              >
                {idx === 0 && (
                  <span className="absolute -top-3 right-6 text-[10px] font-black uppercase tracking-wider text-white bg-[#F27A24] px-3 py-1 rounded-full shadow-sm">
                    Recommended Tier
                  </span>
                )}

                <div className="text-xs font-black text-[#F27A24] uppercase tracking-wider">
                  Option 0{idx + 1}
                </div>

                <h3 className="text-xl font-black text-[#0F294A] dark:text-white">
                  {model}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full production license with SLA-backed support, security audits, sovereign data hosting, and dedicated onboarding engineers.
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>SLA 99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Quarterly Security Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Dedicated Technical Manager</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. EXPLORE OTHER PLATFORMS STRIP */}
      {otherPlatforms.length > 0 && (
        <section className="py-16 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                  ECOSYSTEM DISCOVERY
                </span>
                <h3 className="text-2xl font-black text-[#0F294A] dark:text-white mt-1">
                  Explore Related NEP Platforms
                </h3>
              </div>
              <Link
                to="/platforms/"
                className="text-xs font-bold text-[#F27A24] hover:text-[#DE6713] inline-flex items-center gap-1 group"
              >
                <span>View Full Platform Directory (12)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherPlatforms.map((other) => (
                <Link
                  key={other.id}
                  to={other.route}
                  className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/60 hover:border-[#F27A24]/40 hover:bg-white dark:hover:bg-[#143761] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                        Platform #{other.id}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {other.maturityStatus}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {other.logo && other.logo !== '/assets/favicon.svg' && (
                        <img src={other.logo} alt={other.name} className="h-6 w-auto object-contain rounded" />
                      )}
                      <h4 className="text-base font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                        {other.name}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {other.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#F27A24]">
                    <span>Explore Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. CONVERSION & DEMO ENQUIRY */}
      <section id="request-demo" className="py-20 bg-[#F8FAFC] dark:bg-[#081528] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white dark:bg-[#0F294A] text-[#0F294A] dark:text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/90 dark:border-slate-700/80 relative overflow-hidden"
          >
            {/* Top Orange Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F27A24] via-amber-400 to-[#F27A24]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context & Architectural Deliverables */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                    INTERACTIVE DEMONSTRATION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F294A] dark:text-white leading-tight">
                    Request a Dedicated {platform.name} Demo
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Schedule a 30-minute operational walkthrough with our enterprise platform architects to evaluate compatibility, APIs, and rollout milestones.
                  </p>
                </div>

                <div className="pt-2 space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Architecture & API Review</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Technical assessment of integration points and microservice hooks.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Sovereign Cloud & Security</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Zero-trust data isolation and Indian cloud residency verification.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Phased Rollout Milestones</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Realistic pilot and full production timelines aligned to your team.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {demoSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-[#0F294A] dark:text-white">
                        Demonstration Request Received
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#0F294A] dark:text-white">{formData.name}</strong>. Our enterprise architects for {platform.name} will reach out to you at <strong className="text-[#0F294A] dark:text-white">{formData.email}</strong> within 1 business day.
                      </p>
                      <motion.button
                        {...buttonHoverProps}
                        onClick={() => setDemoSubmitted(false)}
                        className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#0F294A] dark:bg-[#143761] rounded-xl hover:bg-[#143761] dark:hover:bg-[#1a4478] transition-colors cursor-pointer"
                      >
                        Submit Another Request
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleDemoSubmit}
                      className="space-y-4 bg-[#F8FAFC] dark:bg-[#0A1C33] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                            Official Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@organization.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                          Organization / Entity Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Municipal Corporation, Enterprise Ltd."
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                          Project Scope / Operational Requirements
                        </label>
                        <textarea
                          rows={3}
                          placeholder={`Tell us about your deployment timeline or integrations for ${platform.name}...`}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="pt-2">
                        <motion.button
                          {...buttonHoverProps}
                          type="submit"
                          className="w-full py-4 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg shadow-orange-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                        >
                          <span>Confirm & Schedule Demonstration</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-3">
                          Direct architectural enquiry routed securely. Sovereign cloud data governance. Privacy guaranteed.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
