"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { name: "LINKEDIN", url: "https://linkedin.com" },
    { name: "GITHUB", url: "https://github.com/lucifer-3739" },
    { name: "DRIBBBLE", url: "https://dribbble.com" },
    { name: "INSTAGRAM", url: "https://instagram.com" },
  ];

  return (
    <footer className="w-full bg-bg-primary py-8 px-6 sm:px-12 border-t border-border-light z-30 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-[10px] font-sans font-medium tracking-widest text-text-secondary uppercase">
          &copy; 2026 SAURABH SHARMA
        </div>

        {/* Center: Intention branding */}
        <div className="text-[10px] font-sans font-medium tracking-[0.25em] text-text-primary uppercase text-center">
          DESIGNED &amp; DEVELOPED WITH INTENTION.
        </div>

        {/* Right Side: Social links */}
        <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-display font-bold tracking-widest text-text-secondary hover:text-accent-red transition-colors duration-300 uppercase"
              data-cursor-hover
            >
              {social.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
