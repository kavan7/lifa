"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Single-file section that includes:
 * - Our History (copy)
 * - Facts & Figures / Key Stats (animated)
 *
 * Drop this into something like:
 * app/about/page.tsx
 * or
 * app/components/HistoryAndStatsSection.tsx
 *
 * Uses only React + framer-motion + Tailwind.
 */

/* ===================== PAGE / SECTION ===================== */

export default function HistoryAndStatsPage() {
  return (
    <main className="w-full bg-white">
      <HistoryAndStats />
    </main>
  );
}

/* ===================== COMBINED SECTION ===================== */

function HistoryAndStats() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Our History ===== */}
        <div className="pt-16 md:pt-24">
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Our History
          </h2>

          <div className="mt-8 max-w-3xl space-y-8">
            <p className="font-sans text-base md:text-lg text-black/70 leading-relaxed">
              The club was first established in YYYY
            </p>

            <p className="font-sans text-base md:text-lg text-black/70 leading-relaxed">
          </p>

            <p className="font-sans text-base md:text-lg text-black/70 leading-relaxed">
              
            </p>
          </div>
        </div>

        {/* ===== Facts & Figures / Key Stats ===== */}
        <div className="mt-16 md:mt-24 pb-16 md:pb-24">
          <KeyStats
            eyebrow="Facts & Figures"
            blurb="At the heart of our approach to portfolio management is the integration of macroeconomic, sector-related, and company-specific knowledge."
            stats={[
              { value: "$70,000", label: "Assets Under Management" },
              { value: "IDK", label: "Members" },
              { value: "YY", label: "Years Established" },
            ]}
            variant="clean"
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== KEY STATS (INLINE) ===================== */

type Stat = {
  value: string;
  label: string;
  sublabel?: string;
};

function KeyStats({
  eyebrow,
  blurb,
  stats,
  variant = "clean",
}: {
  eyebrow?: string;
  blurb?: string;
  stats: Stat[];
  variant?: "clean" | "boxed";
}) {
  const wrap = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardBase =
    "relative flex flex-col items-center justify-center text-center";

  const cleanCard = "px-6 py-6";
  const boxedCard =
    "px-8 py-8 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm ring-1 ring-black/5";

  return (
    <div className="w-full">
      {/* Top line + blurb */}
      <motion.div
        variants={wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {eyebrow && (
          <motion.h3
           
            className="font-serif text-3xl md:text-4xl text-black"
          >
            {eyebrow}
          </motion.h3>
        )}

        {blurb && (
          <motion.p
          
            className="mt-6 max-w-4xl font-sans text-base md:text-lg text-black/70 leading-relaxed"
          >
            {blurb}
          </motion.p>
        )}
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 md:mt-16"
      >
        <div
          className={[
            "grid gap-10 md:gap-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            variant === "clean" ? "items-start" : "items-stretch",
          ].join(" ")}
        >
          {stats.map((s, i) => (
            <motion.div
              key={`${s.label}-${i}`}
           
              className={[
                cardBase,
                variant === "clean" ? cleanCard : boxedCard,
              ].join(" ")}
            >
              {/* subtle accent line for the clean look */}
              {variant === "clean" && (
                <div className="w-10 h-[1px] bg-black/10 mb-5" />
              )}

              <div className="font-serif text-5xl md:text-6xl tracking-tight text-black">
                {s.value}
              </div>

              <div className="mt-3 text-sm md:text-base font-sans font-semibold text-black/80 tracking-wide">
                {s.label}
              </div>

              {s.sublabel && (
                <div className="mt-1 text-xs md:text-sm font-sans text-black/50">
                  {s.sublabel}
                </div>
              )}

              {/* subtle vertical separators for desktop */}
              {variant === "clean" && i < stats.length - 1 && (
                <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-16 w-px bg-black/10" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
