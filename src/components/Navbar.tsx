'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[55] transition-all duration-500 px-6 md:px-12 lg:px-20 py-4 ${
          scrolled
            ? 'bg-[#0B2E20]/90 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="font-heading text-xl tracking-[0.3em] uppercase text-[#C8A04B] hover:text-[#E8D5A0] transition-colors duration-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            ARANYA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] tracking-[0.15em] uppercase text-[#F8F5EF]/70 hover:text-[#C8A04B] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#cta"
            onClick={(e) => handleNavClick(e, '#cta')}
            className="hidden md:block text-[12px] tracking-[0.15em] uppercase text-[#C8A04B] border border-[#C8A04B]/40 rounded-full px-6 py-2.5 hover:bg-[#C8A04B]/10 hover:border-[#C8A04B]/70 transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-[#C8A04B] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-[#C8A04B] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-[#C8A04B] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[54] bg-[#0B2E20] flex items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-[#C8A04B] p-2"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl tracking-[0.2em] uppercase text-[#F8F5EF] hover:text-[#C8A04B] transition-colors duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={(e) => handleNavClick(e, '#cta')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-sm tracking-[0.2em] uppercase text-[#C8A04B] border border-[#C8A04B]/40 rounded-full px-8 py-3 hover:bg-[#C8A04B]/10 transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Explore
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
