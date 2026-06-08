"use client";

import { Mail, MapPin, CodeXml, Phone, Mars, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Profile() {
  return (
    <div className="space-y-6 select-none">
      {/* AVATAR + NAME */}
      <div className="flex items-center gap-6">
        <Image
          src="/profile.png"
          alt="profile"
          width={85}
          height={85}
          className="rounded-full border border-zinc-700"
        />

        <div>
          <h1 className="text-3xl font-semibold">Saurabh Sharma</h1>
          <p className="text-zinc-400 text-sm">
            Full Stack Developer, Data Analysis, SEO Analysis
          </p>
        </div>
      </div>

      <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
        Crafting smooth UX. Keeping pixels aligned. Shaping ideas with clean
        code.
      </p>

      {/* INFO GRID: EXACT 2 COLUMNS LIKE ORIGINAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mt-4 text-sm">
        {/* LEFT */}
        <Info
          icon={<CodeXml size={16} />}
          text="Full Stack Developer, Data Analysis, SEO Specialist"
        />
        <Info
          icon={<Mail size={16} />}
          text={
            <Link
              href="mailto:saurabhram9087@gmail.com"
              className="hover:text-white hover:underline"
            >
              saurabhram9087@gmail.com
            </Link>
          }
        />

        {/* LEFT */}
        <Info
          icon={<MapPin size={16} />}
          text={
            <Link
              href="https://maps.app.goo.gl/o4cX4BJCFLxTkVk97"
              className="hover:underline"
            >
              Based in Mumbai,India
            </Link>
          }
        />
        <Info
          icon={<Phone size={16} />}
          text={
            <Link
              href="tel:+919769489715"
              className="hover:text-white hover:underline"
            >
              +91 9769489715
            </Link>
          }
        />
        <Info
          icon={<Clock size={16} />}
          text={
            <div className="flex gap-2">
              <LiveClock />{" "}
              <span className="text-muted-foreground">{"// +5:30"}</span>
            </div>
          }
        />

        {/* RIGHT */}
        <Info icon={<Mars size={16} />} text={<div>He/Him</div>} />
      </div>
    </div>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-zinc-300">
      <span className="text-zinc-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "0.9rem", fontFamily: "monospace" }}>
      {time.toLocaleTimeString()}
    </div>
  );
}
