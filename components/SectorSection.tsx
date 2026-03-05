"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/**
 * SECTORS & EXPERTISE SECTION
 * - Integrated: High-resolution imagery with grayscale-to-detail transitions.
 * - Logic: Responsive 4-column grid (desktop) scaling to 2-column (mobile).
 */

const sectorsData = [
  { 
    id: 1, 
    title: "Technology, Media & Telecom", 
    slug: "tmt",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 2, 
    title: "Financial Institutions", 
    slug: "financial-institutions",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    id: 3, 
    title: "Metals & Mining", 
    slug: "mining",
    image: "https://images.unsplash.com/photo-1628487749130-2d41acb1802a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1ldGFscyUyMCUyNiUyMG1pbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 4, 
    title: "Industrials", 
    slug: "industrials",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    id: 5, 
    title: "Consumers", 
    slug: "consumers",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    id: 6, 
    title: "Healthcare", 
    slug: "healthcare",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D"
  },
  { 
    id: 7, 
    title: "Energy & Utilities", 
    slug: "energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
  },
];

export default function SectorsSection() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 relative overflow-hidden" id="research">
      
      {/* --- ENHANCED BACKGROUND LAYERS --- */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,%2380808012_1px,transparent_1px),linear-gradient(to_bottom,%2380808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,%23000_70%,transparent_100%)] z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-red-700 font-sans font-bold text-[10px] uppercase tracking-[0.5em] block mb-4">
            Research Universe
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6">
            Sectors & Expertise
          </h2>
          <div className="h-[1px] w-24 bg-red-800/50 mx-auto" />
        </motion.div>

        {/* INTEGRATED EQUAL GRID */}
        <div className="flex flex-wrap justify-center gap-5">
          {sectorsData.map((sector, idx) => (
            <Link 
              key={sector.id} 
              href={`/research/${sector.slug}`}
              className="w-full sm:w-[calc(45%)] lg:w-[calc(23%)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative h-full aspect-[4/5] border border-white/5 overflow-hidden flex flex-col justify-end p-8 transition-all duration-500 hover:border-red-900/40 cursor-pointer"
              >
                {/* SPOTLIGHT EFFECT */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(600px_at_50%_50%,_rgba(153,27,27,0.15),transparent)]" />

                {/* IMAGE OVERLAY - HIGH QUALITY IMPLEMENTATION */}
                <div className="absolute inset-0 z-0 opacity-60 grayscale-70 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-50 group-hover:grayscale-0">
                  <Image 
                    src={sector.image}
                    alt={sector.title}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Subtle vignette for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                {/* TEXT CONTENT */}
                <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-6 bg-red-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <span className="text-red-500 font-sans font-bold text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Vertical
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-tight">
                    {sector.title}
                  </h3>
                </div>

                {/* NUMBERING */}
                <div className="absolute top-6 right-8 pointer-events-none z-20">
                  <span className="font-serif text-6xl text-white/[0.02] group-hover:text-red-900/10 transition-colors duration-700 italic">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center z-30" />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}