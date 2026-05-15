"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillarData = [
    {
        title: "Mission",
        desc: "Deliver tailored staffing solutions that meet client needs, enhance productivity, and support sustainable business growth.",
        icon: "🎯"
    },
    {
        title: "Vision",
        desc: "To be the leading provider of smart, reliable workforce solutions across construction, logistics, and maintenance industries.",
        icon: "👁️"
    },
    {
        title: "Values",
        desc: "Commitment, reliability, teamwork, innovation, and client focus in every staffing solution we deliver.",
        icon: "💎"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const SolutionsSection = () => {
    return (
        <section className="bg-black text-white font-public-sans overflow-hidden">

            {/* Top Section: Pillars */}
            <div className="relative pt-24 pb-16 px-6">
                {/* Background Video Container */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover grayscale opacity-10"
                    >
                        <source src="/assets/videos/GettyImages-626932814-1.mp4" type="video/mp4" />
                        <img src="/assets/30640-e1748858511145.webp" alt="Background Fallback" />
                    </video>
                    <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, black 80%)" />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="relative z-10 max-w-6xl mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="inline-block px-4 py-1 border border-white/20 rounded-sm mb-6 bg-white/5">
                        <p className="text-[10px] tracking-widest text-white/80">✳ Scaling Success Together</p>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-semibold mb-20">
                        Solutions Built <span className="text-red-600">Around You</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
                        {pillarData.map((item, idx) => (
                            <AnimatePresence key={idx}>
                                <motion.div
                                    // key={item.title + idx}
                                    variants={itemVariants}
                                    className="flex flex-col items-center group relative"
                                >
                                    <div className="text-4xl text-red-600 mb-6 transition-transform group-hover:scale-110 duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        ))}
                    </div>
                </motion.div>
                <div className='absolute inset-x-0 inset-y-0 bg-gradient-to-t from-black from-30% via-transparent via-50% to-transparent to-90% z-8' />
            </div>

            {/* Bottom Section: Split CTA */}
            <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm">

                {/* Left Side: Text Box (Coming from the Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }} // Starts 100px to the left
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#2A0000] p-12 md:p-16 flex flex-col justify-center"
                >
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Skilled Manpower When You Need It!
                    </h3>
                    <p className="text-gray-300 font-light leading-relaxed mb-10">
                        We provide fast, reliable access to skilled manpower across industries,
                        ensuring your projects stay on track with minimal delays. From short-term
                        needs to long-term staffing, we've got you covered.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-6 py-3 w-fit rounded-sm flex items-center gap-2 hover:bg-gray-200 transition-all text-sm font-semibold"
                    >
                        Connect With Us <span className="text-lg">↗</span>
                    </motion.button>
                </motion.div>

                {/* Right Side: Image Container (Coming from the Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }} // Starts 100px to the right
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative h-[400px] lg:h-auto overflow-hidden"
                >
                    <motion.img
                        initial={{ scale: 1.2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src='/assets/30640-e1748858511145.webp'
                        alt="Workers"
                        className="w-full h-full object-cover transition-all duration-700"
                    />
                </motion.div>
            </div>
  
        </section >
    );
};

export default SolutionsSection;