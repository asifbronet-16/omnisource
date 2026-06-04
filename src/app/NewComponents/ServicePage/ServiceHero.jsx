import React from 'react';
import Navbar from '../../ReusableComponents/Navbar';
import Badge from '../../ReusableComponents/Badge';

const ServiceHero = () => {
    return (
        <section className="relative h-[440px] w-full overflow-hidden bg-[#020b1e] font-public-sans select-none">
            <Navbar />
            {/* Background Image Container with Corporate Tint Masking */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-luminosity"
                style={{
                    backgroundImage: `url('/assets/18842.webp')`,
                }}
            />

            {/* OmniSource Gradient and Ambient Color Overlays */}
            <div className="absolute inset-0 z-10">
                {/* Bottom-to-Top Gradient: Makes the bottom solid navy to match the next section */}
                <div className="absolute inset-0 bg-gradient-primary" />
                <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
            </div>

            {/* Global Context Navigation Layout */}


            {/* Page Header Content Container */}
            <div className="relative z-20 flex flex-col h-full items-center justify-center px-4 pt-16">
                <Badge text="What We Do"/>
                <div className="text-center">
                    {/* Main Page Title String */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight leading-none mb-3">
                        Our <span className="text-skin-logo">Services</span>
                    </h1>

                    {/* Centered Decorative Accent Line */}
                    <div className="w-12 h-1 bg-skin-logo mx-auto rounded-full" />

                </div>
            </div>
        </section>
    );
};

export default ServiceHero;