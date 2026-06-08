import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-4 w-full border-x border-zinc-700/60",
        "before:absolute before:-left-[100vw] before:top-0 before:h-full before:w-[200vw] before:-z-10",
        "before:bg-[repeating-linear-gradient(315deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_1px,transparent_0,transparent_50%)]",
        "before:bg-size-[10px_10px]",
        className
      )}
    />
  );
}
