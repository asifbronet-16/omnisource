import React from 'react';
import Navbar from '../HomePage/Navbar';

const AboutHero = () => {
    return (
        <section className="relative h-[400px] w-full overflow-hidden">
            
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/assets/267-1.webp')`,
                }}
            >
                {/* Gradient Overlay to match the image's dark aesthetic */}
                <div className="absolute inset-0 bg-black/80"></div>
                <div className='absolute inset-x-0 inset-y-0 bg-gradient-to-t from-black from-5% via-transparent via-30% to-transparent to-90% z-8' />
            </div>
            <Navbar/>
            {/* Content Container */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        About Us
                    </h1>  
                </div>
            </div>
        </section>
    );
};

export default AboutHero;