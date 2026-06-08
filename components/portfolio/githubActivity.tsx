"use client";

import { Github } from "lucide-react";
import { useEffect, useState } from "react";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GithubActivity = () => {
  const [data, setData] = useState<number[]>([]);
  const max = Math.max(...data, 1);

  useEffect(() => {
    fetch("/api/github/activity")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
        <Github className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
        Activity
      </h2>

      <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-900/30 border border-black/10 dark:border-white/5 backdrop-blur-md">
        <div className="flex items-end justify-between gap-1 h-16">
          {MONTHS.map((month, i) => {
            const commits = data[i] || 0;
            const height = `${(commits / max) * 100}%`;

            return (
              <div
                key={month}
                className="w-full relative group rounded-sm bg-black/10 dark:bg-zinc-800/50 hover:bg-green-500/40 transition-colors"
                style={{ height }}
              >
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap text-zinc-600 dark:text-zinc-400">
                  {commits} commits
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
