"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set initial scroll position
    if (typeof window !== "undefined") {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header becomes solid when scrolled past 200px (about 33% through 600px hero section)
  const isScrolled = scrollY > 200;

  // Calculate opacity for smooth transition (transparent until 200px, then gradually solid)
  const headerOpacity = Math.min((scrollY - 200) / 100, 1); // Smooth transition over 100px after 200px

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrollY > 200 ? "scrolled-header" : "transparent-header"
        }`}
      style={{
        backgroundColor: scrollY > 200
          ? `rgba(255, 255, 255, ${0.95 * headerOpacity})`
          : "transparent",
        borderBottom: scrollY > 200
          ? `1px solid rgba(229, 231, 235, ${headerOpacity})`
          : "1px solid transparent",
      }}
    >
      <nav
        className="container mx-auto flex h-20 items-center justify-between px-4"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="relative h-16 w-auto flex items-center justify-center">
              <Image
                src={scrollY > 200 ? "/Numa Rivera Logo Black.png" : "/Numa Rivera Logo White.png"}
                alt="Numa Logo"
                width={80}
                height={63}
                className="transition-all duration-300 object-contain"
                style={{
                  width: "auto",
                  height: "64px",
                  imageRendering: "crisp-edges",
                } as React.CSSProperties}
              />
            </div>
            <div className="ml-3 flex flex-col leading-none" style={{ lineHeight: '0.9' }}>
              <span
                className={`text-3xl font-bold transition-colors duration-300 ${scrollY > 200 ? "text-gray-900" : "text-white drop-shadow-lg"
                  }`}
                style={{
                  fontFamily: '"Helvetica World", Helvetica, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Numa Rivera
              </span>

            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className={`text-base font-medium transition-colors duration-300 ${scrollY > 200 ? "text-gray-700 hover:text-[#03202F]" : "text-white drop-shadow-md hover:text-white/80"
              }`}
          >
            Home
          </Link>
          <Link
            href="/who-we-are"
            className={`text-base font-medium transition-colors duration-300 ${scrollY > 200 ? "text-gray-700 hover:text-[#03202F]" : "text-white drop-shadow-md hover:text-white/80"
              }`}
          >
            Who we are
          </Link>
          <Link
            href="/investment"
            className={`text-base font-medium transition-colors duration-300 ${scrollY > 200 ? "text-gray-700 hover:text-[#03202F]" : "text-white drop-shadow-md hover:text-white/80"
              }`}
          >
            Investment
          </Link>


          <Link
            href="/contact-us"
            className={`text-base font-medium transition-colors duration-300 ${scrollY > 200 ? "text-gray-700 hover:text-[#03202F]" : "text-white drop-shadow-md hover:text-white/80"
              }`}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrollY > 200 ? "text-gray-900" : "text-white"
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`border-t md:hidden transition-colors duration-300 ${scrollY > 200 ? "bg-white" : "bg-white/95 backdrop-blur"
            }`}
        >
          <div className="container mx-auto space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-[rgba(3,32,47,0.1)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-[rgba(3,32,47,0.1)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who we are
            </Link>
            <Link
              href="/investment"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-[rgba(3,32,47,0.1)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investment
            </Link>


            <Link
              href="/contact-us"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-[rgba(3,32,47,0.1)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
