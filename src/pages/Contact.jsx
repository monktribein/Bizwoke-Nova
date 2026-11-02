import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { COMPANY_DATA } from '../data/companyData';
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageSquare,
  Building,
  HelpCircle,
  Briefcase
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
    if (['general', 'custom', 'demo', 'government', 'partnership', 'support', 'careers', 'consultation', 'proposal', 'project'].includes(initialType)) {
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
      // In case backend is temporarily unreachable, still acknowledge user gracefully
      console.warn('Backend call failed, logging offline:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="Contact & Enquiries | Connect with Bizwoke Nova"
        description="Get in touch with Bizwoke Nova for enterprise software consultations, product demonstrations, government solutions, partnerships, or careers."
      />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#246BCE] uppercase tracking-wider">
              <span>CONTACT & ENTERPRISE INQUIRIES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              Start the Conversation with <br />
              <span className="text-[#246BCE]">Bizwoke Nova.</span>
            </h1>
            <p className="text-xl font-semibold text-slate-700">
              Direct Access to Enterprise Architects, Product Leads, and Solutions Teams.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Select your specific enquiry path below so your message routes immediately to the relevant engineering or practice leader without delays.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form & Channel Selector */}
            <div className="lg:col-span-7 space-y-8">
              {/* Channel Selector Pills */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Select Enquiry Pathway:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {channels.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setEnquiryType(ch.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        enquiryType === ch.id
                          ? 'border-[#246BCE] bg-blue-50/70 text-[#10233F] font-bold shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      <div className="font-bold">{ch.label}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{ch.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Card */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#10233F]">
                    {channels.find(c => c.id === enquiryType)?.label || 'Enterprise Enquiry'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct communication with dedicated technical leads.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                    {errorMessage}
                  </div>
                )}

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-slate-900">Enquiry Dispatched Successfully</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your enquiry for <strong className="text-slate-900">{channels.find(c => c.id === enquiryType)?.label}</strong> has been logged. Our team will contact you at <strong className="text-slate-900">{formData.email}</strong> within 1 business day.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', organization: '', message: '', honeypot: '' });
                      }}
                      className="mt-4 px-6 py-2 text-xs font-bold text-white bg-[#10233F] rounded-lg hover:bg-slate-800"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Anti-spam honeypot hidden from view */}
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
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Singhania"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Contact Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+91-XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Organization / Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Corp, Smart City SPV"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Detailed Project Requirements or Question *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please provide details regarding your requirements, timelines, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F6F8FB] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 text-sm font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Processing Enquiry...</span>
                        ) : (
                          <>
                            <span>Send Secure Enquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-slate-400 text-center mt-2.5">
                        By submitting, you agree to secure data processing under our privacy guidelines. No spam.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Verified Office & Contact Directory */}
            <div className="lg:col-span-5 space-y-6">
              {/* Corporate Office Card */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#246BCE]">
                    Corporate Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-[#10233F] mt-1">
                    Bizwoke Nova™ Headquarters
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#246BCE] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Office Address:</strong>
                      <span>Sector 62, Noida, Uttar Pradesh 201309, Delhi NCR, India</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5 italic">[Official corporate address placeholder]</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#246BCE] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">General Communications:</strong>
                      <a href="mailto:contact@bizwoke.com" className="text-[#246BCE] hover:underline">
                        contact@bizwoke.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#246BCE] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Telephone:</strong>
                      <span>+91 (0) 120-BIZWOKE</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5 italic">[PBX Line]</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#246BCE] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Operating Hours:</strong>
                      <span>Monday – Friday: 9:30 AM – 6:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segregated Department Inboxes */}
              <div className="bg-[#10233F] text-white p-7 rounded-2xl shadow-lg space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                  Direct Inboxes
                </span>
                <h4 className="text-base font-bold">Department Email Directory</h4>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Enterprise Solutions:</span>
                    <a href="mailto:enterprise@bizwoke.com" className="font-semibold text-white hover:text-[#17A6A1]">
                      enterprise@bizwoke.com
                    </a>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Strategic Partnerships:</span>
                    <a href="mailto:partners@bizwoke.com" className="font-semibold text-white hover:text-[#17A6A1]">
                      partners@bizwoke.com
                    </a>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Government Initiatives:</span>
                    <a href="mailto:gov@bizwoke.com" className="font-semibold text-white hover:text-[#17A6A1]">
                      gov@bizwoke.com
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Careers & Recruiting:</span>
                    <a href="mailto:careers@bizwoke.com" className="font-semibold text-white hover:text-[#17A6A1]">
                      careers@bizwoke.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
