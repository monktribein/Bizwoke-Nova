import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'default', size = 'md', className = '', showTagline = true }) {
  const isLight = variant === 'light';

  // Sizing styles
  const imgHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <Link to="/" className={`inline-flex items-center group select-none ${className}`}>
      {!isLight ? (
        // Authentic Brand Mark for Light Backgrounds (Navbar, Cards)
        <div className="flex flex-col items-start">
          <img
            src="/assets/bizwoke-nova-logo.png"
            alt="Bizwoke Nova - Awakening Your Success"
            className={`${imgHeights[size] || 'h-11'} w-auto object-contain transition-transform group-hover:scale-[1.02] duration-200`}
          />
        </div>
      ) : (
        // Precision Vector Dark-Theme Equivalent for Dark Backgrounds (Footer, Dark Sections)
        <div className="flex flex-col items-start transition-transform group-hover:scale-[1.02] duration-200">
          <div className="relative flex items-center">
            {/* Sunrise Emblem positioned precisely over the O in WOKE */}
            <div className="flex flex-col">
              <div className="relative">
                {/* SVG Wordmark with Sunrise */}
                <svg
                  viewBox="0 0 240 68"
                  className={`${size === 'lg' ? 'h-16' : size === 'sm' ? 'h-10' : 'h-12'} w-auto`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Rising Sun Motif above O */}
                  <g transform="translate(103, 10)">
                    {/* Left Ray */}
                    <line x1="-8" y1="-8" x2="-4" y2="-4" stroke="#F27A24" strokeWidth="2.4" strokeLinecap="round" />
                    {/* Center Ray */}
                    <line x1="0" y1="-11" x2="0" y2="-5" stroke="#F27A24" strokeWidth="2.4" strokeLinecap="round" />
                    {/* Right Ray */}
                    <line x1="8" y1="-8" x2="4" y2="-4" stroke="#F27A24" strokeWidth="2.4" strokeLinecap="round" />
                    {/* Sun Dome */}
                    <path d="M-9 0C-9 -5.5 0 -8.5 0 -8.5C0 -8.5 9 -5.5 9 0Z" fill="#F27A24" />
                  </g>

                  {/* Wordmark Text: BIZWOKE NOVA */}
                  <text
                    x="2"
                    y="36"
                    fill="#FFFFFF"
                    fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
                    fontWeight="800"
                    fontSize="25"
                    letterSpacing="0.08em"
                  >
                    BIZW
                  </text>
                  <text
                    x="94"
                    y="36"
                    fill="#FFFFFF"
                    fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
                    fontWeight="800"
                    fontSize="25"
                    letterSpacing="0.08em"
                  >
                    O
                  </text>
                  <text
                    x="117"
                    y="36"
                    fill="#FFFFFF"
                    fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
                    fontWeight="800"
                    fontSize="25"
                    letterSpacing="0.08em"
                  >
                    KE NOVA
                  </text>

                  {/* Tagline: Awakening Your Success */}
                  {showTagline && (
                    <text
                      x="16"
                      y="58"
                      fill="#CBD5E1"
                      fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
                      fontWeight="500"
                      fontSize="14"
                      letterSpacing="0.02em"
                    >
                      Awakening Your Success
                    </text>
                  )}
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}
