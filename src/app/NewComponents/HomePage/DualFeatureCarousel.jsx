"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
    {
        title: "A Network That Works for You",
        description: "Join a community that offers more than connections — access mentoring, collaborations, and opportunities that spark real progress.",
        bgImage: "/assets/carousal/1.png",
        overlay: "bg-black/60",
    },
    {
        title: "Faster Hiring, Smarter Teams",
        description: "Significantly reduce the time it takes to hire by tapping into our curated pool of talent, ensuring you meet project deadlines without delays.",
        bgImage: "/assets/carousal/2.webp",
        overlay: "bg-red-600/80", // Red tint as seen in your image
    },
    {
        title: "Your Journey to Success Starts Here",
        description: "Join us and benefit from our comprehensive wellness programs and extensive business networking opportunities. Become a member now!",
        bgImage: "/assets/carousal/3.webp",
        overlay: "bg-black/60",
    },
    {
        title: "Strengthening Your Workforce & Industry Impact",
        description: "Whether you’re building infrastructure or streamlining operations, we connect you with the manpower that drives growth. Our skilled professionals are the backbone of successful projects across construction,.",
        bgImage: "/assets/carousal/4.webp",
        overlay: "bg-red-600/80",
    },
];

const DualFeatureCarousel = () => {
    // 2. Initialize the plugin with options (delay in ms)
    const autoplayOptions = {
        delay: 4000,
        stopOnInteraction: false, // Keeps playing even if the user drags it
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    };

    // 3. Pass the plugin into the hook
    const [emblaRef] = useEmblaCarousel(
        {
            align: 'start',
            containScroll: 'trimSnaps',
            dragFree: true,
            loop: true, // Recommended for autoplay so it doesn't stop at the last slide
        },
        [Autoplay(autoplayOptions)]
    );

    return (
        <section className="bg-[#020b1e] py-14 overflow-hidden font-public-sans select-none">
            <div className="embla" ref={emblaRef}>
                <div className="flex gap-6 px-6">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative flex-[0_0_85%] md:flex-[0_0_65%] min-h-[500px] rounded-md overflow-hidden group cursor-grab active:cursor-grabbing border border-blue-900/10 bg-[#041232]"
                        >
                            {/* Background Image with Zoom and Desaturate Blend Effect */}
                            <img
                                src={slide.bgImage}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 mix-blend-normal group-hover:mix-blend-normal group-hover:opacity-80"
                                alt={slide.title}
                            />

                            {/* OmniSource Signature Deep Blue Masking Overlay Layers */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e] via-[#020b1e]/70 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                            <div className="absolute inset-0 bg-[#0f5cf2]/10 mix-blend-overlay z-10" />

                            {/* Content Container Layer (Z-indexed above gradient overlays) */}
                            <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-16 text-white max-w-2xl">
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight group-hover:text-blue-300 transition-colors duration-300 text-blue-300">
                                    {slide.title}
                                </h2>
                                <p className="text-base md:text-lg font-normal text-slate-200 leading-relaxed">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DualFeatureCarousel;