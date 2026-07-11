import React from 'react';
import Navbar from '../../ReusableComponents/Navbar';
import Badge from '../../ReusableComponents/Badge';

const AboutHero = () => {
    return (
        <section className="relative h-[440px] w-full overflow-hidden bg-skin-background font-public-sans select-none">
            <Navbar />
            <div className="absolute inset-0 w-full h-full z-20">
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Bottom fade to match page background */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0D0809 0%, rgba(13,8,9,0.6) 40%, transparent 100%)' }} />
            </div>
            <div className="absolute inset-0 w-full h-full z-10">
                <img
                    // autoPlay
                    // loop
                    // muted
                    // playsInline
                    src="/assets/267-1.webp"
                    alt='about background'
                    className="w-full h-full object-cover opacity-90 mix-blend-mode"
                />
                {/* //new reusable component */}
            </div>


            {/* Page Header Content Container */}
            <div className="relative z-20 flex flex-col h-full items-center justify-center px-4 pt-16">
                <Badge text={"Corporate Profile"} />
                <div className="text-center">
                    {/* Main Page Title String */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight leading-none mb-3">
                        About <span className="text-skin-logo">Us</span>
                    </h1>
                    {/* Centered Decorative Accent Line */}
                    <div className="w-12 h-1 bg-skin-logo mx-auto rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;