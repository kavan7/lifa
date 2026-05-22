"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Target, BarChart3, Globe, ChevronDown, History, Calendar } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

type Term = "Spring" | "Fall" | "Winter";

/**
 * MASTER COHORT REGISTRY - 2026/2027 ACADEMIC YEAR
 * Mapped exactly to match the rows and columns of the master team schedule.
 */
const SEASONAL_COHORT_DATA: Record<Term, any[]> = {
  Spring: [
    {
      sector: "TMT",
      pm: { name: "Jack Ross", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Jenson Cropley", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: []
    },
    {
      sector: "FIG",
      pm: { name: "Ben Allday", role: "Portfolio Manager", image: "/people/ben-allday-cropped.jpg", description: "Ben is a third-year BBA student at Wilfrid Laurier University, who has been involved in LIFA, ACIIC, and LCT. This is his fourth term in the LIFA analyst program, and he is looking forward to contributing as a FIG portfolio manager for the fund's inception. Ben has completed multiple buy-side internships, including analyst positions at Peloton Capital Management and Empire Life Investments. Next summer, he will be joining Ares Management as a Private Equity Summer Analyst. Outside of his studies and work, Ben enjoys hanging out with his friends, reading (fiction and non-fiction), and going on walks." },
      seniors: [
        { name: "Anson Lee", role: "Senior Analyst", image: "", description: "" },
        { name: "Sophia Qu", role: "Senior Analyst", image: "", description: "" },
        { name: "Markus Sumi", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: []
    },
    {
      sector: "Industrials",
      pm: { name: "Michael Chen", role: "Portfolio Manager", image: "/people/mike-cropped.jpg", description: "Michael is a third-year BBA student at Wilfrid Laurier University. This is his fourth term in the analyst program, and he is looking forward to contributing as a portfolio manager for the fund's inception. Recently, Michael completed his second term at Onex as an investment analyst for the L/S Global Special Situations Fund and the L/O U.S. Equities Fund. This upcoming fall, he will be joining TD Securities as an Investment Banking Analyst. Outside of his studies and work, Michael enjoys playing poker with friends, thrifting, fishing, camping, taking spontaneous road trips, and car spotting. " },
      seniors: [
        { name: "Tylor Llewellyn", role: "Senior Analyst", image: "", description: "" },
        { name: "Maurya Shah", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: []
    },
    {
      sector: "Consumer",
      pm: { name: "Milos Micic", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Michelle Peng", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: []
    },
    {
      sector: "Healthcare",
      pm: { name: "Danny Zhang", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Rayhan Bahadurali", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: []
    },
    {
      sector: "Energy & Utilities",
      pm: { name: "Vacant PM", role: "Portfolio Manager", image: "", description: "" },
      seniors: [],
      juniors: []
    }
  ],
  Fall: [
    {
      sector: "TMT",
      pm: { name: "John Van Wyk", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Ally Stewart", role: "Senior Analyst", image: "", description: "" },
        { name: "Luca Tersigni", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Keira Bardhi", role: "Junior Analyst", image: "", description: "" },
        { name: "Josh Walker", role: "Junior Analyst", image: "", description: "" },
        { name: "Kellan Sneyd", role: "Junior Analyst", image: "", description: "" },
        { name: "Yuxuan Sun", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "FIG",
      pm: { name: "Ben Allday & Linda Basha", role: "Portfolio Managers", image: "", description: "" },
      seniors: [
        { name: "Markus Sumi", role: "Senior Analyst", image: "", description: "" },
        { name: "Tanya Khan", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Christian Kristo", role: "Junior Analyst", image: "", description: "" },
        { name: "Nikheil Modi", role: "Junior Analyst", image: "", description: "" },
        { name: "Darius Montazeri", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Industrials",
      pm: { name: "Kieran Allo", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Anna Freeman", role: "Senior Analyst", image: "", description: "" },
        { name: "Aaron Yu", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Lucas Campagnoni", role: "Junior Analyst", image: "", description: "" },
        { name: "Josh Kotler", role: "Junior Analyst", image: "", description: "" },
        { name: "Juliana Sierra-Botero", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Consumer",
      pm: { name: "Danny Zhang", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Michelle Peng", role: "Senior Analyst", image: "", description: "" },
        { name: "Gaurav Kaka", role: "Senior Analyst", image: "", description: "" },
        { name: "Mathusha Sivaratnam", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Abtin Ghafourzadeh", role: "Junior Analyst", image: "", description: "" },
        { name: "Treesha Ray", role: "Junior Analyst", image: "", description: "" },
        { name: "Siya Uppal", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Healthcare",
      pm: { name: "Vacant PM", role: "Portfolio Manager", image: "", description: "" },
      seniors: [],
      juniors: []
    },
    {
      sector: "Energy & Utilities",
      pm: { name: "Vacant PM", role: "Portfolio Manager", image: "", description: "" },
      seniors: [],
      juniors: []
    }
  ],
  Winter: [
    {
      sector: "TMT",
      pm: { name: "Jack Ross", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Ally Stewart", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Keira Bardhi", role: "Junior Analyst", image: "", description: "" },
        { name: "Josh Walker", role: "Junior Analyst", image: "", description: "" },
        { name: "Kellan Sneyd", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "FIG",
      pm: { name: "Ben Allday & Linda Basha", role: "Portfolio Managers", image: "", description: "" },
      seniors: [
        { name: "Anson Lee", role: "Senior Analyst", image: "", description: "" },
        { name: "Sophia Qu", role: "Senior Analyst", image: "", description: "" },
        { name: "Markus Sumi", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Christian Kristo", role: "Junior Analyst", image: "", description: "" },
        { name: "Nikheil Modi", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Industrials",
      pm: { name: "Michael Chen", role: "Portfolio Manager", image: "/people/mike-cropped.jpg", description: "" },
      seniors: [
        { name: "Maurya Shah", role: "Senior Analyst", image: "", description: "" },
        { name: "Christian Cerovac", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Lucas Campagnoni", role: "Junior Analyst", image: "", description: "" },
        { name: "Josh Kotler", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Consumer",
      pm: { name: "Milos Micic", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Tylor Llewellyn", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Kavan Abeyratne", role: "Junior Analyst", image: "", description: "" },
        { name: "Darius Montazeri", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Healthcare",
      pm: { name: "Danny Zhang", role: "Portfolio Manager", image: "", description: "" },
      seniors: [
        { name: "Rayhan Bahadurali", role: "Senior Analyst", image: "", description: "" }
      ],
      juniors: [
        { name: "Siya Uppal", role: "Junior Analyst", image: "", description: "" }
      ]
    },
    {
      sector: "Energy & Utilities",
      pm: { name: "Parker Solem", role: "Portfolio Manager", image: "", description: "" },
      seniors: [],
      juniors: [
        { name: "Abtin Ghafourzadeh", role: "Junior Analyst", image: "", description: "" },
        { name: "Treesha Ray", role: "Junior Analyst", image: "", description: "" },
        { name: "Juliana Sierra-Botero", role: "Junior Analyst", image: "", description: "" }
      ]
    }
  ]
};

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

const ARCHIVE_DATA: Record<string, any[]> = {
  "2025 / 2026": [
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
    }
  ]
};

const customEase = [0.22, 1, 0.36, 1];

export default function ResearchCohort() {
  const [activeTerm, setActiveTerm] = useState<Term>("Winter");
  const [openArchive, setOpenArchive] = useState<string | null>(null);
  const [openWif, setOpenWif] = useState(true);

  return (
    <section className="relative bg-[#0f1117] py-32 px-6 md:px-12 overflow-hidden border-t border-white/5" id="analysts">
      
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-slate-800 rounded-full blur-[140px] pointer-events-none z-0 opacity-10" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-red-950 rounded-full blur-[160px] pointer-events-none z-0 opacity-5" />
      
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

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER SECTION WITH COHORT TOGGLE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-10 bg-red-800" />
              <span className="text-red-700 font-sans font-bold text-[10px] uppercase tracking-[0.5em] block">Institutional Coverage</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-[0.9]">
              Research Cohorts <span className="text-zinc-600 font-light italic">/</span> <span className="text-zinc-400">2026-2027</span>
            </h2>
          </div>

          {/* SLIDING TERM SEGMENTED CONTROLLER */}
          <div className="bg-[#14161d] border border-white/5 p-1.5 flex rounded-sm relative w-full md:w-auto overflow-hidden shadow-2xl">
            {(["Spring", "Fall", "Winter"] as Term[]).map((term) => {
              const isActive = activeTerm === term;
              return (
                <button
                  key={`tab-${term}`}
                  onClick={() => setActiveTerm(term)}
                  className={clsx(
                    "relative px-8 py-3.5 text-[10px] font-sans font-bold uppercase tracking-widest transition-colors duration-300 flex-1 md:flex-none z-10 whitespace-nowrap",
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeCohortTab"
                      className="absolute inset-0 bg-[#1d202b] border border-white/5 shadow-lg rounded-sm z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Calendar size={11} className={isActive ? "text-red-700" : "text-zinc-600"} />
                    {term}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE COHORT CONTAINER LAYER */}
        <div className="min-h-[400px] w-full">
          <CohortTermView activeTerm={activeTerm} />
        </div>

        {/* --- WIF INITIATIVE --- */}
        <div className="mt-64 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <span className="text-red-800 font-sans font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Internal Initiatives</span>
              <h3 className="text-3xl font-serif text-white tracking-tight italic">Women in Finance</h3>
            </div>
          </div>

          <AnimatePresence>
            {openWif && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                //@ts-ignore
                transition={{ duration: 0.5, ease: customEase }}
                className="overflow-hidden"
              >
                <div className="py-20 space-y-32">
                  {WIF_DATA.map((pod, pIdx) => (
                    <SectorPod key={`wif-pod-${pIdx}`} pod={pod} termCtx="WIF" />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- HISTORICAL ARCHIVES --- */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <span className="text-zinc-500 font-sans font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">Historical Records</span>
              <h3 className="text-3xl font-serif text-white tracking-tight italic">Previous Academic Years</h3>
            </div>
            
            <div className="relative inline-block w-full md:w-64">
              <button 
                onClick={() => setOpenArchive(openArchive === "2025 / 2026" ? null : "2025 / 2026")}
                className="w-full bg-[#1a1c23] border border-white/10 px-6 py-4 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-300 hover:border-red-800/50 transition-all rounded-sm"
              >
                <span className="flex items-center gap-2"><History size={12} className="text-red-800" /> 25 / 26 Registry</span>
                <ChevronDown size={14} className={clsx("transition-transform duration-500 ease-[0.22,1,0.36,1]", openArchive && "rotate-180")} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {openArchive && ( openArchive in ARCHIVE_DATA ) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                //@ts-ignore
                transition={{ duration: 0.5, ease: customEase }}
                className="overflow-hidden"
              >
                <div className="py-20 space-y-32">
                  {ARCHIVE_DATA[openArchive].map((pod, pIdx) => (
                    <SectorPod key={`archive-${openArchive}-${pIdx}`} pod={pod} termCtx={openArchive} isArchive />
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

/* ===================== COHORT TERM VIEW PORTAL COMPONENT ===================== */

function CohortTermView({ activeTerm }: { activeTerm: Term }) {
  const currentCohort = SEASONAL_COHORT_DATA[activeTerm];
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`term-view-${activeTerm}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="space-y-28 w-full"
      >
        {currentCohort.map((pod, pIdx) => (
          <SectorPod 
            key={`pod-${activeTerm}-${pod.sector}-${pIdx}`} 
            pod={pod} 
            termCtx={activeTerm}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

/* ===================== SECTOR POD SUB-COMPONENT ===================== */

function SectorPod({ pod, termCtx, isArchive = false }: { pod: any, termCtx: string, isArchive?: boolean }) {
  const allMembers = isArchive ? [pod.pm, ...pod.seniors, ...pod.juniors] : [];
  
  // Clean checks to filter empty fields or structural vacancies
  const isVacantPm = !pod.pm || pod.pm.name?.toLowerCase().includes("vacant");
  const hasNoAnalysts = pod.seniors.length === 0 && pod.juniors.length === 0;

  return (
    <div className={clsx("relative", isArchive && "opacity-60 hover:opacity-100 transition-opacity duration-500")}>
      
      {pod.sector && (
        <div className="flex items-center gap-6 mb-10">
          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-6 py-2.5 backdrop-blur-2xl rounded-sm">
            <Globe size={12} className={isArchive ? "text-zinc-500" : "text-red-800"} />
            <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.4em] text-zinc-200">{pod.sector}</h3>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/5 via-white/5 to-transparent" />
        </div>
      )}

      {isArchive ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {allMembers.map((member, mIdx) => (
            <MemberCard 
              key={`member-${termCtx}-${pod.sector}-${member.name}-${mIdx}`} 
              member={member} 
              delay={mIdx * 0.02} 
              alignPopover={(mIdx % 6) >= 3 ? "left" : "right"}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="mb-8 flex items-center gap-3">
              <Target size={14} className="text-red-800" />
              <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Pod Leader</p>
            </div>
            {isVacantPm ? (
              <div className="border border-white/5 bg-[#12131a] p-8 rounded-sm aspect-[4/5] flex items-center justify-center border-dashed">
                <p className="text-zinc-600 font-sans uppercase tracking-widest text-[9px] font-bold">Unassigned</p>
              </div>
            ) : (
              <MemberCard 
                key={`pm-${termCtx}-${pod.sector}-${pod.pm.name}`}
                member={pod.pm} 
                featured 
                delay={0.01} 
                alignPopover="right" 
              />
            )}
          </div>

          <div className="lg:col-span-9">
            <div className="mb-8 flex items-center gap-3">
              <BarChart3 size={14} className="text-zinc-600" />
              <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest">Analysts</p>
            </div>
            
            {hasNoAnalysts ? (
              <div className="border border-white/5 bg-[#12131a]/40 p-12 rounded-sm border-dashed">
                <p className="text-zinc-600 font-sans italic text-[11px]">No analyst positions active for this term window.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {pod.seniors.map((senior: any, sIdx: number) => (
                  <MemberCard 
                    key={`sr-${termCtx}-${pod.sector}-${senior.name}-${sIdx}`} 
                    member={senior} 
                    delay={0.02 + (sIdx * 0.01)} 
                    alignPopover={(sIdx % 5) >= 3 ? "left" : "right"}
                  />
                ))}
                {pod.juniors.map((junior: any, jIdx: number) => {
                  const overallIdx = pod.seniors.length + jIdx;
                  return (
                    <MemberCard 
                      key={`jr-${termCtx}-${pod.sector}-${junior.name}-${jIdx}`} 
                      member={junior} 
                      isJunior 
                      delay={0.02 + (overallIdx * 0.01)} 
                      alignPopover={(overallIdx % 5) >= 3 ? "left" : "right"}
                    />
                  );
                })}
              </div>
            )}
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
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: customEase, delay }}
      className={clsx("relative", isHovered ? "z-50" : "z-10")} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group">
        <div className={clsx(
          "relative bg-[#1a1c23] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-red-900/40 shadow-2xl aspect-[4/5] rounded-sm",
          featured && "ring-1 ring-white/10"
        )}>
          {member.image ? (
            <Image src={member.image} alt={member.name} fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-zinc-800">
              <User size={featured ? 60 : 30} strokeWidth={0.5} />
            </div>
          )}

          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 group-hover:border-red-800 transition-colors duration-500 z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10 group-hover:border-red-800 transition-colors duration-500 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-800 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:w-full z-20 shadow-[0_0_15px_rgba(153,27,27,0.5)] pointer-events-none" />
        </div>

        <div className="mt-5 space-y-1 relative z-30">
          <h4 className={clsx("font-serif text-zinc-100 group-hover:text-white transition-colors duration-300", featured ? "text-xl md:text-2xl" : "text-[14px] md:text-md")}>
            {member.name}
          </h4>
          <p className={clsx("font-sans font-bold uppercase tracking-[0.25em] transition-colors duration-300", isJunior ? "text-[8px] text-zinc-600 group-hover:text-zinc-400" : "text-[9px] text-red-800/70 group-hover:text-red-500")}>
            {member.role}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && member.description && (
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: isLeft ? 4 : -4, scale: 0.98 }}
            //@ts-ignore
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={clsx(
              "absolute z-[100] pointer-events-none",
              "top-full left-0 right-0 mt-4",
              "md:top-0 md:mt-0 md:w-[320px]",
              isLeft ? "md:right-full md:mr-6 md:left-auto" : "md:left-full md:ml-6 md:right-auto"
            )}
          >
            <div className="relative p-6 bg-[#13151b]/95 border border-red-900/30 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-sm">
              <div className={clsx(
                "absolute bg-[#13151b] border-red-900/30 rotate-45",
                "-top-1.5 left-8 w-3 h-3 border-l border-t md:hidden",
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