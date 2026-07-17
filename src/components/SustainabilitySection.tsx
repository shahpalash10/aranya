'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Custom hook for counter animation
function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (target === 0) { setCount(0); return; }
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

const features = [
  {
    title: 'Supporting Rural Women',
    description: 'Empowering 500+ women artisans across rural India',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Ethically Sourced',
    description: 'Fair trade practices with local communities',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Naturally Biodegradable',
    description: '100% biodegradable ingredients and packaging',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 8 8 4 8s-3 2-3 3c0 4 4 6 11 1" />
        <path d="M12 12C12 12 16 8 20 8s3 2 3 3c0 4-4 6-11 1" />
      </svg>
    ),
  },
  {
    title: 'Traditional Methods',
    description: 'Preserving centuries-old harvesting techniques',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A04B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76a6 6 0 010 8.49" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
];

const counters = [
  { value: 500, suffix: '+', label: 'Women Artisans' },
  { value: 100, suffix: '%', label: 'Natural Ingredients' },
  { value: 0, suffix: '', label: 'Synthetic Chemicals' },
  { value: 3, suffix: '', label: 'Generations of Wisdom' },
];

export default function SustainabilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const counterRef = useRef<HTMLDivElement>(null);
  const countersInView = useInView(counterRef, { once: true, margin: '-50px' });

  const count0 = useCountUp(counters[0].value, 2000, countersInView);
  const count1 = useCountUp(counters[1].value, 2000, countersInView);
  const count2 = useCountUp(counters[2].value, 2000, countersInView);
  const count3 = useCountUp(counters[3].value, 1500, countersInView);
  const countValues = [count0, count1, count2, count3];

  return (
    <section id="sustainability" className="bg-gradient-to-br from-[#F8F5EF] to-[#EDE8DC] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sustainability-harvest.jpg"
                alt="Rural Indian women carefully harvesting vibrant Palash flowers in a forest"
                width={800}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SUSTAINABILITY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl text-[#0B2E20] font-light mt-4 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Rooted in Community
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-[1px] bg-[#C8A04B] my-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#0B2E20]/70 text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Every ARANYA product begins with the hands of rural women who carefully harvest Palash flowers using traditional methods passed down through generations.
            </motion.p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-[#0B2E20]/5 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg text-[#0B2E20]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm text-[#0B2E20]/50 mt-0.5"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Counters */}
            <div ref={counterRef} className="grid grid-cols-2 gap-8 mt-12">
              {counters.map((counter, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={countersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-5xl text-[#C8A04B] font-light"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {countValues[i]}{counter.suffix}
                  </div>
                  <div
                    className="text-xs text-[#0B2E20]/50 mt-1 uppercase tracking-wider"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {counter.label}
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
