'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="bg-[#0B2E20] py-24 md:py-32 px-6 border-t border-[#C8A04B]/10">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C8A04B] text-xs tracking-[0.3em] uppercase block mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Get In Touch
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl text-[#F8F5EF] font-light mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-[1px] bg-[#C8A04B] mx-auto mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Rupal Shah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-[#F8F5EF]/5 border border-[#C8A04B]/20 hover:border-[#C8A04B]/50 hover:bg-[#F8F5EF]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#C8A04B]/10 flex items-center justify-center mx-auto mb-6 text-[#C8A04B] group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl text-[#F8F5EF] font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Rupal Shah
            </h3>
            <a href="tel:+919391328150" className="text-[#F8F5EF]/70 hover:text-[#C8A04B] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              +91 93913 28150
            </a>
          </motion.div>

          {/* Meera Goradia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl bg-[#F8F5EF]/5 border border-[#C8A04B]/20 hover:border-[#C8A04B]/50 hover:bg-[#F8F5EF]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#C8A04B]/10 flex items-center justify-center mx-auto mb-6 text-[#C8A04B] group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl text-[#F8F5EF] font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Meera Goradia
            </h3>
            <a href="tel:+919885562024" className="text-[#F8F5EF]/70 hover:text-[#C8A04B] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              +91 98855 62024
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
