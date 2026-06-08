"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function FlickeringBg() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute inset-0">
      <FlickeringGrid
        className="absolute inset-0 size-full"
        squareSize={4}
        gridGap={24}
        flickerChance={0.08}
        color={isDark ? "rgb(63, 63, 70)" : "rgba(0, 0, 0, 0.08)"}
        maxOpacity={0.5}
      />
    </div>
  );
}
