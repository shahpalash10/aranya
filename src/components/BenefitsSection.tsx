'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const benefits = [
  {
    title: 'Cooling Sensation',
    description: 'Instant refreshment for warm days',
  },
  {
    title: 'Botanical Ingredients',
    description: '100% natural Palash extract',
  },
  {
    title: 'Gentle Daily Care',
    description: 'Safe for everyday use',
  },
  {
    title: 'Naturally Refreshing',
    description: 'No artificial fragrances',
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable from source to bottle',
  },
];

export default function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="benefits" className="bg-[#0B2E20] py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(200, 160, 75, 0.1), 0 0 40px rgba(200, 160, 75, 0.05); }
          50% { box-shadow: 0 0 30px rgba(200, 160, 75, 0.2), 0 0 60px rgba(200, 160, 75, 0.1); }
        }
      `}</style>

      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,160,75,0.03)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            BENEFITS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#F8F5EF] font-light mt-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The ARANYA Difference
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C8A04B] mx-auto mt-6"
          />
        </div>

        {/* Center Flower Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center my-12 md:my-16"
        >
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-[#C8A04B]/30 ring-offset-4 ring-offset-[#0B2E20]"
            style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
          >
            <Image
              src="/images/palash-flower.jpg"
              alt="Vibrant orange Palash flower - the key ingredient in ARANYA products"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#C8A04B]/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(200,160,75,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-default"
            >
              {/* Check icon */}
              <div className="w-10 h-10 rounded-full bg-[#C8A04B]/10 flex items-center justify-center mx-auto">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C8A04B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9l4 4 6-7" />
                </svg>
              </div>
              <h3
                className="text-lg text-[#F8F5EF] mt-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-sm text-[#F8F5EF]/50 mt-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
