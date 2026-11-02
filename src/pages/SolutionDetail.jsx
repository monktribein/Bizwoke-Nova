import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { PLATFORMS_DATA } from '../data/platformsData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Building,
  Landmark,
  Compass,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Users2,
  GraduationCap
} from 'lucide-react';

export default function SolutionDetail() {
  const { slug } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', notes: '' });

  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions/" replace />;
  }

  const relatedPlatforms = PLATFORMS_DATA.filter((p) => solution.keyPlatforms.includes(p.slug));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title={`${solution.title} Solutions | Bizwoke Nova`}
        description={solution.description}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500">
          <Link to="/" className="hover:text-[#10233F]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/solutions/" className="hover:text-[#10233F]">Industry Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#10233F] font-bold">{solution.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#246BCE] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/70">
              Industry Vertical Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              {solution.title}
            </h1>
            <p className="text-xl font-bold text-[#17A6A1]">
              "{solution.tagline}"
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {solution.heroSubtitle}
            </p>

            {/* Stats row */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg">
              {solution.stats.map((st, idx) => (
                <div key={idx} className="bg-[#F6F8FB] p-3 rounded-xl border border-slate-200 text-center">
                  <div className="text-xl font-extrabold text-[#10233F]">{st.value}</div>
                  <div className="text-[10px] text-slate-500 font-semibold">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Interventions Grid */}
      <section className="py-20 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenges */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-red-100 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                Systemic Vulnerabilities
              </span>
              <h2 className="text-2xl font-bold text-[#10233F]">
                Core Sector Inefficiencies
              </h2>
              <div className="space-y-4">
                {solution.challenges.map((ch, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      ✕
                    </span>
                    <p className="leading-relaxed">{ch}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interventions */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-teal-100 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17A6A1] bg-teal-50 px-3 py-1 rounded-full">
                Technology Solutions
              </span>
              <h2 className="text-2xl font-bold text-[#10233F]">
                Our Architectural Interventions
              </h2>
              <div className="space-y-4">
                {solution.solutionsProvided.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#17A6A1] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{sol}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Platforms */}
      {relatedPlatforms.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#246BCE]">
                Dedicated Products
              </span>
              <h2 className="text-3xl font-extrabold text-[#10233F]">
                Platforms Serving {solution.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPlatforms.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#F6F8FB] rounded-2xl p-7 border border-slate-200/90 hover:bg-white transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">#{p.id}</span>
                      <span className="text-[11px] font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                        {p.maturityStatus}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#10233F]">{p.name}</h3>
                    <p className="text-xs font-semibold text-[#17A6A1]">"{p.tagline}"</p>
                    <p className="text-sm text-slate-600 line-clamp-3">{p.description}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      to={p.route}
                      className="text-xs font-bold text-[#246BCE] hover:text-[#10233F] inline-flex items-center gap-1"
                    >
                      <span>Explore Dedicated Platform Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sector Consultation CTA */}
      <section className="py-20 bg-[#10233F] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#17A6A1]">
            Sector Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Deploy {solution.title} Technology
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Speak directly with our solutions architects to assess pilot feasibility, security accreditations, and institutional deployment roadmaps.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/?type=sector"
              className="px-8 py-3.5 text-sm font-bold text-white bg-[#246BCE] hover:bg-[#1f5cb0] rounded-xl shadow-lg transition-all"
            >
              Consult Solutions Architect
            </Link>
            <Link
              to="/solutions/"
              className="px-8 py-3.5 text-sm font-bold text-slate-300 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
            >
              View All 8 Sectors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
