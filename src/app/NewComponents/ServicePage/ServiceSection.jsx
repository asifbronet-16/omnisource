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
        <section className="bg-black text-white py-20 px-6 lg:px-[7.5rem] max-w-[100rem]">
            {/* Header Section */}
            <div className="mb-12 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 rounded-md mb-6 ">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                        ✱ Your Trusted Partner <span className='lg:inline hidden'>in Skilled Manpower Solutions</span>
                    </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold">
                    Reliable <span className="text-red-600">Workforce Services</span>
                </h2>
            </div>

            {/* Grid Section */}
            <div className="flex flex-wrap justify-center gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        // className={`group relative overflow-hidden rounded-sm cursor-pointer ${service.size === 'large' ? ' h-[400px]' : 'h-[400px]'
                        //     }`}
                        className={`group relative overflow-hidden rounded-sm cursor-pointer 
                w-full 
                md:w-[calc(50%-1rem)] 
                lg:w-[calc(25%-1rem)] 
                h-[400px] flex-shrink-0`}
                    >
                        {/* Image with overlay */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />


                        <div className="absolute inset-0 px-8 overflow-hidden">
                            {/* Sliding content */}
                            <div
                                className={`
                                absolute bottom-0 left-0 right-0
                       ${service.size === 'large' ? "translate-y-[7rem]" : "translate-y-[6rem]"} 
                            group-hover:translate-y-0
                                transition-transform duration-700 ease-out`}
                            >
                                <div className=" p-6  ">
                                    <div className="">

                                        <div className='flex items-start justify-between gap-6'>
                                            <h3 className="
                                                    text-xl lg:text-2xl font-semibold
                                                    
                                                    leading-tight
                                                    mb-2
                                                    "
                                            >
                                                {service.title}
                                            </h3>
                                            <div
                                                className="
                                                bg-white/10
                                                backdrop-blur-md
                                                border border-white/20
                                                p-3 rounded-full
                                                transition-all duration-300
                                                group-hover:bg-red-600
                                                group-hover:border-red-600
                                                shrink-0
                                                "
                                            >

                                                <ArrowRight size={20} className="text-white" />
                                            </div>
                                        </div>


                                        <div
                                        // className="
                                        //     bg-white/10
                                        //     backdrop-blur-md
                                        //     border border-white/20
                                        //     p-3 rounded-full
                                        //     transition-all duration-300
                                        //     group-hover:bg-red-600
                                        //     group-hover:border-red-600
                                        //     shrink-0
                                        //     "
                                        >
                                            <p className="text-sm text-zinc-300 mt-8">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}