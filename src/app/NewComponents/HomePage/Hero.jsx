"use client";
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Navbar from '../../ReusableComponents/Navbar';
export default function HeroSection() {
    return (
        <section className="w-full bg-cover bg-[25%_50%] lg:bg-[50%_50%] bg-no-repeat overflow-hidden z-20 bg-[#020b1e]"
            // style={{
            //     backgroundImage: `url('https://bestmanpower.ae/wp-content/uploads/2025/05/Hero-Section-1-1-scaled.webp')`
            // }}
             >
            <Navbar />
            <section className="relative max-w-[100rem] mx-auto h-[95vh] lg:px-24 flex flex-col lg:flex-row justify-between lg:gap-10 pt-[6rem] lg:pt-[8rem] overflow-hidden">

                {/* Background Video Container Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-45"
                    >
                        <source src="/assets/videos/10202777-hd_3842_2160_30fps.mp4" type="video/mp4" />
                         {/* <source src="https://www.pexels.com/download/video/30810784/" type="video/mp4" /> */}
                        Your browser does not support the video tag.
                    </video>

                    {/* Deep Branded Gradient Film Overlays for High Text Contrast */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e] via-[#020b1e]/60 to-[#020b1e]/90 z-10" /> */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e] from-[45%] via-[#020b1e]/70 to-transparent hidden lg:block z-10" />
                </div>

                {/* Content Container (placed carefully above backdrop at z-20) */}
                <div className="relative w-full lg:w-3/5 text-white text-center lg:text-start px-6 z-10 h-full flex flex-col justify-center items-center lg:items-start">

                    {/* Badge Indicator Pill */}
                    <div className="flex items-center gap-2 border border-blue-900/50  px-4 py-1.5 rounded-full w-fit mb-6 backdrop-blur-md">
                        <Sparkles className="text-[#0f5cf2]" size={14} />
                        <span className="text-xs text-blue-200 uppercase tracking-widest font-semibold">
                            Reliable Workforce, Delivered Right
                        </span>
                    </div>

                    {/* Hero Display Header Text */}
                    <h1 className="text-4xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                        Top Manpower <br />
                        <span className="bg-gradient-to-r from-white via-gray-200 to-blue-500 bg-clip-text text-transparent">
                            Supplier in UAE
                        </span>
                    </h1>

                    {/* Paragraph Content (Red highlights replaced with custom corporate brand blue tokens) */}
                    <p className="text-slate-300 text-md lg:text-lg mb-10 max-w-xl leading-relaxed">
                        Reliable manpower solutions in <span className="text-[#0f5cf2] font-semibold">Abu Dhabi</span>,
                        <span className="text-[#0f5cf2] font-semibold"> Dubai</span> &
                        <span className="text-[#0f5cf2] font-semibold"> Sharjah</span> since 2015.
                        Quick, premium quality labor supply chains for all industries.
                    </p>

                    {/* Call to Actions Interaction Group */}
                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-16 lg:mb-0 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-2 bg-[#0f5cf2] text-white lg:px-10 lg:py-4 py-3 px-6 rounded-md font-bold hover:bg-[#0c4ecf] transition duration-300 shadow-xl shadow-[#0f5cf2]/30 w-full sm:w-auto">
                            Hire Now <ArrowUpRight size={20} />
                        </button>

                        <button className="border border-slate-700 bg-white/5 backdrop-blur-sm lg:px-10 lg:py-4 px-6 py-3 rounded-md font-bold text-white hover:bg-white/10 hover:border-slate-500 transition duration-300 w-full sm:w-auto">
                            Let's Talk
                        </button>
                    </div>

                </div>
            </section>
        </section>
    );
}