"use client";

import {
  CheckCircle2,
  Clock,
  Code2,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LightRays } from "@/components/ui/light-rays";
import { ParticleCard } from "./BentoEffects";

const Overview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current?.querySelectorAll(".overview-card") || [],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform",
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
        {/* Profile Card */}
        <ParticleCard
          className="
            sm:col-span-1 md:col-span-2 h-full
            relative p-5 sm:p-6 rounded-2xl overflow-hidden group
            bg-white/70 dark:bg-zinc-900/30
            border border-black/10 dark:border-white/5
            hover:border-black/20 dark:hover:border-white/10
            transition-colors backdrop-blur-md
            overview-card opacity-0
            magic-bento-card magic-bento-card--border-glow
          "
          clickEffect={true}
          enableMagnetism={true}
          enableTilt={true}
        >
          {/* Light Rays Background */}
          <LightRays
            count={4}
            length="100%"
            blur={20}
            speed={16}
          />

          <div className="relative z-10 flex items-center gap-5 h-full w-full">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div
                className="
                  w-20 h-20 rounded-full overflow-hidden
                  bg-zinc-200 dark:bg-zinc-800
                  border-2 border-black/10 dark:border-zinc-800
                  ring-2 ring-black/5 dark:ring-white/5
                "
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 🇮🇳 Flag badge */}
              <div
                className="
                  absolute -top-1 -right-1 rounded-full w-7 h-5 overflow-hidden
                  border-2 border-white dark:border-[#0c0c0c]
                  shadow-lg transform -rotate-12
                "
              >
                <div className="h-1/3 w-full bg-[#FF9933]" />
                <div className="h-1/3 w-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full border border-[#000080]" />
                </div>
                <div className="h-1/3 w-full bg-[#138808]" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white truncate">
                  Saurabh Sharma
                </h1>
                <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-500/10 shrink-0" />
              </div>

              <p className="font-mono text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Creating with code.{" "}
                <span className="text-zinc-500">Small details matter.</span>
              </p>
            </div>
          </div>
        </ParticleCard>

        {/* Details */}
        <div className="sm:col-span-1 md:col-span-2 grid grid-cols-1 gap-2 h-full">
          <DetailCard
            icon={<Code2 />}
            label="Role:"
            value="Full Stack Developer"
            className="overview-card opacity-0"
          />
          <DetailCard
            icon={<User />}
            label="Founder:"
            value="@Saurabh_Sharma"
            className="overview-card opacity-0"
          />

          <div className="grid grid-cols-2 gap-2">
            <MiniCard icon={<MapPin />} className="overview-card opacity-0">
              Mumbai, Maharashtra, India
            </MiniCard>
            <MiniCard icon={<Clock />} className="overview-card opacity-0">
              <LiveClock /> {"// 5:30h ahead"}
            </MiniCard>
          </div>
        </div>

        {/* Contact */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <ContactCard
            icon={<Phone />}
            value="+91 9769489715"
            className="overview-card opacity-0"
          />
          <ContactCard
            icon={<Mail />}
            value="saurabhram9087@gmail.com"
            href="mailto:saurabhram9087@gmail.com"
            className="overview-card opacity-0"
          />
          <ContactCard
            icon={<Globe />}
            value="saurabh-sharma.vercel.app"
            href="https://saurabh-sharma.vercel.app"
            className="overview-card opacity-0"
          />
          <MiniCard icon={<User />} className="overview-card opacity-0">
            he / him
          </MiniCard>
        </div>
      </div>
    </div>
  );
};

export default Overview;

/* ---------- helpers ---------- */

function DetailCard({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <ParticleCard
      className={`
        p-4 rounded-2xl flex items-center gap-3 relative overflow-hidden
        bg-white/70 dark:bg-zinc-900/30
        border border-black/10 dark:border-white/5
        hover:bg-black/5 dark:hover:bg-zinc-900/50
        transition-colors backdrop-blur-md
        magic-bento-card magic-bento-card--border-glow
        ${className || ""}
      `}
      clickEffect={true}
      enableMagnetism={true}
      enableTilt={true}
    >
      <LightRays
        count={2}
        length="100%"
        blur={16}
        speed={20}
      />
      <div className="relative z-10 flex items-center gap-3 w-full">
        <div className="p-2 rounded-lg bg-black/5 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400">
          {icon}
        </div>
        <div className="text-sm text-zinc-700 dark:text-zinc-400">
          <span className="text-zinc-500">{label}</span>{" "}
          <span className="text-zinc-900 dark:text-zinc-200">{value}</span>
        </div>
      </div>
    </ParticleCard>
  );
}

function MiniCard({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ParticleCard
      className={`
        p-3 rounded-xl flex items-center gap-3 overflow-hidden relative
        bg-white/70 dark:bg-zinc-900/30
        border border-black/10 dark:border-white/5
        text-xs text-zinc-700 dark:text-zinc-300
        backdrop-blur-md
        magic-bento-card magic-bento-card--border-glow
        ${className || ""}
      `}
      clickEffect={true}
      enableMagnetism={true}
      enableTilt={true}
    >
      <LightRays
        count={1}
        length="100%"
        blur={16}
        speed={22}
      />
      <div className="relative z-10 flex items-center gap-3 w-full min-w-0">
        <span className="text-zinc-500 shrink-0">{icon}</span>
        <span className="truncate">{children}</span>
      </div>
    </ParticleCard>
  );
}

function ContactCard({
  icon,
  value,
  href,
  className,
}: {
  icon: React.ReactNode;
  value: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <ParticleCard
      className={`
        p-3 rounded-xl flex items-center gap-3 relative overflow-hidden
        bg-white/70 dark:bg-zinc-900/30
        border border-black/10 dark:border-white/5
        hover:bg-black/5 dark:hover:bg-zinc-800/50
        transition-colors backdrop-blur-md
        magic-bento-card magic-bento-card--border-glow
        ${className || ""}
      `}
      clickEffect={true}
      enableMagnetism={true}
      enableTilt={true}
    >
      <LightRays
        count={2}
        length="100%"
        blur={16}
        speed={20}
      />
      <div className="relative z-10 flex items-center gap-3 w-full min-w-0">
        <span className="text-zinc-500 shrink-0">{icon}</span>
        <span className="text-xs truncate text-zinc-700 dark:text-zinc-400">
          {value}
        </span>
      </div>
    </ParticleCard>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return content;
}

export function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="font-mono">{time.toLocaleTimeString()}</span>;
}
