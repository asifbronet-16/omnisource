"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../../ReusableComponents/Badge';

const features = [
    "Tailored Workforce Builds",
    "Trade-Ready Mobilization",
    "Full-Cycle Site Coverage",
    "Built for Your Sector",
    "Zero Downtime. Maximum Output.",
    "Consistent. Accountable. On-Site.",
];

const AboutUsSection = () => {
    return (
        <section className="relative bg-skin-background text-skin-light py-24 px-6 md:px-20 font-public-sans overflow-hidden">

            {/* Background City Silhouette (Right Aligned) */}
            <div className="absolute right-[10%] bottom-0 h-[65%] pointer-events-none select-none z-2 opacity-20 invert brightness-0 saturate-100 sepia-[100%] hue-rotate-[190deg] contrast-[250%]">
                <img
                    src="/assets/Frame.png"
                    alt="UAE Skyline"
                    className="w-full h-full object-contain object-bottom"
                />
            </div>

            {/* OmniSource Ambient Subtle Blue Bottom Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-skin-logo/10 from-20% via-transparent to-transparent z-0 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Image Grid Layout (years-of-experience metric removed per feedback) */}
                <div className="flex-1 grid grid-cols-2 gap-4 w-full h-[420px] md:h-[480px]">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden border border-skin-badgeBorder h-full"
                    >
                        <img
                            // src="/assets/engineer-with-laptop.jpg"
                            src={"/assets/pexels-aboodi-16494364.jpg"}
                            alt="Workers using laptop"
                            className="h-full w-full object-cover  transition-all duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-xl overflow-hidden border border-skin-badgeBorder h-full"
                    >
                        <img
                            // src="/assets/industrial-machine-operator.jpg"
                            src={"/assets/pexels-infinity-lifespaces-1420423121-30580530.jpg"}
                            alt="Worker in factory"
                            className="h-full w-full object-cover object-[85%_center] opacity-80 scale-85 transition-all duration-700"
                        />
                    </motion.div>
                </div>

                {/* Right Side: Content Header & Features */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Branded pill tag */}
                        {/* <div className="inline-block px-4 py-1.5 border border-skin-muted rounded-full mb-6 bg-skin-logo/10 backdrop-blur-sm">
                            <p className="text-xs uppercase tracking-widest text-skin-muted font-semibold">
                                <span className="text-skin-logo mr-1">✳</span> Your Trusted Partner in Skilled Manpower Solutions.
                            </p>
                        </div> */}
                        <div className=' mx-auto'>
                        <Badge text="One Source. Every Trade. Total Reliability"/>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                            Why choose OmniSource for reliable <br />
                            <span className="text-skin-logo italic font-bold">manpower supply in Dubai, Abu Dhabi, Sharjah & Ajman?</span>
                        </h2>

                        <p className="text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl text-base">
                            Every project has a different demand. Every client has a different standard. OmniSource exists to meet both — across every trade, every scale, and every deadline.
                        </p>

                        {/* Feature Checklist Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 group"
                                >
                                    {/* OmniSource Branded Blue Feature Checked Circle */}
                                    <div className="flex-shrink-0 w-5 h-5 bg-skin-logo rounded-full flex items-center justify-center p-1 group-hover:scale-110 group-hover:bg-skin-hover transition-all duration-300 shadow-md shadow-glow">
                                        <svg className="text-skin-light w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm md:text-base font-semibold tracking-tight text-skin-light group-hover:text-skin-light transition-colors">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;