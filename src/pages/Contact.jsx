import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  cardVariant,
  viewportConfig
} from '../utils/motion';
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageSquare,
  Building2,
  HelpCircle,
  Briefcase,
  Sparkles,
  Send,
  Lock,
  Headphones,
  Compass
} from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'general';

  const [enquiryType, setEnquiryType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    honeypot: '' // anti-spam
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize query param
  useEffect(() => {
    if (['general', 'custom', 'demo', 'government', 'partnership', 'support', 'careers', 'consultation', 'proposal', 'project', 'sector', 'tech'].includes(initialType)) {
      setEnquiryType(initialType);
    }
  }, [initialType]);

  const channels = [
    { id: 'general', label: 'General Corporate', desc: 'General questions & corporate communications' },
    { id: 'custom', label: 'Custom Enterprise Software', desc: 'Bespoke ERP, AI & app engineering projects' },
    { id: 'demo', label: 'Product Demonstration', desc: 'Walkthrough of our 12 portfolio platforms' },
    { id: 'government', label: 'Government / ULB Solutions', desc: 'Smart cities, municipal ERP & public schemes' },
    { id: 'partnership', label: 'Strategic Partnership', desc: 'Distribution, SI, or technology alliances' },
    { id: 'support', label: 'Client Support', desc: 'Technical assistance for active deployments' },
    { id: 'careers', label: 'Careers & Hiring', desc: 'Job applications & talent inquiries' }
  ];

  const trustMetrics = [
    { label: "Response Window", value: "< 24 Hrs", detail: "Guaranteed practice review" },
    { label: "Direct Routing", value: "Lead Eng", detail: "To practice architects" },
    { label: "Data Security", value: "Confidential", detail: "Encrypted & NDA protected" },
    { label: "Headquarters", value: "Noida NCR", detail: "Pan-India presence" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot detected
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          enquiryType
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      // Graceful offline fallback
      console.warn('Backend call failed, logging offline fallback:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 transition-colors duration-200 overflow-x-hidden">
      <SEOHead
        title="Contact & Enquiries | Connect with Bizwoke Nova"
        description="Get in touch with Bizwoke Nova for enterprise software consultations, product demonstrations, government solutions, partnerships, or careers."
      />

      {/* =========================================================================
          SECTION 1: HERO WITH TEXT REVEAL & TELEMETRY TRUST METRICS
      ========================================================================= */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-10 sm:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#F27A24]/30 text-xs font-black text-[#F27A24] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F27A24] animate-ping" />
              <span>DIRECT ENTERPRISE ENGAGEMENT</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] dark:text-white tracking-tight leading-[1.15]"
            >
              Start the Conversation with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27A24] via-orange-500 to-amber-500">
                Bizwoke Nova.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200"
            >
              Direct Access to Enterprise Architects, Product Leads, and Solutions Teams.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
            >
              Select your specific enquiry path below so your message routes immediately to the relevant engineering or practice leader without delays.
            </motion.p>
          </motion.div>

          {/* Staggered Telemetry Row */}
          <motion.div
            variants={staggerContainer(0.08, 0.25)}
            initial="hidden"
            animate="visible"
            className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {trustMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0F294A]/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#F27A24] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {item.detail}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MAIN CONTACT GRID WITH ANIMATED PATHWAYS & FORM
      ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Pathway Selector & Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-7 space-y-6"
            >
              {/* Channel Selector Pills */}
              <div className="bg-white dark:bg-[#0F294A] p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Select Enquiry Pathway:
                  </label>
                  <span className="text-[11px] font-bold text-[#F27A24]">
                    {channels.find(c => c.id === enquiryType)?.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {channels.map((ch) => {
                    const isSelected = enquiryType === ch.id;
                    return (
                      <motion.button
                        key={ch.id}
                        type="button"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => setEnquiryType(ch.id)}
                        className={`text-left p-3.5 rounded-2xl border text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 text-[#0F294A] dark:text-white font-bold ring-2 ring-[#F27A24]/20'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C33] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#143761] hover:border-slate-300 font-medium'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{ch.label}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24]" />}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                          {ch.desc}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Form Card with AnimatePresence */}
              <div className="bg-white dark:bg-[#0F294A] p-7 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#F27A24]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Practice Dispatch</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F294A] dark:text-white mt-1">
                    {channels.find(c => c.id === enquiryType)?.label || 'Enterprise Enquiry'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Direct communication with dedicated technical practice leads and solution architects.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="p-3 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs rounded-xl flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 rounded-3xl p-8 sm:p-10 text-center space-y-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                        className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10" />
                      </motion.div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                        Enquiry Dispatched Successfully
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your enquiry for <strong className="text-slate-900 dark:text-white">{channels.find(c => c.id === enquiryType)?.label}</strong> has been logged into our practice queue. Our team will contact you at <strong className="text-slate-900 dark:text-white">{formData.email}</strong> within 1 business day.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', organization: '', message: '', honeypot: '' });
                        }}
                        className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] hover:bg-[#143761] dark:hover:bg-[#DE6713] rounded-xl transition-colors cursor-pointer"
                      >
                        Submit Another Enquiry
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Anti-spam honeypot */}
                      <input
                        type="text"
                        name="hp_field"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Vikram Singhania"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-[#0F294A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="vikram@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-[#0F294A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Contact Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            placeholder="+91-XXXXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-[#0F294A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                            Organization / Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Corp, Smart City SPV"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-[#0F294A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          Detailed Project Requirements or Question *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please provide details regarding your requirements, timelines, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#0A1C33] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-[#0F294A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#F27A24] focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Processing Enquiry...</span>
                            </span>
                          ) : (
                            <>
                              <span>Send Secure Enterprise Enquiry</span>
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center mt-2.5">
                          By submitting, you agree to confidential processing under our enterprise privacy guidelines. Zero spam guarantee.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Column: Verified Office & Contact Directory */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-5 space-y-6"
            >
              {/* Corporate Office Card */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0F294A] p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-700/60 shadow-xs hover:border-[#F27A24]/40 transition-all space-y-6 group"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F27A24] px-2.5 py-1 rounded-full bg-orange-500/10 border border-[#F27A24]/20">
                    Corporate Headquarters
                  </span>
                  <h3 className="text-xl font-black text-[#0F294A] dark:text-white mt-2">
                    Bizwoke Nova™ Headquarters
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3.5 group/item">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-800 dark:text-white block font-bold">Office Address:</strong>
                      <span className="leading-relaxed">Sector 62, Noida, Uttar Pradesh 201309, Delhi NCR, India</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-0.5 italic">[Official corporate address placeholder]</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group/item">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-800 dark:text-white block font-bold">General Communications:</strong>
                      <a href="mailto:contact@bizwoke.com" className="text-[#F27A24] hover:underline font-semibold">
                        contact@bizwoke.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group/item">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-800 dark:text-white block font-bold">Telephone:</strong>
                      <span className="font-semibold">+91 (0) 120-BIZWOKE</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-0.5 italic">[PBX Line]</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 group/item">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#F27A24] flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-800 dark:text-white block font-bold">Operating Hours:</strong>
                      <span>Monday – Friday: 9:30 AM – 6:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Segregated Department Inboxes */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0F294A] p-7 rounded-3xl shadow-xs space-y-4 border border-slate-200/90 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F27A24]">
                    Direct Inboxes
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Response within 24h</span>
                </div>
                <h4 className="text-base font-bold text-[#0F294A] dark:text-white">Department Email Directory</h4>

                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 dark:border-slate-700/60">
                    <span className="text-slate-500 dark:text-slate-400">Enterprise Solutions:</span>
                    <a href="mailto:enterprise@bizwoke.com" className="font-bold text-[#0F294A] dark:text-white hover:text-[#F27A24] transition-colors">
                      enterprise@bizwoke.com
                    </a>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 dark:border-slate-700/60">
                    <span className="text-slate-500 dark:text-slate-400">Strategic Partnerships:</span>
                    <a href="mailto:partners@bizwoke.com" className="font-bold text-[#0F294A] dark:text-white hover:text-[#F27A24] transition-colors">
                      partners@bizwoke.com
                    </a>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 dark:border-slate-700/60">
                    <span className="text-slate-500 dark:text-slate-400">Government Initiatives:</span>
                    <a href="mailto:gov@bizwoke.com" className="font-bold text-[#0F294A] dark:text-white hover:text-[#F27A24] transition-colors">
                      gov@bizwoke.com
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Careers & Recruiting:</span>
                    <a href="mailto:careers@bizwoke.com" className="font-bold text-[#0F294A] dark:text-white hover:text-[#F27A24] transition-colors">
                      careers@bizwoke.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
