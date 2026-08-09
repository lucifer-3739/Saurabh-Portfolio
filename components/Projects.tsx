"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X, Calendar, Layers, ShieldCheck, ExternalLink } from "lucide-react";

interface Project {
  number: string;
  title: string;
  category: string;
  sub: string;
  year: string;
  image: string;
  description: string;
  services: string[];
  tech: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projectsList: Project[] = [
    {
      number: "01",
      title: "NEXORA",
      category: "SAAS PLATFORM",
      sub: "Real-time Web Analytics Dashboard",
      year: "2026",
      image: "/ui_saas_dashboard.jpg",
      description: "Nexora is a state-of-the-art web analytics SaaS dashboard built for product teams. It aggregates high-volume stream tracking, user-behavior maps, and conversion funnels into a highly readable, high-performance web interface.",
      services: ["UI/UX Design", "System Architecture", "Frontend Development", "Brand Identity"],
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Recharts"]
    },
    {
      number: "02",
      title: "LUMEN",
      category: "CREATIVE STUDIO",
      sub: "Brutalist Agency Homepage",
      year: "2026",
      image: "/ui_brutalist_studio.jpg",
      description: "Lumen is a portfolio website and brand showcase for a minimalist creative studio. The interface is defined by oversized typography, asynchronous load animations, custom scroll triggers, and high-impact art directions.",
      services: ["Brutalism Research", "Visual UX Design", "Motion Engineering", "Content Strategy"],
      tech: ["Next.js", "GSAP Animations", "Tailwind CSS", "Three.js"]
    },
    {
      number: "03",
      title: "AETHER",
      category: "FASHION E-COMMERCE",
      sub: "Luxury Product Presentation",
      year: "2026",
      image: "/ui_fashion_ecommerce.jpg",
      description: "Aether is a concept e-commerce platform designed for a luxury fashion house. It features full-screen media scrolls, smooth slide transitions, elegant cart flows, and secure Stripe payment integrations.",
      services: ["E-commerce UX", "Editorial Grid layouts", "API integrations", "Fullstack Engineering"],
      tech: ["React", "Next.js", "Stripe API", "Tailwind CSS", "Headless CMS"]
    },
    {
      number: "04",
      title: "KINNVITE",
      category: "EVENT PLATFORM",
      sub: "Digital Invitation SaaS",
      year: "2026",
      image: "/ui_fashion_ecommerce.jpg",
      description: "Kinnvite is a stylish invitation SaaS platform designed for premium event coordinators. It features responsive custom templates, real-time RSVP tables, calendar syncing, and customized email reminders.",
      services: ["UI/UX Design", "Interactive Form Flows", "Frontend Engineering", "Database Systems"],
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Resend API", "Framer Motion"]
    },
    {
      number: "05",
      title: "NOVA",
      category: "DIGITAL PRODUCT",
      sub: "Developer Productivity Suite",
      year: "2025",
      image: "/ui_saas_dashboard.jpg",
      description: "Nova is a developer terminal tool dashboard that aggregates workspace diagnostics, container health metrics, and automated deployment logs. It streamlines build flows into a sleek brutalist dark dashboard.",
      services: ["Interface Engineering", "UX Research", "Performance Optimization", "Data Visualization"],
      tech: ["React", "Next.js", "Tailwind CSS", "WebSockets", "D3.js"]
    },
    {
      number: "06",
      title: "ARC",
      category: "PORTFOLIO EXPERIENCE",
      sub: "Immersive Creative Portfolio",
      year: "2026",
      image: "/ui_brutalist_studio.jpg",
      description: "Arc is an interactive portfolio experience designed for creative directors. It utilizes smooth frame transitions, responsive editorial grids, custom mouse cursors, and layout reveal sequences.",
      services: ["Art Direction", "Motion Engineering", "Responsive Layout Architecture"],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    }
  ];

  return (
    <section id="projects" className="relative bg-bg-primary py-20 sm:py-32 px-6 sm:px-12 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col select-none">
            <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red uppercase mb-4">
              02 / SELECTED WORK
            </span>
            <h2 className="font-display font-bold text-5xl sm:text-6xl text-text-primary uppercase tracking-tight">
              SELECTED PROJECTS
            </h2>
          </div>
          <a
            href="https://github.com/saurabhram9087"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-display font-bold tracking-widest text-text-primary uppercase border-b border-accent-red pb-1 group/btn hover:text-accent-red transition-all duration-300"
            data-cursor-hover
          >
            VIEW ALL PROJECTS
            <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-bg-secondary/40 border border-border-light rounded-lg overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-bg-secondary/70"
              data-cursor-text="VIEW"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-border-light">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                {/* Visual Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                
                {/* Float project number */}
                <div className="absolute top-4 left-4 bg-bg-primary/90 border border-border-light px-2.5 py-1 rounded font-display font-bold text-xs text-accent-red leading-none z-10">
                  {project.number}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] font-display font-semibold tracking-wider text-accent-red uppercase">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-sans text-text-secondary">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-text-primary uppercase tracking-wide group-hover:text-accent-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mt-2 line-clamp-2">
                    {project.sub}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border-light/40 mt-auto">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-text-secondary group-hover:text-text-primary transition-colors duration-300 uppercase">
                    EXPLORE CASE STUDY
                  </span>
                  <div className="w-7 h-7 rounded-full border border-border-light flex items-center justify-center group-hover:bg-accent-red group-hover:border-accent-red text-text-secondary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-bg-secondary border border-border-light rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 bg-bg-primary/80 border border-border-light hover:border-accent-red p-2.5 rounded-full text-text-primary hover:text-accent-red transition-all duration-300"
                aria-label="Close Case Study"
                data-cursor-hover
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                
                {/* Hero Banner inside Modal */}
                <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden border-b border-border-light">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 sm:left-12 flex flex-col">
                    <span className="text-[10px] sm:text-xs font-display font-bold tracking-widest text-accent-red bg-bg-primary/80 border border-border-light px-2.5 py-1 rounded uppercase self-start mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary uppercase tracking-wider">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Case Study Context Grid */}
                <div className="p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Left Column: Project Copy details */}
                  <div className="lg:col-span-7 flex flex-col text-left">
                    <h3 className="font-display font-semibold text-lg text-accent-red uppercase tracking-wider mb-3">
                      Overview
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-text-primary leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <h3 className="font-display font-semibold text-lg text-accent-red uppercase tracking-wider mb-3">
                      Scope of Services
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {selectedProject.services.map((svc, i) => (
                        <li key={i} className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-text-secondary">
                          <ShieldCheck className="w-4 h-4 text-accent-red shrink-0" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Links */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border-light/60">
                      <a
                        href="https://github.com/saurabhram9087"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent-red hover:bg-accent-darkred text-white text-xs font-display font-bold tracking-widest uppercase py-3.5 px-6 rounded transition-all duration-300"
                        data-cursor-hover
                      >
                        VISIT WEBSITE
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="flex items-center gap-2 border border-border-light hover:border-accent-red text-text-primary hover:text-accent-red text-xs font-display font-bold tracking-widest uppercase py-3.5 px-6 rounded transition-all duration-300"
                        data-cursor-hover
                      >
                        CLOSE CASE STUDY
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Details Panel */}
                  <div className="lg:col-span-5 flex flex-col gap-6 text-left border-l border-border-light/60 pl-0 lg:pl-8">
                    
                    {/* Meta Detail block 1 */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded border border-border-light flex items-center justify-center text-accent-red shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-display font-bold text-text-secondary tracking-widest uppercase">
                          YEAR
                        </span>
                        <span className="text-sm font-sans font-medium text-text-primary mt-0.5">
                          {selectedProject.year}
                        </span>
                      </div>
                    </div>

                    {/* Meta Detail block 2 */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded border border-border-light flex items-center justify-center text-accent-red shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] font-display font-bold text-text-secondary tracking-widest uppercase mb-1">
                          TECHNOLOGIES
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-0.5">
                          {selectedProject.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="text-[9px] font-sans font-semibold tracking-wider text-text-primary bg-bg-primary border border-border-light px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
