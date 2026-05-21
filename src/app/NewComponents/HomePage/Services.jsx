import React from 'react';
import { ArrowRight } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';

// const services = [
//     {
//         title: "Mechanical Manpower Supply",
//         desc: "Our personnel specialize in installation, maintenance, and troubleshooting of mechanical systems, ensuring minimal downtime and peak efficiency.",
//         image: "/assets/60d8be36ab7a39eb906f3ca71602084cce2ca178-1111-1.jpg.webp",
//         size: "large"

//     },
//     {
//         title: "Civil Manpower Supply",
//         desc: "Trusted by contractors for high-volume labor supply, we deliver masons, steel fixers, foremen, and heavy equipment operators.",
//         image: "/assets/613abbe4031ec20143e3c09723d69fed345224c51-1.jpg",
//         size: "large"
//     },
//     {
//         title: "Electrical Manpower Supply",
//         desc: "From LV wiring to HV substations, we supply approved electricians, engineers, and QA inspectors.",
//         image: "/assets/c93eacc228c883a93d1ecbb1ffce01635c73a7872-1.jpg.webp",
//         size: "small"
//     },
//     {
//         title: "Oil & Gas Manpower Supply",
//         desc: "We provide rigorously trained, safety-certified manpower for upstream, midstream, and downstream operations.",
//         image: "/assets/c-csxxX-1.png.webp",
//         size: "small"
//     },
//     {
//         title: "Infrastructure Manpower Supply",
//         desc: "We prioritize candidates with experience in government projects and ISO-compliant workflows.",
//         image: "/assets/8c5986881405fd77af3d6f964ab29bf350d11a381-1.jpg",
//         size: "small"
//     },
//     {
//         title: "Cleaning Manpower Supply",
//         desc: "From daily janitorial staff to deep-cleaning specialists, we supply uniformed, trained personnel using eco-friendly practices.",
//         image: "/assets/3fb526ea01f56148e88686a88dae1df58e931f782122-1.jpg",
//         size: "small"
//     }
// ];

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

export default function WorkforceServices() {
    return (
        <>
            <section className="bg-skin-background text-skin-light py-20 px-6 lg:px-[7.5rem] max-w-[100rem] mx-auto">

                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Badge Indicator Pill updated to corporate blue tints */}
                    <Badge text={"Your Trusted Partner in Skilled Manpower Solutions"} />
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
                        Reliable <span className="text-skin-logo">Workforce Services</span>
                    </h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-md cursor-pointer border border-skin-subtle bg-skin-primaryCard h-96`}
                        >
                            {/* Image Layer with Zoom Hover Animation */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Subtle Premium Gradient Overlay Layer */}
                            <div className="absolute inset-0 bg-gradient-to-t from-skin-primary via-[#020b1e]/50 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                            <div className="absolute inset-0 bg-[#020b1e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />


                            {/* Interactive Slide-up Content Layout Wrapper */}
                            <div className="absolute inset-0 px-8 overflow-hidden">
                                <div
                                    className={`absolute bottom-0 left-0 right-0 translate-y-[10rem] group-hover:translate-y-0 transition-transform duration-500 ease-out`}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-6">
                                            <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2 tracking-tight text-skin-white group-hover:text-mutedLight transition-colors">
                                                {service.title}
                                            </h3>


                                            <div className="bg-skin-primary backdrop-blur-md border border-skin-logo p-3 rounded-full transition-all duration-300 group-hover:bg-skin-logo group-hover:border-skin-borderHover group-hover:scale-110 shadow-lg shrink-0">
                                                <ArrowRight size={20} className="text-skin-white" />
                                            </div>
                                        </div>

                                        {/* Description Body Text blocks */}
                                        <div>
                                            <p className="text-sm text-skin-light mt-8 leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}