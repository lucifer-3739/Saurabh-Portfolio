import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import EducationSkills from "@/components/EducationSkills";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-bg-primary selection:bg-accent-red selection:text-white relative">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Header Presentation */}
      <Hero />

      {/* Biographical Design Intro */}
      <About />

      {/* Grid of Case Studies and Modal Details */}
      <Projects />

      {/* Timeline background + Tech stack tags */}
      <EducationSkills />

      {/* Step methodology timeline */}
      <Process />

      {/* High impact philosophy panel */}
      <Testimonial />

      {/* Closing CTA contact form & Device mock */}
      <Contact />

      {/* Brand copyright & Social indices */}
      <Footer />
    </main>
  );
}
