import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const TrustedSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-[#020b1e]">

            {/* Video Background Container */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                >
                    <source src="/assets/videos/1675350_Abu-Dhabi_Cityscape_3840x2160-1-1-1-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* OmniSource Branded Deep Blue Matte Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020b1e]/80 via-[#020b1e]/70 to-[#020b1e]" />
            </div>

            {/* Content Container (z-index ensures it sits above the video backdrop layers) */}
            <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center">

                {/* OmniSource Badge / Tagline Pill */}
                <div className="mb-6 px-4 py-1.5 border border-blue-900/50 rounded-full bg-[#0f5cf2]/10 backdrop-blur-md">
                    <p className="text-xs md:text-sm tracking-widest font-semibold uppercase text-blue-200">
                        <span className="mr-2 text-[#0f5cf2]">✳</span> Empowering Industries Through Human Excellence.
                    </p>
                </div>

                {/* Main Heading Graphic Accentuation */}
                <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight max-w-4xl leading-[1.1]">
                    Trusted Manpower Supply <br />
                    <span className="bg-gradient-to-r from-white via-slate-200 to-blue-500 bg-clip-text text-transparent">
                        Company in UAE
                    </span>
                </h1>

                {/* Description Text - Upgraded branding tokens */}
                <p className="text-sm md:text-lg leading-relaxed text-slate-300 max-w-3xl mb-10 font-normal">
                    Since 2015, <span className="font-bold text-[#0f5cf2]">OmniSource</span> has been a trusted name in workforce solutions across 
                    <span className="font-bold text-[#0f5cf2]"> Dubai, </span><span className="font-bold text-[#0f5cf2]">Sharjah </span>and <span className="font-bold text-[#0f5cf2]">Abu Dhabi</span>. With over a decade of experience, we
                    specialize in connecting premier businesses with verified skilled and technical trade labor supply
                    chains across the UAE.
                </p>

                {/* Custom Brand CTA Button Layout */}
                <button className="bg-[#0f5cf2] text-white px-8 py-3.5 rounded-md flex items-center gap-2 hover:bg-[#0c4ecf] transition-all duration-300 font-bold shadow-lg shadow-[#0f5cf2]/20 hover:scale-[1.02]">
                    <span>Our Story</span>
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </section>
    );
};

export default TrustedSection;