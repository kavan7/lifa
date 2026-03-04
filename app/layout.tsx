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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        
        {/* FULLSCREEN background image */}
        <Image
          src="/newest-background-best.jpg"
          alt=""
          fill
       
          style={{ objectFit: "contain", objectPosition: "top" }}
          priority
          className=" -z-10"
        />
        <div className="absolute inset-0 bg-zinc-950/50 -z-10" />

        {/* CENTERED MAX-WIDTH SITE CONTAINER */}
        <div className="mx-auto w-full ">
          <NavBar />
          {children}
        </div>

      </body>
    </html>
  );
}
