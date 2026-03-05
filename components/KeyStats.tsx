"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/**
 * HISTORY & STATS SECTION
 * * Layout: 
 * - Narrative: Asymmetrical 12-column grid with a sticky "History" title.
 * - Stats: "Ledger" style grid with thin vertical separators and high-contrast typography.
 * * Instructions: Drop this into app/about/page.tsx
 */

export default function HistoryAndStatsPage() {
  return (
    <main className="w-full bg-zinc-100  text-zinc-900 overflow-x-hidden">
      <HistoryAndStats />
    </main>
  );
}

/* ===================== MAIN SECTION ===================== */

function HistoryAndStats() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] } 
    },
  };

  return (
    <section className="w-full py-24 md:py-32 border-t opacity-100 border-zinc-100"  id="who-we-are">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ===== PART 1: THE NARRATIVE (Asymmetrical Grid) ===== */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Column: The Sticky Title */}
          <div className="lg:col-span-4">
            <motion.div  className="lg:sticky lg:top-32">
              <span className="text-red-700 font-sans font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                Institutional Legacy
              </span>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-zinc-950">
                Our <br className="hidden lg:block" /> History
              </h2>
              <p className="mt-6 font-sans text-zinc-500 text-sm max-w-[200px]">
                Tracing our evolution from a research collective to a market leader.
              </p>
            </motion.div>
          </div>

          {/* Right Column: The Narrative Copy */}
          <div className="lg:col-span-7 lg:col-start-6">
          
            <motion.div className="space-y-8">
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-zinc-800"> 
                The club was first established in YYYY by a group of students
                driven by the conviction that deep fundamental research is the 
                only sustainable path to alpha.
              </p>
              
              {/* Decorative Red Accent Line */}
              <div className="h-px w-20 bg-red-800 my-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans text-zinc-600 leading-relaxed text-md">
                <p>
                  Our journey began with a focus on sector-specific expertise. 
                  By integrating macroeconomic frameworks with granular company 
                  analysis, we developed a proprietary methodology that 
                  identifies opportunities others overlook.
                </p>
                <p>
                  Today, we operate with the same intellectual rigor that 
                  defined our founding. Our commitment to transparency, 
                  long-term thinking, and fundamental excellence continues to 
                  guide our evolution in a complex global landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== PART 2: THE LEDGER STATS (High-Contrast Grid) ===== */}
        <motion.div 
          className="mt-10 pt-20 border-t border-zinc-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <motion.div >
              <h3 className="font-serif text-4xl text-zinc-950">Scale & Performance</h3>
              <p className="font-sans text-zinc-500 mt-2 tracking-wide uppercase text-xs font-semibold">
                Operational Metrics • Fiscal Year 2026
              </p>
            </motion.div>
          </div>

          {/* Ledger-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0">
            <StatItem 
              value="$70,000" 
              label="Assets Under Management" 
              detail="Deployed across core sectors" 
            />
            <StatItem 
              value="45+" 
              label="Active Members" 
              detail="Senior & Junior Analysts" 
              hasBorder 
            />
            <StatItem 
              value="08" 
              label="Years Established" 
              detail="Continuous market presence" 
              hasBorder 
            />
            <StatItem 
              value="7" 
              label="Sectors Covered" 
              detail="North American equity coverage" 
              hasBorder 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== HELPER COMPONENT: STAT ITEM ===================== */

function StatItem({ 
  value, 
  label, 
  detail, 
  hasBorder = false 
}: { 
  value: string; 
  label: string; 
  detail: string; 
  hasBorder?: boolean 
}) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: -15 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
      }}
      className={clsx(
        "relative px-4 lg:px-10",
        hasBorder && "lg:border-l lg:border-zinc-200"
      )}
    >
      {/* Large Numerical Value */}
      <div className="font-serif text-5xl md:text-6xl text-zinc-950 tracking-tighter mb-5">
        {value}
      </div>
      
      {/* Labels */}
      <div className="space-y-1.5">
        <h4 className="font-sans font-bold text-[13px] uppercase tracking-widest text-zinc-900">
          {label}
        </h4>
        <p className="font-sans text-xs text-zinc-400 leading-tight">
          {detail}
        </p>
      </div>

      {/* Subtle bottom mobile border */}
      <div className="block lg:hidden w-12 h-px bg-zinc-200 mt-8" />
    </motion.div>
  );
}