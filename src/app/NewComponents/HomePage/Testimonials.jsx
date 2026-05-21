"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User2, Quote } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';

const testimonials = [
  {
    text: "What sets Omnisource apart is their genuine commitment to understanding our industry's unique demands. Every time we’ve worked with them, they’ve delivered workers who are not only skilled but also reliable and professional.",
    name: "John Sebastein",
    role: "HR Director",
    image: "/avatars/john.jpg",
  },
  {
    text: "We needed a skilled workforce on short notice, and this platform delivered exactly what we were looking for. The hiring process was smooth, and the workers were professional and experienced. Highly recommended!",
    name: "Amit Sharma",
    role: "Construction Manager",
    image: "/avatars/amit.jpg",
  },
  {
    text: "Omnisource has been our go-to partner for staffing solutions since 2017. Their attention to detail and ability to provide qualified workers—even on short notice—has helped us complete countless projects efficiently and on time.",
    name: "George. G.M",
    role: "Operations Manager",
    image: "/avatars/george.jpg",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-play for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-skin-background py-24 px-6 md:px-20 font-public-sans overflow-hidden">

      {/* Background Spotlight - Swapped from Red to OmniSource Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-skin-logo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Content */}
        <div className="text-center mb-16">
          <div className='mx-auto w-fit'>
            <Badge text={"Voices That Reflect Our Commitment"} /></div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight">
            What Our <span className="text-skin-logo">Clients Say</span>
          </h2>
        </div>

        {/* --- DESKTOP VIEW: 3-Column Grid Layout --- */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="p-8 rounded-xl border border-skin-subtle bg-skin-backgroundHighlight hover:bg-skin-background backdrop-blur-sm flex flex-col h-full hover:border-skin-borderHover transition-colors duration-300 group ">
              <p className="text-skin-light font-normal leading-relaxed mb-10 italic">
                "{item.text}"
              </p>

              <div className="h-[1px] w-full bg-skin-backgroundHighlight mb-8 mt-auto group-hover:bg-skin-logo/20 transition-colors" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Styled User Profile Fallback Circle */}
                  <div className="w-12 h-12 rounded-full bg-skin-background overflow-hidden border border-skin-subtle flex items-center justify-center text-skin-light group-hover:border-skin-badgeBorder transition-colors">
                    <User2 strokeWidth={1.5} size={24} />
                  </div>
                  <div>
                    <h4 className="text-skin-light font-bold text-sm tracking-widest">{item.name}</h4>
                    <p className="text-mutedLight text-xs uppercase tracking-tight font-semibold mt-0.5">{item.role}</p>
                  </div>
                </div>

                {/* Brand Accentuated Quote Mark */}
                <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  <Quote size={32} fill="#0f5cf2" strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MOBILE VIEW: Single Item Animated Carousel Slider --- */}
        <div className="lg:hidden relative h-[450px] sm:h-[350px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 p-8 rounded-xl border border-skin-subtle bg-skin-primaryCard backdrop-blur-sm flex flex-col justify-center"
            >
              {/* Massive Watermark Quote styling */}
              <div className="absolute top-4 left-6 text-7xl text-skin-mutedLight font-serif select-none pointer-events-none">“</div>

              <p className="text-base text-skin-light font-normal leading-relaxed italic text-center mb-8 px-2">
                "{testimonials[index].text}"
              </p>

              {/* Separator Accent Line */}
              <div className="h-[2px] w-12 bg-skin-logo mx-auto mb-6 rounded-full" />

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-skin-backgroundHighlight overflow-hidden border border-skin-subtle mb-3 flex items-center justify-center text-skin-light">
                  <User2 strokeWidth={1.5} size={26} />
                </div>
                <h4 className="text-skin-light font-bold tracking-tight">{testimonials[index].name}</h4>
                <p className="text-skin-logo text-xs font-semibold uppercase tracking-widest mt-0.5">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Bullet Pagination layout */}
          <div className="flex justify-center gap-2 absolute -bottom-6 left-0 right-0 z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? "w-8 bg-skin-logo" : "w-2 bg-skin-backgroundHighlight hover:bg-skin-logoHover"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
