"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
    "Customized Staffing Solutions",
    "Skilled Labor Deployment",
    "End-to-End Project Support",
    "Industry-Specific Expertise",
    "Efficiency-Focused Workforce",
    "Reliable Operational Support",
];

const AboutUsSection = () => {
    return (
        <section className="relative bg-black text-white py-24 px-6 md:px-20 font-public-sans overflow-hidden">

            {/* Background City Silhouette (Right Aligned) */}
            <div className="absolute right-[10%] bottom-[5%]  h-[75%] pointer-events-none select-none z-2">
                <img
                    src="/assets/Frame.png"
                    alt="UAE Skyline"
                    className="w-full h-full object-contain object-right-bottom"
                />
            </div>
             <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-900/20 from-20% via-transparent to-transparent z-0 pointer-events-none' /> 

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Complex Image Layout */}
                <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="row-span-2 rounded-xl overflow-hidden"
                    >
                        <img
                            src="/assets/14331-1.webp"
                            alt="Workers using laptop"
                            className="h-full w-full object-cover transition-all duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-xl overflow-hidden h-36 md:h-40"
                    >
                        <img
                            src="/assets/181-1.webp"
                            alt="Worker in factory"
                            className="h-full w-full object-cover transition-all duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="border border-red-600 bg-red-600/5 rounded-xl flex flex-col items-center justify-center p-6 text-center"
                    >
                        <h3 className="text-5xl md:text-6xl font-bold text-red-600 mb-2">10+</h3>
                        <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300">Years Of Experience</p>
                    </motion.div>
                </div>

                {/* Right Side: Content & Features */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1 border border-white/20 rounded-sm mb-6 bg-white/5">
                            <p className="text-[10px] uppercase tracking-widest text-white/80">
                                ✳ Your Trusted Partner in Skilled Manpower Solutions.
                            </p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                            Why choose Best Manpower for reliable <br />
                            <span className="text-red-600 italic">manpower supply in Dubai, Abu Dhabi & Sharjah?</span>
                        </h2>

                        <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
                            From construction and logistics to maintenance and more, our team is committed to understanding your needs and delivering tailored staffing solutions that enhance productivity and drive success.
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
                                    {/* Red Hard-Hat / Feature Icon */}
                                    <div className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                                        <svg className="text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm md:text-base font-medium tracking-tight text-white/90">
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