"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Badge from '../../ReusableComponents/Badge';

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
        <section className="relative isolate  min-h-screen w-full flex items-center py-24 overflow-hidden font-public-sans bg-skin-background">

            {/* Background Video Container with Corporate Tint Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                >
                    <source src="/assets/videos/GettyImages-626932814-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* OmniSource Branded Smooth Gradient Masking Layer */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#020b1e] via-[#020b1e]/85 to-[#020b1e] z-10" /> */}
                <div className="absolute inset-0 z-10">
                    {/* Bottom-to-Top Gradient: Makes the bottom solid navy to match the next section */}
                    <div className="absolute inset-0 bg-gradient-primary" />
                    <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
                </div>
            </div>

            {/* Content Box (Z-indexed above backdrop layers) */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">

                {/* Header Container Layout */}
                <div className="mb-20">
                    {/* Branded Pill Tagline updated to matching blue tones */}
                    <div className='mx-auto w-fit'>
                        <Badge text={"Real People. Real Results. Real Difference."} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-skin-light mb-2 tracking-tight">
                        Where Our Manpower
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-skin-logo drop-shadow-md tracking-tight">
                        Makes an Impact
                    </h3>
                </div>

                {/* Grid of Sectors Content mapping layer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex gap-6 group"
                        >
                            {/* Icon Container with subtle brand blue color isolation layer */}
                            <div className="flex-shrink-0 mt-1 transition-all group-hover:scale-110 duration-300 p-2 bg-[#041232]/60 rounded-md border border-blue-900/20 group-hover:border-skin-logo/40 h-fit">
                                <Image
                                    src={sector.img}
                                    width={44}
                                    height={44}
                                    alt={sector.title}
                                    className="object-contain grayscale-0 brightness-100 sepia-0 hue-rotate-[195deg] saturate-[300%] transition-all duration-300 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 hover:saturate-[500%]"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <h4 className="text-2xl font-bold text-skin-light mb-3 tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                                    {sector.title}
                                </h4>
                                <p className="text-slate-400 font-normal leading-relaxed max-w-sm">
                                    {sector.description}
                                </p>

                                {/* Dynamic Gradient Separator Line - Shifted from White to fading Brand Blue */}
                                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-skin-logo/30 via-skin-logo/5 to-transparent transition-all duration-500 group-hover:from-skin-logo/60" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;