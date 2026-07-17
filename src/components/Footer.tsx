export default function Footer() {
  return (
    <footer className="bg-[#0B2E20] border-t border-[#C8A04B]/10">
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center">
          <span
            className="text-2xl tracking-[0.3em] uppercase text-[#C8A04B]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ARANYA
          </span>
          <p
            className="text-[#F8F5EF]/40 text-sm mt-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Affordable Luxury. Botanical Skincare.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#C8A04B]/20 mx-auto my-8" />

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-[#F8F5EF]/40 hover:text-[#C8A04B] transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" aria-label="Twitter" className="text-[#F8F5EF]/40 hover:text-[#C8A04B] transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733-16z" />
              <path d="M4 20l6.768-6.768" />
              <path d="M20 4l-6.768 6.768" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-[#F8F5EF]/40 hover:text-[#C8A04B] transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p
            className="text-[#F8F5EF]/20 text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            &copy; 2024 ARANYA. All rights reserved.
          </p>
          <p
            className="text-[#F8F5EF]/15 text-xs mt-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Crafted with ♥ from India
          </p>
        </div>
      </div>
    </footer>
  );
}
