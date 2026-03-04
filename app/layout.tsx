import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LIFA | Exceptional Ideas, Practiced.",
  description: "Laurier Investment & Finance Association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#050505]`}>
        
        {/* --- PRISTINE BACKGROUND ENGINE --- */}
        <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-[#050505]">
          <Image
            src="/newest-background-best.jpg"
            alt="LIFA Background"
            fill
            /* THE QUALITY TRIFECTA:
               1. quality={100}: Stops Next.js from lowering the bit-rate.
               2. unoptimized: Prevents resizing/re-encoding, keeping the original file bits.
               3. priority: Loads this first so it doesn't "pop" in low-res.
            */
            quality={100}
            unoptimized 
            priority
            style={{ 
              objectFit: "cover", 
              objectPosition: "top center",
            }}
            className="opacity-100"
          />
          
          {/* GRADIENT BLENDING: 
              Instead of zooming the image to fill the whole screen (which kills quality), 
              we let it fade into a solid color at the bottom.
          */}
          <div className="absolute inset-0 bg-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 mx-auto w-full">
          <NavBar />
          <main>{children}</main>
        </div>

      </body>
    </html>
  );
}