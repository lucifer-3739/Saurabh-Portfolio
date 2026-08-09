"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Plus } from "lucide-react";

export default function Hero() {
  // Animation configurations
  const textRevealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const imageFadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary py-12 px-6 sm:px-12 border-b border-border-light">
      {/* Giant Red Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center select-none z-0 pointer-events-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="font-display font-bold text-[24vw] leading-none text-accent-red tracking-tight text-center"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Main 12-Column Grid */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Designer Identity & Details (col-span-5) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col justify-center text-left"
        >
          {/* Handwritten greeting */}
          <motion.p
            variants={textRevealVariants}
            transition={{ duration: 0.6 }}
            className="font-script text-3xl sm:text-4xl text-accent-red tracking-wide mb-2"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Stacked Name */}
          <motion.div
            variants={textRevealVariants}
            transition={{ duration: 0.8 }}
            className="flex flex-col mb-4"
          >
            <h2 className="font-display font-bold text-6xl sm:text-7xl xl:text-8xl leading-[0.9] text-text-primary tracking-tight uppercase">
              SAURABH
            </h2>
            <h2 className="font-display font-bold text-6xl sm:text-7xl xl:text-8xl leading-[0.9] text-text-primary tracking-tight uppercase">
              SHARMA
            </h2>
          </motion.div>

          {/* Role subtitle */}
          <motion.h3
            variants={textRevealVariants}
            transition={{ duration: 0.6 }}
            className="font-display text-xl sm:text-2xl tracking-widest uppercase mb-6"
          >
            <span className="text-text-primary">WEB DEVELOPER & </span>
            <span className="text-accent-red font-bold">UI/UX CREATOR</span>
          </motion.h3>

          {/* Short personal description */}
          <motion.p
            variants={textRevealVariants}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mb-8"
          >
            I design and build stylish, user-focused digital experiences that combine creativity with strategy. Passionate about clean design, smooth interactions, and details that make a difference.
          </motion.p>

          {/* Availability details */}
          <motion.div
            variants={textRevealVariants}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-text-primary uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
            </span>
            <Globe className="w-4 h-4 text-text-secondary" />
            <span>AVAILABLE WORLDWIDE</span>
          </motion.div>
        </motion.div>

        {/* CENTER COLUMN: Cutout Portrait (col-span-4) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageFadeVariants}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-4 flex justify-center relative w-full h-[320px] sm:h-[450px] lg:h-[550px] select-none"
        >
          {/* Subtle red rim light drop shadow background */}
          <div className="absolute inset-0 bg-radial from-accent-red/20 via-transparent to-transparent blur-3xl z-0 scale-75" />
          
          <div className="relative w-full h-full max-w-[360px] lg:max-w-none">
            <Image
              src="/developer_portrait.jpg"
              alt="Saurabh Sharma Portrait"
              fill
              priority
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 rounded-b-2xl border border-white/5 shadow-2xl shadow-accent-red/10 z-10"
            />
            {/* Dark editorial masking overlay for blending into black background */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-primary to-transparent z-20 pointer-events-none" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Statistics & Branding (col-span-3) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 flex flex-col justify-between h-full gap-8 lg:gap-12"
        >
          {/* Stats List */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
            {/* Stat 1 */}
            <motion.div
              variants={textRevealVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="font-display font-bold text-4xl sm:text-5xl text-accent-red leading-none">
                01+
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-text-secondary tracking-widest uppercase mt-1 leading-tight">
                YEARS<br />EXPERIENCE
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={textRevealVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="font-display font-bold text-4xl sm:text-5xl text-accent-red leading-none">
                25+
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-text-secondary tracking-widest uppercase mt-1 leading-tight">
                PROJECTS<br />COMPLETED
              </span>
            </motion.div>

            {/* Stat 3 */}
            {/* <motion.div
              variants={textRevealVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="font-display font-bold text-4xl sm:text-5xl text-accent-red leading-none">
                20+
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-text-secondary tracking-widest uppercase mt-1 leading-tight">
                HAPPY<br />CLIENTS
              </span>
            </motion.div> */}
          </div>

          {/* Decorative Crosshair Circle element */}
          <motion.div
            variants={textRevealVariants}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4 border border-border-light p-5 rounded-lg relative overflow-hidden bg-bg-secondary/40 backdrop-blur-sm self-start lg:self-auto w-full"
          >
            {/* Top-Right Corner Crosshair */}
            <div className="absolute top-2 right-2 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5 text-accent-red/60" />
            </div>
            
            <div className="w-10 h-10 rounded-full border border-dashed border-accent-red/40 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-sans font-semibold tracking-wider text-text-primary leading-snug">
                Turning ideas into powerful digital experiences.
              </span>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
