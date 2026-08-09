"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only activate cursor if the viewport is desktop (>= 1024px)
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("select") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest('[role="button"]') ||
        target.closest("[data-cursor-hover]");

      setIsHovered(!!isInteractive);

      const projectCard = target.closest("[data-cursor-text]");
      if (projectCard) {
        setHoverText(projectCard.getAttribute("data-cursor-text"));
      } else {
        setHoverText(null);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer interactive circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-red pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hoverText ? 2.8 : isHovered ? 1.5 : 1,
          backgroundColor: hoverText ? "#D71920" : isHovered ? "rgba(215, 25, 32, 0.15)" : "rgba(0, 0, 0, 0)",
          borderColor: hoverText ? "#D71920" : "#D71920",
        }}
        transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
      >
        {hoverText && (
          <span className="text-[7px] font-display font-bold uppercase tracking-widest text-white text-center leading-tight select-none max-w-[85%] px-1">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner precise pointer dot */}
      {!hoverText && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-red pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            scale: isHovered ? 0.3 : 1,
            backgroundColor: isHovered ? "#8F1015" : "#D71920",
          }}
          transition={{ type: "tween", duration: 0.08 }}
        />
      )}
    </>
  );
}
