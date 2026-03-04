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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-zinc-950`}>
        
        {/* --- REFINED BACKGROUND ENGINE --- */}
        <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
          <Image
            src="/newest-background-best.jpg"
            alt="LIFA Background"
            fill
            /* We use 'cover' but lock the position to the top. 
               This keeps the framing consistent on desktop.
            */
            style={{ objectFit: "cover", objectPosition: "50% 0%" }}
            priority
            className="opacity-100"
          />
          
          {/* THE FIX: A dual-layer gradient.
              Layer 1: General dimming for text readability.
              Layer 2: A heavy fade at the bottom to blend into the zinc-950 site background.
          */}
          <div className="absolute inset-0 bg-zinc-950/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950" />
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