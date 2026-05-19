import React from 'react';
import Navbar from '../../ReusableComponents/Navbar';

const ServiceHero = () => {
    return (
       <section className="relative h-[440px] w-full overflow-hidden bg-[#020b1e] font-public-sans select-none">
            
            {/* Background Image Container with Corporate Tint Masking */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                style={{
                    backgroundImage: `url('/assets/18842.webp')`,
                }}
            />

            {/* OmniSource Gradient and Ambient Color Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b1e]/40 via-[#020b1e]/80 to-[#020b1e]" />
            <div className="absolute inset-0 bg-[#0f5cf2]/5 mix-blend-overlay" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#020b1e] to-transparent z-10" />

            {/* Global Context Navigation Layout */}
            <Navbar />
            
            {/* Page Header Content Container */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 pt-16">
                <div className="text-center">
                    
                    {/* Tiny Section Identifier */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-900/40 rounded-full mb-4 bg-[#041232]/60 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f5cf2] animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200 font-semibold">
                            What We Do
                        </span>
                    </div>

                    {/* Main Page Title String */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-3">
                        Our <span className="text-[#0f5cf2]">Services</span>
                    </h1>

                    {/* Centered Decorative Accent Line */}
                    <div className="w-12 h-1 bg-[#0f5cf2] mx-auto rounded-full" />
                    
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;