"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Manpower', value: '5,000+', color: 'text-red-600', className: 'md:col-span-1 md:w-54 md:ml-auto h-28 mt-auto ' },
    { label: 'Years Of Experience', value: '10+', color: 'text-red-600', className: 'md:col-span-1 rounded-tr-[100px] ' },
    { label: 'Happy Clients', value: '1,000+', color: 'text-red-600', className: 'md:col-span-1' },
    { label: 'Project completed', value: '1,500+', color: 'text-red-600', className: 'md:col-span-1' },
    { label: 'Ongoing Projects', value: '200+', color: 'text-red-600', className: 'col-span-2' },
];

const AboutStats = () => {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-20 font-public-sans overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


                {/* Left Content */}
                <div className="relative">
                    <div
                        className="absolute inset-0 z-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                            backgroundSize: '40px 40px', // Adjust this to change the density of the glitter
                        }}
                    />
                    {/* Background Outline Text */}
                    <span
                        className="absolute -top-24 right-0 md:text-[220px] text-[150px] font-bold select-none pointer-events-none leading-none opacity-20 [text-stroke:2px_white] [-webkit-text-stroke:2px_white] text-transparent"
                    >
                        2015
                    </span>

                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 border border-white/20 rounded-sm mb-6 bg-white/5">
                            <p className="text-[14px]  tracking-widest font-light">
                                ✳ Bridging the Gap Between Skill and Demand
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                            Established to Connect Talent and <br />
                            <span className="text-red-600">Opportunity Since</span>
                        </h2>
                        <p className="text-7xl md:text-9xl font-bold text-red-600">2015</p>
                    </div>
                </div>

                {/* Right Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`border border-white/10 p-8 flex flex-col justify-center items-center text-center bg-[#050505] hover:border-red-600/50 transition-colors duration-500 ${stat.className}`}
                        >
                            <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm font-light uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;