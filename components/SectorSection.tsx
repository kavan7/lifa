"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
      
      {/* NOISE OVERLAY - Optimized to avoid paint-flashing */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,%2380808012_1px,transparent_1px),linear-gradient(to_bottom,%2380808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,%23000_70%,transparent_100%)] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-700 font-sans font-bold text-[10px] uppercase tracking-[0.5em] block mb-4"
          >
            Research
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6"
          >
            Sectors & Expertise
          </motion.h2>
          <div className="h-[1px] w-24 bg-red-800/50 mx-auto" />
        </div>

        {/* CSS GRID SYSTEM - Much more stable than flex for Next.js hydration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectorsData.map((sector, idx) => (
            <Link 
              key={sector.id} 
              href={`/research/${sector.slug}`}
              className="block outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.1, 
                  ease: [0.21, 0.45, 0.32, 0.9] 
                }}
                className="group relative w-full aspect-[4/5] border border-white/10 overflow-hidden flex flex-col justify-end p-8 transition-colors duration-500 hover:border-red-900/60 bg-neutral-900/20 will-change-transform"
              >
                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 z-0 opacity-80 grayscale-50 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0">
                  <Image 
                    src={sector.image}
                    alt={sector.title}
                    fill
                    priority={idx < 4}
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* TEXT CONTENT */}
                <div className="relative z-20">
                  <div className="flex items-center gap-3 mb-4 overflow-hidden">
                    <div className="h-px w-6 bg-red-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <span className="text-red-500 font-sans font-bold text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                      View Vertical
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-tight group-hover:text-red-50 transition-colors duration-300">
                    {sector.title}
                  </h3>
                </div>

                {/* NUMBERING */}
                <div className="absolute top-6 right-8 pointer-events-none z-20">
                  <span className="font-serif text-6xl text-white/[0.03] group-hover:text-red-900/10 transition-colors duration-700 italic select-none">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* BOTTOM BORDER ANIMATION */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-30" />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}