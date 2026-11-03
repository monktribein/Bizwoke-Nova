// Enterprise Motion Variants & Animation Utilities
// Designed for a dignified, premier corporate feel (Stripe/Linear/Apple style)
// Strict rule: NO tacky AI-cliche bounces, NO over-the-top rubber bands, NO continuous spin/pulses.

export const transitionEnterprise = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1], // Natural cubic-bezier for refined deceleration
};

export const transitionQuick = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1],
};

// Section Header & Content Reveal
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionEnterprise,
  },
};

// Simple Opacity Fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Stagger Container for Grids & Lists
export const staggerContainer = (staggerDelay = 0.08, initialDelay = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

// Card Item Reveal inside Stagger Container
export const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionEnterprise,
  },
};

// Professional Card Hover & Tap
export const cardHoverProps = {
  whileHover: {
    y: -5,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  whileTap: {
    scale: 0.99,
    transition: { duration: 0.15 },
  },
};

// Professional Button Hover & Tap
export const buttonHoverProps = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Minimal Viewport Configuration (triggers once when entering screen)
export const viewportConfig = {
  once: true,
  margin: '-40px',
};

