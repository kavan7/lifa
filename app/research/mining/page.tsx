"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Calendar, User, Pickaxe } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/ui/footer"; 

/**
 * METALS & MINING SECTOR RESEARCH PAGE
 * - Refined Typography
 * - Integrated <Footer />
 * - Liquid Glass Background
 */

const PITCHES = [
  {
    title: "Example Pitch 1",
    date: "February 2026",
    analysts: "W26 Analyst Team",
    size: "",
    type: "Equity Research",
    description: "Pitch description."
  },

];

export default function MiningSectorPage() {
  const sectorName = "Metals & Mining";

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-red-900/40 relative overflow-hidden font-serif">
      
      {/* --- BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-zinc-900/30 blur-[100px]" />
      </div>
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #fff 1px, transparent 0),
            linear-gradient(to right, #ffffff08 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff08 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px'
        }}
      />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="pt-24 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
          <Link href="/research" className="group flex items-center gap-3 text-zinc-500 hover:text-red-500 transition-all duration-300 font-sans text-[10px] uppercase tracking-[0.4em]">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Research Repository
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pt-10 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-red-800" />
              <span className="text-red-700 font-sans font-bold text-[10px] uppercase tracking-[0.5em]">Sector Vertical</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-8 leading-[1.1]">
              {sectorName}
            </h1>
            
            <p className="max-w-xl font-sans text-zinc-400 text-lg leading-relaxed font-light italic">
              Evaluating the industrial value chain and global commodity cycles to deconstruct the {sectorName} ecosystem.
            </p>
          </motion.div>
        </section>

        {/* Research List */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="font-serif text-3xl italic text-zinc-200">The Pitches</h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PITCHES.map((pitch, idx) => (
              <motion.div
                key={idx}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/[0.01] border border-white/5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.03] group-hover:border-red-900/30 group-hover:shadow-[0_0_40px_-15px_rgba(153,27,27,0.2)]" />
                
                <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-red-500 bg-red-500/5 px-3 py-1 border border-red-500/20">{pitch.type}</span>
                      <span className="h-4 w-px bg-zinc-800" />
                      <span className="text-[10px] font-sans font-medium text-zinc-500 flex items-center gap-1.5 uppercase tracking-widest"><Calendar size={12} className="text-zinc-700" /> {pitch.date}</span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-serif text-zinc-100 leading-tight group-hover:text-white transition-colors">{pitch.title}</h4>
                    <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed font-light">{pitch.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                        <User size={12} className="text-zinc-400" />
                      </div>
                      <span className="text-xs text-zinc-400 font-sans tracking-wide">
                        Lead Analyst: <span className="text-zinc-200">{pitch.analysts}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                    <button className="relative px-8 py-4 bg-white text-black font-sans font-bold text-[10px] uppercase tracking-[0.3em] transition-all duration-300 hover:bg-red-800 hover:text-white shadow-2xl">
                      <div className="flex items-center gap-2">Access Report <Download size={14} /></div>
                    </button>
                    <span className="text-[10px] font-sans text-zinc-600 tracking-tighter uppercase">PDF • {pitch.size}</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 bg-red-800 transition-all duration-700 group-hover:h-full" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* YOUR FOOTER COMPONENT */}
        <Footer />
      </div>
    </main>
  );
}