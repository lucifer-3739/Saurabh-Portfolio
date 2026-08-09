"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const metadata = [
    { label: "ROLE", value: "Creative Developer & UI/UX Designer" },
    { label: "BASED IN", value: "India" },
    {
      label: "SPECIALIZED IN",
      value: "Creative Frontend Dev • UI/UX Design • Interactive Applications • Responsive Design Systems",
    },
  ];

  return (
    <section id="about" className="relative bg-bg-primary py-20 sm:py-32 px-6 sm:px-12 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Large Editorial Typography & Philosophy (col-span-7) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col"
        >
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red uppercase mb-4">
            01 / INTRODUCTION
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl leading-tight text-text-primary uppercase tracking-tight">
            CRAFTING DIGITAL
            <br />
            EXPERIENCES.
          </h2>
          
          <div className="w-20 h-[2px] bg-accent-red my-8" />

          <p className="font-sans text-lg sm:text-xl text-text-primary font-light leading-relaxed mb-6">
            I bridge the gap between creative visual designs and powerful clean code. For me, web development isn&apos;t just about writing code; it&apos;s about creating memorable, immersive digital journeys that load instantly, respond perfectly, and tell a unique story.
          </p>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            By combining styling frameworks like Tailwind, interactive animation engines like Framer Motion, and robust tech stacks like Next.js and TypeScript, I build fluid digital solutions. Whether it&apos;s a complex web dashboard or an interactive brand experience, I strive for execution excellence.
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Asymmetrical Editorial Metadata Grid (col-span-5) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex flex-col w-full border-b border-border-light lg:mt-16"
        >
          {metadata.map((item, index) => (
            <div
              key={index}
              className="group py-6 border-t border-border-light flex flex-col gap-2 transition-all duration-300 hover:bg-bg-secondary/20 px-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-display font-semibold tracking-widest text-accent-red uppercase">
                  {item.label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
              </div>
              <p className="font-sans text-sm sm:text-base text-text-primary tracking-wide leading-relaxed uppercase">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
