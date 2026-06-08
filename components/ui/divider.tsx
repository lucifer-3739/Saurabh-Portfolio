"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface DividerProps {
  variant?: "minimal" | "neon" | "glass" | "pixel" | "gold" | "matrix";
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = "minimal",
  orientation = "horizontal",
  className,
}) => {
  const base =
    orientation === "horizontal"
      ? "w-full h-px relative"
      : "h-full w-px relative";

  const styles: Record<string, string> = {
    minimal: `
      border-${orientation === "horizontal" ? "t" : "l"} border-zinc-800/70
    `,
    neon: `
      border-${orientation === "horizontal" ? "t" : "l"} border-purple-500/40 
      bg-gradient-to-${orientation === "horizontal" ? "r" : "b"}
      from-transparent via-purple-500/60 to-transparent
      animate-pulse blur-[2px]
    `,
    glass: `
      border-${orientation === "horizontal" ? "t" : "l"} border-white/10 
      backdrop-blur-sm bg-white/5
    `,
    pixel: `
      border-${orientation === "horizontal" ? "t" : "l"} border-zinc-700/70 
      bg-[radial-gradient(#555_1px,transparent_0)] bg-[length:10px_10px]
    `,
    gold: `
      border-${orientation === "horizontal" ? "t" : "l"} border-yellow-300/60 
      bg-gradient-to-${orientation === "horizontal" ? "r" : "b"}
      from-yellow-100/20 via-yellow-200/60 to-transparent
    `,
    matrix: `
      border-${orientation === "horizontal" ? "t" : "l"} border-green-500/40 
      bg-gradient-to-${orientation === "horizontal" ? "r" : "b"}
      from-transparent via-green-500/70 to-transparent blur-[2px]
    `,
  };

  return <div className={cn(base, styles[variant], className)} />;
};
