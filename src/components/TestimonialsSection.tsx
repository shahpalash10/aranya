'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    photo: '/images/testimonial-1.jpg',
    name: 'Priya Sharma',
    location: 'Mumbai',
    quote: 'ARANYA has completely transformed my skincare routine. The cooling spray feels like a breath of fresh forest air on my skin. I use it every morning and evening.',
  },
  {
    photo: '/images/testimonial-2.jpg',
    name: 'Ananya Reddy',
    location: 'Bangalore',
    quote: "As someone with sensitive skin, finding natural products that actually work is rare. ARANYA's botanical approach is exactly what Indian skin needs.",
  },
  {
    photo: '/images/testimonial-3.jpg',
    name: 'Meera Kapoor',
    location: 'Delhi',
    quote: "The fact that it's sustainably sourced and supports rural women makes me love this product even more. It's luxury with a conscience.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#F8F5EF] py-24 md:py-32 px-6 md:px-12 lg:px-20">
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
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#0B2E20] font-light mt-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Loved by Our Community
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C8A04B] mx-auto mt-6"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="bg-white/60 backdrop-blur-md border border-[#0B2E20]/5 rounded-2xl p-8 hover:shadow-xl hover:border-[#C8A04B]/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#C8A04B">
                    <path d="M7 0l2.15 4.35L14 5.05l-3.5 3.41.83 4.84L7 11.1 2.67 13.3l.83-4.84L0 5.05l4.85-.7L7 0z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-4 relative">
                <span
                  className="text-6xl text-[#C8A04B]/15 absolute -top-4 -left-2 leading-none"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#0B2E20]/70 text-base leading-relaxed italic pl-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#0B2E20]/5">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div
                    className="text-base text-[#0B2E20]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-xs text-[#0B2E20]/40"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
