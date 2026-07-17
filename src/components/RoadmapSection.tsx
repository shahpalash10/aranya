'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const roadmapItems = [
  {
    badge: 'NOW',
    title: 'Cooling Spray',
    description: 'ARANYA Botanical Cooling Spray — our flagship product crafted from Palash flower extract.',
    isCurrent: true,
  },
  {
    badge: '2026',
    title: 'Botanical Tea',
    description: 'Traditional Palash flower tea blend for inner wellness.',
    isCurrent: false,
  },
  {
    badge: '2027',
    title: 'Natural Soap',
    description: 'Handcrafted botanical soap with Palash extract.',
    isCurrent: false,
  },
  {
    badge: '2027',
    title: 'Expanded Collection',
    description: 'A complete botanical wellness line inspired by Indian forests.',
    isCurrent: false,
  },
];

export default function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#0B2E20] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            THE FUTURE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#F8F5EF] font-light mt-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Growth Roadmap
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C8A04B] mx-auto mt-6"
          />
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#C8A04B]/30 origin-top md:transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {roadmapItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#C8A04B] transform -translate-x-1/2 z-10 ${
                    item.isCurrent ? 'bg-[#C8A04B]' : 'bg-[#0B2E20]'
                  }`}
                />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <div className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#C8A04B]/30 hover:shadow-[0_0_20px_rgba(200,160,75,0.08)] transition-all duration-300 ${
                    item.isCurrent ? 'border-[#C8A04B]/30' : 'border-white/10'
                  }`}>
                    <span
                      className={`text-xs px-3 py-1 rounded-full inline-block mb-3 ${
                        item.isCurrent
                          ? 'bg-[#C8A04B]/20 text-[#C8A04B]'
                          : 'bg-white/5 text-[#F8F5EF]/40'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.badge}
                    </span>
                    <h3
                      className="text-xl text-[#F8F5EF]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-[#F8F5EF]/50 mt-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>
                    {!item.isCurrent && (
                      <span
                        className="text-xs text-[#C8A04B]/40 mt-3 block uppercase tracking-wider"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
