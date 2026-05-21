"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users2 } from 'lucide-react';

const logos = [
  { name: 'BM', src: '/logos/bm.png' },
  { name: 'Al Tayer', src: '/logos/al-tayer.png' },
  { name: 'Al-Futtaim', src: '/logos/al-futtaim.png' },
  { name: 'Acciona', src: '/logos/acciona.png' },
  { name: 'ASGC', src: '/logos/asgc.png' },
  { name: 'Siemens', src: '/logos/siemens.png' },
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
          <h2 className="text-4xl font-extrabold tracking-tight">
            {displayCount}+ <span className="font-normal text-skin-light">Trusted Corporate Clients</span>
          </h2>
        </div>

        {/* 2. Seamless Infinite Marquee with Corporate Framing */}
        <div className="relative flex border-y border-skin-subtle bg-skin-backgroundHighlight py-8 backdrop-blur-sm">

          {/* Left & Right fading masking elements to make the marquee merge smoothly into the margins */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020b1e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020b1e] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1035], // Adjust -1035 to exactly half the width of your total logo list
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Render the logos twice to ensure zero gaps */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-16 border-r border-blue-900/20 h-16 min-w-[300px] text-skin-light"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full w-auto object-contain grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-300 text-skin-light"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    
    </>
  );
};

export default ClientMarquee;