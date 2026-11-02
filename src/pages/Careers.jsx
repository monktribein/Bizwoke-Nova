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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="Careers & Culture | Join Bizwoke Nova — Enterprise Technology"
        description="Explore open engineering, AI, product, and enterprise roles at Bizwoke Nova. Build mission-critical digital infrastructure for a smarter India."
      />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#246BCE] uppercase tracking-wider">
              <span>CAREERS AT BIZWOKE NOVA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              Build Technology That Impacts <br />
              <span className="text-[#246BCE]">Real Economic Sectors.</span>
            </h1>
            <p className="text-xl font-semibold text-slate-700">
              Work on Mission-Critical Systems, Not Discardable Social Widgets.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Bizwoke Nova, we build enduring digital infrastructure: from pilgrim management ecosystems and urban municipal governance to AI industrial automation and commercial driver networks. If you are driven by high agency, technical depth, and real-world impact, we would love to build with you.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Engineering Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              What It Means to Build at Bizwoke Nova
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <Cpu className="w-8 h-8 text-[#246BCE]" />
              <h3 className="text-xl font-bold text-[#10233F]">High Autonomy & Ownership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineers own entire platforms from schema design to production deployment without bureaucratic hand-offs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-[#17A6A1]" />
              <h3 className="text-xl font-bold text-[#10233F]">Pragmatic Innovation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We adopt generative AI and cutting-edge tools because they deliver genuine commercial leverage, not for hype.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-[#10233F]">Meritocratic Growth</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear technical progression tracks. Recognition is awarded strictly based on tangible deliverables and team leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Open Positions Across Teams
            </h2>
            <p className="text-base text-slate-600">
              We are actively hiring experienced engineers, product architects, and growth leaders to expand our portfolio.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#246BCE]/40 hover:bg-white shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#246BCE] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {role.team}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {role.location}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <a
                  href="#apply-form"
                  onClick={() => setFormData({ ...formData, role: role.title })}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#10233F] group-hover:bg-[#246BCE] rounded-xl shrink-0 transition-colors inline-flex items-center gap-1.5"
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
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#17A6A1]">
              Next-Gen Talent
            </span>
            <h2 className="text-3xl font-extrabold text-[#10233F]">
              Student & Internship Programs
            </h2>
            <p className="text-sm text-slate-600">
              For ambitious computer science and design students looking to build production software, not fetch coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentPrograms.map((prog, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                <GraduationCap className="w-8 h-8 text-[#17A6A1]" />
                <h3 className="text-xl font-bold text-[#10233F]">{prog.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
              Transparent Recruitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10233F] tracking-tight">
              Our 4-Step Hiring Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((s, idx) => (
              <div key={idx} className="bg-[#F6F8FB] p-6 rounded-2xl border border-slate-200/90 space-y-3">
                <span className="text-3xl font-extrabold text-[#246BCE]/40 block">{s.step}</span>
                <h3 className="text-base font-bold text-[#10233F]">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-[#F6F8FB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#10233F] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
                Quick Application
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Submit Your Application
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Send your resume, GitHub, or portfolio link directly to our engineering leadership.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Application Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our hiring team will review your application for <strong className="text-white">{formData.role}</strong> and reach out to <strong className="text-white">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 text-xs font-bold text-[#10233F] bg-white rounded-lg hover:bg-slate-100"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Target Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#162f55] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    >
                      {openRoles.map((r, i) => (
                        <option key={i} value={r.title}>{r.title}</option>
                      ))}
                      <option value="Internship">Student / Graduate Internship</option>
                      <option value="General Engineering">General Engineering Interest</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      GitHub / LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/yourhandle"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Tell Us About Your Best Code / Work
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly highlight what you enjoy building and what technologies you master..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246BCE]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl shadow-lg transition-all"
                  >
                    Submit Job Application
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    All candidate communications are handled confidentially.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
