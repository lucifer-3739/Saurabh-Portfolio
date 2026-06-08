"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { copyToClipboard } from "../lib/clipboard";
import Image from "next/image";
import { toast } from "sonner";

const MARK_SVG =
  '<svg width="526" height="322" viewBox="0 0 526 322" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.5 321.5V276.5H1.19209e-06V226H50.5V271.5H181.5V185.5H45.5V140.5H1.19209e-06V45.5H45.5V9.53674e-06H186.5V45.5H232.5V95.5H181.5V50.5H50.5V136H186.5V180.5H232.5V276.5H186.5V321.5H45.5ZM338.469 321.5V276.5H292.969V226H343.469V271.5H474.469V185.5H338.469V140.5H292.969V45.5H338.469V9.53674e-06H479.469V45.5H525.469V95.5H474.469V50.5H343.469V136H479.469V180.5H525.469V276.5H479.469V321.5H338.469Z" fill="white"/></svg>';
const LOGOTYPE_SVG =
  '<svg width="1203" height="83" viewBox="0 0 1203 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.648 82.304V70.784H7.62939e-06V57.856H12.928V69.504H46.464V47.488H11.648V35.968H7.62939e-06V11.648H11.648V0H47.744V11.648H59.52V24.448H46.464V12.928H12.928V34.816H47.744V46.208H59.52V70.784H47.744V82.304H11.648ZM86.648 82.304V70.784H75V57.856H87.928V69.504H121.464V47.488H86.648V35.968H75V11.648H86.648V0H122.744V11.648H134.52V24.448H121.464V12.928H87.928V34.816H122.744V46.208H134.52V70.784H122.744V82.304H86.648ZM187.273 82.304V70.784H175.625V57.856H188.553V69.504H222.089V47.488H187.273V35.968H175.625V11.648H187.273V0H223.369V11.648H235.145V24.448H222.089V12.928H188.553V34.816H223.369V46.208H235.145V70.784H223.369V82.304H187.273ZM258.398 82.304V70.784H246.75V34.816H258.398V23.168H294.494V34.816H306.27V69.504H317.918V82.304H304.99V70.784H294.494V82.304H258.398ZM259.678 69.504H293.214V35.968H259.678V69.504ZM339.898 82.304V70.784H328.25V23.168H341.178V69.504H374.714V23.168H387.77V70.784H375.994V82.304H339.898ZM402 82.304V34.816H413.648V23.168H449.744V34.816H461.52V47.488H448.464V35.968H414.928V82.304H402ZM484.773 82.304V70.784H473.125V34.816H484.773V23.168H520.869V34.816H532.645V69.504H544.293V82.304H531.365V70.784H520.869V82.304H484.773ZM486.053 69.504H519.589V35.968H486.053V69.504ZM565.023 82.304V70.784H553.375V0H566.303V23.168H601.119V34.816H612.895V70.784H601.119V82.304H565.023ZM566.303 69.504H599.839V35.968H566.303V69.504ZM628.375 82.304V0H641.303V34.816H651.543V23.168H676.119V34.816H687.895V82.304H674.839V35.968H652.823V47.488H641.303V82.304H628.375ZM740.648 82.304V70.784H729V57.856H741.928V69.504H775.464V47.488H740.648V35.968H729V11.648H740.648V0H776.744V11.648H788.52V24.448H775.464V12.928H741.928V34.816H776.744V46.208H788.52V70.784H776.744V82.304H740.648ZM804 82.304V0H816.928V34.816H827.168V23.168H851.744V34.816H863.52V82.304H850.464V35.968H828.448V47.488H816.928V82.304H804ZM888.148 82.304V70.784H876.5V34.816H888.148V23.168H924.244V34.816H936.02V69.504H947.668V82.304H934.74V70.784H924.244V82.304H888.148ZM889.428 69.504H922.964V35.968H889.428V69.504ZM963.125 82.304V34.816H974.773V23.168H1010.87V34.816H1022.65V47.488H1009.59V35.968H976.053V82.304H963.125ZM1034.25 82.304V23.168H1070.47V34.816H1080.71V23.168H1105.42V34.816H1116.94V82.304H1104.14V35.968H1081.99V82.304H1069.19V35.968H1047.18V82.304H1034.25ZM1142.77 82.304V70.784H1131.13V34.816H1142.77V23.168H1178.87V34.816H1190.65V69.504H1202.29V82.304H1189.37V70.784H1178.87V82.304H1142.77ZM1144.05 69.504H1177.59V35.968H1144.05V69.504Z" fill="white"/></svg>';

interface MenuPosition {
  x: number;
  y: number;
}

export default function Hero() {
  const [pos, setPos] = useState<MenuPosition | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();

    const menuWidth = 260;
    const menuHeight = 160;

    let x = e.clientX + 16;
    let y = e.clientY + 12;

    if (x + menuWidth > window.innerWidth)
      x = window.innerWidth - menuWidth - 20;
    if (y + menuHeight > window.innerHeight)
      y = window.innerHeight - menuHeight - 20;

    setPos({ x, y });
  }, []);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setPos(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  const handleAction = (type: string) => {
    setPos(null);

    if (type === "copy-mark") {
      copyToClipboard(MARK_SVG);
      toast.success("Mark copied as SVG ✔️");
      return;
    }

    if (type === "copy-logotype") {
      copyToClipboard(LOGOTYPE_SVG);
      toast.success("Logotype copied as SVG 🎯");
      return;
    }
  };

  return (
    <div className="h-24 p-40 flex items-center justify-center relative select-none border border-gray-600/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onContextMenu={handleContextMenu}
        className="cursor-default"
      >
        <Image src="/name.svg" alt="Logo Mark" width={200} height={200} />
      </motion.div>
      {pos && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.92, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.18 }}
          style={{ top: pos.y, left: pos.x }}
          className="absolute z-50 w-64 p-3 rounded-xl bg-black/70 backdrop-blur-xl
          border border-white/5 shadow-[0_0_25px_rgba(0,0,0,0.45)]
          text-sm text-zinc-300"
        >
          <MenuItem
            label="Copy Mark as SVG"
            icon={<Image src="/name.svg" alt="logo" width={26} height={26} />}
            onClick={() => handleAction("copy-mark")}
          />

          <Divider />

          <MenuItem
            label="Copy Logotype as SVG"
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 79 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.736 89.472V87.296L31.872 79.488V2.17601L37.888 6.65601L3.71197 9.34401V1.15201H74.496V9.34401L40.32 6.65601L46.464 2.17601V79.488L57.472 87.296V89.472H20.736Z"
                  fill="white"
                />
              </svg>
            }
            onClick={() => handleAction("copy-logotype")}
          />
        </motion.div>
      )}
    </div>
  );
}

function MenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-2 rounded-md cursor-pointer
      hover:bg-white/10 hover:text-white transition-all duration-150"
    >
      <span className="w-5 flex items-center justify-center">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/10 my-1.5" />;
}
