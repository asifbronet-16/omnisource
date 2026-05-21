import Badge from '../../ReusableComponents/Badge';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const TrustedSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center text-skin-light overflow-hidden bg-skin-background">

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
                <div className="absolute inset-0 z-10">
                    {/* Bottom-to-Top Gradient: Makes the bottom solid navy to match the next section */}
                    <div className="absolute inset-0 bg-gradient-primary" />
                    <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
                </div>
            </div>

            {/* Content Container (z-index ensures it sits above the video backdrop layers) */}
            <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center">

                
                <Badge text={"Empowering Industries Through Human Excellence."}/>

                {/* Main Heading Graphic Accentuation */}
                <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight max-w-4xl leading-[1.1]">
                    Trusted Manpower Supply <br />
                    <span className="bg-text-gradient-right bg-clip-text text-transparent">
                        Company in UAE
                    </span>
                </h1>

                {/* Description Text - Upgraded branding tokens */}
                <p className="text-sm md:text-lg leading-relaxed text-slate-300 max-w-3xl mb-10 font-normal">
                    Since 2015, <span className="font-bold text-skin-logo">OmniSource</span> has been a trusted name in workforce solutions across
                    <span className="font-bold text-skin-logo"> Dubai, </span><span className="font-bold text-skin-logo">Sharjah </span>and <span className="font-bold text-skin-logo">Abu Dhabi</span>. With over a decade of experience, we
                    specialize in connecting premier businesses with verified skilled and technical trade labor supply
                    chains across the UAE.
                </p>

                {/* Custom Brand CTA Button Layout */}
                <button className="bg-skin-logo text-skin-white px-8 py-3.5 rounded-md flex items-center gap-2 hover:bg-skin-logoHover transition-all duration-300 font-bold shadow-lg shadow-glow hover:scale-[1.02]">
                    <span>Our Story</span>
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </section>
    );
};

export default TrustedSection;