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
        <div className="flex flex-col select-none">
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red leading-none uppercase">
            WEB DEVELOPER
          </span>
          <span className="text-xs font-sans font-medium text-text-primary tracking-wider mt-1 uppercase">
            DIGITAL CREATOR
          </span>
        </div>

        {/* Right Side: Availability */}
        <div className="flex items-center gap-2 select-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <Sparkle className="w-3.5 h-3.5 text-accent-red fill-accent-red" />
          </motion.div>
          <span className="text-[10px] sm:text-xs font-sans font-medium text-text-primary tracking-widest uppercase">
            AVAILABLE FOR FREELANCE
          </span>
        </div>
      </div>
    </motion.header>
  );
}
