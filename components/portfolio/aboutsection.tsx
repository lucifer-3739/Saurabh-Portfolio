"use client";

import { Briefcase } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LightRays } from "@/components/ui/light-rays";

const Aboutsection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current?.querySelectorAll(".experience-card") || [],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
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
        <Briefcase className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        Experience
      </h2>

      <div className="space-y-4">
        {[
          {
            role: "Search Engine Optimization",
            company: "Search Digitally",
            period: "July 2025 – Present",
            current: true,
          },
        ].map((job, i) => (
          <div
            key={i}
            className="
              group p-4 rounded-2xl transition-all relative overflow-hidden
              bg-white/70 dark:bg-zinc-900/30
              border border-black/10 dark:border-white/5
              hover:border-black/20 dark:hover:border-white/10
              backdrop-blur-md
              experience-card opacity-0
            "
          >
            {/* Light Rays Background */}
            <LightRays
              count={3}
              length="100%"
              blur={16}
              speed={18}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-1 gap-4">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-200">
                  {job.role}
                </h3>

                <span
                  className="
                    text-xs font-mono whitespace-nowrap
                    text-zinc-600 dark:text-zinc-400
                    bg-black/5 dark:bg-zinc-800/50
                    px-2 py-0.5 rounded
                  "
                >
                  {job.period}
                </span>
              </div>

              <div className="text-sm flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-400 dark:text-zinc-500">@</span>
                {job.company}

                {job.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutsection;
