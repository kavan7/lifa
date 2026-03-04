"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

/**
 * UPDATED LEADERSHIP SECTION
 * - Added: Image support for headshots.
 * - Hierarchy: Executive Tier (3-col) -> Management Tier (4-col grid).
 */

const EXECUTIVE_TEAM = [
  { 
    name: "Stephen Stack", 
    title: "Co-President", 
    role: "CEO",
    image: "/headshots/stephen.jpg", // Add your image paths here
    description: "Stephen oversees the strategic direction of the fund, bringing years of experience in institutional asset management."
  },
  { 
    name: "Linda Basha", 
    title: "Co-President", 
    role: "CIO",
    image: "/headshots/linda.jpg",
    description: "Linda leads our research and portfolio strategy, focusing on long-term fundamental value across global sectors."
  },
];

const MANAGEMENT_TEAM = [
  { name: "Nathaniel Littkemann", title: "Vice President, Investments", image: "/headshots/nathaniel.jpg", description: "Focusing on TMT and structural market shifts." },
  { name: "Jerry Tian", title: "Vice President, Investments", image: "/headshots/jerry.jpg", description: "Specializing in financial institutions and capital markets." },
  { name: "Keeret Grewal", title: "Vice President, Investments", image: "/headshots/keeret.jpg", description: "Lead researcher for the Metals & Mining vertical." },
  { name: "Ben Chillian", title: "Vice President, Investments", image: "/headshots/ben.jpg", description: "Analyzing industrials and global supply chain efficiency." },
  { name: "Person 5", title: "Vice President, Corporate", image: "/headshots/placeholder.jpg", description: "Managing institutional partnerships and corporate relations." },
  { name: "Person 6", title: "Vice President, Events", image: "/headshots/placeholder.jpg", description: "Directing flagship conferences and networking summits." },
  { name: "Person 7", title: "Vice President, Technology", image: "/headshots/placeholder.jpg", description: "Overseeing digital infrastructure and analytical tools." },
  { name: "Person 8", title: "Vice President, Marketing", image: "/headshots/placeholder.jpg", description: "Leading brand strategy and association outreach." },
];

export default function Leadership() {
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
        <div className="space-y-8">
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

      </div>
    </section>
  );
}

/* ===================== PROFILE CARD COMPONENT ===================== */

function ProfileCard({ 
  member, 
  isExecutive = false, 
  delay = 0 
}: { 
  member: any; 
  isExecutive?: boolean; 
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer relative"
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
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
          <p className="font-sans text-[11px] text-zinc-300 leading-relaxed italic border-l border-red-800 pl-4">
            {member.description || "Active leadership member contributing to the Laurier Investment & Finance Association."}
          </p>
        </div>
        
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