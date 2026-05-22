import React from 'react';
import { ArrowRight } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';

const services = [
    {
        title: "Civil Construction Manpower Supply",
        desc: "We supply WPS-compliant, mobilization-ready civil crews, including certified scaffolders, masons, foremen, civil helpers, and site support crews for UAE  infrastructure projects.",
        image: "/assets/613abbe4031ec20143e3c09723d69fed345224c51-1.jpg",
        size: "large"
    },
    {
        title: "MEP Manpower Supply",
        desc: "Comprehensive MEP workforce solutions spanning industrial and commercial electricians, HVAC and A/C technicians, duct installers, pipe fitters, mechanical helpers, and MEP supervisors.",
        image: "/assets/60d8be36ab7a39eb906f3ca71602084cce2ca178-1111-1.jpg.webp", // Repurposed for broader MEP
        size: "large"
    },
    {
        title: "Cleaning Manpower Supply",
        desc: "Trained and screened personnel across unskilled, semi-skilled, and skilled cleaning roles—ranging from general cleaners and janitors to rope access facade cleaners and marble polishing technicians.",
        image: "/assets/3fb526ea01f56148e88686a88dae1df58e931f782122-1.jpg",
        size: "small"
    },
    {
        title: "Machinery & Equipment Rental",
        desc: "Dependable, flexible rental options supporting all construction and industrial scopes. Our fleet includes wheel loaders, mini excavators, dump trucks, terrain cranes, forklifts, and boom/spider lifts.",
        image: "/assets/c-csxxX-1.png.webp", // Replace with a machinery/equipment asset when available
        size: "small"
    }
];

export default function ServiceSection() {
    return (
        <section className="bg-skin-background text-skin-light py-20 px-6 lg:px-[7.5rem] w-full max-w-[100rem] mx-auto font-public-sans select-none">
            {/* Header Section */}
            <div className="mb-14 flex flex-col items-center text-center">
                <div className='mx-auto w-fit'>
                    <Badge text={"Scaling Success Together"} />
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
                        className="group relative overflow-hidden rounded-xl cursor-pointer w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.15rem)] h-[420px] flex-shrink-0 border border-blue-900/10 hover:border-blue-900/40 transition-all duration-300 "
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
                                    <h3 className="text-xl font-bold leading-tight tracking-tight text-skin-light group-hover:text-skin-logo transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Action Arrow Bubble Rebranded to OmniSource Blue */}
                                    <div className="w-9 h-9 flex items-center justify-center bg-skin-primary backdrop-blur-md border border-skin-subtle rounded-full transition-all duration-500 group-hover:bg-skin-logo group-hover:border-skin-logo group-hover:rotate-[-45deg] shrink-0 shadow-lg">
                                        <ArrowRight size={16} className="text-skin-light" />
                                    </div>
                                </div>

                                {/* Slide-Up Content Text */}
                                <p className="text-sm text-skin-light font-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-70 line-clamp-5">
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