"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Target, BarChart3, Globe, ChevronDown, History } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

/**
 * RESEARCH COHORT - INDUSTRIAL SLATE THEME
 * - Features: Active Winter 26 Cohort 
 * - Expansion: Women in Finance (WIF) Program
 * - Expansion: Historical Archives
 */

const COHORT_DATA = [
  {
    sector: "FIG",
    pm: { name: "Ben Allday", role: "Portfolio Manager", image: "/people/ben-allday.jpg", description: "Ben is a third-year BBA student at Wilfrid Laurier University, who has been involved in LIFA, ACIIC, and LCT. This is his fourth term in the LIFA analyst program, and he is looking forward to contributing as a FIG portfolio manager for the fund's inception. Ben has completed multiple buy-side internships, including analyst positions at Peloton Capital Management and Empire Life Investments. Next summer, he will be joining Ares Management as a Private Equity Summer Analyst. Outside of his studies and work, Ben enjoys hanging out with his friends, reading (fiction and non-fiction), and going on walks." },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
      { name: "Senior Analyst 2", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 3", role: "Junior Analyst", image: "", description: "" },
    ]
  },
  {
    sector: "Industrials",
    pm: { name: "Mike Chen", role: "Portfolio Manager", image: "/people/mike.jpg", description: "Michael is a third-year BBA student at Wilfrid Laurier University. This is his fourth term in the analyst program, and he is looking forward to contributing as a portfolio manager for the fund's inception. Recently, Michael completed his second term at Onex as an investment analyst for the L/S Global Special Situations Fund and the L/O U.S. Equities Fund. This upcoming fall, he will be joining TD Securities as an Investment Banking Analyst. Outside of his studies and work, Michael enjoys playing poker with friends, thrifting, fishing, camping, taking spontaneous road trips, and car spotting. " },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
    ]
  },
  {
    sector: "Consumer",
    pm: { name: "Milos Micic", role: "Portfolio Manager", image: "", description: "" },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
      { name: "Senior Analyst 2", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 3", role: "Junior Analyst", image: "", description: "" },
    ]
  },
  {
    sector: "Energy & Utilities",
    pm: { name: "Parker Solem", role: "Portfolio Manager", image: "", description: "" },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
    ]
  },
  {
    sector: "Healthcare",
    pm: { name: "PM Name", role: "Portfolio Manager", image: "", description: "" },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
      { name: "Senior Analyst 2", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
    ]
  },
  {
    sector: "Metals & Mining",
    pm: { name: "PM Name", role: "Portfolio Manager", image: "", description: "" },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
    ]
  },
  {
    sector: "TMT",
    pm: { name: "PM Name", role: "Portfolio Manager", image: "", description: "" },
    seniors: [
      { name: "Senior Analyst 1", role: "Senior Analyst", image: "", description: "" },
      { name: "Senior Analyst 2", role: "Senior Analyst", image: "", description: "" },
    ],
    juniors: [
      { name: "Junior Analyst 1", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 2", role: "Junior Analyst", image: "", description: "" },
      { name: "Junior Analyst 3", role: "Junior Analyst", image: "", description: "" },
    ]
  }
];

const WIF_DATA = [
  {
    sector: "",
    pm: { name: "Anastasia Paraskevopoulos", role: "Program Director", image: "/people/anastasia.jpg", description: "" },
    seniors: [
      { name: "Giuliana Mascitti", role: "Senior Analyst", image: "/people/giuliana.jpeg", description: "" },
      { name: "Isabela Petri", role: "Senior Analyst", image: "/people/Isabela.jpg", description: "" },
    ],
    juniors: [
      { name: "Tanya Khan", role: "Analyst", image: "/people/tanya.jpg", description: "" },
      { name: "Lauryne Assa", role: "Analyst", image: "/people/lauryne.jpg", description: "" },
      { name: "Sarah Neske", role: "Analyst", image: "/people/sarah.jpg", description: "" }
    ]
  }
];

const ARCHIVE_DATA: Record<string, typeof COHORT_DATA> = {
  "Fall 2025": [
    {
      sector: "Previous Analysts",
      pm: { name: "Ben Allday", role: "Senior Analyst", image: "/people/ben-allday.jpg", description: "" },
      seniors: [
        { name: "Parker Solem", role: "Senior Analyst", image: "/people/parker.jpg", description: "" },
        { name: "Past Senior 2", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Past Junior 1", role: "Junior Analyst", image: "", description: "" },
        { name: "Past Junior 2", role: "Junior Analyst", image: "", description: "" },
        { name: "Past Junior 3", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Previous Analysts",
      pm: { name: "Historical PM", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Past Senior", role: "Senior Analyst", image: "", description: "" },
        { name: "Past Senior 2", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Past Junior 1", role: "Junior Analyst", image: "", description: "" },
        { name: "Past Junior 2", role: "Junior Analyst", image: "", description: "" },
        { name: "Past Junior 3", role: "Junior Analyst", image: "", description: "" }
      ]
    }
  ]
};

// Premium custom easing for all animations
const customEase = [0.22, 1, 0.36, 1];

export default function ResearchCohort() {
  const [openArchive, setOpenArchive] = useState<string | null>(null);
  const [openWif, setOpenWif] = useState(true);

  return (
    <section className="relative bg-[#0f1117] py-32 px-6 md:px-12 overflow-hidden border-t border-white/5" id="analysts">
      
      {/* --- REFINED & ANIMATED BACKGROUND SYSTEM --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.12, 0.08] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[70%] h-[70%] bg-slate-800 rounded-full blur-[140px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-red-950 rounded-full blur-[160px] pointer-events-none z-0" 
      />
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #ffffff15 1px, transparent 0),
            linear-gradient(to right, #ffffff03 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff03 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 64px 64px, 64px 64px'
        }}
      />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
                 //@ts-ignore
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: 40 }} 
                viewport={{ once: true }}
                     //@ts-ignore
                transition={{ duration: 1, ease: customEase, delay: 0.2 }}
                className="h-px bg-red-800" 
              />
              <span className="text-red-700 font-sans font-bold text-[10px] uppercase tracking-[0.5em] block">Institutional Coverage</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tighter leading-[0.9] flex flex-wrap gap-x-6">
              The Winter Cohort <span className="text-zinc-600 font-light italic">/</span> <span className="text-zinc-400">2026</span>
            </h2>
          </motion.div>
        </div>

        {/* ACTIVE COHORT PODS */}
        <div className="space-y-28">
          {COHORT_DATA.map((pod, pIdx) => (
            <SectorPod key={pIdx} pod={pod} podIndex={pIdx} />
          ))}
        </div>

        {/* --- WIF SECTION --- */}
        <div className="mt-64 border-t border-white/5 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                 //@ts-ignore
            transition={{ duration: 0.8, ease: customEase }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12"
          >
            <div>
              <span className="text-red-800 font-sans font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Internal Initiatives</span>
              <h3 className="text-3xl font-serif text-white tracking-tight italic">Women in Finance</h3>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {openWif && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                     //@ts-ignore
                transition={{ duration: 0.6, ease: customEase }}
                className="overflow-hidden"
              >
                <div className="py-20 space-y-32">
                  {WIF_DATA.map((pod, pIdx) => (
                    <SectorPod key={`wif-${pIdx}`} pod={pod} podIndex={pIdx} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- ARCHIVE SECTION --- */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                 //@ts-ignore
            transition={{ duration: 0.8, ease: customEase }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12"
          >
            <div>
              <span className="text-zinc-500 font-sans font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Historical Records</span>
              <h3 className="text-3xl font-serif text-white tracking-tight italic">Previous Analyst Cohorts</h3>
            </div>
            
            <div className="relative inline-block w-full md:w-64">
              <button 
                onClick={() => setOpenArchive(openArchive === "Fall 2025" ? null : "Fall 2025")}
                className="w-full bg-[#1a1c23] border border-white/10 px-6 py-4 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-300 hover:border-red-800/50 transition-all"
              >
                <span className="flex items-center gap-2"><History size={12} className="text-red-800" /> Fall 25 Cohort</span>
                <ChevronDown size={14} className={clsx("transition-transform duration-500 ease-[0.22,1,0.36,1]", openArchive && "rotate-180")} />
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {openArchive && ( openArchive in ARCHIVE_DATA ) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                //@ts-ignore
                transition={{ duration: 0.6, ease: customEase }}
                className="overflow-hidden"
              >
                <div className="py-20 space-y-32">
                  {ARCHIVE_DATA[openArchive].map((pod, pIdx) => (
                    <SectorPod key={`archive-${pIdx}`} pod={pod} podIndex={pIdx} isArchive />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

/* ===================== SECTOR POD SUB-COMPONENT ===================== */

function SectorPod({ pod, podIndex = 0, isArchive = false }: { pod: any, podIndex?: number, isArchive?: boolean }) {
  // For archives, we merge all members into a single array for equality
  const allMembers = isArchive 
    ? [pod.pm, ...pod.seniors, ...pod.juniors] 
    : [];

  return (
    <div className={clsx("relative", isArchive && "opacity-60 hover:opacity-100 transition-opacity duration-500")}>
      
      {/* Only render sector header if it has a valid sector name (omits empty WIF header) */}
      {pod.sector && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
               //@ts-ignore
          transition={{ duration: 0.6, ease: customEase }}
          className="flex items-center gap-6 mb-10"
        >
          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-6 py-2.5 backdrop-blur-2xl rounded-sm">
            <Globe size={12} className={isArchive ? "text-zinc-500" : "text-red-800"} />
            <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] text-zinc-200">{pod.sector}</h3>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/5 via-white/5 to-transparent" />
        </motion.div>
      )}

      {isArchive ? (
        /* ARCHIVE VIEW: Flat Equality Grid */
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {allMembers.map((member, mIdx) => (
            <MemberCard 
              key={mIdx} 
              member={member} 
              delay={mIdx * 0.05} 
              // Flip to left side tooltip for the last 3 items in a 6-col grid to prevent screen overflow
              alignPopover={(mIdx % 6) >= 3 ? "left" : "right"}
            />
          ))}
        </div>
      ) : (
        /* ACTIVE VIEW: Hierarchical Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 flex items-center gap-3"
            >
              <Target size={14} className="text-red-800" />
              <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Pod Leader</p>
            </motion.div>
            <MemberCard member={pod.pm} featured delay={0.1} alignPopover="right" />
          </div>

          <div className="lg:col-span-9">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <BarChart3 size={14} className="text-zinc-600" />
              <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Analysts</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {pod.seniors.map((senior: any, sIdx: number) => (
                <MemberCard 
                  key={`senior-${sIdx}`} 
                  member={senior} 
                  delay={0.2 + (sIdx * 0.1)} 
                  // In a 5-col grid, the last 2 items should pop tooltip to the left
                  alignPopover={(sIdx % 5) >= 3 ? "left" : "right"}
                />
              ))}
              {pod.juniors.map((junior: any, jIdx: number) => {
                const overallIdx = pod.seniors.length + jIdx;
                return (
                  <MemberCard 
                    key={`junior-${jIdx}`} 
                    member={junior} 
                    isJunior 
                    delay={0.2 + (overallIdx * 0.1)} 
                    alignPopover={(overallIdx % 5) >= 3 ? "left" : "right"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== MEMBER CARD COMPONENT ===================== */

function MemberCard({ 
  member, 
  featured = false, 
  isJunior = false, 
  delay = 0,
  alignPopover = "right" 
}: { 
  member: any, 
  featured?: boolean, 
  isJunior?: boolean, 
  delay?: number,
  alignPopover?: "left" | "right"
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = alignPopover === "left";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.96 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1 }} 
      viewport={{ once: true, margin: "-50px" }}
           //@ts-ignore
      transition={{ duration: 0.7, ease: customEase, delay }}
      // Z-index dynamically elevates so the side-tooltip never gets clipped by neighboring cards
      className={clsx("relative", isHovered ? "z-50" : "z-10")} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group">
        <div className={clsx(
          "relative bg-[#1a1c23] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-red-900/40 shadow-2xl aspect-[4/5]",
          featured && "ring-1 ring-white/10"
        )}>
          {/* Image / Icon */}
          {member.image ? (
            <Image src={member.image} alt={member.name} fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-zinc-800">
              <User size={featured ? 60 : 30} strokeWidth={0.5} />
            </div>
          )}

          {/* Decorative Borders */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 group-hover:border-red-800 transition-colors duration-500 z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10 group-hover:border-red-800 transition-colors duration-500 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-800 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:w-full z-20 shadow-[0_0_15px_rgba(153,27,27,0.5)] pointer-events-none" />
        </div>

        {/* Member Details */}
        <div className="mt-5 space-y-1 relative z-30">
          <h4 className={clsx("font-serif text-zinc-100 group-hover:text-white transition-colors duration-300", featured ? "text-2xl md:text-3xl" : "text-[15px] md:text-md")}>
            {member.name}
          </h4>
          <p className={clsx("font-sans font-bold uppercase tracking-[0.25em] transition-colors duration-300", isJunior ? "text-[8px] text-zinc-600 group-hover:text-zinc-400" : "text-[9px] text-red-800/70 group-hover:text-red-500")}>
            {member.role}
          </p>
        </div>
      </div>

      {/* SUPER PROFESSIONAL SIDE POPOVER */}
      <AnimatePresence>
        {isHovered && member.description && (
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: isLeft ? 5 : -5, scale: 0.98 }}
                 //@ts-ignore
            transition={{ duration: 0.3, ease: customEase }}
            className={clsx(
              "absolute z-[100] pointer-events-none",
              // On Mobile: drop down below the card
              "top-full left-0 right-0 mt-4",
              // On Desktop: sleek side panel
              "md:top-0 md:mt-0 md:w-[320px]",
              isLeft ? "md:right-full md:mr-6 md:left-auto" : "md:left-full md:ml-6 md:right-auto"
            )}
          >
            <div className="relative p-6 bg-[#13151b]/95 border border-red-900/30 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-sm">
              
              {/* Responsive Triangle Pointer */}
              <div className={clsx(
                "absolute bg-[#13151b] border-red-900/30 rotate-45",
                // Mobile Triangle (pointing up)
                "-top-1.5 left-8 w-3 h-3 border-l border-t md:hidden",
                // Desktop Triangle (pointing left or right)
                "md:block md:top-8 md:-top-auto md:w-3 md:h-3",
                isLeft 
                  ? "md:-right-1.5 md:left-auto md:border-r md:border-t md:border-l-0 md:border-b-0" 
                  : "md:-left-1.5 md:right-auto md:border-l md:border-b md:border-r-0 md:border-t-0"
              )} />
              
              <p className="text-zinc-300 text-[11.5px] font-sans leading-relaxed relative z-10">
                {member.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}