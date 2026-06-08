import Image from "next/image";
import Overview from "@/components/portfolio/Overview";
import Aboutsection from "@/components/portfolio/aboutsection";
import ProjectSection from "@/components/portfolio/project";
import TeckStack from "@/components/portfolio/TeckStack";
import ProfileHeader from "@/components/portfolio/header";
import SocialLinks from "@/components/portfolio/socialLinks";
import AboutmeSection from "@/components/portfolio/AboutmeSection";
import FlickeringBg from "@/components/portfolio/FlickeringBg";

export default function Home() {
  return (
    <div
      className="
        relative min-h-screen font-sans transition-colors duration-500
        bg-zinc-200 text-zinc-900
        dark:bg-[#0c0c0c] dark:text-zinc-300
        selection:bg-black/10 selection:text-black
        dark:selection:bg-white/10 dark:selection:text-white
      "
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Background */}
        <div
          className="
            absolute inset-0
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
            opacity-80 dark:opacity-50
            transition-opacity duration-500
          "
        >
          <FlickeringBg />
        </div>

        {/* Top fade (FIXED) */}
        <div
          className="
            absolute inset-x-0 top-0 h-32
            bg-linear-to-b
            from-white via-white/80 to-transparent
            dark:from-[#0c0c0c] dark:via-[#0c0c0c]/80
            transition-colors duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        {/* Header */}
        <ProfileHeader />

        {/* HERO */}
        <div className="mt-12 mb-16 relative group">
          <div
            className="
              absolute inset-0 -z-10 rounded-xl
              border border-black/5 dark:border-white/5
              bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]
              dark:bg-[radial-gradient(#262626_1px,transparent_1px)]
              bg-size[16px_16px]
              opacity-30 dark:opacity-20
              mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]
              transition-all duration-500
            "
          />

          <div className="h-64 flex items-center justify-center">
            <div className="relative w-32 h-20">
              <Image
                src="/name.svg"
                alt="Logo"
                fill
                className="
                  object-contain
                  invert dark:invert-0
                  transition-all duration-500
                "
              />
            </div>
          </div>
        </div>

        <Overview />

        <div className="h-px bg-black/10 dark:bg-white/5 my-8 transition-colors" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Aboutsection />
            <AboutmeSection />
            <ProjectSection />
          </div>

          <div className="space-y-8">
            <TeckStack />
            {/* <GithubActivity /> */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
