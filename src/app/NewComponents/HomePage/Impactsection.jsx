"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Badge from '../../ReusableComponents/Badge';

const sectors = [
    {
        title: "Civil Construction",
        description: "WPS-compliant, mobilization-ready manpower including certified scaffolders, masons, foremen, and support crews for infrastructure and fit-out contractors.",
        icon: (
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 11a10 10 0 0 1 20 0v2H2v-2z" />
                <path d="M12 2v9M5 4.5l5 4M19 4.5l-5 4" />
                <path d="M2 13h20v2H2z" />
            </svg>
        ),
        img: "/assets/icons/g2289.png.webp"
    },
    {
        title: "MEP Services",
        description: "Comprehensive technical workforces covering commercial and industrial electricians, HVAC technicians, pipe fitters, and specialized MEP supervisors.",
        icon: (
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        img: "/assets/icons/g15-1.png.webp"
    },

    {
        title: "Machinery & Equipment Rental",
        description: "Flexible, dependable fleet rental options including wheel loaders, excavators, dump trucks, cranes, and access solutions across all project scopes.",
        icon: (
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 2h14M12 2v8M12 10a3 3 0 0 0-3 3v2a2 2 0 0 0 4 0v-2a1 1 0 0 1 2 0v1" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
            </svg>
        ),
        img: "/assets/icons/Group.png.webp"
    },
    {
        title: "Facilities & Cleaning Staffing",
        description: "Trained corporate and site personnel from general janitors and housekeeping attendants to highly specialized rope-access facade cleaners.",
        icon: (
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
            </svg>
        ),
        img: "/assets/icons/Group-1.png.webp"
    },
    {
        title: "Manufacturing & Industrial",
        description: "Skilled production-ready manpower including machine operators, assembly line workers, quality control inspectors, warehouse staff, and shift supervisors for factories, plants, and industrial facilities across all manufacturing sectors.",
        icon: (
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 2h14M12 2v8M12 10a3 3 0 0 0-3 3v2a2 2 0 0 0 4 0v-2a1 1 0 0 1 2 0v1" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
            </svg>
        ),
        img: "/assets/icons/Group.png.webp"
    }
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
            <div className="relative z-20  mx-auto px-6 text-center">

                {/* Header Container Layout */}
                <div className="mb-20">
                    {/* Branded Pill Tagline updated to matching blue tones */}
                    <div className='mx-auto'>
                        <Badge text={"Real People. Real Results. Real Difference."} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-skin-light mb-2 tracking-tight">
                        Industries
                        <span className="text-4xl md:text-6xl font-black text-skin-logo drop-shadow-md tracking-tight">
                            {" We Power"}
                        </span>
                    </h2>

                </div>

                {/* Grid of Sectors Content mapping layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-16 lg:gap-y-12 gap-x-4 gap-y-4 text-left  mx-auto">
                    {sectors.map((sector, index) => (
                        <div className="group relative pt-8 text-center flex flex-col items-center h-full" key={index}>
                            {/* Centered Icon Badge floating out of bounds at the top */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-2xl bg-[white] flex items-center justify-center shadow-lg shadow-skin-logo transform group-hover:-translate-y-1 transition-all duration-300">
                                <Image
                                    src={sector.img}
                                    width={36}
                                    height={36}
                                    alt={sector.title}
                                    // className="object-contain brightness-100 invert transition-transform duration-300 group-hover:scale-105"
                                    className='object-contain grayscale-0 brightness-100 sepia-0 hue-rotate-[195deg] saturate-[300%] transition-all duration-300 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 hover:saturate-[500%]'
                                />
                            </div>

                            {/* Main Card Body */}
                            <div className="w-full h-full flex-1 p-6 pt-12 rounded-2xl bg-gradient-to-b from-[#041232]/70 to-[#041232]/20 border border-skin-badgeBorder group-hover:border-skin-borderHover transition-all duration-300 relative z-10 flex flex-col items-center justify-start">
                                <h4 className="md:text-xl text-md font-bold text-skin-light tracking-tight mb-3 group-hover:text-skin-logoHover transition-colors duration-300">
                                    {sector.title}
                                </h4>

                                {/* Updated Text Layout to occupy full structural width & height */}
                                <p className="text-slate-400 md:text-sm text-xs leading-relaxed w-full flex-1 flex items-center justify-center px-2">
                                    {sector.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;