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
  viewportConfig
} from '../utils/motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Handshake,
  Building2,
  Users2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Globe2,
  TrendingUp,
  Send
} from 'lucide-react';

export default function Partners() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', partnerType: 'Channel', message: '' });

  const partnerTracks = [
    {
      title: "Channel & Distribution Partners",
      desc: "Regional software distributors, enterprise sales consultants, and IT resellers seeking to distribute Bizwoke Nova platforms (BizORM, BharatBN, Enterprise ERP) to local businesses.",
      benefits: ["Attractive recurring revenue share", "Dedicated sales enablement and pitch collateral", "Priority customer onboarding support"]
    },
    {
      title: "Implementation & System Integrators",
      desc: "IT service firms and technology consultancies who implement, configure, and customize our enterprise ERP and AI solutions for large corporate clients.",
      benefits: ["Certified NEP Architect training", "Access to sandboxed API environments", "Lead referrals in designated regional territories"]
    },
    {
      title: "Government & Institutional Collaborators",
      desc: "Smart City SPVs, state directorates, trade associations, and municipal contractors collaborating on large-scale civic and digital governance projects.",
      benefits: ["Sovereign cloud data hosting compliance", "Tender preparation and technical RFP support", "Dedicated on-ground technical liaison"]
    },
    {
      title: "Technology & Cloud ISV Partners",
      desc: "Cloud providers, payment gateways, biometric hardware manufacturers, and telecom networks seeking native interoperability with our platform portfolio.",
      benefits: ["Native API pre-integration in NEP", "Joint marketing and enterprise case studies", "Co-innovated edge hardware solutions"]
    }
  ];

  const partnerStats = [
    { label: "Collaboration Pathways", value: "04", detail: "Structured Tracks" },
    { label: "Proprietary Platforms", value: "12", detail: "Mission FTC™ Portfolio" },
    { label: "Enterprise Alliances", value: "Tier-1", detail: "SI & Reseller Programs" },
    { label: "Market Reach", value: "Pan-India", detail: "& Global Expansion" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      await fetch(API_ENDPOINTS.partner, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.warn('Backend call failed:', err);
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 transition-colors duration-200 overflow-x-hidden">
      <SEOHead
        title="Strategic Partnerships | Channel & Implementation Programs — Bizwoke Nova"
        description="Partner with Bizwoke Nova across channel distribution, system integration, institutional initiatives, and technology collaborations."
      />

      {/* =========================================================================
          SECTION 1: HERO (NORMAL, CLEAN CORPORATE LAYOUT WITH TELEMETRY)
      ========================================================================= */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-10 sm:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Clean enterprise background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 dark:from-[#071322] dark:via-[#0A1C33] dark:to-[#08172b] pointer-events-none" />

        {/* Ambient floating glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-24 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-5"
          >
            

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] dark:text-white tracking-tight leading-[1.15]"
            >
              Scale Your Reach with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27A24] via-orange-500 to-amber-500">
                Bizwoke Nova Ecosystem.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200"
            >
              Channel, Implementation, Institutional, and Technology Collaborations.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
            >
              We welcome partnerships with enterprise systems integrators, regional software distributors, industry associations, and technology innovators. Together, we deliver high-impact digital infrastructure to businesses and public institutions across India and global markets.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#partner-form"
                  className="px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all inline-flex items-center gap-2 group"
                >
                  <span>Apply for Partnership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#tracks"
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-slate-700 rounded-xl transition-all inline-block"
                >
                  Explore 4 Tracks
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Staggered Telemetry Row */}
          <motion.div
            variants={staggerContainer(0.08, 0.25)}
            initial="hidden"
            animate="visible"
            className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {partnerStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0F294A]/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#F27A24] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 4 PARTNERSHIP TRACKS
      ========================================================================= */}
      <section id="tracks" className="py-14 sm:py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto space-y-2"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">
              COLLABORATION PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Four Structured Partnership Tracks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Clear participation tiers designed for distributors, system integrators, public bodies, and cloud innovators.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {partnerTracks.map((track, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
                className="bg-white dark:bg-[#0F294A] rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 shadow-xs space-y-5 flex flex-col justify-between hover:border-[#F27A24]/40 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-3 py-1 rounded-full border border-[#F27A24]/30">
                      Track 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Handshake className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {track.desc}
                  </p>

                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Partner Advantages
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      {track.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0D9488] dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href="#partner-form"
                    onClick={() => setFormData({ ...formData, partnerType: track.title.split(' ')[0] })}
                    className="text-xs font-bold text-[#F27A24] hover:text-[#DE6713] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Apply for {track.title.split('&')[0]} Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PARTNER APPLICATION FORM
      ========================================================================= */}
      <section id="partner-form" className="py-16 sm:py-20 bg-white dark:bg-[#0A1C33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-[#F8FAFC] dark:bg-[#0F294A] text-[#0F294A] dark:text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 dark:border-slate-700/60 shadow-xs relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context & Partner Commitments */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                    Partner Application
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F294A] dark:text-white leading-tight">
                    Explore Strategic Partnership Opportunities
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Submit your organizational profile to begin exploratory discussions with our Strategic Alliances team.
                  </p>
                </div>

                <div className="pt-2 space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 mt-0.5">
                      <Handshake className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Direct Executive Dialogue</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Direct access to product architects and founders. No intermediaries.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Sovereign Trust & NDA</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Mutual non-disclosure and strict enterprise governance protocols.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#0F294A] dark:text-white">Dedicated Enablement</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs">Comprehensive pitch kits, developer sandbox APIs, and co-sell support.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-3xl p-8 sm:p-10 text-center space-y-4"
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-[#0F294A] dark:text-white">
                        Application Received
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#0F294A] dark:text-white">{formData.name}</strong> from <strong className="text-[#0F294A] dark:text-white">{formData.company}</strong>. Our partnership lead will review your submission and contact you within 2 business days.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] hover:bg-[#143761] dark:hover:bg-[#DE6713] rounded-xl transition-colors cursor-pointer"
                      >
                        Submit Another Application
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 bg-white dark:bg-[#0A1C33] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Lead Contact Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Amit Kapoor"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Official Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Company / Organization Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Apex Solutions Pvt Ltd"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Interested Partner Track
                          </label>
                          <select
                            value={formData.partnerType}
                            onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] transition-all cursor-pointer"
                          >
                            <option value="Channel">Channel & Distribution Partner</option>
                            <option value="Implementation">Implementation & System Integrator</option>
                            <option value="Institutional">Government & Institutional Collaborator</option>
                            <option value="Technology">Technology & Cloud ISV Partner</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          Partnership Objectives & Capabilities
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your current reach, client base, or integration goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] transition-all"
                        />
                      </div>

                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>Submit Partnership Application</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <p className="text-[11px] text-slate-500 text-center mt-2.5">
                          Direct communication with leadership. No intermediaries.
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
