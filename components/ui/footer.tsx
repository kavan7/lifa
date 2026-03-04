"use client";

import Link from 'next/link';
import { Linkedin, Instagram, Mail, Globe } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden font-sans pt-32 border-t border-white/5">
      
      {/* --- ADVANCED BACKGROUND SYSTEM --- */}
      
      {/* Layer 1: Base Institutional Grid (Fades out toward the top) */}
      <div className="absolute inset-0 z-0 opacity-[0.08] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_100%,%23000_20%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Layer 2: The "Grounded" Red Spotlight (Pools at the bottom) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Layer 3: Noise Texture for Physicality */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center pb-24">
        
        {/* Logo Section */}
        <div className="mb-10">
          <div className="flex flex-col items-center group">
            <Link href="/" className="transition-all duration-700 hover:brightness-150">
              <Image 
                src="/logo3.png" 
                alt="LIFA Logo" 
                width={160} 
                height={45} 
                className="brightness-110 mb-6" 
              />
            </Link>
            <h2 className="text-[9px] font-sans font-bold tracking-[0.6em] uppercase text-zinc-500 transition-colors group-hover:text-red-800">
              Laurier Investment & Finance Association
            </h2>
          </div>
        </div>

        {/* Tagline: Refined Serif Italic */}
        <p className="text-2xl md:text-4xl font-serif italic text-zinc-200 mb-14 tracking-tight leading-snug max-w-2xl">
          Exceptional ideas, practiced.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-[10px] tracking-[0.4em] text-zinc-500 uppercase font-bold">
          <Link href="#who-we-are" className="hover:text-white transition-all hover:tracking-[0.5em]">About Us</Link>
          <Link href="#research" className="hover:text-white transition-all hover:tracking-[0.5em]">Research</Link>
          <Link href="#leadership" className="hover:text-white transition-all hover:tracking-[0.5em]">Leadership</Link>
        </nav>
      </div>

      {/* --- BOTTOM BAR: THE LEDGER --- */}
      <div className="relative z-10 border-t border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-[9px] uppercase tracking-[0.25em] text-zinc-500">
            
            {/* Left: Design Credit */}
            <div className="text-center md:text-left space-y-3">
              <p className="font-bold text-zinc-400"></p>
              <p> <Link href="#" className="text-zinc-200 hover:text-red-700 transition-colors underline underline-offset-8 decoration-red-900/40"></Link></p>
            </div>

            {/* Center: Address */}
            <div className="text-center space-y-3">
              <p className="font-bold text-zinc-400 italic flex items-center justify-center gap-2">
                <Globe size={11} className="text-red-800" /> Waterloo, Ontario
              </p>
              <p className="normal-case tracking-normal font-sans text-[11px] text-zinc-500">
                75 University Ave W, Lazaridis School of Business
              </p>
            </div>

            {/* Right: Socials & Rights */}
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-8 items-center">
                <Link href="#" className="hover:text-red-700 transition-all hover:-translate-y-1"><Linkedin size={18} /></Link>
                <Link href="#" className="hover:text-red-700 transition-all hover:-translate-y-1"><Instagram size={18} /></Link>
                <Link href="mailto:research@lifa.ca" className="hover:text-red-700 transition-all hover:-translate-y-1"><Mail size={18} /></Link>
              </div>
              <p className="font-bold text-zinc-600">© 2026 LIFA </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;