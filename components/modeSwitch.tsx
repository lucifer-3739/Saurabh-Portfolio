"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // 🔑 Keyboard shortcut
  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");

      if (
        (isMac && e.metaKey && e.key.toLowerCase() === "k") ||
        (!isMac && e.ctrlKey && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [resolvedTheme, setTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative h-9 w-9 rounded-full
        border border-black/10 dark:border-white/10
        bg-white/60 dark:bg-zinc-900/60
        backdrop-blur-md
        hover:bg-white dark:hover:bg-zinc-800
        transition-all duration-300
        ring-1 ring-transparent hover:ring-black/10 dark:hover:ring-white/10
      "
    >
      {/* Sun */}
      <SunIcon
        className="
          absolute h-4 w-4 text-zinc-800
          transition-all duration-300
          rotate-0 scale-100
          dark:-rotate-90 dark:scale-0
        "
      />

      {/* Moon */}
      <MoonIcon
        className="
          absolute h-4 w-4 text-zinc-200
          transition-all duration-300
          rotate-90 scale-0
          dark:rotate-0 dark:scale-100
        "
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
