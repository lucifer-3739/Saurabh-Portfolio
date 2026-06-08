"use client";

import { Code2, ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LightRays } from "@/components/ui/light-rays";

const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current?.querySelectorAll(".project-card") || [],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform",
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
        <Terminal className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            name: "Discord Clone",
            desc: "A modern Web Chat Application buildw with next.js and Tailwind CSS. with Realtime Messaging and Voice Chat Features.",
            href: "https://github.com/lucifer-3739/discord",
          },
          {
            name: "CodeOwl",
            desc: "A Web Note Taking Application for Developers with Syntax Highlighting and Code Snippets.",
            href: "https://github.com/lucifer-3739/CodeOwl",
          },
          {
            name: "Super Productivity",
            desc: "An task management app with time tracking and pomodoro timer. Build Withe Next js, Tailwind CSS and Docker.",
            href: "https://github.com/lucifer-3739/super-productive",
          },
          {
            name: "E-commerce Starter",
            desc: "Headless Shopify starter with extreme customization.",
          },
        ].map((project, i) => (
          <Link
            key={i}
            href={project.href || "#"}
            className="
              group block p-5 rounded-2xl transition-all relative overflow-hidden
              bg-white/70 dark:bg-zinc-900/30
              border border-black/10 dark:border-white/5
              hover:border-black/20 dark:hover:border-white/10
              hover:bg-black/5 dark:hover:bg-zinc-900/50
              backdrop-blur-md
              project-card opacity-0
            "
          >
            {/* Light Rays Background */}
            <LightRays
              count={3}
              length="100%"
              blur={16}
              speed={16}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <div
                  className="
                    p-2 rounded-lg transition-colors
                    bg-black/5 dark:bg-zinc-800/50
                    text-zinc-600 dark:text-zinc-300
                    group-hover:text-zinc-900 dark:group-hover:text-white
                  "
                >
                  <Code2 className="w-4 h-4" />
                </div>

                <ExternalLink
                  className="
                    w-4 h-4 transition-colors
                    text-zinc-400 dark:text-zinc-500
                    group-hover:text-zinc-700 dark:group-hover:text-zinc-300
                  "
                />
              </div>

              <h3 className="font-medium mb-1 text-zinc-900 dark:text-zinc-200">
                {project.name}
              </h3>

              <p className="text-xs line-clamp-2 text-zinc-600 dark:text-zinc-500">
                {project.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
