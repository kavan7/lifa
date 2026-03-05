"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/* ===================== HERO SECTION ===================== */

const HeroSection = () => {
  const textWrap = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-x-hidden ">
      <div className="max-w-7xl mx-auto w-full px-6 z-10">
        <motion.div
          className="max-w-4xl py-10"
          variants={textWrap}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-serif text-white text-4xl sm:text-5xl md:text-7xl leading-[1.1] font-bold md:leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
            }}
          >
            Exceptional <span className="">Ideas</span>,
            <br />
            <span className="text-[#c90d00]">Practiced.</span>
          </motion.h1>

          <motion.p
            className=" text-white font-medium text-sm sm:text-base md:text-lg font-sans leading-relaxed drop-shadow max-w-2xl opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
            }}
          >
            Developing, inspiring, and educating the next generation of
            finance-focused students at the Lazaridis School of Business & 
            Economics at Wilfrid Laurier University in Waterloo, Canada.
          </motion.p>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          className="mt-10 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.35 },
          }}
        >
          <div className="flex items-center gap-4 mb-8 opacity-40">
            <span className="text-[9px] font-sans font-normal uppercase tracking-[0.4em] text-white">Placements</span>
            <div className="h-px flex-1 bg-gradient-to-r" />
          </div>
          
          {/* PRO TIP: Increase this number to SLOW DOWN the scroll. 
              100-150 is usually the "sweet spot" for prestige.
          */}
          <MarqueeLogoSlider duration={120} />
        </motion.div>
      </div>
    </section>
  );
};

/* ===================== Marquee Logo Slider ===================== */

function MarqueeLogoSlider({ duration = 220 }: { duration?: number }) {
  const [isPaused, setIsPaused] = useState(false);

  const logos = useMemo(
    () => [
      { src: "/Altas.png", alt: "Altas Partners" },
      { src: "/Blair Franklin (2).png", alt: "Blair Franklin" },
      { src: "/BMO Logo .png", alt: "BMO" },
      { src: "/BofA.png", alt: "Bank of America" },
      { src: "/Brookfield.png", alt: "Brookfield" },
      { src: "/Burgundy.webp", alt: "Burgundy Asset Management" },
      { src: "/CC&L.png", alt: "CC&L" },
      { src: "/CIBC.png", alt: "CIBC" },
      { src: "/Dawson.png", alt: "Dawson Partners" },
      { src: "/Fengate (2).png", alt: "Fengate" },
      { src: "/Fidelity-Logo.png", alt: "Fidelity" },
      { src: "/gencap-logo.png", alt: "Genesis Capital" },
      { src: "/Goldman-Sachs-Logo.png", alt: "Goldman Sachs" },
      { src: "/Infor.png", alt: "Infor" },
      { src: "/Jefferies_logo.svg.png", alt: "Jefferies" },
      { src: "/Manulife (2).png", alt: "Manulife" },
      { src: "/McKinsey.png", alt: "McKinsey & Company" },
      { src: "/Moelis.png", alt: "Moelis & Company" },
      { src: "/Morgan Stanley (2).png", alt: "Morgan Stanley" },
      { src: "/National Bank.png", alt: "National Bank" },
      { src: "/OMERS (2).png", alt: "OMERS" },
      { src: "/ONEX (2).png", alt: "Onex" },
      { src: "/PCM.webp", alt: "PCM" },
      { src: "/RBC (2).png", alt: "RBC" },
      { src: "/Scotiabank.png", alt: "Scotiabank" },
      { src: "/stifel.png", alt: "Stifel" },
      { src: "/TD.png", alt: "TD Bank" },
      { src: "/teachers.png", alt: "Ontario Teachers' Pension Plan" },
      { src: "/Turtle Creek (2).png", alt: "Turtle Creek" },
    ],
    []
  );

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div 
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft edge masking using CSS masks (better than gradient divs) */}
      <div 
        className="flex w-fit items-center gap-2 md:gap-20"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 0%, black 0%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 0%, black 0%, transparent)'
        }}
      >
        <motion.div
          className="flex w-fit items-center gap-12 md:gap-20 py-4"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-24 md:w-40 h-12 md:h-16"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;