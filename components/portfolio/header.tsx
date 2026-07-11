"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { ModeSwitcher } from "../modeSwitch";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LightRays } from "@/components/ui/light-rays";

const ProfileHeader = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [followers, setFollowers] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/api/github/stats")
      .then((res) => res.json())
      .then((data) => setFollowers(data.followers))
      .catch(() => setFollowers(null));
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <header className="
      relative overflow-hidden rounded-2xl mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-sm font-medium
      bg-white/40 dark:bg-zinc-900/20
      border border-black/10 dark:border-white/5
      backdrop-blur-md transition-all duration-500
    ">
      {/* Light Rays Background */}
      <LightRays
        color="var(--header-rays-color)"
        count={6}
        length="100%"
        blur={24}
        speed={14}
      />

      <div className="relative z-10 flex items-center justify-between w-full">
        {/* LEFT */}
        <nav className="flex items-center gap-6 text-zinc-600 dark:text-zinc-400">
          <Link
            href="#"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <Image
              src={isDark ? "/name.svg" : "/namedark.svg"}
              alt="Logo"
              width={30}
              height={30}
              priority
              className="object-contain transition-all duration-300"
            />
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* GitHub counter (LIVE) */}
          <a
            href="https://github.com/lucifer-3739"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 px-3 py-1.5 rounded-full text-xs
              bg-white/50 dark:bg-zinc-900/50
              border border-black/10 dark:border-zinc-800/50
              text-zinc-600 dark:text-zinc-400
              hover:text-zinc-900 dark:hover:text-white
              transition-colors
            "
          >
            <Github className="w-3.5 h-3.5" />
            <span>
              {followers !== null ? `${followers.toLocaleString()}` : "—"}
            </span>
          </a>

          {/* Theme toggle */}
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
