import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'default', size = 'md', className = '' }) {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Precision Geometric Enterprise Monogram */}
      <div className="relative flex items-center justify-center">
        <svg
          className={size === 'lg' ? 'w-11 h-11' : size === 'sm' ? 'w-7 h-7' : 'w-9 h-9'}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="10" fill={isLight ? '#FFFFFF' : '#10233F'} className="transition-transform group-hover:scale-105 duration-200" />
          {/* Stylized N and B Geometric Chevron Wings */}
          <path
            d="M10 29V12L20 20L30 12V29"
            stroke={isLight ? '#10233F' : '#246BCE'}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Core Innovation Node */}
          <circle cx="20" cy="20" r="2.8" fill="#17A6A1" />
          <path
            d="M15 24L20 28L25 24"
            stroke="#17A6A1"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-tight">
          <span className={`font-extrabold tracking-tight ${size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'} ${isLight ? 'text-white' : 'text-[#10233F]'}`}>
            BIZWOKE
          </span>
          <span className={`font-bold tracking-tight text-[#246BCE] ${size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'}`}>
            NOVA
          </span>
          <span className="text-[10px] font-semibold text-[#17A6A1] uppercase tracking-wider self-start -mt-0.5">
            TM
          </span>
        </div>
        <span className={`text-[10px] uppercase font-semibold tracking-[0.16em] -mt-0.5 ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
          Enterprise Technology
        </span>
      </div>
    </Link>
  );
}
