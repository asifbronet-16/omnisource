"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sectors = [
    {
        title: "Oil & Gas",
        description: "Skilled manpower for onshore and offshore operations, focused on safety and precision.",
        icon: (
            <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
        ),
        img: "/assets/icons/g15-removebg-preview.png.webp"
    },
    {
        title: "Civil Construction",
        description: "Expert labor for civil projects, delivering quality work on time and within budget.",
        icon: (
            <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        img: "/assets/icons/g2289.png.webp"
    },
     {
        title: "Manufacturing",
        description: "Professionals skilled in advanced processes, driving efficient and compliant production.",
        icon: (
            <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        img: "/assets/icons/g3891.png.webp"
    },
      {
        title: "MEP",
        description: "Skilled MEP workers for high-quality installation and maintenance of systems",
        icon: (
            <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        img: "/assets/icons/g15-1.png.webp"
    },
       {
        title: "Facility Staffing",
        description: "Professionals skilled in advanced processes, driving efficient and compliant production.",
        icon: (
            <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        img: "/assets/icons/Group-1.png.webp"
    },
       {
        title: "Logistics",
        description: "Professionals skilled in advanced processes, driving efficient and compliant production.",
        icon: (
            <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
        ),
        img: "/assets/icons/Group.png.webp"
    },

    // Add Manufacturing and MEP entries here...
];

const ImpactSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center py-24 overflow-hidden font-public-sans bg-black">

            {/* Background Image with Parallax & Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/videos/GettyImages-626932814-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Important: The Overlay Layer */}
                {/* This ensures the video is dark enough for the white text to be readable */}
                {/* <div className="absolute inset-0 bg-black/60 shadow-inner" /> */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
            </div>
            

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">

                {/* Header */}
                <div className="mb-20">
                    <div className="inline-block px-4 py-1 border border-white/20 rounded-sm mb-6 bg-white/5 backdrop-blur-sm">
                        <p className="text-[14px] tracking-[0.17em] text-white/80 font-light">
                            ✳ Real People. Real Results. Real Difference.
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-2">
                        Where Our Manpower
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-red-600">
                        Makes an Impact
                    </h3>
                </div>

                {/* Grid of Sectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex gap-6 group"
                        >
                            <div className="flex-shrink-0 mt-1 transition-transform group-hover:scale-110 duration-300">
                                {/* Sector Icon */}
                                <Image src={sector.img} width={50} height={50} alt={sector.title}/>
                                {/* {sector.icon} */}
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                    {sector.title}
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                                    {sector.description}
                                </p>
                                {/* The subtle horizontal line seen in your image */}
                                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;