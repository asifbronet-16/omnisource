import React from 'react'
import Navbar from '../../ReusableComponents/Navbar'

const ContactHome = () => {
    return (
        <section className="relative h-[440px] w-full overflow-hidden bg-[#020b1e] font-public-sans select-none">

            {/* Background Image Container with Premium Tint Treatment */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-luminosity"
                style={{
                    backgroundImage: `url('/assets/782.webp')`,
                }}
            />

            {/* OmniSource Gradient and Ambient Tone Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b1e]/40 via-[#020b1e]/80 to-[#020b1e]" />
            <div className="absolute inset-0 bg-skin-logo/5 mix-blend-overlay" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#020b1e] to-transparent z-10" />

            {/* Navigation Layout Placement */}
            <Navbar />

            {/* Page Header Content Container */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 pt-16">
                <div className="text-center">

                    {/* Context Identity Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-900/40 rounded-full mb-4 bg-[#041232]/60 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-skin-logo animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200 font-semibold">
                            Get In Touch
                        </span>
                    </div>

                    {/* Main Section Header String */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight leading-none mb-3">
                        Contact <span className="text-skin-logo">Us</span>
                    </h1>

                    {/* Centered Decorative Line Accent */}
                    <div className="w-12 h-1 bg-skin-logo mx-auto rounded-full" />

                </div>
            </div>
        </section>
    )
}

export default ContactHome