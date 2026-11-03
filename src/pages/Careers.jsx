import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
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
  Send
} from 'lucide-react';

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Senior Full Stack Engineer', portfolio: '', message: '' });

  const openRoles = [
    {
      title: "Senior Full Stack Engineer (React / Node / PostgreSQL)",
      team: "NEP Core Architecture Team",
      location: "Noida / Hybrid",
      type: "Full-Time",
      desc: "Architect scalable multi-tenant SaaS backends, optimize high-throughput APIs, and build clean enterprise component systems."
    },
    {
      title: "AI & Machine Learning Solutions Engineer",
      team: "Cognitive Automation Lab",
      location: "Noida / Hybrid",
      type: "Full-Time",
      desc: "Fine-tune LLMs, build private RAG pipelines, optimize tool-calling agents, and design intelligent document extraction engines."
    },
    {
      title: "Enterprise Solutions Architect (Gov & Smart City)",
      team: "Public Sector & ULB Practice",
      location: "Delhi NCR / Field",
      type: "Full-Time",
      desc: "Interface with municipal commissioners and government bodies to blueprint GIS, tax, and citizen grievance technology deployments."
    },
    {
      title: "Senior UI/UX Product Designer",
      team: "Product Experience Team",
      location: "Noida / Remote Friendly",
      type: "Full-Time",
      desc: "Design accessible, restrained enterprise interfaces and design systems for complex operational workflows and mobile apps."
    },
    {
      title: "Enterprise Technology Sales Director",
      team: "Commercial Growth & Alliances",
      location: "Delhi NCR",
      type: "Full-Time",
      desc: "Lead enterprise B2B sales cycles, manage RFP tenders, and build channel relationships across manufacturing and hospitality."
    }
  ];

  const studentPrograms = [
    {
      title: "Software Engineering Fellowship (6 Months)",
      desc: "Hands-on immersion building real features inside production systems (React, Node, Cloud) with 1-on-1 mentorship from principal architects."
    },
    {
      title: "Applied AI & NLP Research Internship",
      desc: "Work on cutting-edge agentic workflows, prompt evaluation frameworks, and multilingual Indian language parsing."
    }
  ];

  const hiringSteps = [
    { step: "01", title: "Code & Profile Review", desc: "We review your GitHub, past projects, or code repositories for technical substance." },
    { step: "02", title: "Deep Technical Discussion", desc: "A practical conversation with an engineering lead discussing systems design and trade-offs." },
    { step: "03", title: "Real-World Architecture Task", desc: "A realistic, non-leetcode problem mirroring actual platform challenges." },
    { step: "04", title: "Culture & Final Offer", desc: "Meet leadership, discuss career aspirations, and receive a competitive offer." }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      await fetch('/api/careers', {
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
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200">
      <SEOHead
        title="Careers & Culture | Join Bizwoke Nova — Enterprise Technology"
        description="Explore open engineering, AI, product, and enterprise roles at Bizwoke Nova. Build mission-critical digital infrastructure for a smarter India."
      />

      {/* Hero */}
      <section className="bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-16 pb-20 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight leading-tight">
              Build Technology That Impacts <br />
              <span className="text-[#F27A24]">Real Economic Sectors.</span>
            </h1>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-200">
              Work on Mission-Critical Systems, Not Discardable Social Widgets.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              At Bizwoke Nova, we build enduring digital infrastructure: from pilgrim management ecosystems and urban municipal governance to AI industrial automation and commercial driver networks. If you are driven by high agency, technical depth, and real-world impact, we would love to build with you.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Engineering Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              What It Means to Build at Bizwoke Nova
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0F294A] p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3 hover:border-[#F27A24]/40 transition-colors">
              <Cpu className="w-8 h-8 text-[#F27A24]" />
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white">High Autonomy & Ownership</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Engineers own entire platforms from schema design to production deployment without bureaucratic hand-offs.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0F294A] p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3 hover:border-[#0D9488]/40 transition-colors">
              <Sparkles className="w-8 h-8 text-[#0D9488] dark:text-teal-400" />
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white">Pragmatic Innovation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We adopt generative AI and cutting-edge tools because they deliver genuine commercial leverage, not for hype.
              </p>
            </div>
            <div className="bg-white dark:bg-[#0F294A] p-8 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3 hover:border-blue-400 transition-colors">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-bold text-[#0F294A] dark:text-white">Meritocratic Growth</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear technical progression tracks. Recognition is awarded strictly based on tangible deliverables and team leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Open Positions Across Teams
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We are actively hiring experienced engineers, product architects, and growth leaders to expand our portfolio.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/40 hover:bg-white dark:hover:bg-[#143761] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#F27A24] bg-orange-500/10 dark:bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-[#F27A24]/30">
                      {role.team}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {role.location}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <a
                  href="#apply-form"
                  onClick={() => setFormData({ ...formData, role: role.title })}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#0F294A] group-hover:bg-[#F27A24] dark:bg-[#0A1C33] dark:group-hover:bg-[#F27A24] rounded-xl shrink-0 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student & Internship Programs */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] dark:text-teal-400">
              Next-Gen Talent
            </span>
            <h2 className="text-3xl font-black text-[#0F294A] dark:text-white">
              Student & Internship Programs
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              For ambitious computer science and design students looking to build production software, not fetch coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentPrograms.map((prog, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F294A] p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-sm space-y-3 hover:border-[#F27A24]/40 transition-colors">
                <GraduationCap className="w-8 h-8 text-[#0D9488] dark:text-teal-400" />
                <h3 className="text-xl font-bold text-[#0F294A] dark:text-white">{prog.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27A24]">
              Transparent Recruitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Our 4-Step Hiring Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((s, idx) => (
              <div key={idx} className="bg-[#F8FAFC] dark:bg-[#0F294A] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 space-y-3">
                <span className="text-3xl font-black text-[#F27A24]/40 block">{s.step}</span>
                <h3 className="text-base font-bold text-[#0F294A] dark:text-white">{s.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-[#F8FAFC] dark:bg-[#081528]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#0F294A] text-[#0F294A] dark:text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-lg border border-slate-200/90 dark:border-slate-700/80 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context & Culture */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F27A24]">
                    Quick Application
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F294A] dark:text-white leading-tight">
                    Submit Your Application
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Send your resume, GitHub, or portfolio link directly to our engineering leadership team.
                  </p>
                </div>

                <div className="pt-2 space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
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
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-[#0F294A] dark:text-white">Application Received</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-[#0F294A] dark:text-white">{formData.name}</strong>. Our hiring team will review your application for <strong className="text-[#0F294A] dark:text-white">{formData.role}</strong> and reach out to <strong className="text-[#0F294A] dark:text-white">{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2 text-xs font-bold text-[#0F294A] dark:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-200 cursor-pointer"
                    >
                      Submit Another Profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 bg-[#F8FAFC] dark:bg-[#0A1C33] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Verma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Target Role
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                        >
                          {openRoles.map((r, i) => (
                            <option key={i} value={r.title}>{r.title}</option>
                          ))}
                          <option value="Internship">Student / Graduate Internship</option>
                          <option value="General Engineering">General Engineering Interest</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          GitHub / LinkedIn / Portfolio URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://github.com/yourhandle"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Tell Us About Your Best Code / Work
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly highlight what you enjoy building and what technologies you master..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white dark:bg-[#0F294A] border border-slate-300 dark:border-slate-700 rounded-xl text-[#0F294A] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F27A24]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg transition-all cursor-pointer"
                      >
                        Submit Job Application
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2">
                        All candidate communications are handled confidentially.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}