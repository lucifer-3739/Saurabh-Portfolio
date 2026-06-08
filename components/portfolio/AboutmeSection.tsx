"use client";

import { User } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LightRays } from "@/components/ui/light-rays";

const AboutmeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current?.querySelector(".about-me-card") || null,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
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
        <User className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        About Me
      </h2>

      <div
        className="
          p-6 rounded-2xl text-sm leading-relaxed relative overflow-hidden
          bg-white/70 dark:bg-zinc-900/30
          border border-black/10 dark:border-white/5
          text-zinc-700 dark:text-zinc-400
          backdrop-blur-md
          transition-colors
          about-me-card opacity-0
        "
      >
        <LightRays
          count={3}
          length="100%"
          blur={18}
          speed={15}
        />
        <div className="relative z-10">
          <p className="mb-4">
            Hello! I’m{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              Saurabh
            </span>
            , a passionate{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              full-stack developer
            </span>{" "}
            based in{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              India
            </span>
            . I focus on crafting smooth, user-centric web experiences using
            modern technologies. With a strong computer science foundation and a
            sharp eye for UI, I love bridging the gap between clean aesthetics and
            solid functionality.
          </p>

          <p>
            When I’m not coding, you’ll usually find me refining my portfolio,
            experimenting with new frameworks, or building side projects especially
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              {" "}
              SaaS tools
            </span>{" "}
            and
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              {" "}
              music-focused web apps
            </span>{" "}
            that push both design and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
