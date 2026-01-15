"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const NAV = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Research", href: "/research" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Optional glassy background */}
        <div className="bg-gray-800/50 backdrop-blur-md">
          {/* FULL WIDTH NAVBAR */}
          <div className="w-full h-28 px-10 flex items-center justify-between">
            {/* LOGO / BRAND */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo3.png" alt="Logo" width={150} height={40} />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex gap-10 ml-auto">
              {NAV.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "relative text-md font-serif font-medium transition-colors",
                      active ? "text-red-800" : "text-white hover:text-red-800"
                    )}
                  >
                    <span
                      className={clsx(
                        "absolute left-0 right-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-brand transition-transform duration-300",
                        active && "scale-x-100"
                      )}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden ml-auto h-9 w-9 grid place-items-center rounded-md border border-white/30 text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAV DRAWER */}
        {open && (
          <div className="md:hidden fixed inset-x-0 top-20 z-40">
            <div className="mx-4 rounded-xl border border-neutral-200 bg-white/95 backdrop-blur p-3 shadow-lg">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block px-3 py-2 rounded-lg text-sm font-medium",
                      active
                        ? "text-neutral-900 bg-neutral-50"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-20" />
    </>
  );
}
