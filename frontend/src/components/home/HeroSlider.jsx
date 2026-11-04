import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      name: "Technology & AI Solutions",
      title: "Technology & AI Solutions for Business Growth — Formerly NKTech (Since 2012)",
      image: "/assets/banners/banner-tech-ai-solutions-hd.jpg",
      webp: "/assets/banners/banner-tech-ai-solutions-hd.webp",
      primaryLink: "/services/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - Technology & AI Solutions for Business Growth"
    },
    {
      id: 2,
      name: "AI & Agentic AI",
      title: "AI & Agentic AI Solutions for Real Business Impact",
      image: "/assets/banners/banner-agentic-ai-hd.jpg",
      webp: "/assets/banners/banner-agentic-ai-hd.webp",
      primaryLink: "/services/ai-automation-services/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - AI & Agentic AI Solutions for Real Business Impact"
    },
    {
      id: 3,
      name: "BharatBN™",
      title: "BharatBN™ — India's Local Business Search & SEO Platform",
      image: "/assets/banners/banner-bharatbn-hd.jpg",
      webp: "/assets/banners/banner-bharatbn-hd.webp",
      primaryLink: "/platforms/bharatbn/",
      isPrimaryHash: false,
      alt: "BharatBN - India's Local Business Search & SEO Platform"
    },
    {
      id: 4,
      name: "BizORM™",
      title: "BizORM™ — Smart Review & Reputation Management Platform",
      image: "/assets/banners/banner-bizorm-hd.jpg",
      webp: "/assets/banners/banner-bizorm-hd.webp",
      primaryLink: "/platforms/bizorm/",
      isPrimaryHash: false,
      alt: "BizORM - Smart Review & Reputation Management Platform"
    },
    {
      id: 5,
      name: "Digital Ecosystem",
      title: "A Complete Digital Ecosystem for a Connected India",
      image: "/assets/banners/banner-digital-ecosystem-hd.jpg",
      webp: "/assets/banners/banner-digital-ecosystem-hd.webp",
      primaryLink: "/platforms/",
      isPrimaryHash: false,
      alt: "Bizwoke Nova - A Complete Digital Ecosystem for a Connected India"
    }
  ];

  // Auto-scroll every 3.5 seconds, paused when hovering
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe Left -> next
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe Right -> prev
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
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

  const current = slides[currentSlide];

  return (
    <div
      className="relative w-full overflow-hidden bg-[#F8FAFC] group border-b border-slate-200 select-none shadow-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Bizwoke Nova Full-Page Enterprise Banner Slider"
    >
      {/* Edge-to-Edge Responsive Hero Canvas: Natural 2560/945 Ratio Across All Devices (0% Mobile Crop) */}
      <div className="relative w-full aspect-[2560/945] max-h-[85vh] overflow-hidden bg-slate-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => handleBannerClick(current)}
            title={`Click to explore: ${current.title}`}
          >
            <picture className="w-full h-full block">
              <source srcSet={current.webp} type="image/webp" />
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-cover object-center select-none banner-hd-render"
                loading="eager"
                draggable={false}
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Navigation Arrow with Tactile Hover (Hidden on phones to keep banner text clean) */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="hidden md:flex absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 hover:bg-[#F27A24] text-[#0F294A] hover:text-white border border-slate-200/90 backdrop-blur-md shadow-lg items-center justify-center transition-all opacity-85 group-hover:opacity-100"
        aria-label="Previous Banner Slide"
        title="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.button>

      {/* Right Navigation Arrow with Tactile Hover (Hidden on phones to keep banner text clean) */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="hidden md:flex absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 hover:bg-[#F27A24] text-[#0F294A] hover:text-white border border-slate-200/90 backdrop-blur-md shadow-lg items-center justify-center transition-all opacity-85 group-hover:opacity-100"
        aria-label="Next Banner Slide"
        title="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.button>

      {/* Bottom Center Indicator Dots (Ultra-sleek on Mobile so Banner Content is 100% Legible) */}
      <div className="absolute bottom-1 sm:bottom-3 md:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-2 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-4 sm:py-2 rounded-full border border-slate-200/90 shadow-md text-[#0F294A] scale-[0.62] sm:scale-90 md:scale-100 origin-bottom">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="text-slate-500 hover:text-[#0F294A] transition-colors p-0.5"
          title="Previous Slide"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </motion.button>

        <div className="flex items-center gap-1.5 sm:gap-2 px-1">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(idx);
              }}
              className="relative p-0.5 sm:p-1 focus:outline-none"
              aria-label={`Jump to slide ${idx + 1}: ${slide.name}`}
              title={`Slide ${idx + 1}: ${slide.name}`}
            >
              {currentSlide === idx ? (
                <motion.div
                  layoutId="heroActivePill"
                  className="w-5 sm:w-7 h-2 sm:h-2.5 rounded-full bg-[#F27A24] shadow-xs"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              ) : (
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors" />
              )}
            </button>
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="text-slate-500 hover:text-[#0F294A] transition-colors p-0.5"
          title="Next Slide"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </motion.button>
      </div>
    </div>
  );
}
