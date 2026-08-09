"use client";

import { motion } from "framer-motion";
import { Search, Compass, Paintbrush, Code, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      icon: Search,
      description: "Understanding goals, audience research, establishing business requirements, mapping user personas, and determining the overall strategic project direction."
    },
    {
      num: "02",
      title: "IDEATE",
      icon: Compass,
      description: "Drafting wireframes, compiling typography moodboards, establishing interactive user-flows, and solidifying the primary creative and engineering concepts."
    },
    {
      num: "03",
      title: "DESIGN",
      icon: Paintbrush,
      description: "Designing the visual system, user interface assets, responsive layouts, motion choreographies, and compiling modern design system components."
    },
    {
      num: "04",
      title: "DEVELOP",
      icon: Code,
      description: "Translating static blueprints into clean, optimized TypeScript, Next.js code. Building fast, responsive, accessible, and high-performance websites."
    },
    {
      num: "05",
      title: "DELIVER",
      icon: Rocket,
      description: "Running linting/build tests, optimizing load performance, perfecting page transitions, checking SEO accessibility, and launching the final digital product."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="process" className="relative bg-bg-primary py-20 sm:py-32 px-6 sm:px-12 border-b border-border-light overflow-hidden">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 select-none">
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red uppercase mb-4">
            05 / METHODOLOGY
          </span>
          <h2 className="font-display font-bold text-5xl text-text-primary uppercase tracking-tight">
            WORK PROCESS
          </h2>
        </div>

        {/* Vertical Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 sm:pl-16 border-l border-border-light space-y-16"
        >
          {/* Vertical Running Accent Line */}
          <div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent-red via-accent-red/40 to-transparent pointer-events-none" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 group"
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[35px] sm:-left-[75px] top-0 w-8 h-8 rounded-full bg-bg-primary border-2 border-accent-red flex items-center justify-center group-hover:bg-accent-red transition-all duration-300 z-10">
                  <span className="text-[10px] font-display font-bold text-accent-red group-hover:text-white leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Content Box */}
                <div className="flex-1 flex flex-col text-left">
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-8 h-8 rounded bg-bg-secondary border border-border-light flex items-center justify-center text-accent-red group-hover:border-accent-red transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary tracking-widest uppercase mt-0.5 group-hover:text-accent-red transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
