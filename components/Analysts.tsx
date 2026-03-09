"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Shield, Target, BarChart3, Globe, ChevronDown, History, Star } from "lucide-react";
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
    sector: "TMT + FIG",
    pm: { name: "Alex Gan", role: "Portfolio Manager", image: "/people/stephen.jpg" },
    seniors: [
      { name: "Jack Ross", role: "Senior Analyst", image: "/people/jackr.jpg" },
      { name: "Nicholas Graham", role: "Senior Analyst", image: "/people/nicholas.jpg" },
    ],
    juniors: [
      { name: "Junior 1", role: "Junior Analyst", image: "/people/.jpg" },
      { name: "Junior 2", role: "Junior Analyst", image: "/people/.jpg" },
      { name: "Junior 3", role: "Junior Analyst", image: "/people/.jpg" },
    ]
  },
  {
    sector: "Healthcare",
    pm: { name: "Derek Gonzalez", role: "Portfolio Manager", image: "/people/stephen.jpg" },
    seniors: [
      { name: "Anastasia Paraskevopoulos", role: "Senior Analyst", image: "/people/.jpg" },
      { name: "Kyle Shaw", role: "Senior Analyst", image: "/people/.jpg" },
    ],
    juniors: [
      { name: "Kavan Abeyratne", role: "Junior Analyst", image: "/people/.jpg" },
        { name: "Victor Duong", role: "Junior Analyst", image: "/people/.jpg" },
      { name: "Zakariye Abdie", role: "Junior Analyst", image: "/people/zakariye.jpg" },
    ]
  },
  {
    sector: "Industrials",
    pm: { name: "Darshan Nandha", role: "Portfolio Manager", image: "/people/.jpg" },
    seniors: [
      { name: "Erin Howard", role: "Senior Analyst", image: "/people/erin.jpg" },
      { name: "Senior 2", role: "Senior Analyst", image: "/people/.jpg" },
    ],
    juniors: [
      { name: "Madis Hahn", role: "Junior Analyst", image: "/people/madis.jpg" },
      { name: "Junior 2", role: "Junior Analyst", image: "/people/.jpg" },
      { name: "Junior 3", role: "Junior Analyst", image: "/people/.jpg" },
    ]
  },
  {
    sector: "Consumers",
    pm: { name: "PM 1", role: "Portfolio Manager", image: "/people/.jpg" },
    seniors: [
      { name: "Senior 1", role: "Senior Analyst", image: "/people/.jpg" },
   
    ],
    juniors: [
            { name: "Gaurav Kaka", role: "Junior Analyst", image: "/people/gaurav.jpg" },
        { name: "Anna Freeman", role: "Junior Analyst", image: "/people/anna.jpg" },
         { name: "Keira Bardhi", role: "Junior Analyst", image: "/people/.jpg" },
    
     { name: "Josh Walker", role: "Junior Analyst", image: "/people/josh-w.jpg" },

    ]
  },
];

const WIF_DATA = [
  {
    sector: "",
    pm: { name: "Anastasia Paraskevopoulos", role: "Program Director", image: "/people/anastasia.jpg" },
    seniors: [
      { name: "Giuliana Mascitti", role: "Senior Analyst", image: "/people/giuliana.jpeg" },

         { name: "Isabela Petri", role: "Senior Analyst", image: "/people/Isabela.jpg" },
    ],
    juniors: [
         { name: "Tanya Khan", role: "Analyst", image: "/people/tanya.jpg" },
         { name: "Lauryne Assa", role: "Analyst", image: "/people/lauryne.jpg" },
      { name: "Sarah Neske", role: "Analyst", image: "/people/sarah.jpg" }
    ]
  }
];

const ARCHIVE_DATA: Record<string, typeof COHORT_DATA> = {
  "Fall 2025": [
    {
      sector: "Previous Analysts",
      pm: { name: "Ben Allday", role: "Senior Analyst", image: "/people/ben-allday.jpg" },
      seniors: [
        { name: "Parker Solem", role: "Senior Analyst", image: "/people/parker.jpg" },
        { name: "Past Senior 2", role: "Senior Analyst", image: "" }
      ],
      juniors: [
        { name: "Past Junior 1", role: "Junior Analyst", image: "" },
        { name: "Past Junior 2", role: "Junior Analyst", image: "" },
        { name: "Past Junior 3", role: "Junior Analyst", image: "" }
      ]
    },
        {
      sector: "Previous Analysts",
      pm: { name: "Historical PM", role: "Portfolio Manager", image: "" },
      seniors: [
        { name: "Past Senior", role: "Senior Analyst", image: "" },
        { name: "Past Senior 2", role: "Senior Analyst", image: "" }
      ],
      juniors: [
        { name: "Past Junior 1", role: "Junior Analyst", image: "" },
        { name: "Past Junior 2", role: "Junior Analyst", image: "" },
        { name: "Past Junior 3", role: "Junior Analyst", image: "" }
      ]
    }
  ]
};

export default function ResearchCohort() {
  const [openArchive, setOpenArchive] = useState<string | null>(null);
  const [openWif, setOpenWif] = useState(true);

  return (
    <section className="relative bg-[#0f1117] py-32 px-6 md:px-12 overflow-hidden border-t border-white/5" id="analysts">
      
      {/* --- REFINED BACKGROUND SYSTEM --- */}
      <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-slate-800/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-red-950/5 rounded-full blur-[160px] pointer-events-none z-0" />
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-red-800" />
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
            <SectorPod key={pIdx} pod={pod} />
          ))}
        </div>

        {/* --- WIF SECTION --- */}
        <div className="mt-64 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <span className="text-red-800 font-sans font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Internal Initiatives</span>
              <h3 className="text-3xl font-serif text-white tracking-tight italic">Women in Finance</h3>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {openWif && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="overflow-hidden"
              >
                <div className="py-20 space-y-32">
                  {WIF_DATA.map((pod, pIdx) => (
                    <SectorPod key={`wif-${pIdx}`} pod={pod} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- ARCHIVE SECTION --- */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
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
                <ChevronDown size={14} className={clsx("transition-transform duration-300", openArchive && "rotate-180")} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {openArchive && ( openArchive in ARCHIVE_DATA ) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="overflow-hidden"
              >
                <div className="py-20 space-y-32">
                  {ARCHIVE_DATA[openArchive].map((pod, pIdx) => (
                    <SectorPod key={`archive-${pIdx}`} pod={pod} isArchive />
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

function SectorPod({ pod, isArchive = false }: { pod: any, isArchive?: boolean }) {
  // For archives, we merge all members into a single array for equality
  const allMembers = isArchive 
    ? [pod.pm, ...pod.seniors, ...pod.juniors] 
    : [];

  return (
    <div className={clsx("relative", isArchive && "opacity-60 hover:opacity-100 transition-opacity duration-500")}>
      <div className="flex items-center gap-6 mb-10">
        <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-6 py-2.5 backdrop-blur-2xl rounded-sm">
          <Globe size={12} className={isArchive ? "text-zinc-500" : "text-red-800"} />
          <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] text-zinc-200">{pod.sector}</h3>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/5 via-white/5 to-transparent" />
      </div>

      {isArchive ? (
        /* ARCHIVE VIEW: Flat Equality Grid */
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {allMembers.map((member, mIdx) => (
            <MemberCard key={mIdx} member={member} />
          ))}
        </div>
      ) : (
        /* ACTIVE VIEW: Hierarchical Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="mb-8 flex items-center gap-3">
              <Target size={14} className="text-red-800" />
              <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Pod Leader</p>
            </div>
            <MemberCard member={pod.pm} featured />
          </div>

          <div className="lg:col-span-9">
            <div className="mb-8 flex items-center gap-3">
              <BarChart3 size={14} className="text-zinc-600" />
              <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Analysts</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {pod.seniors.map((senior: any, sIdx: number) => <MemberCard key={sIdx} member={senior} />)}
              {pod.juniors.map((junior: any, jIdx: number) => <MemberCard key={jIdx} member={junior} isJunior />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== MEMBER CARD COMPONENT ===================== */

function MemberCard({ member, featured = false, isJunior = false }: { member: any, featured?: boolean, isJunior?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative">
      <div className={clsx(
        "relative bg-[#1a1c23] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-red-900/40 shadow-2xl aspect-[4/5]",
        featured && "ring-1 ring-white/10"
      )}>
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-800">
            <User size={featured ? 60 : 30} strokeWidth={0.5} />
          </div>
        )}
        <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 group-hover:border-red-800 transition-colors" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10 group-hover:border-red-800 transition-colors" />
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-800 transition-all duration-700 group-hover:w-full z-20 shadow-[0_0_15px_rgba(153,27,27,0.5)]" />
      </div>

      <div className="mt-5 space-y-1">
        <h4 className={clsx("font-serif text-zinc-100 group-hover:text-white transition-colors", featured ? "text-2xl md:text-3xl" : "text-[15px] md:text-md")}>
          {member.name}
        </h4>
        <p className={clsx("font-sans font-bold uppercase tracking-[0.25em]", isJunior ? "text-[8px] text-zinc-600 group-hover:text-zinc-400" : "text-[9px] text-red-800/70 group-hover:text-red-500")}>
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}