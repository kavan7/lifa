"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, History } from "lucide-react";
import clsx from "clsx";

/**
 * UPDATED LEADERSHIP SECTION
 * - Added: Image support for headshots.
 * - Hierarchy: Executive Tier (3-col) -> Management Tier (4-col grid).
 * - Addition: Expandable Director Archives for previous cohorts.
 */

const EXECUTIVE_TEAM = [
  { 
    name: "Stephen Stack", 
    title: "Co-President", 
    role: "CEO",
    image: "/headshots/stephen.jpg",
    description: ""
  },
  { 
    name: "Linda Basha", 
    title: "Co-President", 
    role: "CIO",
    image: "/headshots/linda.jpg",
    description: ""
  },
  { 
    name: "Ainslie Loveys", 
    title: "Executive VP", 
    role: "CIO",
    image: "/headshots/ainslie-loveys.jpg",
    description: ""
  },
];

const MANAGEMENT_TEAM = [
  { name: "Nathaniel Littkemann", title: "Vice President, Investments", image: "/headshots/nathaniel.jpg", description: "" },
  { name: "Jerry Tian", title: "Vice President, Investments", image: "/headshots/jerry.jpg", description: "" },
  { name: "Keeret Grewal", title: "Vice President, Investments", image: "/headshots/keeret.jpg", description: "" },
  { name: "Ben Chillian", title: "Vice President, Investments", image: "/headshots/ben.jpg", description: "" },
  { name: "Person 5", title: "Vice President, Corporate", image: "/headshots/placeholder.jpg", description: "" },
  { name: "Person 6", title: "Vice President, Events", image: "/headshots/placeholder.jpg", description: "" },
  { name: "Person 7", title: "Vice President, Technology", image: "/headshots/placeholder.jpg", description: "" },
  { name: "Person 8", title: "Vice President, Marketing", image: "/headshots/placeholder.jpg", description: "" },
];

// DATA FOR PREVIOUS DIRECTOR COHORTS
const DIRECTOR_ARCHIVE: Record<string, any[]> = {
  "25/26": [
    { name: "Previous Director 1", title: "Director, Investments", image: "" },
    { name: "Previous Director 2", title: "Director, Corporate", image: "" },
    { name: "Previous Director 3", title: "Director, Events", image: "" },
    { name: "Previous Director 4", title: "Director, Technology", image: "" },
        { name: "Previous Director 1", title: "Director, Investments", image: "" },
    { name: "Previous Director 2", title: "Director, Corporate", image: "" },
    { name: "Previous Director 3", title: "Director, Events", image: "" },
    { name: "Previous Director 4", title: "Director, Technology", image: "" },
        { name: "Previous Director 1", title: "Director, Investments", image: "" },
    { name: "Previous Director 2", title: "Director, Corporate", image: "" },
    { name: "Previous Director 3", title: "Director, Events", image: "" },
    { name: "Previous Director 4", title: "Director, Technology", image: "" },

  ]
};

export default function Leadership() {
  const [openArchive, setOpenArchive] = useState<string | null>(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="leadership">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-red-800 font-sans font-bold text-[10px] uppercase tracking-[0.4em] block mb-2">
            The 25/26 Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-950">
            Leadership
          </h2>
        </motion.div>

        {/* TIER 1: EXECUTIVES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-100 pt-12 mb-20">
          {EXECUTIVE_TEAM.map((member, idx) => (
            <ProfileCard 
              key={idx} 
              member={member} 
              isExecutive 
              delay={idx * 0.1} 
            />
          ))}
        </div>

        {/* TIER 2: VPs & MANAGEMENT */}
        <div className="space-y-8 mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
             <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                Vice Presidents & Management
             </h3>
             <div className="h-px flex-1 bg-zinc-100" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {MANAGEMENT_TEAM.map((member, idx) => (
              <ProfileCard 
                key={idx} 
                member={member} 
                delay={0.2 + idx * 0.05} 
              />
            ))}
          </div>
        </div>

        {/* --- DIRECTOR ARCHIVE SECTION --- */}
        <div className="border-t border-zinc-100 pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <span className="text-zinc-400 font-sans font-bold text-[9px] uppercase tracking-[0.4em] block mb-2">
                25/26 Academic Year
              </span>
              <h3 className="text-2xl font-serif text-zinc-900 tracking-tight italic">
                Directors
              </h3>
            </div>
            
            <div className="relative inline-block w-full md:w-64">
              <button 
                onClick={() => setOpenArchive(openArchive === "25/26" ? null : "25/26")}
                className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-600 hover:border-red-800/50 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <History size={12} className="text-red-800" /> 25/26 Directors
                </span>
                <ChevronDown size={14} className={clsx("transition-transform duration-300", openArchive && "rotate-180")} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {openArchive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-20">
                  {DIRECTOR_ARCHIVE[openArchive].map((member, idx) => (
                    <ProfileCard 
                      key={idx} 
                      member={member} 
                      delay={idx * 0.05} 
                      isArchive
                    />
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

/* ===================== PROFILE CARD COMPONENT ===================== */

function ProfileCard({ 
  member, 
  isExecutive = false, 
  isArchive = false,
  delay = 0 
}: { 
  member: any; 
  isExecutive?: boolean; 
  isArchive?: boolean;
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        "group cursor-pointer relative",
        isArchive && "opacity-70 hover:opacity-100 transition-opacity"
      )}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-200 transition-transform duration-700 group-hover:scale-105" />
        )}
        
        {/* DARK OVERLAY FOR DESCRIPTION READABILITY */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-zinc-950/80 transition-all duration-500" />

        {/* DESCRIPTION OVERLAY (Bottom part) */}
        {!isArchive && (
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
            <p className="font-sans text-[11px] text-zinc-300 leading-relaxed italic border-l border-red-800 pl-4">
              {member.description || "Active leadership member contributing to the Laurier Investment & Finance Association."}
            </p>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-800 transition-all duration-500 group-hover:w-full z-20" />
      </div>

      {/* MEMBER INFO */}
      <div className="space-y-1">
        <h4 className={clsx(
          "font-serif text-zinc-950 transition-colors duration-300 group-hover:text-red-800",
          isExecutive ? "text-2xl" : "text-lg"
        )}>
          {member.name}
        </h4>
        <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-800 transition-colors">
          {member.title}
        </p>
      </div>
    </motion.div>
  );
}