"use client";

import { Code2 } from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current?.querySelectorAll(".tech-tag") || [],
      { opacity: 0, scale: 0.8, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: "back.out(1.5)",
        clearProps: "all",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef}>
      <h2
        className="
          text-lg font-semibold mb-4 flex items-center gap-2
          text-zinc-900 dark:text-white
        "
      >
        <Code2 className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        Stack
      </h2>

      <div className="flex flex-wrap gap-2">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Node.js",
          "PostgreSQL",
          "Figma",
          "MySQL",
          "Prisma",
          "Git",
          "Vercel",
        ].map((tech) => (
          <span
            key={tech}
            className="
              px-3 py-1 rounded-full text-xs cursor-default
              bg-white/70 dark:bg-zinc-900/50
              border border-black/10 dark:border-zinc-800
              text-zinc-700 dark:text-zinc-400
              hover:text-zinc-900 dark:hover:text-zinc-200
              hover:border-black/20 dark:hover:border-zinc-700
              transition-colors backdrop-blur-md
              tech-tag opacity-0
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
