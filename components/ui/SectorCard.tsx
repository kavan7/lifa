'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Make sure to install lucide-react if not already

interface SectorCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const SectorCard: React.FC<SectorCardProps> = ({ title, imageSrc, className = '' }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative h-[320px] sm:h-[400px] w-full rounded-md overflow-hidden group cursor-pointer bg-zinc-950 border border-white/10 shadow-2xl ${className}`}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      {/* --- 1. Background Image --- */}
      <motion.div
        variants={{
          initial: { scale: 1, filter: 'grayscale(100%) brightness(0.3)' },
          hover: { scale: 1.05, filter: 'grayscale(90%) brightness(0.5)' },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* --- 2. Base Darkening Gradient (Essential for text contrast) --- */}
      <div className="absolute inset-0 from-transparent via-zinc-950/60 to-zinc-950/90" />

      {/* --- 3. Interactive Red/Blue Gradient Overlay --- */}
      {/* Uses mix-blend-overlay to tint the image without blocking it */}
      <motion.div
        variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0  from-rose-900/80 to-slate-900/80 mix-blend-hard-light"
      />

      {/* --- 4. Mouse Follow Spotlight (Deep Red) --- */}
      <motion.div
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(159, 18, 57, 0.15), transparent 40%)`,
        }}
      />

      {/* --- 5. Content Layout --- */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
        
        {/* Top Right Arrow Icon */}
        <div className="flex justify-end">
          <motion.div
            variants={{
              initial: { opacity: 0, x: -10, y: 10 },
              hover: { opacity: 1, x: 0, y: 0 }
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-2 rounded-xs border border-white/20 text-white"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        {/* Text Content */}
        <div>
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: -8 },
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Line */}
            <div className="w-8 h-1 from-rose-600 to-indigo-600 mb-4 rounded-sm" />
            
            <h3 className="text-2xl md:text-3xl font-serif tracking-wide text-white leading-tight drop-shadow-lg">
              {title}
            </h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectorCard;