'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Botanical Heritage',
    subtitle: 'Centuries of wisdom',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28V14" />
        <path d="M16 14C16 14 12 10 8 10C4 10 2 14 2 16C2 20 6 22 16 14" />
        <path d="M16 14C16 14 20 10 24 10C28 10 30 14 30 16C30 20 26 22 16 14" />
      </svg>
    ),
  },
  {
    title: 'Natural Formulation',
    subtitle: 'Pure ingredients',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v8" />
        <path d="M12 12h8l2 16H10l2-16z" />
        <circle cx="16" cy="22" r="2" />
      </svg>
    ),
  },
  {
    title: 'Sustainable',
    subtitle: 'Earth conscious',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24" />
        <path d="M16 4c-4 4-4 12 0 24" />
        <path d="M16 4c4 4 4 12 0 24" />
      </svg>
    ),
  },
  {
    title: 'Gentle on Skin',
    subtitle: 'Dermatologist tested',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28s-10-6-10-14c0-4 3.5-8 10-2c6.5-6 10-2 10 2c0 8-10 14-10 14z" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-[#F8F5EF] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/aranya-bottle.jpg"
                alt="ARANYA Palash Botanical Cooling Spray bottle surrounded by Palash flowers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C8A04B]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span
              variants={itemVariants}
              className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              OUR STORY
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl text-[#0B2E20] font-light mt-4 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Nature. Tradition.<br />Innovation.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-16 h-[1px] bg-[#C8A04B] my-6"
            />

            <motion.p
              variants={itemVariants}
              className="text-[#0B2E20]/70 text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Inspired by centuries of botanical heritage, ARANYA transforms the Palash flower into a refreshing botanical cooling spray crafted for modern Indian skin.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-5 mt-12"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-5 border border-[#0B2E20]/8 rounded-xl hover:border-[#C8A04B]/30 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-lg text-[#0B2E20]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm text-[#0B2E20]/50 mt-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.subtitle}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
