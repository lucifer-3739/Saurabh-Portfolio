"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSkills() {
  const educationTimeline = [
    {
      title: "B.Tech / B.Sc. in Computer Science",
      institution: "Tech University",
      period: "2022 — 2026",
      description: "Focused on software engineering, web technologies, algorithms, and human-computer interaction (HCI). Developed strong foundations in logic and structures.",
      icon: GraduationCap
    },
    {
      title: "Additional Design / UX Certification",
      institution: "Interaction Design Institute",
      period: "2025",
      description: "Specialized training covering user journey mapping, wireframing, motion choreography, typography, accessibility, and high-fidelity interface design.",
      icon: Award
    }
  ];

  const skillsList = [
    "WEB DESIGN",
    "UI/UX DESIGN",
    "FIGMA",
    "FRAMER",
    "REACT",
    "NEXT.JS",
    "TAILWIND",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "HTML / CSS",
    "GSAP",
    "MOTION DESIGN",
    "RESPONSIVE DESIGN",
    "DESIGN SYSTEMS",
    "GIT / GITHUB",
    "REST APIS"
  ];

  return (
    <section id="skills" className="relative bg-bg-primary py-20 sm:py-32 px-6 sm:px-12 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Education Timeline (col-span-6) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col text-left"
        >
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red uppercase mb-4">
            03 / BACKGROUND
          </span>
          <h2 className="font-display font-bold text-5xl text-text-primary uppercase tracking-tight mb-12">
            EDUCATION
          </h2>

          <div className="relative border-l border-border-light pl-6 sm:pl-8 space-y-12">
            {educationTimeline.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div key={index} className="relative group">
                  {/* Timeline Dot / Indicator */}
                  <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 w-5 h-5 rounded-full bg-bg-primary border-2 border-accent-red flex items-center justify-center group-hover:bg-accent-red transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-display font-bold tracking-widest text-accent-red uppercase">
                      {edu.period}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary uppercase mt-1 leading-tight group-hover:text-accent-red transition-colors duration-300">
                      {edu.title}
                    </h3>
                    <span className="text-xs font-sans text-text-secondary font-medium tracking-wide uppercase mt-1">
                      {edu.institution}
                    </span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed mt-3">
                      {edu.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Skills Pill Tags Grid (col-span-6) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col text-left h-full lg:pl-8"
        >
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red uppercase mb-4">
            04 / TOOLKIT
          </span>
          <h2 className="font-display font-bold text-5xl text-text-primary uppercase tracking-tight mb-12">
            TECH SKILLS
          </h2>

          <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8">
            These are my core toolkits and technical frameworks. I use them daily to construct premium frontend interfaces, architect layouts, orchestrate transitions, and build scalable interactive digital products.
          </p>

          {/* Tags Flex wrap container */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {skillsList.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group cursor-default bg-bg-secondary/40 border border-border-light hover:border-accent-red py-2.5 px-4 rounded text-xs font-sans font-semibold tracking-wider text-text-primary uppercase transition-all duration-300 hover:bg-bg-secondary"
                data-cursor-hover
              >
                <span className="group-hover:text-accent-red transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
