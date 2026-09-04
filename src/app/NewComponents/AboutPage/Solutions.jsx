"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Gem } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';

const pillarData = [
    {
        title: "Mission",
        desc: "To deliver precision-matched workforce solutions across every trade and industry — powered by technology, driven by accountability, and built around the exact operational needs of every client we serve.",
        icon: Target
    },
    {
        title: "Vision",
        desc: "To become the GCC's most trusted and technologically advanced workforce solutions company — where every deployment is seamless, every worker is the right fit, and every client operates at full capacity without the burden of manpower complexity.",
        icon: Eye
    },
    {
        title: "Values",
        desc: "Built on commitment, driven by reliability, and powered by technology — OmniSource doesn't just supply workers, we build workforce systems that keep your operations running at full capacity, every single day.",
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
                        {/* <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover grayscale opacity-50"
                        >
                            <source src="/assets/videos/pexels-mhmtork-31516263.jpg" type="video/mp4" />
                            <img src="/assets/videos/pexels-mhmtork-31516263.jpg" alt="Background Fallback" />
                        </video> */}

                        <img
                            src="assets/pexels-charlier-9241959.jpg"
                            // src="assets/silhouette-workers-sunset.jpg"
                            alt="solutions section background"
                            className='w-full h-full object-cover object-[center_80%] opacity-60' />


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
                            <div className=' mx-auto'><Badge text={"Scaling Success Together"} /></div>

                        </motion.div>

                        {/* Section Header Title */}
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-20 tracking-tight">
                            Your Most <span className="text-skin-logo">Reliable Source </span>
                        </motion.h2>

                        {/* Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 items-start relative">
                            {pillarData.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="group relative pt-8 text-center flex flex-col items-center"
                                >
                                    {/* Floating icon badge */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-skin-logo transform group-hover:-translate-y-1 transition-all duration-300">
                                        <item.icon size={32} strokeWidth={1.5} className="text-skin-logo" />
                                    </div>

                                    {/* Card body */}
                                    <div className="w-full h-full flex-1 p-6 pt-12 rounded-2xl bg-gradient-to-b from-[#130305]/70 to-[#130305]/20 border border-skin-badgeBorder group-hover:border-skin-borderHover transition-all duration-300 relative z-10 flex flex-col items-center justify-start">
                                        <h4 className="text-xl font-bold text-skin-light tracking-tight mb-3 group-hover:text-skin-logoHover transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed w-full flex-1 flex items-center justify-center px-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                </div>

                {/* Bottom Section: Layered Feature Showcase */}
                <div className="max-w-7xl mx-auto px-6 pb-24 pt-16">
                    <div className="relative">
                        {/* Soft layered background shape (desktop only, mirrors the reference layout) */}
                        <div className="hidden lg:block absolute -top-10 -bottom-10 left-[32%] right-0 rounded-[2.5rem] bg-gradient-to-br from-[#3a1114] via-[#24080a] to-[#1a0507] border border-skin-badgeBorder shadow-2xl shadow-black/70" />

                        <div className="relative flex flex-col lg:flex-row items-center">
                            {/* Image Card - overlaps the shape */}
                            <div className="relative z-10 w-full lg:w-[44%] lg:mr-[-2.5rem] rounded-3xl overflow-hidden shadow-2xl shadow-black/70 border border-skin-badgeBorder">
                                <motion.img
                                    initial={{ scale: 1.15 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    // src='/assets/industrial-workforce-team.jpg'
                                    src={'assets/construction-site.jpeg'}
                                    alt="Industrial Workers Team"
                                    className="w-full h-[300px] lg:h-[440px] object-cover"
                                />
                            </div>

                            {/* Text Content - sits over the shape */}
                            <div className="relative z-10 w-full lg:w-[56%] pt-8 lg:pt-0 lg:pl-20 pr-4 lg:pr-16">
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                                    Our Skills
                                </h3>
                                <p className="text-slate-300 font-normal leading-relaxed mb-10 text-base">
                                    At OmniSource, we execute every client requirement with precision — matching the right worker to the right role across construction, MEP, manufacturing, facilities, and industrial operations. Our vetted, document-complete workforce is mobilized to your requirement, so your site runs without delays or legal exposure. Powered by smart workforce management systems and built on a foundation of commitment and reliability, we give our clients full operational visibility and a workforce partner that scales as fast as their business grows — across the UAE.
                                </p>

                                {/* Modern Action Button */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-skin-logo text-skin-light px-8 py-3.5 w-fit rounded-full flex items-center gap-2 hover:bg-skin-logoHover shadow-lg shadow-skin-logo/20 transition-all text-sm font-bold tracking-wide"
                                >
                                    Connect With Us <span className="text-base">↗</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default SolutionsSection;