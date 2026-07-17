'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated background styles */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }
        @keyframes shimmerGlow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(200, 160, 75, 0.2)); }
          50% { filter: drop-shadow(0 0 35px rgba(200, 160, 75, 0.5)); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0) translateX(-50%); opacity: 0.5; }
          50% { transform: translateY(10px) translateX(-50%); opacity: 1; }
        }
      `}</style>

      {/* Background image with Ken Burns effect */}
      <div
        className="absolute inset-0"
        style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }}
      >
        <Image
          src="/images/hero-forest.jpg"
          alt="Lush Indian forest canopy with golden sunlight filtering through"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E20]/60 via-[#0B2E20]/40 to-[#0B2E20]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8"
        >
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] mx-auto relative flex items-center justify-center">
            <Image
              src="/images/aranya-logo-transparent.png"
              alt="ARANYA botanical skincare logo"
              width={500}
              height={500}
              className="w-full h-full object-contain"
              style={{ animation: 'shimmerGlow 3s ease-in-out infinite' }}
              priority
            />
          </div>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-16 h-[1px] bg-[#C8A04B] mx-auto mb-8"
        />

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F5EF] tracking-wide leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Affordable Luxury.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Botanical Skincare.
            </motion.span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg md:text-xl text-[#F8F5EF]/60 tracking-wider mt-6"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Inspired by India&apos;s Flame of the Forest.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            href="#about"
            onClick={handleExploreClick}
            className="inline-block mt-10 bg-[#C8A04B]/10 border border-[#C8A04B] text-[#C8A04B] rounded-full px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#C8A04B]/20 hover:scale-[1.02] transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Explore ARANYA
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 text-[#C8A04B]/50"
        style={{ animation: 'bounceArrow 2s ease-in-out infinite' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 7l5 5 5-5" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
}
