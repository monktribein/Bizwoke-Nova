import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { PLATFORMS_DATA } from '../data/platformsData';
import { fadeUp, viewportConfig } from '../utils/motion';
import { API_ENDPOINTS } from '../utils/api';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Sparkles,
  ChevronRight,
  Check,
  AlertCircle,
  Clock,
  ArrowUpRight,
  ArrowLeft
} from 'lucide-react';

/* ---------------------------------------------------------------------------
   Shared pieces (same system as the Home page). If you want, move these three
   into components/common/SectionParts.jsx and import them in both pages.
--------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];
const mask = { hidden: { y: '115%' }, visible: { y: 0, transition: { duration: 0.9, ease: EASE } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };

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
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
        dark
          ? 'bg-white/10 text-white/90 border border-white/15'
          : 'bg-[#F27A24]/10 text-[#DE6713] dark:text-[#F27A24] border border-[#F27A24]/20'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${marker}`} />
      <span>{children}</span>
    </span>
  );
}

function SectionHead({ label, title, intro, dark = false, marker }) {
  return (
    <div className="mb-10 sm:mb-14">
      <Rule dark={dark} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 pt-6">
        <div className="lg:col-span-3">
          <Label dark={dark} marker={marker}>{label}</Label>
        </div>
        <div className="lg:col-span-9 space-y-4">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] ${dark ? 'text-white' : 'text-[#0F294A] dark:text-white'}`}>
            {title}
          </h2>
          {intro && (
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/70' : 'text-slate-600 dark:text-slate-300'}`}>
              {intro}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const wrap = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const secBorder = 'border-b border-slate-200/80 dark:border-slate-800';

const statusStyle = (s) =>
  s === 'Live'
    ? {
        dot: 'bg-emerald-500',
        text: 'text-emerald-700 dark:text-emerald-400',
        pill: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
        label: 'Production Live',
      }
    : s === 'Pilot'
    ? {
        dot: 'bg-blue-500',
        text: 'text-blue-700 dark:text-blue-400',
        pill: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/25',
        label: 'Enterprise Pilot',
      }
    : s === 'Early Access'
    ? {
        dot: 'bg-amber-500',
        text: 'text-amber-700 dark:text-amber-400',
        pill: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
        label: 'Early Access',
      }
    : {
        dot: 'bg-slate-400',
        text: 'text-slate-600 dark:text-slate-300',
        pill: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700',
        label: s || 'General Availability',
      };

const inputCls =
  'w-full px-4 py-3 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-lg text-[#0F294A] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F294A] dark:focus:ring-[#F27A24] focus:border-transparent transition-all';

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
  const st = statusStyle(platform.maturityStatus);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      await fetch(API_ENDPOINTS.demo, {
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

      {/* ===================== 1. HERO (HUMAN-FRIENDLY & BALANCED) ===================== */}
      <section className={`bg-white dark:bg-[#0A1C33] ${secBorder} pt-4 sm:pt-5 pb-6 sm:pb-8 relative overflow-hidden`}>
        {/* Natural subtle ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 dark:from-[#071322] dark:via-[#0A1C33] dark:to-[#08172b] pointer-events-none" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-gradient-to-br from-[#F27A24]/10 via-[#F27A24]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className={`${wrap} relative z-10 space-y-5 sm:space-y-6`}>
          {/* Friendly Top Navigation & Unified Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/70 dark:border-slate-800">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <Link
                to="/platforms/"
                className="inline-flex items-center gap-1.5 font-bold text-[#0F294A] dark:text-white hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Platforms</span>
              </Link>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium hidden sm:inline">{platform.categoryLabel || platform.category}</span>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">/</span>
              <span className="text-[#F27A24] font-bold">{platform.name}</span>
            </nav>

            {/* Single Human-Friendly Status Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${st.pill} border shadow-2xs`}>
              <span className="relative flex h-2 w-2">
                {platform.maturityStatus === 'Live' && (
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${st.dot}`} />
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${st.dot}`} />
              </span>
              <span>{st.label}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Product Identity & Purpose */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Category Eyebrow Pill */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F27A24]/10 text-[#DE6713] dark:text-[#F27A24] border border-[#F27A24]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24]" />
                <span>{platform.categoryLabel || `${platform.category} Platform`}</span>
              </motion.div>

              {/* Logo + Platform Name */}
              <div className="flex items-center gap-4 sm:gap-5">
                {platform.logo && (
                  <motion.div variants={fadeUp} className="w-14 h-14 sm:w-16 sm:h-16 p-2 rounded-2xl bg-white dark:bg-[#081528] border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center shrink-0">
                    <img src={platform.logo} alt={`${platform.name} Logo`} className="max-h-full max-w-full object-contain" />
                  </motion.div>
                )}
                <div>
                  <h1 className="overflow-hidden pb-1">
                    <motion.span variants={mask} className="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-none">
                      {platform.name}
                    </motion.span>
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    Enterprise Digital Platform by Bizwoke Nova
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <motion.div variants={fadeUp} className="border-l-3 border-[#F27A24] pl-4 py-0.5">
                <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0F294A] dark:text-white tracking-tight leading-snug">
                  "{platform.tagline}"
                </p>
              </motion.div>

              {/* Human-Centered Hero Subtitle */}
              <motion.p variants={fadeUp} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {platform.heroSubtitle || platform.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={fadeUp} className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="#request-demo"
                  className="px-6 py-3 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-full transition-all inline-flex items-center gap-2 group shadow-sm hover:shadow-md"
                >
                  <span>{platform.primaryCTA}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/partners/"
                  className="px-6 py-3 text-sm font-bold text-[#0F294A] dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-[#0F294A] dark:hover:border-white rounded-full transition-colors inline-flex items-center gap-2 bg-white/60 dark:bg-slate-800/60"
                >
                  <span>Become a Partner</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>
              </motion.div>

              {/* Trust Credentials */}
              <motion.div variants={fadeUp} className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-[#0D9488]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>NEP™ Architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Indian Sovereign</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>DPDP Act Compliant</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: Platform Impact & Quick Specs (Compact & Balanced) */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="lg:col-span-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50/70 dark:bg-[#0F294A]/80 backdrop-blur-sm p-4 sm:p-5 shadow-2xs space-y-3.5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-700/80">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F27A24]">Impact Summary</div>
                  <h3 className="text-base sm:text-lg font-black text-[#0F294A] dark:text-white mt-0.5">
                    What {platform.name} Delivers
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified
                </span>
              </div>

              {/* Primary Value Outcome */}
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#DE6713] dark:text-[#F27A24]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Primary Value Outcome</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white leading-snug">
                  {platform.businessValue}
                </p>
              </div>

              {/* Key Capabilities Quick Chips */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  <span>KEY CAPABILITIES</span>
                  <span className="text-[#F27A24] font-semibold">{platform.coreModules.length} Modules</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {platform.coreModules.slice(0, 4).map((mod, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#0A1C33] border border-slate-200/80 dark:border-slate-700/60 shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24] shrink-0" />
                      <span className="text-xs font-bold text-[#0F294A] dark:text-white truncate">{mod.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Built For Stakeholders */}
              <div className="pt-2.5 border-t border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Built For:
                </div>
                <div className="flex flex-wrap gap-1">
                  {platform.targetUsers.map((user, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      <Check className="w-3 h-3 text-[#0D9488]" />
                      <span>{user.split(' across ')[0].split(' managing ')[0].split(' sourcing ')[0]}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ===================== 2. FRICTION VS SOLUTION ===================== */}
      <section className={`py-14 lg:py-20 ${secBorder}`}>
        <div className={wrap}>
          <SectionHead
            label="Strategic problem & engine resolution"
            title="Bridging Operational Deficits with Precision Engineering"
            intro={`Legacy systems rely on disconnected manual handoffs. ${platform.name} replaces institutional bottlenecks with automated digital workflows.`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-[#0F294A] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-700/60">
            {/* Problem */}
            <div className="p-7 sm:p-10">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400">
                  <AlertCircle className="w-4 h-4" />
                  The Industry Friction
                </span>
                <span className="text-xs text-rose-500/80">Legacy Vulnerabilities</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F294A] dark:text-white mt-5">
                Operational Challenges & Inefficiencies
              </h3>
              <ul className="mt-6 border-b border-slate-200 dark:border-slate-700/60">
                {platform.problemStatement.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-4 border-t border-slate-200 dark:border-slate-700/60 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-rose-500 font-black leading-relaxed">✕</span>
                    <p className="leading-relaxed font-medium">{prob}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="p-7 sm:p-10 bg-teal-50/40 dark:bg-[#0F294A]">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="inline-flex items-center gap-2 text-[#0D9488] dark:text-teal-400">
                  <Sparkles className="w-4 h-4" />
                  The Engineered Solution
                </span>
                <span className="text-xs text-teal-600/80">NEP Accelerated</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F294A] dark:text-white mt-5">
                How {platform.name} Solves This
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-5">{platform.solutionOverview}</p>

              <div className="mt-8 border-l-4 border-[#F27A24] pl-5 py-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F27A24]">
                  <CheckCircle2 className="w-4 h-4" />
                  Measurable Business Impact
                </div>
                <p className="text-lg font-bold tracking-tight text-[#0F294A] dark:text-white leading-snug mt-2">{platform.businessValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3. CORE MODULES ===================== */}
      <section className={`py-14 lg:py-20 bg-white dark:bg-[#0A1C33] ${secBorder}`}>
        <div className={wrap}>
          <SectionHead
            label="Modular capability matrix"
            title="Core Modules & Capabilities"
            intro="Each module is engineered as an enterprise-grade microservice, providing high availability, rapid transaction throughput, and total API interoperability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {platform.coreModules.map((module, idx) => (
              <div key={idx} className="group relative pt-5">
                <span className="absolute top-0 left-0 right-0 h-px bg-slate-300 dark:bg-slate-700/60" />
                <span className="absolute top-0 left-0 h-[3px] w-12 group-hover:w-full bg-[#F27A24] transition-all duration-500 ease-out" />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold tracking-tight text-[#0F294A] dark:text-white">{module.name}</h3>
                  <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{module.desc}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-slate-500">
                  <span>Standardized Microservice</span>
                  <span className="inline-flex items-center gap-1.5 text-[#0D9488]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 4. STAKEHOLDERS ===================== */}
      <section className={`py-14 lg:py-20 ${secBorder}`}>
        <div className={wrap}>
          <SectionHead
            label="Stakeholder ecosystem"
            title="Designed for Key Stakeholders & Organizations"
            intro="Role-optimized interfaces and granular access permissions designed specifically for field operators, administrative directors, and executive leadership."
          />

          <ul className="border-b border-slate-300 dark:border-slate-700/60">
            {platform.targetUsers.map((persona, idx) => (
              <li
                key={idx}
                className="group relative grid grid-cols-12 items-center gap-x-4 gap-y-2 py-6 border-t border-slate-300 dark:border-slate-700/60"
              >
                <span aria-hidden className="absolute inset-y-0 -inset-x-3 bg-[#F27A24]/[0.06] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <span className="relative col-span-12 sm:col-span-2 text-sm font-bold text-[#F27A24]">
                  Stakeholder Tier 0{idx + 1}
                </span>
                <h4 className="relative col-span-12 sm:col-span-6 text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F294A] dark:text-white leading-snug">
                  {persona}
                </h4>
                <span className="relative col-span-12 sm:col-span-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 sm:justify-end">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  Granular Role-Based Portal & Workflows
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== 5. HOW IT WORKS (a real sequence) ===================== */}
      <section className={`py-14 lg:py-20 bg-white dark:bg-[#0A1C33] ${secBorder}`}>
        <div className={wrap}>
          <SectionHead
            label="Execution lifecycle"
            title={`How ${platform.name} Operates`}
            intro="A frictionless 4-phase deployment and operational journey from onboarding through to continuous analytics."
          />

          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute top-[7px] left-0 right-0 h-px bg-slate-200 dark:bg-slate-700" />
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.6, ease: EASE }}
              className="hidden lg:block absolute top-[6px] left-0 right-0 h-[2px] origin-left bg-[#F27A24]"
            />
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {platform.workflow.map((item, idx) => (
                <li key={idx} className="relative">
                  <span className="relative block w-4 h-4 rounded-full bg-white dark:bg-[#0A1C33] border-[3px] border-[#F27A24]" />
                  <div className="mt-6 flex items-baseline justify-between">
                    <span className="text-sm font-bold text-[#F27A24]">Stage {item.step}</span>
                    <span className="text-5xl font-black tracking-tighter text-slate-200 dark:text-slate-700">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-[#0F294A] dark:text-white mt-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===================== 6. NEP FOUNDATION (dark panel) ===================== */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-[#0F294A] dark:bg-[#0A1C33] dark:border dark:border-white/10 text-white p-6 sm:p-10 lg:p-12">
          <SectionHead
            dark
            marker="bg-orange-400"
            label="Under the hood"
            title="NKTech Enterprise Platform™ Foundation"
            intro={`${platform.name} is powered by the unified NEP core, inheriting enterprise security, high concurrency processing, and sovereign compliance without redundant infrastructure overhead.`}
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {platform.nepIntegration.map((integration, idx) => (
              <li key={idx} className="border-t border-white/25 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-orange-300">NEP Architectural Pillar</span>
                  <span className="text-3xl font-black tracking-tighter text-white/25">0{idx + 1}</span>
                </div>
                <p className="text-base text-white/85 font-medium leading-relaxed mt-3">{integration}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== 7. COMMERCIAL ENGAGEMENT MODELS ===================== */}
      <section className={`pb-14 lg:pb-20 ${secBorder}`}>
        <div className={wrap}>
          <SectionHead
            label="Deployment & licensing"
            title="Commercial Engagement Models"
            intro="Flexible, transparent procurement frameworks engineered for public institutions, growing MSMEs, and large enterprise consortia."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-[#0F294A] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700/60">
            {platform.engagementModels.map((model, idx) => (
              <div
                key={idx}
                className={`relative p-7 sm:p-9 flex flex-col ${idx === 0 ? 'bg-orange-50/60 dark:bg-[#143761]' : ''}`}
              >
                {idx === 0 && <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#F27A24]" />}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#F27A24]">Option 0{idx + 1}</span>
                  {idx === 0 && (
                    <span className="text-xs font-bold text-white bg-[#F27A24] px-2.5 py-1 rounded-full">Recommended Tier</span>
                  )}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-[#0F294A] dark:text-white mt-4">{model}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3 flex-1">
                  Full production license with SLA-backed support, security audits, sovereign data hosting, and dedicated onboarding engineers.
                </p>
                <ul className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/60 space-y-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {['SLA 99.9% Uptime Guarantee', 'Quarterly Security Audits', 'Dedicated Technical Manager'].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 8. RELATED PLATFORMS ===================== */}
      {otherPlatforms.length > 0 && (
        <section className={`py-14 lg:py-16 bg-white dark:bg-[#0A1C33] ${secBorder}`}>
          <div className={wrap}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <Label>Ecosystem discovery</Label>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F294A] dark:text-white mt-3">
                  Explore Related NEP Platforms
                </h3>
              </div>
              <Link
                to="/platforms/"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#0F294A] dark:text-white border-b-2 border-[#F27A24] pb-0.5 hover:text-[#F27A24] dark:hover:text-[#F27A24] transition-colors self-start sm:self-auto"
              >
                <span>View Full Platform Directory (12)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl overflow-hidden">
              {otherPlatforms.map((other) => {
                const os = statusStyle(other.maturityStatus);
                return (
                  <Link
                    key={other.id}
                    to={other.route}
                    className="group bg-white dark:bg-[#0A1C33] hover:bg-slate-50 dark:hover:bg-[#0F294A] p-6 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-500 dark:text-slate-400">Platform #{other.id}</span>
                        <span className={`inline-flex items-center gap-1.5 font-bold ${os.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${os.dot}`} />
                          {other.maturityStatus}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 mt-5">
                        {other.logo && other.logo !== '/assets/favicon.svg' && (
                          <img src={other.logo} alt={other.name} className="h-6 w-auto object-contain rounded" />
                        )}
                        <h4 className="text-lg font-extrabold tracking-tight text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                          {other.name}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mt-2">{other.tagline}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-[#F27A24]">
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================== 9. DEMO ENQUIRY ===================== */}
      <section id="request-demo" className="py-14 lg:py-20">
        <div className={wrap}>
          <div className="relative overflow-hidden rounded-2xl bg-[#F27A24] text-[#0F294A] p-6 sm:p-12 lg:p-14">
            <div aria-hidden className="absolute -right-28 -top-28 w-[24rem] h-[24rem] rounded-full border-[44px] border-[#0F294A]/10 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2.5 text-sm font-bold">
                  <span className="w-2 h-2 bg-[#0F294A]" />
                  Interactive demonstration
                </div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.02]">
                  Request a Dedicated {platform.name} Demo
                </h2>
                <p className="text-base sm:text-lg leading-relaxed font-medium">
                  Schedule a 30-minute operational walkthrough with our enterprise platform architects to evaluate compatibility, APIs, and rollout milestones.
                </p>

                <ul className="pt-2 space-y-4">
                  {[
                    { icon: Cpu, t: 'Architecture & API Review', d: 'Technical assessment of integration points and microservice hooks.' },
                    { icon: ShieldCheck, t: 'Sovereign Cloud & Security', d: 'Zero-trust data isolation and Indian cloud residency verification.' },
                    { icon: Clock, t: 'Phased Rollout Milestones', d: 'Realistic pilot and full production timelines aligned to your team.' }
                  ].map(({ icon: I, t, d }) => (
                    <li key={t} className="flex items-start gap-3.5">
                      <span className="w-9 h-9 rounded-lg bg-[#0F294A] text-white flex items-center justify-center shrink-0">
                        <I className="w-4 h-4" />
                      </span>
                      <div>
                        <span className="font-extrabold block">{t}</span>
                        <span className="text-sm font-medium">{d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {demoSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="bg-white dark:bg-[#0A1C33] text-[#0F294A] dark:text-white rounded-xl p-8 sm:p-10 text-center space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight">Demonstration Request Received</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#0F294A] dark:text-white">{formData.name}</strong>. Our enterprise architects for {platform.name} will reach out to you at <strong className="text-[#0F294A] dark:text-white">{formData.email}</strong> within 1 business day.
                      </p>
                      <button
                        onClick={() => setDemoSubmitted(false)}
                        className="mt-2 px-6 py-2.5 text-sm font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleDemoSubmit}
                      className="space-y-4 bg-white dark:bg-[#0A1C33] text-[#0F294A] dark:text-white p-6 sm:p-8 rounded-xl"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-bold block mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-bold block mb-1.5">Official Work Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="name@organization.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputCls}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-bold block mb-1.5">Organization / Entity Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Municipal Corporation, Enterprise Ltd."
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className={inputCls}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-bold block mb-1.5">Project Scope / Operational Requirements</label>
                        <textarea
                          rows={3}
                          placeholder={`Tell us about your deployment timeline or integrations for ${platform.name}...`}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={inputCls}
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 text-sm font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] hover:bg-[#1E3A5F] dark:hover:bg-[#DE6713] rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2 group"
                        >
                          <span>Confirm & Schedule Demonstration</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                          Direct architectural enquiry routed securely. Sovereign cloud data governance. Privacy guaranteed.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
