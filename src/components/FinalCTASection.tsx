'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" className="relative min-h-[80vh] overflow-hidden flex items-center justify-center">
      <style>{`
        @keyframes shimmerGlowCta {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(200, 160, 75, 0.2)); }
          50% { filter: drop-shadow(0 0 40px rgba(200, 160, 75, 0.5)); }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-forest.jpg"
          alt="Forest background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#0B2E20]/78" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6" ref={ref}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] mx-auto relative flex items-center justify-center">
            <Image
              src="/images/aranya-logo-transparent.png"
              alt="ARANYA logo"
              width={500}
              height={500}
              className="w-full h-full object-contain"
              style={{ animation: 'shimmerGlowCta 3s ease-in-out infinite' }}
            />
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-[1px] bg-[#C8A04B] mx-auto mb-8"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl text-[#F8F5EF] font-light leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Experience Nature&apos;s<br />Cooling Touch.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#F8F5EF]/55 text-lg mt-5"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Join the ARANYA journey. Botanical luxury, rooted in tradition.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            className="mt-10 bg-[#C8A04B] text-[#0B2E20] rounded-full px-12 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#D4B05B] hover:shadow-[0_0_30px_rgba(200,160,75,0.3)] transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Coming Soon
          </button>
        </motion.div>
      </div>
    </section>
  );
}
