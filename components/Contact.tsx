"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submit
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", service: "Web Development", message: "" });
    }, 4500);
  };

  const contactInfo = [
    {
      label: "EMAIL",
      value: "saurabhram9087@gamil.com",
      link: "mailto:saurabhram9087@gamil.com",
      icon: Mail,
    },
    {
      label: "WEBSITE",
      value: "www.saurabhsharma.dev",
      link: "https://saurabhsharma.dev",
      icon: Globe,
    },
    {
      label: "PHONE",
      value: "+91 9769489715",
      link: "tel:+919769489715",
      icon: Phone,
    },
    {
      label: "LOCATION",
      value: "India",
      link: "https://www.google.com/maps/place/India",
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="relative bg-bg-primary pt-20 sm:pt-32 pb-16 px-6 sm:px-12 border-b border-border-light overflow-hidden">
      
      {/* 12-Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start z-10 relative">
        
        {/* LEFT COLUMN: Large CTA & Contact details (col-span-6) */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-accent-red uppercase mb-4">
            06 / LET&apos;S CONNECT
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-7xl leading-tight text-text-primary uppercase tracking-tight mb-6">
            LET&apos;S WORK
            <br />
            <span className="text-accent-red">TOGETHER</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mb-12">
            I&apos;m currently open for new projects, design systems consulting, and engineering collaborations. Let&apos;s create something amazing that drives real results.
          </p>

          {/* Contact Details List with Separators */}
          <div className="flex flex-col border-t border-border-light">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  href={info.link}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 border-b border-border-light flex items-center justify-between transition-all duration-300 hover:bg-bg-secondary/20 px-3"
                  data-cursor-hover
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded border border-border-light flex items-center justify-center text-text-secondary group-hover:text-accent-red group-hover:border-accent-red transition-all duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-display font-bold text-accent-red tracking-widest leading-none">
                        {info.label}
                      </span>
                      <span className="text-sm font-sans text-text-primary group-hover:text-accent-red transition-colors duration-300 mt-1 uppercase font-medium">
                        {info.value}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-secondary transform group-hover:translate-x-1.5 group-hover:text-accent-red transition-all duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Minimal Inquiry Form (col-span-6) */}
        <div className="lg:col-span-6 w-full bg-bg-secondary/40 border border-border-light p-8 rounded-xl backdrop-blur-sm relative">
          <h3 className="font-display font-bold text-2xl text-text-primary uppercase tracking-wide mb-6">
            START A PROJECT
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-display font-semibold tracking-wider text-text-secondary uppercase mb-2">
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-bg-primary border border-border-light focus:border-accent-red px-4 py-3 rounded text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none transition-colors"
                data-cursor-hover
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-display font-semibold tracking-wider text-text-secondary uppercase mb-2">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-bg-primary border border-border-light focus:border-accent-red px-4 py-3 rounded text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none transition-colors"
                data-cursor-hover
              />
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-display font-semibold tracking-wider text-text-secondary uppercase mb-2">
                REQUIRED SERVICE *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-bg-primary border border-border-light focus:border-accent-red px-4 py-3 rounded text-sm text-text-primary focus:outline-none transition-colors cursor-pointer"
                data-cursor-hover
              >
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Interface Design">UI/UX Interface Design</option>
                <option value="Interactive Brand Systems">Interactive Brand Systems</option>
                <option value="Consulting & Audit">Consulting & Audit</option>
              </select>
            </div>

            {/* Message Input */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-display font-semibold tracking-wider text-text-secondary uppercase mb-2">
                PROJECT DETAIL *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your business goal, budget, and project timeframe..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-bg-primary border border-border-light focus:border-accent-red px-4 py-3 rounded text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none transition-colors resize-none"
                data-cursor-hover
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-accent-red hover:bg-accent-red text-accent-red hover:text-white font-display font-bold tracking-widest text-xs uppercase py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 mt-2"
              data-cursor-hover
            >
              {isSubmitted ? "INQUIRY SENT!" : "SUBMIT REQUEST →"}
            </button>
          </form>

          {/* Success Dialog */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-bg-secondary/95 rounded-xl flex flex-col items-center justify-center p-8 text-center"
            >
              <span className="text-3xl mb-3">✉️</span>
              <h4 className="font-display font-bold text-xl text-accent-red uppercase tracking-wider">
                MESSAGE RECEIVED
              </h4>
              <p className="font-sans text-xs text-text-secondary max-w-xs mt-2 leading-relaxed">
                Thank you for reaching out, Saurabh. I will review your project specs and email you within 24 hours.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* LAPTOP / DEVICE MOCKUP AT THE BOTTOM */}
      <div className="relative mt-24 sm:mt-32 max-w-6xl mx-auto flex justify-center select-none pointer-events-none">
        {/* Soft red neon glow background */}
        <div className="absolute inset-0 bg-radial from-accent-red/10 via-transparent to-transparent blur-3xl scale-75 -translate-y-12" />
        
        {/* Laptop Container shifting partially out of bounds */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full aspect-[16/9] max-w-[900px] overflow-hidden rounded-t-xl border-x border-t border-white/10 shadow-2xl z-20"
        >
          <Image
            src="/laptop_mockup.jpg"
            alt="Saurabh Sharma Portfolio Showcase Mockup"
            fill
            className="object-cover object-top filter contrast-[1.05]"
          />
          {/* Black fade gradient blending laptop base into background */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary to-transparent z-30" />
        </motion.div>
      </div>

    </section>
  );
}
