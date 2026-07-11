"use client";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LightRays } from "@/components/ui/light-rays";
import { ParticleCard } from "./BentoEffects";

interface SocialProps {
  title: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
  span: string;
}

const socials: SocialProps[] = [
  {
    title: "X (Twitter)",
    handle: "@saurabh",
    href: "#",
    icon: <Twitter size={18} />,
    span: "w-full sm:w-[calc(50%-0.5rem)] md:w-full",
  },
  {
    title: "Instagram",
    handle: "@sourabh___20",
    href: "https://www.instagram.com/sourabh___20/",
    icon: <Instagram size={18} />,
    span: "w-full sm:w-[calc(50%-0.5rem)] md:w-full",
  },
  {
    title: "GitHub",
    handle: "github.com/lucifer-3739",
    href: "https://github.com/lucifer-3739",
    icon: <Github size={18} />,
    span: "w-full",
  },
  {
    title: "LinkedIn",
    handle: "linkedin.com/in/saurabh-sharma",
    href: "https://www.linkedin.com/in/saurabh-sharma-19a91a24b/",
    icon: <Linkedin size={18} />,
    span: "w-full",
  },
];

export default function SocialLinks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current?.querySelectorAll(".social-card") || [],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
        Connect
      </h2>
      <div className="flex flex-wrap gap-3">
        {socials.map((item) => (
          <SocialCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function SocialCard({ title, handle, href, icon, span }: SocialProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className={`${span} block`}
    >
      <ParticleCard
        className="
          group relative overflow-hidden rounded-2xl
          border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-zinc-900/40
          backdrop-blur-md p-4
          transition-all
          hover:border-black/20 dark:hover:border-white/20
          social-card opacity-0
          magic-bento-card magic-bento-card--border-glow
        "
        clickEffect={true}
        enableMagnetism={true}
        enableTilt={true}
      >
        {/* Light Rays Background */}
        <LightRays
          count={2}
          length="100%"
          blur={16}
          speed={20}
        />

        <div className="relative z-10 flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition">
              {icon}
            </span>

            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {title}
              </span>
              <span className="text-xs font-medium truncate text-zinc-700 dark:text-zinc-300">
                {handle}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <span className="shrink-0 text-zinc-400 dark:text-zinc-500 text-lg transition-transform group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white">
            ↗
          </span>
        </div>
      </ParticleCard>
    </Link>
  );
}
