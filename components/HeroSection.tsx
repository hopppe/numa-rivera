"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate overlay opacity based on scroll position
  // At top (scrollY = 0): opacity = 0.3 (darker for text legibility)
  // As you scroll: opacity increases gradually
  // At scrollY = 400: opacity = 0.5 (half visible for better text contrast)
  const overlayOpacity = Math.min(0.3 + (scrollY / 400) * 0.2, 0.5);

  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ 
        height: '600px',
        marginTop: '-80px', // Negative margin to pull up behind header (header is h-20 = 80px)
        paddingTop: '80px', // Add padding to compensate so content isn't hidden behind header
        position: 'relative',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      {/* Background Image with Desaturation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kafd-skyline.jpg"
          alt="KAFD Skyline"
          fill
          className="object-cover"
          style={{
            filter: "grayscale(40%) brightness(0.85) contrast(1.1)",
          }}
          priority
        />
      </div>
      {/* Professional Overlay - Dynamic Opacity */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black to-black transition-opacity duration-300"
        style={{
          opacity: overlayOpacity,
        }}
      ></div>
      <div className="container relative z-20 mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Experience Kingdom Transformation in line with Vision 2030
          </h1>
          <p className="mb-8 text-xl text-gray-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Investment, management, and development services across Saudi Arabia
          </p>
        </div>
      </div>
    </section>
  );
}

