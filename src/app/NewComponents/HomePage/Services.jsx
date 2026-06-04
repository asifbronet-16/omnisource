import React from 'react';
import { ArrowRight } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';
import Link from 'next/link';

const services = [
    {
        id: "civil",
        title: "Civil Construction Workforce Solutions",
        desc: "We supply WPS-compliant, mobilization-ready civil crews, including certified scaffolders, masons, foremen, civil helpers, and site support crews for UAE infrastructure projects.",
        image: "/assets/magnific_change-the-uniform-and-he_2961257177.jpeg",
        size: "large"
    },
    {
        id: "mep",
        title: "MEP Workforce Solutions",
        desc: "Comprehensive MEP workforce solutions spanning industrial and commercial electricians, HVAC and A/C technicians, duct installers, pipe fitters, mechanical helpers, and MEP supervisors.",
        image: "/assets/construction-workers-inspecting-hvac-installation-commercial-building.jpg.jpeg",
        size: "large"
    },
    {
        id: "cleaning",
        title: "Cleaning Workforce Solutions",
        desc: "Trained and screened personnel across unskilled, semi-skilled, and skilled cleaning roles—ranging from general cleaners and janitors to rope access facade cleaners and marble polishing technicians.",
        image: "/assets/Picture1.jpg",
        size: "small"
    },
    {
        id: "machinery",
        title: "Machinery & Equipment Rental",
        desc: "Dependable, flexible rental options supporting all construction and industrial scopes. Our fleet includes wheel loaders, mini excavators, dump trucks, terrain cranes, forklifts, and boom/spider lifts.",
        image: "/assets/magnific_change-the-uniform-and-he_2967867875.png",
        size: "small"
    }
];

export default function WorkforceServices() {


    return (
        <>
            <section className="bg-skin-background text-skin-light lg:py-20 py-16 px-6 lg:px-[7.5rem]">

                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Badge Indicator Pill updated to corporate blue tints */}
                    <Badge text={"Expert Talent, Delivered with Precision "} />
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
                        Trusted <span className="text-skin-logo">Workforce Solution</span>
                    </h2>
                </div>

                {/* Grid Section */}
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 ">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            className="group relative overflow-hidden rounded-md cursor-pointer border border-skin-subtle bg-skin-primaryCard lg:h-96 md:h-72 h-60"
                            href={`/services/${service.id}`}
                        >
                            {/* Image Layer with Zoom Hover Animation */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle Premium Gradient Overlay Layer */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e] via-[#020b1e]/70 to-transparent" />
                            {/* Content wrapper — grows upward on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-28 group-hover:h-[13rem] lg:group-hover:h-[15rem] overflow-hidden transition-all duration-500 ease-out bg-gradient-to-t from-[#020b1e] via-[#020b1e]/80 to-transparent">
                                <div className="lg:p-6 p-3">
                                    {/* Heading always visible */}
                                    <div className="flex items-center justify-between lg:gap-6 gap-0.5">
                                        <h3 className="text-[clamp(0.75rem,2vw,1.5rem)] font-bold leading-tight mb-2 tracking-tight text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <div className="bg-skin-primary backdrop-blur-md border border-skin-logo lg:p-3 p-1.5 rounded-full transition-all duration-300 group-hover:bg-skin-logo group-hover:border-skin-borderHover group-hover:scale-110 shadow-lg shrink-0">
                                            <ArrowRight  className="text-white lg:h-5 lg:w-5 h-3 w-3" />
                                        </div>
                                    </div>
                                    {/* Paragraph revealed on hover */}
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}