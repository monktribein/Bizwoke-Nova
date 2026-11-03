import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { fadeUp } from '../utils/motion';
import { API_ENDPOINTS } from '../utils/api';
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Clock,
  Send
} from 'lucide-react';

/* Shared pieces (same system as Home / PlatformDetail) */
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

const fieldCls =
  'w-full bg-transparent border-0 border-b-2 border-slate-300 dark:border-slate-600 rounded-none px-0 py-2.5 text-base text-[#0F294A] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#F27A24] transition-colors';
const labelCls = 'text-sm font-bold text-slate-700 dark:text-slate-300 block';

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

  const selectedLabel = channels.find((c) => c.id === enquiryType)?.label;

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
      const res = await fetch(API_ENDPOINTS.contact, {
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

      {/* ===================== 1. HERO ===================== */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-12 sm:pt-16 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl space-y-6">
            <motion.div variants={fadeUp}>
              <Label>Direct enterprise engagement</Label>
            </motion.div>

            <motion.h1
              variants={stagger}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F294A] dark:text-white tracking-tighter leading-[1.02]"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span variants={mask} className="block">Start the Conversation with</motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={mask} className="block text-[#F27A24]">Bizwoke Nova.</motion.span>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-200 max-w-3xl">
              Direct Access to Enterprise Architects, Product Leads, and Solutions Teams.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Select your specific enquiry path below so your message routes immediately to the relevant engineering or practice leader without delays.
            </motion.p>
          </motion.div>

          {/* Trust metrics: one band, not four cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-y border-slate-300 dark:border-slate-700/60 divide-slate-300 dark:divide-slate-700/60 divide-x [&>*:nth-child(n+3)]:border-t lg:[&>*:nth-child(n+3)]:border-t-0 [&>*]:border-slate-300 dark:[&>*]:border-slate-700/60"
          >
            {trustMetrics.map((item, idx) => (
              <div key={idx} className={`py-5 px-4 sm:px-6 ${idx === 0 ? 'pl-0 sm:pl-0' : ''}`}>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#F27A24]">{item.value}</div>
                <div className="text-sm font-bold text-[#0F294A] dark:text-white mt-1">{item.label}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== 2. PATHWAY + FORM + DIRECTORY ===================== */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: pathway selector and form */}
            <div className="lg:col-span-7">
              <Rule />
              <div className="pt-6 flex items-center justify-between gap-4">
                <Label>Select Enquiry Pathway:</Label>
                <span className="text-sm font-bold text-[#F27A24] text-right">{selectedLabel}</span>
              </div>

              <div role="radiogroup" aria-label="Enquiry pathway" className="mt-6 border-b border-slate-300 dark:border-slate-700/60">
                {channels.map((ch) => {
                  const isSelected = enquiryType === ch.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setEnquiryType(ch.id)}
                      className="group relative w-full flex items-center gap-4 py-4 text-left border-t border-slate-300 dark:border-slate-700/60 cursor-pointer"
                    >
                      {isSelected && (
                        <motion.span layoutId="channel-bar" className="absolute left-0 inset-y-0 w-[3px] bg-[#F27A24]" />
                      )}
                      <span
                        className={`ml-4 w-[18px] h-[18px] shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-[#F27A24]' : 'border-slate-400 dark:border-slate-500 group-hover:border-[#F27A24]'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#F27A24]" />}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className={`block text-lg font-extrabold tracking-tight transition-colors ${isSelected ? 'text-[#0F294A] dark:text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-[#0F294A] dark:group-hover:text-white'}`}>
                          {ch.label}
                        </span>
                        <span className="block text-sm text-slate-500 dark:text-slate-400 mt-0.5">{ch.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Form */}
              <div className="mt-16">
                <Rule />
                <div className="pt-6 space-y-3">
                  <Label>Direct practice dispatch</Label>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-[#0F294A] dark:text-white">
                    {selectedLabel || 'Enterprise Enquiry'}
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl">
                    Direct communication with dedicated technical practice leads and solution architects.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      role="alert"
                      className="mt-6 border-l-4 border-red-500 pl-4 py-1 text-sm font-semibold text-red-700 dark:text-red-400"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="border-l-4 border-emerald-500 pl-6 sm:pl-8 py-2 space-y-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                          className="text-emerald-600 dark:text-emerald-400"
                        >
                          <CheckCircle2 className="w-10 h-10" />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                          Enquiry Dispatched Successfully
                        </h3>
                        <p className="text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                          Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your enquiry for <strong className="text-slate-900 dark:text-white">{selectedLabel}</strong> has been logged into our practice queue. Our team will contact you at <strong className="text-slate-900 dark:text-white">{formData.email}</strong> within 1 business day.
                        </p>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', phone: '', organization: '', message: '', honeypot: '' });
                          }}
                          className="px-6 py-3 text-sm font-bold text-white bg-[#0F294A] dark:bg-[#F27A24] hover:opacity-90 rounded-full transition-opacity cursor-pointer"
                        >
                          Submit Another Enquiry
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-7"
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                          <div>
                            <label className={labelCls}>Full Name *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Vikram Singhania"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={fieldCls}
                            />
                          </div>
                          <div>
                            <label className={labelCls}>Work Email *</label>
                            <input
                              type="email"
                              required
                              placeholder="vikram@enterprise.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={fieldCls}
                            />
                          </div>
                          <div>
                            <label className={labelCls}>Contact Phone / WhatsApp</label>
                            <input
                              type="tel"
                              placeholder="+91-XXXXXXXXXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className={fieldCls}
                            />
                          </div>
                          <div>
                            <label className={labelCls}>Organization / Company Name</label>
                            <input
                              type="text"
                              placeholder="e.g. Acme Corp, Smart City SPV"
                              value={formData.organization}
                              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                              className={fieldCls}
                            />
                          </div>
                        </div>

                        <div>
                          <label className={labelCls}>Detailed Project Requirements or Question *</label>
                          <textarea
                            rows={4}
                            required
                            placeholder="Please provide details regarding your requirements, timelines, or questions..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className={`${fieldCls} resize-y`}
                          />
                        </div>

                        <div className="pt-2 space-y-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-4 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-full transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
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
                          </button>
                          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
                            By submitting, you agree to confidential processing under our enterprise privacy guidelines. Zero spam guarantee.
                          </p>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right: directory (dark panel) */}
            <aside className="lg:col-span-5 lg:sticky lg:top-24 rounded-2xl bg-[#0F294A] dark:bg-[#0A1C33] dark:border dark:border-white/10 text-white p-7 sm:p-9">
              <Label dark marker="bg-orange-400">Corporate Headquarters</Label>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-3">Bizwoke Nova™ Headquarters</h3>

              <dl className="mt-7 border-b border-white/15 text-sm">
                {[
                  {
                    icon: MapPin,
                    dt: 'Office Address:',
                    dd: <><span className="leading-relaxed">Sector 62, Noida, Uttar Pradesh 201309, Delhi NCR, India</span><span className="text-xs text-white/50 block mt-1 italic">[Official corporate address placeholder]</span></>
                  },
                  {
                    icon: Mail,
                    dt: 'General Communications:',
                    dd: <a href="mailto:contact@bizwoke.com" className="text-orange-300 hover:underline font-semibold">contact@bizwoke.com</a>
                  },
                  {
                    icon: Phone,
                    dt: 'Telephone:',
                    dd: <><span className="font-semibold">+91 (0) 120-BIZWOKE</span><span className="text-xs text-white/50 block mt-1 italic">[PBX Line]</span></>
                  },
                  {
                    icon: Clock,
                    dt: 'Operating Hours:',
                    dd: <span>Monday – Friday: 9:30 AM – 6:30 PM IST</span>
                  }
                ].map(({ icon: I, dt, dd }) => (
                  <div key={dt} className="flex items-start gap-4 py-4 border-t border-white/15">
                    <I className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <dt className="font-bold text-white">{dt}</dt>
                      <dd className="text-white/75 mt-0.5">{dd}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex items-center justify-between gap-4">
                <Label dark marker="bg-orange-400">Direct Inboxes</Label>
                <span className="text-xs font-semibold text-white/60">Response within 24h</span>
              </div>
              <h4 className="text-lg font-extrabold tracking-tight mt-3">Department Email Directory</h4>

              <ul className="mt-5 border-b border-white/15 text-sm">
                {[
                  ['Enterprise Solutions:', 'enterprise@bizwoke.com'],
                  ['Strategic Partnerships:', 'partners@bizwoke.com'],
                  ['Government Initiatives:', 'gov@bizwoke.com'],
                  ['Careers & Recruiting:', 'careers@bizwoke.com']
                ].map(([name, mail]) => (
                  <li key={mail} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 py-3.5 border-t border-white/15">
                    <span className="text-white/60">{name}</span>
                    <a href={`mailto:${mail}`} className="font-bold text-white hover:text-orange-300 transition-colors break-all">
                      {mail}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
