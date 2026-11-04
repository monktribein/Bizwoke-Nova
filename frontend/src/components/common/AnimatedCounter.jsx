import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * AnimatedCounter component
 * Counts up smoothly from 0 to the target value when scrolled into view.
 * Handles prefixes (+, -), suffixes (%, x, k+, etc.), and floating point numbers.
 * Example: "+35%", "-50%", "100%", "99.9%"
 */
export default function AnimatedCounter({ value, duration = 1200, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState(() => {
    // Initial display before counting begins
    const match = String(value).match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return String(value);
    const prefix = match[1] || '';
    const suffix = match[3] || '';
    const hasDecimal = match[2].includes('.');
    return `${prefix}${hasDecimal ? '0.0' : '0'}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const valStr = String(value);
    const match = valStr.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplayValue(valStr);
      return;
    }

    const prefix = match[1] || '';
    const target = parseFloat(match[2]);
    const suffix = match[3] || '';
    const hasDecimal = match[2].includes('.');

    let startTimestamp = null;
    let animId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic: 1 - (1 - progress)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = target * easeProgress;

      setDisplayValue(
        `${prefix}${hasDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`
      );

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setDisplayValue(valStr); // Ensure exact final value matches data
      }
    };

    animId = requestAnimationFrame(step);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, value, duration]);

  return <span ref={ref} className={className}>{displayValue}</span>;
}

