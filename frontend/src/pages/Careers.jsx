import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { API_ENDPOINTS } from '../utils/api';
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
  Briefcase,
  GraduationCap,
  Sparkles,
  Cpu,
  Users2,
  MapPin,
  Clock,
  Send,
  Code2,
  Terminal,
  Zap,
  Check
} from 'lucide-react';

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Senior Full Stack Engineer',
    portfolio: '',
    message: ''
  });

  const openRoles = [
    {
      title: "Senior Full Stack Engineer (React / Node / PostgreSQL)",
      team: "NEP Core Architecture Team",
      location: "Noida / Hybrid",
      type: "Full-Time",
      badge: "Architecture",
      badgeColor: "bg-orange-500/10 text-[#F27A24] border-[#F27A24]/30",
      desc: "Architect scalable multi-tenant SaaS backends, optimize high-throughput APIs, and build clean enterprise component systems across our 12 platforms."
    },
    {
      title: "AI & Machine Learning Solutions Engineer",
      team: "Cognitive Automation Lab",
      location: "Noida / Hybrid",
      type: "Full-Time",
      badge: "AI & RAG",
      badgeColor: "bg-teal-500/10 text-[#0D9488] border-[#0D9488]/30",
      desc: "Fine-tune LLMs, build private RAG pipelines, optimize tool-calling agents, and design intelligent document extraction engines."
    },
    {
      title: "Enterprise Solutions Architect (Gov & Smart City)",
      team: "Public Sector & ULB Practice",
      location: "Delhi NCR / Field",
      type: "Full-Time",
      badge: "Public Tech",
      badgeColor: "bg-blue-500/10 text-[#2563EB] border-[#2563EB]/30",
      desc: "Interface with municipal commissioners and government bodies to blueprint GIS, tax, and citizen grievance technology deployments."
    },
    {
      title: "Senior UI/UX Product Designer",
      team: "Product Experience Team",
      location: "Noida / Remote Friendly",
      type: "Full-Time",
      badge: "Design System",
      badgeColor: "bg-purple-500/10 text-[#9333EA] border-[#9333EA]/30",
      desc: "Design accessible, restrained enterprise interfaces and design systems for complex operational workflows and mobile apps."
    },
    {
      title: "Enterprise Technology Sales Director",
      team: "Commercial Growth & Alliances",
      location: "Delhi NCR",
      type: "Full-Time",
      badge: "Commercial",
      badgeColor: "bg-emerald-500/10 text-[#059669] border-[#059669]/30",
      desc: "Lead enterprise B2B sales cycles, manage RFP tenders, and build channel relationships across manufacturing and hospitality."
    }
  ];

  const studentPrograms = [
    {
      title: "Software Engineering Fellowship (6 Months)",
      team: "Engineering Core",
      desc: "Hands-on immersion building real features inside production systems (React, Node, Cloud) with 1-on-1 mentorship from principal architects.",
      skills: ["React 19 & Tailwind", "PostgreSQL & Node.js", "Docker & Cloud Deploy"]
    },
    {
      title: "Applied AI & NLP Research Internship",
      team: "Cognitive Lab",
      desc: "Work on cutting-edge agentic workflows, prompt evaluation frameworks, and multilingual Indian language parsing.",
      skills: ["LangChain & Agentic LLMs", "Vector Embeddings", "Indic Language Models"]
    }
  ];

  const hiringSteps = [
    {
      step: "01",
      title: "Code & Profile Review",
      desc: "We review your GitHub, past projects, or code repositories for technical substance and architecture decisions."
    },
    {
      step: "02",
      title: "Deep Technical Discussion",
      desc: "A practical conversation with an engineering lead discussing systems design, scalability, and engineering trade-offs."
    },
    {
      step: "03",
      title: "Real-World Architecture Task",
      desc: "A realistic, non-leetcode problem mirroring actual platform challenges faced by our engineering teams."
    },
    {
      step: "04",
      title: "Culture & Final Offer",
      desc: "Meet leadership, discuss career aspirations, team alignment, and receive a transparent, competitive offer."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    try {
      await fetch(API_ENDPOINTS.careers, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.warn('Backend call failed:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen selection:bg-[#F27A24]/20 selection:text-[#0F294A] transition-colors duration-200">
      <SEOHead
        title="Careers & Culture | Join Bizwoke Nova — Enterprise Technology"
        description="Explore open engineering, AI, product, and enterprise roles at Bizwoke Nova. Build mission-critical digital infrastructure for a smarter India."
        canonical="/careers/"
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 sm:pt-20 pb-20 sm:pb-24 relative overflow-hidden">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-5"
          >
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 text-[#F27A24] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-pulse" />
              <span>CAREERS AT BIZWOKE NOVA • ENGINEERING & LEADERSHIP</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] dark:text-white tracking-tight leading-[1.08]"
            >
              Build Technology That Impacts <br />
              <span className="text-[#F27A24]">Real Economic Sectors.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200"
            >
              Work on Mission-Critical Systems, Not Discardable Social Widgets.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              At Bizwoke Nova, we engineer enduring digital infrastructure: from religious tourism telemetry (Tirvona) and urban municipal ERPs to MSME commerce discovery (BharatBN) and creator economy platforms. If you are driven by high agency, technical depth, and real-world societal impact, we would love to build with you.
            </motion.p>

            {/* Quick stats pills */}
            <motion.div
              variants={fadeUp}
              className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-bold text-slate-600 dark:text-slate-300"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Cpu className="w-3.5 h-3.5 text-[#F27A24]" /> 100% Engineering Ownership
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#0D9488]" /> Noida HQ • Sector 62 & Hybrid
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Users2 className="w-3.5 h-3.5 text-blue-500" /> Direct Access to Principal Architects
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CULTURE PILLARS ===================== */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              ENGINEERING CULTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              What It Means to Build at Bizwoke Nova
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We operate with high agency, small focused teams, and zero bureaucratic red tape.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Pillar 1 */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/50 hover:shadow-lg transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                High Autonomy & Ownership
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Engineers own entire platforms from schema design and API contracts to production deployment without bureaucratic hand-offs.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#0D9488]/50 hover:shadow-lg transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-[#0D9488] dark:text-teal-400 flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#0D9488] transition-colors">
                Pragmatic Innovation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We adopt generative AI and modern distributed frameworks because they deliver genuine commercial leverage, not for venture hype.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-blue-500/50 hover:shadow-lg transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#2563EB] flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-blue-500 transition-colors">
                Meritocratic Growth
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear technical progression tracks. Recognition and compensation are awarded strictly based on tangible deliverables and architecture quality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== OPEN ROLES ===================== */}
      <section id="open-roles" className="py-16 sm:py-24 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              CURRENT OPENINGS • {openRoles.length} ACTIVE POSITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Open Positions Across Teams
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We are actively hiring experienced engineers, product architects, and growth leaders to expand our digital platforms.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            {openRoles.map((role, idx) => (
              <motion.div
                key={role.title}
                variants={cardVariant}
                whileHover={{ scale: 1.008, x: 4, transition: { duration: 0.2 } }}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 hover:bg-white dark:hover:bg-[#143761] shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${role.badgeColor}`}>
                      {role.team}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {role.location}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#apply-form"
                  onClick={() => setFormData({ ...formData, role: role.title })}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0F294A] group-hover:bg-[#F27A24] dark:bg-[#0A1C33] dark:group-hover:bg-[#F27A24] rounded-xl shrink-0 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== STUDENT & FELLOWSHIP PROGRAMS ===================== */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#0D9488] dark:text-teal-400">
              NEXT-GEN TALENT • PAID FELLOWSHIPS
            </span>
            <h2 className="text-3xl font-black text-[#0F294A] dark:text-white">
              Student & Internship Programs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              For ambitious computer science and design students looking to build production software alongside principal engineers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {studentPrograms.map((prog, idx) => (
              <motion.div
                key={prog.title}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-white dark:bg-[#0F294A] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#0D9488]/50 hover:shadow-md transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#0D9488] dark:text-teal-400 flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {prog.team}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#0D9488] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                    {prog.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {prog.skills.map((s) => (
                    <span key={s} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== HIRING PROCESS ===================== */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
              TRANSPARENT RECRUITMENT • 10-DAY TURNAROUND
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Our 4-Step Hiring Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              No generic HR riddles or leetcode puzzles. We evaluate actual engineering capability.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hiringSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/40 hover:shadow-md transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#F27A24]/40 group-hover:text-[#F27A24] transition-colors block">
                    {s.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#F27A24] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#0F294A] dark:text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== APPLICATION FORM ===================== */}
      <section id="apply-form" className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#081528]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white dark:bg-[#0F294A] text-[#0F294A] dark:text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-lg border border-slate-200/90 dark:border-slate-700/80 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Context & Culture */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                    DIRECT APPLICATION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F294A] dark:text-white leading-tight">
                    Submit Your Application
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Send your resume, GitHub, or portfolio link directly to our engineering leadership team. We review every application personally.
                  </p>
                </div>

                <div className="pt-2 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">High Technical Rigor</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Architect real enterprise infrastructure used by thousands.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Direct Founder Access</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Work side-by-side with principal architects without middle bureaucracy.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Rapid 10-Day Turnaround</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">No ghosting. Guaranteed response within 10 business days.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form with AnimatePresence */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F294A] dark:text-white">Application Received!</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#0F294A] dark:text-white">{formData.name}</strong>. Our hiring team has received your application for <strong className="text-[#0F294A] dark:text-white">{formData.role}</strong> and will reach out to <strong className="text-[#0F294A] dark:text-white">{formData.email}</strong> within 10 business days.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-6 py-2.5 text-xs font-bold text-[#0F294A] dark:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-200 cursor-pointer transition-colors"
                      >
                        Submit Another Profile
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 bg-[#F8FAFC] dark:bg-[#0A1C33] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Verma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Target Role
                          </label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                          >
                            {openRoles.map((r, i) => (
                              <option key={i} value={r.title}>{r.title}</option>
                            ))}
                            <option value="Internship">Student / Graduate Fellowship</option>
                            <option value="General Engineering">General Engineering Interest</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            GitHub / LinkedIn / Portfolio URL
                          </label>
                          <input
                            type="url"
                            placeholder="https://github.com/yourhandle"
                            value={formData.portfolio}
                            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          Tell Us About Your Best Code / Work
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly highlight what you enjoy building, past production systems, and what technologies you master..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24] transition-all"
                        />
                      </div>

                      <div className="pt-2">
                        <motion.button
                          variants={buttonHoverProps}
                          whileHover="whileHover"
                          whileTap="whileTap"
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] active:bg-[#C2550A] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              <span>Submit Job Application</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>
                        <p className="text-[11px] text-slate-500 text-center mt-2.5">
                          All candidate communications are handled confidentially by engineering leadership.
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
