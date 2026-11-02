import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { ArrowRight, Home, Compass, Wrench, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 bg-[#F6F8FB] min-h-[70vh] flex items-center justify-center px-4">
      <SEOHead
        title="Page Not Found (404) | Bizwoke Nova"
        description="The requested page could not be found. Explore Bizwoke Nova enterprise platforms, services, and corporate solutions."
      />
      <div className="max-w-xl text-center space-y-6 bg-white p-10 rounded-3xl border border-slate-200/90 shadow-sm">
        <span className="text-4xl font-extrabold text-[#246BCE]">404</span>
        <h1 className="text-3xl font-extrabold text-[#10233F]">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The corporate page or resource you are looking for may have been restructured as part of the Bizwoke Nova enterprise architecture upgrade.
        </p>

        <div className="pt-2 grid grid-cols-2 gap-3 text-left">
          <Link
            to="/"
            className="p-3 rounded-xl bg-[#F6F8FB] hover:bg-blue-50 border border-slate-200 text-xs font-bold text-[#10233F] flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-[#246BCE]" />
            <span>Corporate Home</span>
          </Link>
          <Link
            to="/platforms/"
            className="p-3 rounded-xl bg-[#F6F8FB] hover:bg-blue-50 border border-slate-200 text-xs font-bold text-[#10233F] flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#17A6A1]" />
            <span>12 Platforms</span>
          </Link>
          <Link
            to="/services/"
            className="p-3 rounded-xl bg-[#F6F8FB] hover:bg-blue-50 border border-slate-200 text-xs font-bold text-[#10233F] flex items-center gap-2"
          >
            <Wrench className="w-4 h-4 text-[#246BCE]" />
            <span>14 Services</span>
          </Link>
          <Link
            to="/contact/"
            className="p-3 rounded-xl bg-[#F6F8FB] hover:bg-blue-50 border border-slate-200 text-xs font-bold text-[#10233F] flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#17A6A1]" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#10233F] hover:bg-[#162f55] rounded-xl"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
