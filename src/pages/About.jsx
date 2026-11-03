import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  animate,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import {
  fadeUp,
  staggerContainer,
  cardVariant,
  viewportConfig
} from '../utils/motion';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Users2,
  Target,
  Globe2,
  Clock,
  Building2,
  Compass,
  TrendingUp
} from 'lucide-react';

/* ----------------------------------------------------------------------------
   Reusable animation helpers
---------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];

// Headline lines slide up out of a mask
const headlineParent = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
const lineMask = {
  hidden: { y: '115%' },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } }
};

// Thin progress bar fixed to the top of the viewport
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-[#F27A24] via-orange-400 to-amber-400 z-[60] pointer-events-none"
    />
  );
}

// Count-up that starts when the element enters the viewport
function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';
  const [display, setDisplay] = useState(target ?? value);

  useEffect(() => {
    if (target === null || !inView || reduce) {
      if (target !== null) setDisplay(target);
      return;
    }
    const from = target > 1000 ? target - 40 : 0;
    const controls = animate(from, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  if (target === null) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// Card with cursor-tracked 3D tilt and a soft spotlight
function TiltCard({ children, className = '', glow = 'rgba(242,122,36,0.16)', max = 5, ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, ${glow}, transparent 70%)`;

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mx.set(x);
    my.set(y);
    ry.set((x / r.width - 0.5) * max * 2);
    rx.set(-(y / r.height - 0.5) * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative overflow-hidden group ${className}`}
      {...rest}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.div>
  );
}

// One word whose opacity is tied to scroll position
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

function ScrollWords({ text, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');
  return (
    <blockquote ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {w}
          </Word>
        );
      })}
    </blockquote>
  );
}

/* ----------------------------------------------------------------------------
   Page
---------------------------------------------------------------------------- */

export default function About() {
  const reduce = useReducedMotion();

  const values = [
    {
      step: "01",
      title: "Technical Rigor & Pragmatism",
      desc: "We prioritize maintainable, resilient architectures over passing technology fads. Every line of code must deliver tangible commercial or operational utility.",
      icon: ShieldCheck,
      color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-200 dark:border-amber-500/20"
    },
    {
      step: "02",
      title: "Clean Domain Separation",
      desc: "Our owned digital platforms are kept rigorously separated from bespoke client consulting engagements, ensuring total IP clarity and specialized focus.",
      icon: Layers,
      color: "text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-200 dark:border-teal-500/20"
    },
    {
      step: "03",
      title: "Shared Foundation Efficiency",
      desc: "By standardizing core security, AI, and identity within NKTech Enterprise Platform™, we build new products 3x faster with rock-solid security.",
      icon: Cpu,
      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-200 dark:border-blue-500/20"
    },
    {
      step: "04",
      title: "Customer & Stakeholder Empathy",
      desc: "Whether building for a municipal sanitation worker or an enterprise CXO, our interfaces are engineered for real humans operating under real-world constraints.",
      icon: Users2,
      color: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-200 dark:border-purple-500/20"
    }
  ];

  const milestones = [
    {
      year: "2012*",
      badge: "Inception",
      title: "Founding & Digital Agency Origins",
      desc: "Initiated operations delivering digital services, web development, and custom applications for growing businesses.",
      icon: Clock
    },
    {
      year: "2016-2018",
      badge: "Scale",
      title: "Enterprise Systems & Mobile Expansion",
      desc: "Scaled into complex ERP systems, custom CRM workflows, and mobile application engineering across India.",
      icon: TrendingUp
    },
    {
      year: "2020-2022",
      badge: "Innovation",
      title: "Architectural Standardization",
      desc: "Conceptualized the NKTech Enterprise Platform™ (NEP) to standardize shared multi-tenant SaaS capabilities across distinct verticals.",
      icon: Cpu
    },
    {
      year: "2024-Present",
      badge: "Ecosystem",
      title: "Mission FTC™ & Specialized Portals",
      desc: "Accelerating a diversified portfolio of 12 enterprise platforms spanning tourism, governance, AI, manufacturing, and commerce.",
      icon: Globe2
    }
  ];

  const stats = [
    { label: "Operating Since", value: "2012*", detail: "Engineering Journey" },
    { label: "Proprietary Platforms", value: "12", detail: "Mission FTC™ Portfolio" },
    { label: "Shared Foundation", value: "1 Core", detail: "NKTech Platform™ (NEP)" },
    { label: "Architecture", value: "100%", detail: "Enterprise Owned IP" },
  ];

  // Hero cursor spotlight
  const hx = useMotionValue(0);
  const hy = useMotionValue(0);
  const heroSpot = useMotionTemplate`radial-gradient(520px circle at ${hx}px ${hy}px, rgba(242,122,36,0.13), transparent 70%)`;
  const onHeroMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    hx.set(e.clientX - r.left);
    hy.set(e.clientY - r.top);
  };

  // Timeline line draws as you scroll
  const timelineRef = useRef(null);
  const { scrollYProgress: tlProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.7']
  });
  const tlScale = useSpring(tlProgress, { stiffness: 90, damping: 24 });

  // Vision section parallax
  const visionRef = useRef(null);
  const { scrollYProgress: vProgress } = useScroll({
    target: visionRef,
    offset: ['start end', 'end start']
  });
  const ringY = useTransform(vProgress, [0, 1], [-60, 60]);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#081528] text-[#0F294A] dark:text-slate-100 min-h-screen transition-colors duration-200 overflow-x-hidden">
      <SEOHead
        title="About Us | Company Story, Vision & Mission FTC — Bizwoke Nova"
        description="Learn about Bizwoke Nova's journey since 2012, our Mission FTC portfolio strategy, and our shared NKTech Enterprise Platform foundation."
      />
      <ScrollProgress />

      {/* ======================= SECTION 1: HERO ======================= */}
      <section
        onMouseMove={onHeroMove}
        className="group bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 pt-12 sm:pt-16 pb-14 sm:pb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        {/* cursor-follow glow */}
        <motion.div
          aria-hidden
          style={{ background: heroSpot }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block"
        />

        {/* drifting aurora blobs */}
        <motion.div
          aria-hidden
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 right-0 w-[26rem] h-[26rem] bg-gradient-to-br from-orange-300/40 via-amber-200/30 to-transparent rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          aria-hidden
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -25, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-20 w-[24rem] h-[24rem] bg-gradient-to-tr from-blue-300/25 via-teal-200/20 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#F27A24]/30 text-[#F27A24] text-xs font-extrabold tracking-wide backdrop-blur">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#F27A24] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#F27A24]" />
              </span>
              <span>CORPORATE PROFILE & STRATEGY</span>
            </motion.div>

            <motion.h1
              variants={headlineParent}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0F294A] dark:text-white tracking-tight leading-[1.1]"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineMask} className="block">Technology Expertise.</motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineMask} className="block">Business Understanding.</motion.span>
              </span>
              <span className="block overflow-hidden pb-3">
                <motion.span
                  variants={lineMask}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F27A24] via-orange-500 to-amber-500 bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]"
                  style={{ backgroundSize: '200% auto' }}
                >
                  Long-Term Vision.
                </motion.span>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
              Awakening Your Success • Building Digital Infrastructure for a Smarter India.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              Established in 2012*, Bizwoke Nova has grown from a digital services business into an enterprise technology company focused on solving real-world business and operational challenges. Our expertise combines software development, mobile applications, enterprise systems, artificial intelligence, digital marketing, and industry-specific technology platforms.
            </motion.p>

            <motion.p variants={fadeUp} className="text-xs text-slate-400 italic">
              *Founding claim currently flagged for official company corporate records verification before formal marketing publication.
            </motion.p>
          </motion.div>

          {/* Stats with count-up */}
          <motion.div
            variants={staggerContainer(0.08, 0.5)}
            initial="hidden"
            animate="visible"
            className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative overflow-hidden bg-white/80 dark:bg-[#0F294A]/70 backdrop-blur rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all"
              >
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9 + idx * 0.1, duration: 0.9, ease: EASE }}
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#F27A24] to-amber-400"
                />
                <div className="text-2xl sm:text-4xl font-black text-[#F27A24] tracking-tight tabular-nums">
                  <CountUp value={item.value} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white mt-1">{item.label}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================= SECTION 2: TRI-PILLAR ======================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-10 sm:mb-12 max-w-2xl"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">TRI-PILLAR ARCHITECTURE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F294A] dark:text-white tracking-tight mt-1.5">
              Purpose & Strategic Governance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5">
              How Bizwoke Nova structures enterprise client delivery, long-term product incubation, and unified core technologies.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 [perspective:1200px]"
          >
            {/* Pillar 1 */}
            <TiltCard
              variants={cardVariant}
              glow="rgba(242,122,36,0.18)"
              className="bg-white dark:bg-[#0F294A] rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 hover:shadow-xl hover:shadow-orange-500/10 transition-[border,box-shadow]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F27A24] px-2.5 py-1 rounded-full bg-orange-500/10 border border-[#F27A24]/20">Corporate Brand</span>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#F27A24] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">Bizwoke Nova™</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  The primary corporate brand delivering enterprise software, AI solutions, and digital transformation for businesses, institutions, and government bodies.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#F27A24]">
                <span>Core Operating Entity</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27A24] group-hover:scale-150 transition-transform" />
              </div>
              <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[#F27A24]" />
            </TiltCard>

            {/* Pillar 2 */}
            <TiltCard
              variants={cardVariant}
              glow="rgba(13,148,136,0.18)"
              className="bg-white dark:bg-[#0F294A] rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#0D9488]/50 hover:shadow-xl hover:shadow-teal-500/10 transition-[border,box-shadow]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0D9488] dark:text-teal-400 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">Portfolio Strategy</span>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-[#0D9488] dark:text-teal-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#0F294A] dark:text-white group-hover:text-[#0D9488] dark:group-hover:text-teal-400 transition-colors">Mission FTC™</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solving high-value economic challenges.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#0D9488] dark:text-teal-400">
                <span>Long-Term Portfolio Growth</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] group-hover:scale-150 transition-transform" />
              </div>
              <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-[#0D9488]" />
            </TiltCard>

            {/* Pillar 3 */}
            <TiltCard
              variants={cardVariant}
              glow="rgba(37,99,235,0.18)"
              className="bg-white dark:bg-[#0F294A] rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-[border,box-shadow]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">Technology Foundation</span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#0F294A] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">NKTech Platform™</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  A shared architectural foundation (NEP) standardizing AI automation, IAM security, multi-tenancy, and cloud infrastructure across all products.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                <Link to="/technology/" className="hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore NEP Core</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
              </div>
              <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-blue-600" />
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* ======================= SECTION 3: PURPOSE (scroll-linked words) ======================= */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-orange-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <ScrollWords
              text={'"To make advanced digital technology accessible, useful, and commercially valuable for businesses and institutions."'}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white leading-tight tracking-tight"
            />

            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="block mx-auto h-[3px] w-24 origin-center rounded-full bg-gradient-to-r from-[#F27A24] to-amber-400"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              We measure success not by lines of code written, but by the tangible operational time saved, revenue unlocked, and governance transparency achieved.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ======================= SECTION 4: TIMELINE (line draws on scroll) ======================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] dark:bg-[#081528] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-2 mb-10 sm:mb-14"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">CORPORATE EVOLUTION</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight">
              Our Journey Over More Than a Decade
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              A journey of disciplined engineering, client trust, and continuous adaptation to emerging enterprise paradigms.
            </p>
          </motion.div>

          <div ref={timelineRef}>
            {/* Desktop connector line */}
            <div className="hidden lg:grid grid-cols-4 gap-5 relative h-6 mb-4" aria-hidden>
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
              <motion.div
                style={{ scaleX: tlScale }}
                className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 origin-left rounded-full bg-gradient-to-r from-[#F27A24] to-amber-400"
              />
              {milestones.map((_, i) => (
                <div key={i} className="relative">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.15, type: 'spring', stiffness: 300, damping: 16 }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#081528] border-[3px] border-[#F27A24] shadow-[0_0_0_4px_rgba(242,122,36,0.15)]"
                  />
                </div>
              ))}
            </div>

            <motion.div
              variants={staggerContainer(0.14)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative"
            >
              {milestones.map((ms, idx) => {
                const IconComp = ms.icon;
                return (
                  <TiltCard
                    key={idx}
                    variants={cardVariant}
                    max={4}
                    className="bg-white dark:bg-[#0F294A] rounded-3xl p-6 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/50 hover:shadow-xl hover:shadow-orange-500/10 transition-[border,box-shadow]"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-700/60">
                        <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-500/10 text-[#F27A24] border border-[#F27A24]/20">
                          {ms.badge}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-white group-hover:bg-[#F27A24] group-hover:border-[#F27A24] group-hover:rotate-12 transition-all">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-black text-[#F27A24] tracking-tight">{ms.year}</div>
                      <h3 className="text-base font-bold text-[#0F294A] dark:text-white mt-2 group-hover:text-[#F27A24] transition-colors leading-snug">{ms.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">{ms.desc}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 text-[11px] font-semibold text-slate-400">
                      Phase {String(idx + 1).padStart(2, '0')} Completed
                    </div>
                  </TiltCard>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= SECTION 5: PRINCIPLES ======================= */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#0A1C33] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl space-y-2 mb-10 sm:mb-12"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F27A24]">OPERATING PRINCIPLES</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F294A] dark:text-white tracking-tight">
              The Principles That Guide Our Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Architectural rules and ethical standards embedded into every system we release.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 [perspective:1200px]"
          >
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <TiltCard
                  key={idx}
                  variants={cardVariant}
                  max={3}
                  className="bg-[#F8FAFC] dark:bg-[#0F294A] rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/60 hover:border-[#F27A24]/40 hover:shadow-xl hover:shadow-orange-500/10 transition-[border,box-shadow]"
                >
                  {/* ghost step number */}
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-6 text-[8rem] leading-none font-black text-[#F27A24]/[0.06] group-hover:text-[#F27A24]/[0.12] group-hover:-translate-y-1 transition-all duration-500 select-none"
                  >
                    {val.step}
                  </span>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#F27A24] shrink-0 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#F27A24] group-hover:text-white group-hover:border-[#F27A24] transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#F27A24]">Principle {val.step}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F294A] dark:text-white group-hover:text-[#F27A24] transition-colors">{val.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================= SECTION 6: MISSION FTC VISION ======================= */}
      <section
        ref={visionRef}
        id="vision"
        className="py-16 sm:py-24 bg-gradient-to-br from-orange-50/70 via-white to-blue-50/60 dark:from-[#0A1C33] dark:via-[#081528] dark:to-[#0F294A] text-[#0F294A] dark:text-white border-y border-slate-200/80 dark:border-slate-800 relative overflow-hidden"
      >
        {/* concentric rings, rotating + parallax */}
        <motion.div
          aria-hidden
          style={{ y: reduce ? 0 : ringY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {[420, 620, 820].map((size, i) => (
            <motion.div
              key={size}
              animate={reduce ? undefined : { rotate: i % 2 ? -360 : 360 }}
              transition={{ duration: 60 + i * 25, repeat: Infinity, ease: 'linear' }}
              style={{ width: size, height: size }}
              className="absolute rounded-full border border-dashed border-[#F27A24]/20 dark:border-[#F27A24]/15"
            >
              <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-[#F27A24]/70 shadow-[0_0_16px_rgba(242,122,36,0.8)]" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          aria-hidden
          animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-4xl mx-auto space-y-6 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#F27A24]/30 text-[#F27A24] text-xs font-black uppercase tracking-widest backdrop-blur">
              <Compass className="w-3.5 h-3.5 animate-spin [animation-duration:12s]" />
              <span>MISSION FTC™ • STRATEGIC PORTFOLIO VISION</span>
            </motion.div>

            <motion.h2
              variants={headlineParent}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F294A] dark:text-white leading-[1.15]"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineMask} className="block">One Portfolio. Many Platforms.</motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineMask} className="block text-[#F27A24]">One Technology Foundation.</motion.span>
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Mission FTC™ is our long-term strategic initiative to build a diversified portfolio of enterprise technology platforms and digital infrastructure solutions. Our ambition is to create valuable, scalable technology businesses that solve important problems across India's economy while developing the capabilities to serve international markets. Through shared technology, disciplined execution, and strategic partnerships, we aim to build an enduring enterprise technology ecosystem.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="relative">
                {!reduce && (
                  <motion.span
                    aria-hidden
                    animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-xl bg-[#F27A24]"
                  />
                )}
                <Link
                  to="/platforms/"
                  className="relative w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#F27A24] hover:bg-[#DE6713] rounded-xl shadow-lg shadow-orange-500/30 transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <span>View 12 Platform Directory</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/technology/"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0F294A] dark:text-white bg-white/80 dark:bg-[#0F294A] backdrop-blur hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-300 dark:border-slate-700 hover:border-[#F27A24]/50 rounded-xl transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <span>Explore NEP Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
