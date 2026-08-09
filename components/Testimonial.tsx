"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="relative bg-bg-primary py-24 sm:py-32 px-6 sm:px-12 border-b border-border-light overflow-hidden">
      {/* Dark Red Panel Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-accent-darkred rounded-2xl p-8 sm:p-16 lg:p-24 relative overflow-hidden flex flex-col justify-center border border-accent-red/30 shadow-2xl shadow-accent-darkred/20 text-center"
      >
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Massive quotation marks */}
        <div className="font-display text-8xl sm:text-[12rem] leading-none text-white/10 select-none absolute top-4 left-6 sm:left-16 pointer-events-none">
          &ldquo;
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Main philosophy quote */}
          <blockquote className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-wide leading-tight uppercase max-w-4xl mb-8">
            Good design is not just how it looks, but how it works.
          </blockquote>

          {/* Signature */}
          <cite className="not-italic flex flex-col items-center">
            <span className="font-script text-4xl sm:text-5xl text-white tracking-wide">
              — Saurabh Sharma
            </span>
          </cite>

          <div className="w-16 h-[1px] bg-white/30 my-8 sm:my-10" />

          {/* Closing action line */}
          <p className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] text-white/80 uppercase">
            LET&apos;S CREATE SOMETHING GREAT TOGETHER.
          </p>
        </div>

        {/* Mirror Quote */}
        <div className="font-display text-8xl sm:text-[12rem] leading-none text-white/10 select-none absolute bottom-[-4rem] right-6 sm:right-16 pointer-events-none">
          &rdquo;
        </div>
      </motion.div>
    </section>
  );
}
