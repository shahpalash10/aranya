'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    title: 'Palash Flower',
    description: 'Wild Palash blooms in Indian forests',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22V12" />
        <path d="M12 12c0 0-3-3-6-3s-4 3-4 4c0 4 3 5 10 -1" />
        <path d="M12 12c0 0 3-3 6-3s4 3 4 4c0 4-3 5-10-1" />
        <path d="M12 12c0 0-2-4-2-7s2-4 2-4s2 1 2 4s-2 7-2 7" />
      </svg>
    ),
  },
  {
    title: 'Handpicked',
    description: 'Carefully selected by rural artisans',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 11V6a2 2 0 00-4 0v4" />
        <path d="M14 10V4a2 2 0 00-4 0v6" />
        <path d="M10 10V6a2 2 0 00-4 0v8c0 4.5 3 8 8 8s8-3.5 8-8v-4a2 2 0 00-4 0v2" />
      </svg>
    ),
  },
  {
    title: 'Sun-Dried',
    description: 'Naturally dried under warm sunlight',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    title: 'Botanical Infusion',
    description: 'Traditional water infusion process',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 2v4" />
        <path d="M12 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18v2a8 8 0 01-8 8h-2a8 8 0 01-8-8v-2z" />
        <path d="M21 10c1 0 2 1 2 2s-1 2-2 2" />
      </svg>
    ),
  },
  {
    title: 'Natural Filtration',
    description: 'Pure, gentle filtration',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 3L2 3l8 10v6l4 2v-8l8-10z" />
      </svg>
    ),
  },
  {
    title: 'ARANYA Spray',
    description: 'Your botanical cooling ritual',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <rect x="8" y="8" width="8" height="14" rx="2" />
        <path d="M10 8V6a2 2 0 014 0v2" />
        <path d="M12 4V2" />
        <path d="M9 2h6" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
];

export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="bg-[#FEFCF8] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            THE JOURNEY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#0B2E20] font-light mt-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            From Flower to Bottle
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C8A04B] mx-auto mt-6"
          />
        </div>

        {/* Timeline */}
        <div ref={ref}>
          {/* Desktop: Horizontal */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute top-8 left-0 right-0 h-[1px] bg-[#C8A04B]/30 origin-left"
            />
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#C8A04B]/30 bg-[#FEFCF8] flex items-center justify-center relative z-10 hover:border-[#C8A04B] hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3
                    className="text-base text-[#0B2E20] mt-4 font-medium"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs text-[#0B2E20]/50 mt-1.5 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden relative pl-12">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute left-5 top-0 bottom-0 w-[1px] bg-[#C8A04B]/30 origin-top"
            />
            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative flex items-start gap-4"
                >
                  <div className="absolute -left-12 w-10 h-10 rounded-full border-2 border-[#C8A04B]/30 bg-[#FEFCF8] flex items-center justify-center flex-shrink-0">
                    <div className="scale-75">{step.icon}</div>
                  </div>
                  <div>
                    <h3
                      className="text-lg text-[#0B2E20] font-medium"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-[#0B2E20]/50 mt-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
