"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Gem } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';

const pillarData = [
    {
        title: "Mission",
        desc: "Deliver tailored staffing solutions that meet client needs, enhance productivity, and support sustainable business growth.",
        icon: Target
    },
    {
        title: "Vision",
        desc: "To be the leading provider of smart, reliable workforce solutions across construction, logistics, and maintenance industries.",
        icon: Eye
    },
    {
        title: "Values",
        desc: "Commitment, reliability, teamwork, innovation, and client focus in every staffing solution we deliver.",
        icon: Gem
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
        <>
            <section className=" relative bg-skin-background text-skin-light font-public-sans overflow-hidden">
                {/* Top Section: Solutions Pillars */}
                <div className="relative pt-24 pb-20 px-6 z-10">
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover grayscale opacity-50"
                        >
                            <source src="/assets/videos/GettyImages-626932814-1.mp4" type="video/mp4" />
                            <img src="/assets/30640-e1748858511145.webp" alt="Background Fallback" />
                        </video>
                       

                        <div className="absolute inset-0 z-10">
                            <div className="absolute inset-0 bg-gradient-primary" />
                            <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
                        </div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="relative z-10 max-w-6xl mx-auto text-center"
                    >
                        {/* Section Tag Pill */}
                        <motion.div variants={itemVariants}>
                            <div className=' mx-auto'><Badge text={"Scaling Success Together"}/></div>
                        
                        </motion.div>

                        {/* Section Header Title */}
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-20 tracking-tight">
                            Solutions Built <span className="text-skin-logo">Around You</span>
                        </motion.h2>

                        {/* Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
                            {pillarData.map((item, idx) => (
                                <AnimatePresence key={idx}>
                                    <motion.div
                                        variants={itemVariants}
                                        className="flex flex-col items-center group relative p-6 border border-transparent bg-skin-backgroundHighlight hover:border-skin-subtle hover:bg-skin-logo rounded-xl transition-all duration-300 backdrop-blur-[2px] group"
                                    >
                                        {/* Icon Box with OmniSource Blue Realignment */}
                                        <div className="text-4xl text-skin-logo  group-hover:text-skin-light mb-6 transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_4px_12px_rgba(15,92,242,0.2)]">
                                            <item.icon size={48} strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 tracking-tight text-skin-light">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed font-normal">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            ))}
                        </div>
                    </motion.div>

                    
                </div>

                {/* Bottom Section: Split Call-To-Action Block */}
                <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl">

                    {/* Left Side: Deep Branded Corporate Content Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-[#041232] p-12 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-blue-900/30"
                    >
                        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                            Skilled Manpower When You Need It!
                        </h3>
                        <p className="text-slate-300 font-normal leading-relaxed mb-10 text-base">
                            We provide fast, reliable access to skilled manpower across industries,
                            ensuring your projects stay on track with minimal delays. From short-term
                            needs to long-term industrial deployments, we've got your workforce covered.
                        </p>

                        {/* Modern Action Button */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-skin-logo text-skin-light px-7 py-3.5 w-fit rounded-lg flex items-center gap-2 hover:bg-[#0a46b9] shadow-lg shadow-skin-logo/20 transition-all text-sm font-bold tracking-wide"
                        >
                            Connect With Us <span className="text-base">↗</span>
                        </motion.button>
                    </motion.div>

                    {/* Right Side: Visual Image Asset Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[400px] lg:h-auto overflow-hidden bg-[#041232]"
                    >
                        <motion.img
                            initial={{ scale: 1.15 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            src='/assets/30640-e1748858511145.webp'
                            alt="Industrial Workers Team"
                            className="w-full h-full object-cover opacity-85  transition-all duration-1000"
                        />
                        {/* Smooth overlay to anchor image to the left background text box */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#041232]/30 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </section>
        </>

    );
};

export default SolutionsSection;