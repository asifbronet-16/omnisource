"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users2 } from 'lucide-react';

const logos = [
  { src: "/assets/icons/splash building-ts1633320180.svg", name: "Splash Building Contracting" },
  { src: "/assets/icons/logo.png", name: "City Night Contracting LLC" },
  { src: "/assets/icons/al-tayer-logo.jpg", name: "Al Tayer" },
  { src: "/assets/icons/SP__Lulu-Group-International.png", name: "LULU Group International" },
  { src: "/assets/icons/Be-Bright-Dark-logo.webp", name: "BeBright" },
  { src: "/assets/icons/ferrari-logo-png_seeklogo-53764.png", name: "Ferrari" },
  { src: "/assets/icons/images.png", name: "Samsung" },

];

const ClientMarquee = () => {
  // 1. Counter Logic
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Animates from 0 to 200 over 2 seconds
    const controls = animate(count, 200, { duration: 2 });
    return rounded.on("change", (latest) => setDisplayCount(latest));
  }, []);

  return (
    <>
      <div className="bg-skin-background py-20 overflow-hidden font-public-sans text-skin-light text-center">

        {/* Header with Animated Number */}
        <div className="flex flex-col items-center mb-12 px-4">
          {/* Swapped to matching brand blue icon styling */}
          <div className="text-3xl mb-3 text-skin-ogo p-3 bg-skin-backgroundHighlight rounded-full backdrop-blur-sm border border-blue-900/40">
            <Users2 size={32} strokeWidth={1.5} />
          </div>
          <h2 className="text-6xl font-extrabold tracking-tight">
            <span className="font-normal text-skin-light">Trusted Corporate Clients</span>
          </h2>
        </div>

        {/* 2. Seamless Infinite Marquee with Corporate Framing */}
        <div className="relative flex border-y border-skin-subtle bg-skin-backgroundHighlight py-8 backdrop-blur-sm">

          {/* Left & Right fading masking elements to make the marquee merge smoothly into the margins */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020b1e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020b1e] to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-4 lg:grid-cols-7 gap-4 px-28 mx-auto">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center border-r border-blue-900/20 h-16 px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-24 w-32 object-contain grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default ClientMarquee;