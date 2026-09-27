"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full sticky top-0 z-40 bg-bg-primary/80 backdrop-blur-md border-b border-border-light"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
        {/* Left Side: Branding */}
        <a href="#" className="flex flex-col select-none group" data-cursor-hover>
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red leading-none uppercase group-hover:text-white transition-colors">
            SAURABH SHARMA
          </span>
          <span className="text-xs font-sans font-medium text-text-primary tracking-wider mt-1 uppercase">
            CREATIVE DEVELOPER
          </span>
        </a>

        {/* Center: Quick Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-xs font-sans font-medium tracking-widest text-text-secondary hover:text-white uppercase transition-colors"
            data-cursor-hover
          >
            About
          </a>
          <a
            href="#projects"
            className="text-xs font-sans font-medium tracking-widest text-text-secondary hover:text-white uppercase transition-colors"
            data-cursor-hover
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-xs font-sans font-medium tracking-widest text-text-secondary hover:text-white uppercase transition-colors"
            data-cursor-hover
          >
            Skills
          </a>
          <a
            href="#process"
            className="text-xs font-sans font-medium tracking-widest text-text-secondary hover:text-white uppercase transition-colors"
            data-cursor-hover
          >
            Process
          </a>
        </nav>

        {/* Right Side: Availability & Contact CTA */}
        <div className="flex items-center gap-4 select-none">
          <div className="hidden sm:flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <Sparkle className="w-3.5 h-3.5 text-accent-red fill-accent-red" />
            </motion.div>
            <span className="text-[10px] font-sans font-medium text-text-secondary tracking-widest uppercase">
              AVAILABLE
            </span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded border border-accent-red bg-accent-red/10 hover:bg-accent-red text-accent-red hover:text-white text-[10px] font-display font-bold tracking-widest uppercase transition-all duration-300"
            data-cursor-hover
          >
            LET&apos;S TALK →
          </a>
        </div>
      </div>
    </motion.header>
  );
}
