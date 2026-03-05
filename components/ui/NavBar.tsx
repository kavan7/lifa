"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";

// 1. Navigation Configuration
const NAV = [
  {
    name: "About",
    href: "#",
    children: [
      { name: "Who We Are", href: "#who-we-are" },
      { name: "Leadership", href: "#leadership" },
    ],
  },
  {
    name: "Research",
    href: "#",
    children: [
          { name: "Analysts", href: "#analysts" }, 
      { name: "Technology, Media & Telecom", href: "/research/tmt" },
      { name: "Financial Institutions", href: "/research/financial-institutions" },
      { name: "Metals & Mining", href: "/research/mining" },
      { name: "Industrials", href: "/research/industrials" },
      { name: "Consumers", href: "/research/consumers" },
      { name: "Healthcare", href: "/research/healthcare" },
      { name: "Energy & Utilities", href: "/research/energy" },
    ],
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // SCROLL LOGIC
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Re-show if near the top
      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // 2. Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header 
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Glassmorphism Container */}
        <div className="   backdrop-blur-sm ">
          <div className="w-full h-24 px-6 md:px-10 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image 
                src="/logo3.png" 
                alt="Logo" 
                width={140} 
                height={38} 
                className="brightness-110"
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex gap-10 ml-auto font-serif items-center">
              {NAV.map((item) => {
                const hasChildren = !!item.children;
                const isActive = pathname === item.href || item.children?.some(c => pathname === c.href);

                return (
                  <div key={item.name} className="relative group py-4">
                    {hasChildren ? (
                      <>
                        {/* Parent Dropdown Trigger */}
                        <button
                          className={clsx(
                            "flex items-center gap-1.5 text-md font-normal transition-all duration-300",
                            isActive ? "text-red-500" : "text-zinc-300 group-hover:text-red-500"
                          )}
                        >
                          {item.name}
                          <svg 
                            className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* DROPDOWN MENU */}
                        <div className="absolute top-full right-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out w-72">
                          <div className="  borderrounded-xl  overflow-hidden p-1.5">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={clsx(
                                  "block px-4 py-2.5 text-[15px] font-medium rounded-lg transition-all",
                                  pathname === child.href 
                                    ? "text-white bg-white/10" 
                                    : "text-zinc-400 hover:text-red-500 hover:bg-white/5"
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={clsx(
                          "text-md font-serif font-medium transition-colors",
                          pathname === item.href ? "text-red-500" : "text-zinc-300 hover:text-red-500"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button 
              onClick={() => setMobileOpen((v) => !v)} 
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAV DRAWER */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-x-0 top-[96px] p-4 z-50">
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto">
              {NAV.map((item) => (
                <div key={item.name} className="py-3 border-b border-white/5 last:border-0">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] px-3 mb-2">
                    {item.name}
                  </div>
                  <div className="space-y-1">
                    {item.children ? (
                      item.children.map(child => (
                        <Link 
                          key={child.href} 
                          href={child.href} 
                          onClick={() => setMobileOpen(false)} 
                          className={clsx(
                            "block px-3 py-2 rounded-lg text-base font-serif font-medium transition-colors",
                            pathname === child.href ? "text-red-500 bg-red-500/5" : "text-zinc-300"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))
                    ) : (
                      <Link 
                        href={item.href} 
                        onClick={() => setMobileOpen(false)} 
                        className={clsx(
                          "block px-3 py-2 rounded-lg text-base font-serif font-medium transition-colors",
                          pathname === item.href ? "text-red-500 bg-red-500/5" : "text-zinc-300"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div 
              className="fixed inset-0 bg-black/40 -z-10 backdrop-blur-sm" 
              onClick={() => setMobileOpen(false)}
            />
          </div>
        )}
      </header>
      
      <div className="h-24" />
    </>
  );
}