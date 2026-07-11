"use client";

import { useRef } from "react";
import Image from "next/image";
import Overview from "@/components/portfolio/Overview";
import Aboutsection from "@/components/portfolio/aboutsection";
import AboutmeSection from "@/components/portfolio/AboutmeSection";
import ProjectSection from "@/components/portfolio/project";
import TeckStack from "@/components/portfolio/TeckStack";
import ProfileHeader from "@/components/portfolio/header";
import SocialLinks from "@/components/portfolio/socialLinks";
import FlickeringBg from "@/components/portfolio/FlickeringBg";
import { GlobalSpotlight } from "@/components/portfolio/BentoEffects";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const SideRays = dynamic(() => import("@/components/ui/SideRays"), { ssr: false });

export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="
        relative min-h-screen font-sans transition-colors duration-500
        bg-zinc-200 text-zinc-900
        dark:bg-[#0c0c0c] dark:text-zinc-300
        selection:bg-black/10 selection:text-black
        dark:selection:bg-white/10 dark:selection:text-white
      "
    >
      <GlobalSpotlight gridRef={gridRef} />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* SideRays Top Left */}
        <div className="absolute top-0 left-0 w-[min(500px,50vw)] h-[min(500px,50vw)] opacity-30 sm:opacity-40 dark:opacity-15 dark:sm:opacity-20">
          <SideRays
            origin="top-left"
            rayColor1={isDark ? "#38bdf8" : "#fb923c"}
            rayColor2={isDark ? "#0284c7" : "#ea580c"}
            speed={1.5}
            intensity={1.2}
            spread={1.8}
          />
        </div>

        {/* SideRays Top Right */}
        <div className="absolute top-0 right-0 w-[min(500px,50vw)] h-[min(500px,50vw)] opacity-30 sm:opacity-40 dark:opacity-15 dark:sm:opacity-20">
          <SideRays
            origin="top-right"
            rayColor1={isDark ? "#38bdf8" : "#fb923c"}
            rayColor2={isDark ? "#0284c7" : "#ea580c"}
            speed={1.5}
            intensity={1.2}
            spread={1.8}
          />
        </div>

        {/* Grid Background */}
        <div
          className="
            absolute inset-0
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
            opacity-80 dark:opacity-50
            transition-opacity duration-500
          "
        >
          <FlickeringBg />
        </div>

        {/* Top fade (FIXED) */}
        <div
          className="
            absolute inset-x-0 top-0 h-32
            bg-linear-to-b
            from-white via-white/80 to-transparent
            dark:from-[#0c0c0c] dark:via-[#0c0c0c]/80
            transition-colors duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div ref={gridRef} className="bento-section relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        {/* Header */}
        <ProfileHeader />

        {/* HERO */}
        <div className="mt-8 sm:mt-12 mb-10 sm:mb-16 relative group">
          <div
            className="
              absolute inset-0 -z-10 rounded-xl
              border border-black/5 dark:border-white/5
              bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]
              dark:bg-[radial-gradient(#262626_1px,transparent_1px)]
              bg-size[16px_16px]
              opacity-30 dark:opacity-20
              mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]
              transition-all duration-500
            "
          />

          <div className="h-40 sm:h-56 md:h-64 flex items-center justify-center">
            <div className="relative w-24 h-16 sm:w-32 sm:h-20">
              <Image
                src="/name.svg"
                alt="Logo"
                fill
                className="
                  object-contain
                  invert dark:invert-0
                  transition-all duration-500
                "
              />
            </div>
          </div>
        </div>

        <Overview />

        <div className="h-px bg-black/10 dark:bg-white/5 my-6 sm:my-8 transition-colors" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            <Aboutsection />
            <AboutmeSection />
            <ProjectSection />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <TeckStack />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
