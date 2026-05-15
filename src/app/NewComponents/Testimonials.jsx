"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User2, Quote  } from 'lucide-react';

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
    <section className="relative bg-black py-24 px-6 md:px-20 font-public-sans overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-white/20 rounded-sm mb-6 bg-white/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">
              ✳ Voices That Reflect Our Commitment
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
        </div>

        {/* --- DESKTOP VIEW: 3-Column Grid --- */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col h-full">
              <p className="text-gray-300 font-light leading-relaxed mb-10 italic">"{item.text}"</p>
              <div className="h-[1px] w-full bg-white/10 mb-8 mt-auto" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border border-white/20 flex items-center justify-center">
                    {/* <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" /> */}
                    <User2 className=" grayscale" size={30}/>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                <div className="text-red-600  font-serif"><Quote size={34} fill='red' /></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MOBILE VIEW: Single Item Carousel --- */}
        <div className="lg:hidden relative h-[450px] sm:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-center"
            >
              <div className="absolute top-6 left-6 text-6xl text-red-600/10 font-serif">“</div>
              <p className="text-lg text-gray-200 font-light italic text-center mb-8">"{testimonials[index].text}"</p>
              <div className="h-[1px] w-16 bg-red-600 mx-auto mb-6" />
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-700 overflow-hidden border-2 border-red-600/30 mb-3 flex items-center justify-center">
                  {/* <img src={testimonials[index].image} alt={testimonials[index].name} className="w-full h-full object-cover grayscale" /> */}
                <User2 className=" grayscale" size={30}/>
                </div>
                <h4 className="text-white font-bold">{testimonials[index].name}</h4>
                <p className="text-red-600 text-[10px] uppercase tracking-widest">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile Pagination */}
          <div className="flex justify-center gap-2 absolute -bottom-10 left-0 right-0">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-300 rounded-full ${i === index ? "w-6 bg-red-600" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
