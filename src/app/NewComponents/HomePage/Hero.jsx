"use client";
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
export default function HeroSection() {
    return (
        <section className="relative w-full bg-cover bg-[25%_50%] lg:bg-[50%_50%] bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url('https://bestmanpower.ae/wp-content/uploads/2025/05/Hero-Section-1-1-scaled.webp')`
            }} >
            <Navbar />
            <section className="max-w-[100rem] mx-auto h-[90vh] lg:px-24 flex flex-col lg:flex-row-reverse  justify-between lg:gap-10 lg:pt-[7rem] bg-gradient-to-t from-black to-transparent">
                <div className="relative w-full lg:w-2/3 h-full flex justify-end items-end bg bg-no-repeat bg-contain"
                    style={{
                        backgroundImage: `url('/assets/34ddfc6708e1b4afd4d7f951c61e2082551fc8cf-768x512.png a.webp')`,
                    }}>
                    <div className='absolute inset-x-0 inset-y-0 bg-gradient-to-t from-black from-15% via-transparent via-30% to-transparent to-90% z-10 ' />
                </div>
                <div className="relative w-full lg:w-1/2 text-white text-center lg:text-start px-6 bg-black lg:bg-transparent">
                    <div className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 rounded-md w-fit mb-8 mx-auto lg:mx-0 mt-20">
                        <Sparkles className="text-white" size={14} />
                        <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">Reliable Workforce, Delivered Right</span>
                    </div>

                    <h1 className="text-3xl lg:text-6xl font-bold leading-[1.1] mb-6">
                        Top Manpower <br />
                        <span className="text-white">Supplier in UAE</span>
                    </h1>

                    <p className="text-zinc-400 text-md lg:text-lg mb-10 max-w-lg leading-relaxed">
                        Reliable manpower solutions in <span className="text-red-500 font-semibold">Abu Dhabi</span>,
                        <span className="text-red-500 font-semibold"> Dubai</span> &
                        <span className="text-red-500 font-semibold"> Sharjah</span> since 2015.
                        Quick, quality labor supply for all industries.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                        <button className="flex items-center gap-2 bg-white text-black lg:px-10 lg:py-4 py-2.5 px-4 rounded-md font-bold hover:bg-zinc-200 transition shadow-lg">
                            Hire Now <ArrowUpRight size={20} />
                        </button>

                        <button className="border border-zinc-700 lg:px-10 lg:py-4 px-4 py-2.5 rounded-md font-bold text-white hover:bg-white/5 transition">
                            Let's Talk
                        </button>
                    </div>

                </div>
            </section>
        </section>
    );
}