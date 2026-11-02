import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function HeroSlider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('slide');
      const idx = parseInt(param, 10);
      if (!isNaN(idx) && idx >= 1 && idx <= 5) return idx - 1;
    }
    return 0;
  });

  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      name: "Digital Infrastructure",
      title: "Building Digital Infrastructure for a Smarter India",
      image: "/assets/banners/banner-1-digital-infrastructure.jpg",
      primaryLink: "#platforms",
      isPrimaryHash: true,
      secondaryLink: "/contact/?type=project",
      hasDualButtons: true,
      alt: "Bizwoke Nova - Building Digital Infrastructure for a Smarter India"
    },
    {
      id: 2,
      name: "Our Platforms",
      title: "One Vision. Multiple Digital Platforms.",
      image: "/assets/banners/banner-2-our-platforms.jpg",
      primaryLink: "/platforms/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - One Vision. Multiple Digital Platforms. Tirvona, BharatBN, BizORM"
    },
    {
      id: 3,
      name: "Our Services",
      title: "Technology Expertise That Delivers Results.",
      image: "/assets/banners/banner-3-our-services.jpg",
      primaryLink: "/services/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - Technology Expertise That Delivers Results across 8 core services"
    },
    {
      id: 4,
      name: "NKTech NEP™",
      title: "NKTech Enterprise Platform™ (NEP)",
      image: "/assets/banners/banner-4-nktech-nep.jpg",
      primaryLink: "/technology/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - NKTech Enterprise Platform (NEP) One Technology Foundation"
    },
    {
      id: 5,
      name: "Mission FTC™",
      title: "Mission FTC™ — One Portfolio. Many Platforms.",
      image: "/assets/banners/banner-5-mission-ftc.jpg",
      primaryLink: "/about-us/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - Mission FTC Diversified Portfolio of Digital Platforms"
    }
  ];

  // Auto-scroll every 5.5 seconds, paused when hovering
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleBannerClick = (slide) => {
    if (slide.isPrimaryHash) {
      const el = document.querySelector(slide.primaryLink);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = slide.primaryLink;
      }
    } else {
      navigate(slide.primaryLink);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Bizwoke Nova Enterprise Banner Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-4 sm:pb-12">
        {/* Main Banner Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-[#0F294A] group">
          
          {/* Banner Slides Stack */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[2.65/1] min-h-[220px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[430px] overflow-hidden">
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out cursor-pointer ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  onClick={() => handleBannerClick(slide)}
                  title={`Click to view: ${slide.title}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center select-none"
                    loading={idx === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />

                  {/* Hotspot Links for Slide 1 Dual Buttons */}
                  {slide.hasDualButtons && (
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Left Button Hotspot: Launch Our Platforms */}
                      <a
                        href="#platforms"
                        onClick={(e) => {
                          e.stopPropagation();
                          const el = document.querySelector('#platforms');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="pointer-events-auto absolute left-[10%] sm:left-[15%] bottom-[12%] sm:bottom-[15%] w-[32%] sm:w-[22%] h-[18%] sm:h-[15%] rounded-full opacity-0 hover:opacity-10 bg-white transition-opacity"
                        aria-label="Launch Our Platforms"
                        title="Launch Our Platforms"
                      />

                      {/* Right Button Hotspot: Discuss Your Project */}
                      <Link
                        to="/contact/?type=project"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto absolute left-[44%] sm:left-[39%] bottom-[12%] sm:bottom-[15%] w-[32%] sm:w-[20%] h-[18%] sm:h-[15%] rounded-full opacity-0 hover:opacity-10 bg-white transition-opacity"
                        aria-label="Discuss Your Project"
                        title="Discuss Your Project"
                      />
                    </div>
                  )}

                  {/* Hotspot Link for Single Button on other slides */}
                  {!slide.hasDualButtons && (
                    <Link
                      to={slide.primaryLink}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute left-[6%] sm:left-[8%] bottom-[12%] sm:bottom-[15%] w-[35%] sm:w-[24%] h-[20%] sm:h-[16%] rounded-full opacity-0 hover:opacity-10 bg-white transition-opacity"
                      aria-label={`Go to ${slide.name}`}
                      title={slide.title}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Extreme-Edge Left Arrow (inspired by classic enterprise slider) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-10 h-14 sm:h-16 rounded-r-xl bg-black/40 hover:bg-[#F27A24] text-white border-y border-r border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center transition-all opacity-70 group-hover:opacity-100"
            aria-label="Previous Banner Slide"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Extreme-Edge Right Arrow (inspired by classic enterprise slider) */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-10 h-14 sm:h-16 rounded-l-xl bg-black/40 hover:bg-[#F27A24] text-white border-y border-l border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center transition-all opacity-70 group-hover:opacity-100"
            aria-label="Next Banner Slide"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Center Indicator Dots & Play/Pause State */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
            <button
              onClick={prevSlide}
              className="text-white/70 hover:text-white transition-colors p-0.5"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1.5 px-1">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(idx);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === idx
                      ? 'w-6 h-2 bg-[#F27A24]'
                      : 'w-2 h-2 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${slide.name}`}
                  title={`Slide ${idx + 1}: ${slide.name}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="text-white/70 hover:text-white transition-colors p-0.5"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <span className="w-px h-3 bg-white/20 mx-0.5" />

            {/* Subtle Auto-scroll Pause Toggle Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused(!isPaused);
              }}
              className="text-white/70 hover:text-white transition-colors p-0.5"
              title={isPaused ? "Auto-scroll paused. Click to play." : "Auto-scrolling every 5.5s. Click to pause."}
              aria-label={isPaused ? "Play slider" : "Pause slider"}
            >
              {isPaused ? <Play className="w-3 h-3 text-[#F27A24]" /> : <Pause className="w-3 h-3" />}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
