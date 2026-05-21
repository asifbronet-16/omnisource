import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Mechanical Manpower Supply",
        desc: "Our personnel specialize in installation, maintenance, and troubleshooting of mechanical systems, ensuring minimal downtime and peak efficiency.",
        image: "/assets/60d8be36ab7a39eb906f3ca71602084cce2ca178-1111-1.jpg.webp",
        size: "large"

    },
    {
        title: "Civil Manpower Supply",
        desc: "Trusted by contractors for high-volume labor supply, we deliver masons, steel fixers, foremen, and heavy equipment operators.",
        image: "/assets/613abbe4031ec20143e3c09723d69fed345224c51-1.jpg",
        size: "large"
    },
    {
        title: "Electrical Manpower Supply",
        desc: "From LV wiring to HV substations, we supply approved electricians, engineers, and QA inspectors.",
        image: "/assets/c93eacc228c883a93d1ecbb1ffce01635c73a7872-1.jpg.webp",
        size: "small"
    },
    {
        title: "Oil & Gas Manpower Supply",
        desc: "We provide rigorously trained, safety-certified manpower for upstream, midstream, and downstream operations.",
        image: "/assets/c-csxxX-1.png.webp",
        size: "small"
    },
    {
        title: "Infrastructure Manpower Supply",
        desc: "We prioritize candidates with experience in government projects and ISO-compliant workflows.",
        image: "/assets/8c5986881405fd77af3d6f964ab29bf350d11a381-1.jpg",
        size: "small"
    },
    {
        title: "Cleaning Manpower Supply",
        desc: "From daily janitorial staff to deep-cleaning specialists, we supply uniformed, trained personnel using eco-friendly practices.",
        image: "/assets/3fb526ea01f56148e88686a88dae1df58e931f782122-1.jpg",
        size: "small"
    }
];

export default function ServiceSection() {
    return (
        <section className="bg-[#020b1e] text-skin-light py-20 px-6 lg:px-[7.5rem] w-full max-w-[100rem] mx-auto font-public-sans select-none">

            {/* Header Section */}
            <div className="mb-14 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 border border-blue-900/40 bg-[#041232]/60 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold">
                        <span className="text-skin-logo mr-1">✳</span> Your Trusted Partner <span className='lg:inline hidden'>in Skilled Manpower Solutions</span>
                    </p>
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
                    Reliable <span className="text-skin-logo">Workforce Services</span>
                </h2>
            </div>

            {/* Services Cards Flex/Grid Section */}
            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl cursor-pointer w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.15rem)] h-[420px] flex-shrink-0 border border-blue-900/10 hover:border-blue-900/40 transition-all duration-300"
                    >
                        {/* Interactive Image Layer */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Dynamic Multi-Stage Visual Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e] via-[#020b1e]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
                        <div className="absolute inset-0 bg-skin-logo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Sliding Text Container Frame */}
                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end overflow-hidden h-full">
                            <div className="transform translate-y-[4.5rem] group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                {/* Card Row Header */}
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <h3 className="text-xl font-bold leading-tight tracking-tight text-skin-light group-hover:text-blue-100 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Action Arrow Bubble Rebranded to OmniSource Blue */}
                                    <div className="w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-500 group-hover:bg-skin-logo group-hover:border-skin-logo group-hover:rotate-[-45deg] shrink-0 shadow-lg">
                                        <ArrowRight size={16} className="text-skin-light" />
                                    </div>
                                </div>

                                {/* Slide-Up Content Text */}
                                <p className="text-sm text-slate-300 font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-70">
                                    {service.desc}
                                </p>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}