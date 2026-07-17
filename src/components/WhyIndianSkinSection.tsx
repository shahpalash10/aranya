'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const points = [
  {
    title: 'Heat Relief',
    subtitle: 'Natural cooling for Indian summers',
    angle: -90, // top
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    title: 'Cooling Comfort',
    subtitle: 'Instant soothing sensation',
    angle: -18, // top-right
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M12 2l-4 4M12 2l4 4" />
        <path d="M4 8l4 4-4 4" />
        <path d="M20 8l-4 4 4 4" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Botanical Care',
    subtitle: 'Traditional Ayurvedic ingredients',
    angle: 54, // right
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 8 8 4 8c-2 0-3 2-3 3 0 4 4 6 11 1" />
        <path d="M12 12C12 12 16 8 20 8c2 0 3 2 3 3 0 4-4 6-11 1" />
      </svg>
    ),
  },
  {
    title: 'Skin Comfort',
    subtitle: 'Gentle on sensitive Indian skin',
    angle: 126, // bottom-right
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Everyday Refreshment',
    subtitle: 'Your daily botanical ritual',
    angle: 198, // bottom-left
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v6l3 3" />
        <circle cx="12" cy="14" r="8" />
      </svg>
    ),
  },
];

export default function WhyIndianSkinSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const radius = 220; // px from center to each point

  return (
    <section className="bg-[#F8F5EF] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            DESIGNED FOR YOU
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#0B2E20] font-light mt-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Why Indian Skin?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C8A04B] mx-auto mt-6"
          />
        </div>

        {/* Desktop: Circular Infographic */}
        <div className="hidden lg:flex justify-center w-full max-w-[800px] mx-auto mt-10">
          <div className="relative w-full aspect-square">
            {/* Center bottle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
              animate={isInView ? { opacity: 1, scale: 1, x: "-50%", y: "-50%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute rounded-full overflow-hidden border-2 border-[#C8A04B]/20 z-20 bg-[#F8F5EF]"
              style={{
                width: '28%',
                height: '28%',
                left: '50%',
                top: '50%',
              }}
            >
              <Image
                src="/images/aranya-bottle.jpg"
                alt="ARANYA bottle"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* SVG Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 100 100"
            >
              {points.map((point, i) => {
                const rad = (point.angle * Math.PI) / 180;
                // Center is 50, 50. Line radius is 38%
                const endX = 50 + 38 * Math.cos(rad);
                const endY = 50 + 38 * Math.sin(rad);
                return (
                  <motion.line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={endX}
                    y2={endY}
                    stroke="#C8A04B"
                    strokeWidth="0.2"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Points */}
            {points.map((point, i) => {
              const rad = (point.angle * Math.PI) / 180;
              const x = 50 + 38 * Math.cos(rad);
              const y = 50 + 38 * Math.sin(rad);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                  animate={isInView ? { opacity: 1, scale: 1, x: "-50%", y: "-50%" } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                  className="absolute text-center z-30"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: '32%',
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#0B2E20]/5 border border-[#C8A04B]/20 flex items-center justify-center mx-auto mb-2 bg-[#F8F5EF]">
                    {point.icon}
                  </div>
                  <h3
                    className="text-base lg:text-lg text-[#0B2E20] font-medium leading-tight px-2 bg-[#F8F5EF] inline-block"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-xs text-[#0B2E20]/60 mt-1 px-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {point.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical List */}
        <div className="lg:hidden space-y-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-4 border-l-2 border-[#C8A04B]/20 pl-6 py-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#0B2E20]/5 border border-[#C8A04B]/20 flex items-center justify-center flex-shrink-0">
                <div className="scale-90">{point.icon}</div>
              </div>
              <div>
                <h3
                  className="text-lg text-[#0B2E20] font-medium"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-sm text-[#0B2E20]/50 mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {point.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
