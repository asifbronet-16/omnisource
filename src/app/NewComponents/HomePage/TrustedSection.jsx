import React from 'react';

const TrustedSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">

            {/* Video Background Container */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/videos/1675350_Abu-Dhabi_Cityscape_3840x2160-1-1-1-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Important: The Overlay Layer */}
                {/* This ensures the video is dark enough for the white text to be readable */}
                <div className="absolute inset-0 bg-black/60 shadow-inner" />
            </div>

            {/* Content Container (z-index ensures it sits above the video) */}
            <div className="relative z-10 max-w-5xl px-4 flex flex-col items-center">

                {/* Badge / Tagline */}
                <div className="mb-6 px-4 py-1 border border-gray-400 rounded-sm bg-black/30 backdrop-blur-md">
                    <p className="text-xs md:text-sm tracking-widest font-publicsans font-light font-public-sans">
                        <span className="mr-2">✳</span> Empowering Industries Through Human Excellence.
                    </p>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-7xl font-semibold mb-8 tracking-tight">
                    Trusted Manpower Supply Company in UAE
                </h1>

                {/* Description Text */}
                <p className="text-sm md:text-lg leading-relaxed text-gray-200 max-w-3xl mb-10 font-light">
                    Since 2015, <span className="font-medium text-white">Best Manpower</span> has been a trusted name in manpower supply in
                    Dubai, Sharjah, and Abu Dhabi. With nearly a decade of experience, we
                    specialize in connecting businesses with skilled and unskilled labor supply
                    across the UAE.
                </p>

                {/* Call to Action Button */}
                <button className="bg-white text-black px-8 py-3 rounded-sm flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300 font-medium">
                    Our Story <span className="text-xl">↗</span>
                </button>
            </div>
        </section>
    );
};

export default TrustedSection;