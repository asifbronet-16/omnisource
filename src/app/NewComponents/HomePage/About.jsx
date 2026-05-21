"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../../ReusableComponents/Badge';

const stats = [
    { label: 'Manpower', value: '5,000+', color: 'text-red-600', className: 'md:col-span-1 md:w-54 md:ml-auto h-28 mt-auto ' },
    { label: 'Years Of Experience', value: '10+', color: 'text-red-600', className: 'md:col-span-1 rounded-tr-[100px] ' },
    { label: 'Happy Clients', value: '1,000+', color: 'text-red-600', className: 'md:col-span-1' },
    { label: 'Project completed', value: '1,500+', color: 'text-red-600', className: 'md:col-span-1' },
    { label: 'Ongoing Projects', value: '200+', color: 'text-red-600', className: 'col-span-2' },
];

const AboutStats = () => {
    return (
        <>
        <section className="bg-skin-background text-skin-light py-20 px-6 md:px-20 font-public-sans overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Column */}
                <div className="relative">
                    {/* Brand Blue Grid Glitter Pattern overlay */}
                    <div
                        className="absolute inset-0 z-0 opacity-15"
                        style={{
                            backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                    
                    {/* Background Watermarked Outline Year with Brand Tint */}
                    <span
                        className="absolute -top-24 right-0 md:text-[220px] text-[150px] font-extrabold select-none pointer-events-none leading-none opacity-30 [text-stroke:2px_#0f5cf2] [-webkit-text-stroke:2px_#0f5cf2] text-transparent"
                    >
                        2015
                    </span>

                    <div className="relative z-10">
                        {/* Branded Pill Tagline Container */}
                        <Badge text={"Bridging the Gap Between Skill and Demand"}/>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                            Established to Connect <br />
                            Talent and <span className="text-skin-">Opportunity Since</span>
                        </h2>
                        
                        <p className="text-7xl md:text-9xl font-black tracking-tighter text-skin-logo drop-shadow-lg shadow-blue-500/20">
                            2015
                        </p>
                    </div>
                </div>

                {/* Right Stats Dashboard Grid */}
                <div className="grid grid-cols-2 gap-4 z-10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`border border-skin-subtle p-8 flex flex-col justify-center items-center text-center bg-skin-backgroundHighlight backdrop-blur-sm rounded-md hover:border-skin-logo/50 hover:bg-skin-primary transition-all duration-500 ${stat.className}`}
                        >
                            {/* Uses fallback brand color system if stat.color points to old red layout */}
                            <h3 className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${
                                stat.color && !stat.color.includes('red') ? stat.color : 'text-skin-light'
                            }`}>
                                {stat.value}
                            </h3>
                            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default AboutStats;