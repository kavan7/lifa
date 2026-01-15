"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/* ===================== HERO SECTION ===================== */

const HeroSection = () => {
  // Simple staggered fade-up for text
  const textWrap = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative h-screen w-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 z-10">
      
          <motion.div
            className="max-w-4xl px-10  py-10 "
            variants={textWrap}
            initial="hidden"
            animate="show"
          >
              <motion.h1
             className="font-serif text-white text-7xl leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
          
             
            }}>
              Exceptional <span className="">Ideas</span>,
              <br />
              <span className="text-[#c90d00]">Practiced.</span>
            </motion.h1>
 
            {/* Subtext */}
             <motion.p
              className="mt-6 text-white font-semibold text-lg font-sans leading-relaxed drop-shadow"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
          
             
            }}>
              Developing, inspiring, and educating the next generation of
              finance-focused students at the
              <br />
              Lazaridis School of Business & Economics at Wilfrid Laurier
              University in Waterloo, Canada.
            </motion.p>
          </motion.div>

          {/* Logo wall sits under the hero text */}
          <motion.div
            className="mt-10 w-full"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.35 },
            }}
          >
            <FadeLogoWall pageSize={7} intervalMs={4000} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

/* ===================== Fading Logo Wall (7 per page) ===================== */

function FadeLogoWall({
  pageSize = 7,
  intervalMs = 4000,
}: {
  pageSize?: number;
  intervalMs?: number;
}) {
  const logos = useMemo(
    () => [
    
      { src: "/ares.png", alt: "Ares" },
      { src: "/point72.png", alt: "Point72" },
      { src: "/d1.png", alt: "D1 Capital Partners" },
      { src: "/bain.png", alt: "Bain" },
      { src: "/barclays.png", alt: "Barclays" },

      { src: "/bmo.png", alt: "BMO" },
      { src: "/burg.png", alt: "Burgundy" },
      { src: "/cibc.png", alt: "CIBC" },
      { src: "/cpp.png", alt: "CPP Investments" },
      { src: "/cs.png", alt: "Credit Suisse" },
      { src: "/evercore.png", alt: "Evercore" },

      { src: "/fidelity.png", alt: "Fidelity" },
      { src: "/greenhill.png", alt: "Greenhill" },
      { src: "/gs.png", alt: "Goldman Sachs" },
      { src: "/moelis.png", alt: "Moelis" },
      { src: "/morganstanley.png", alt: "Morgan Stanley" },
      { src: "/omers.png", alt: "OMERS" },

      { src: "/onex.png", alt: "Onex" },
      { src: "/ottp.png", alt: "Ontario Teachers’" },
      { src: "/rbc.png", alt: "RBC" },
      { src: "/tcam.png", alt: "TCAM" },
      { src: "/td.png", alt: "TD Canada Trust" },
      { src: "/ubs.png", alt: "UBS" },
    ],
    []
  );

  const totalPages = Math.max(1, Math.ceil(logos.length / pageSize));
  const [page, setPage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Advance every interval: fade out → swap → fade in
  useEffect(() => {
    const id = setInterval(() => {
      setFadeOut(true);
      const t = setTimeout(() => {
        setPage((p) => (p + 1) % totalPages);
        setFadeOut(false);
      }, 300);

      return () => clearTimeout(t);
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs, totalPages]);

  // Current batch of 7 (wrap-around logic)
  const start = page * pageSize;
  let current = logos.slice(start, start + pageSize);
  if (current.length < pageSize) {
    current = current.concat(logos.slice(0, pageSize - current.length));
  }

  return (
    /* ✅ Full-width bar background, but logos stay centered in a max-width container */
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-7xl mx-auto px-14 pt-3 pb-4">
        <div
          className={[
            "grid grid-cols-7 gap-10 items-center justify-items-center",
            "transition-opacity duration-300 ease-in-out",
            fadeOut ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          {current.map((logo, i) => (
            <LogoBox key={`${logo.src}-${i}`} {...logo} />
          ))}
        </div>

        {/* Page dots (Optional: kept subtle) */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2"></div>
        )}
      </div>
    </div>
  );
}

/* ===================== LogoBox ===================== */

function LogoBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={[
        "flex items-center justify-center w-full h-20",
        "scale-98 hover:scale-100",
        "grayscale-0 hover:grayscale-0",
        "transition-all duration-300",
      ].join(" ")}
      title={alt}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
