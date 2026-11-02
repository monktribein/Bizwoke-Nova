import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
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

export default function Solutions() {
  const industryIcons = {
    "government-public-administration": Landmark,
    "tourism-hospitality-destinations": Compass,
    "manufacturing-industrial": Factory,
    "healthcare-wellness": HeartPulse,
    "retail-msme-business": ShoppingBag,
    "transportation-logistics": Truck,
    "political-public-engagement": Users2,
    "education-professional-services": GraduationCap
  };

  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <SEOHead
        title="Industry Solutions | Enterprise Sector Architectures — Bizwoke Nova"
        description="Explore purpose-built technology architectures for government, tourism, manufacturing, healthcare, retail, transport, political management, and education."
      />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#246BCE] uppercase tracking-wider">
              <span>INDUSTRY SOLUTIONS DIRECTORY — BIZWOKE NOVA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#10233F] tracking-tight leading-tight">
              Technology Designed Around <br />
              <span className="text-[#246BCE]">Industry Realities.</span>
            </h1>
            <p className="text-xl font-semibold text-slate-700">
              Sector-Specific Software, Digital Marketplaces & Workflow Automation.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Every vertical possesses unique operational friction, compliance requirements, and stakeholder ecosystems. We build specialized platforms and tailored software architectures designed around how your industry works.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS_DATA.map((solution) => {
              const Icon = industryIcons[solution.slug] || Building;
              return (
                <div
                  key={solution.id}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-[#246BCE]/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#246BCE] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        {solution.stats.map((s, idx) => (
                          <div key={idx} className="text-right">
                            <span className="text-sm font-extrabold text-[#10233F] block leading-none">{s.value}</span>
                            <span className="text-[10px] text-slate-400 font-medium">{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#10233F] group-hover:text-[#246BCE] transition-colors">
                        {solution.title}
                      </h2>
                      <p className="text-xs font-semibold text-[#17A6A1] mt-1">
                        "{solution.tagline}"
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Engineered Interventions
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {solution.solutionsProvided.slice(0, 3).map((sol, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#17A6A1] shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      to={`/solutions/${solution.slug}/`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#10233F] bg-[#F6F8FB] group-hover:bg-[#10233F] group-hover:text-white rounded-lg border border-slate-200/80 transition-all shadow-sm"
                    >
                      <span>Explore {solution.title} Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
