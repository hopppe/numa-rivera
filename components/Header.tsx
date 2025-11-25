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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrollY > 200 ? "scrolled-header" : "transparent-header"
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
                src="/numa-logo.png"
                alt="Numa Logo"
                width={80}
                height={63}
                className="transition-all duration-300 object-contain"
                style={{
                  filter: scrollY > 200 ? "none" : "brightness(0) invert(1)",
                  width: "auto",
                  height: "64px",
                  imageRendering: "crisp-edges",
                  WebkitImageRendering: "crisp-edges",
                }}
              />
            </div>
            <span
              className={`ml-3 text-3xl font-extrabold transition-colors duration-300 ${
                scrollY > 200 ? "text-gray-900" : "text-white drop-shadow-lg"
              }`}
            >
              Numa Rivera
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
              scrollY > 200 ? "text-gray-700" : "text-white drop-shadow-md"
            }`}
          >
            Home
          </Link>
          <Link
            href="/who-we-are"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
              scrollY > 200 ? "text-gray-700" : "text-white drop-shadow-md"
            }`}
          >
            Who we are
          </Link>
          <Link
            href="/investment"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
              scrollY > 200 ? "text-gray-700" : "text-white drop-shadow-md"
            }`}
          >
            Investment
          </Link>
          <Link
            href="/about-saudi"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
              scrollY > 200 ? "text-gray-700" : "text-white drop-shadow-md"
            }`}
          >
            About Saudi
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
              scrollY > 200 ? "text-gray-700" : "text-white drop-shadow-md"
            }`}
          >
            Contact us
          </Link>
          <Button className="bg-amber-600 hover:bg-amber-700">
            Schedule Viewing
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrollY > 200 ? "text-gray-900" : "text-white"
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
          className={`border-t md:hidden transition-colors duration-300 ${
            scrollY > 200 ? "bg-white" : "bg-white/95 backdrop-blur"
          }`}
        >
          <div className="container mx-auto space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who we are
            </Link>
            <Link
              href="/investment"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investment
            </Link>
            <Link
              href="/about-saudi"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Saudi
            </Link>
            <Link
              href="/contact-us"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
