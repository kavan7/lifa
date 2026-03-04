"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative min-h-screen w-full flex items-center overflow-x-hidden pt-10">
      <div className="max-w-7xl mx-auto w-full px-6 z-10">
        <motion.div
          className="max-w-4xl py-10"
          variants={textWrap}
          initial="hidden"
          animate="show"
        >
          {/* Responsive Heading: text-4xl on mobile, text-7xl on desktop */}
          <motion.h1
            className="font-serif text-white text-4xl sm:text-5xl md:text-7xl leading-[1.1] md:leading-tight drop-shadow-lg"
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

          {/* Responsive Subtext: text-sm on mobile, text-lg on desktop */}
          <motion.p
            className="mt-6 text-white font-medium text-sm sm:text-base md:text-lg font-sans leading-relaxed drop-shadow max-w-2xl opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
            }}
          >
            Developing, inspiring, and educating the next generation of
            finance-focused students at the
            <br className="hidden md:block" />
            Lazaridis School of Business & Economics at Wilfrid Laurier
            University in Waterloo, Canada.
          </motion.p>
        </motion.div>

        {/* Logo wall with specific responsive grid logic */}
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
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white">Placements</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <FadeLogoWall intervalMs={4000} />
        </motion.div>
      </div>
    </section>
  );
};

/* ===================== Fading Logo Wall ===================== */

function FadeLogoWall({ intervalMs = 4000 }: { intervalMs?: number }) {
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

  // Responsive pageSize: 3 for mobile, 7 for desktop
  const [pageSize, setPageSize] = useState(7);
  const [page, setPage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth < 768 ? 3 : 7);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(logos.length / pageSize);

  useEffect(() => {
    const id = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setPage((p) => (p + 1) % totalPages);
        setFadeOut(false);
      }, 300);
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs, totalPages]);

  const start = page * pageSize;
  let current = logos.slice(start, start + pageSize);
  if (current.length < pageSize) {
    current = current.concat(logos.slice(0, pageSize - current.length));
  }

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div
          className={clsx(
            "grid gap-6 md:gap-10 items-center justify-items-center transition-opacity duration-300 ease-in-out",
            "grid-cols-3 md:grid-cols-7", // 3 columns on mobile, 7 on desktop
            fadeOut ? "opacity-0" : "opacity-100"
          )}
        >
          {current.map((logo, i) => (
            <LogoBox key={`${logo.src}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== LogoBox ===================== */

function LogoBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="flex items-center justify-center w-full h-12 md:h-20 transition-all duration-300 scale-95 hover:scale-100"
      title={alt}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain brightness-110"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Helper for conditional classes
function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default HeroSection;