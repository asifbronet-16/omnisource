"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';
import Navbar from '../../ReusableComponents/Navbar';
import Badge from '../../ReusableComponents/Badge';


const servicesData = [
    {
        id: "civil-construction",
        menuTitle: "Civil Construction Manpower",
        heading: "Civil Construction Manpower Supply",
        desc: "At OmniSource, we supply WPS-compliant, mobilization-ready civil crews, including certified scaffolders, masons, foremen, civil helpers, and site support crews for UAE infrastructure projects. Whether you need bulk labor for large-scale construction or specialized civil teams, we deliver reliable, safety-compliant manpower to keep your projects on schedule.",
        images: ["/assets/2148233793-1.jpg", "/assets/18842.webp"],
        whyChoose: [
            "Skilled & Certified Workforce",
            "Bulk Labor Solutions",
            "Mega-Project Experience",
            "Bilingual Supervisors",
            "Rapid Mobilization",
            "Cost-Effective Staffing"
        ]
    },
    {
        id: "mep",
        menuTitle: "MEP Manpower",
        heading: "MEP Manpower Supply",
        desc: "At OmniSource, we provide comprehensive MEP workforce solutions spanning industrial and commercial electricians, HVAC and A/C technicians, duct installers, pipe fitters, mechanical helpers, and MEP supervisors. Our professionals meet the strictest safety and quality standards in the UAE.",
        images: ["/assets/60d8be36ab7a39eb906f3ca71602084cce2ca178-1111-1.jpg.webp", "/assets/male-electrician-working-switchboard-with-fuses-1-1024x683.jpg"],
        whyChoose: [
            "DEWA/ADDC Certified",
            "HV/LV Specialists",
            "HVAC & Mechanical Experts",
            "Safety-First Approach",
            "Rapid Mobilization",
            "Cost-Effective Staffing"
        ]
    },
    {
        id: "cleaning",
        menuTitle: "Cleaning Manpower",
        heading: "Cleaning Manpower Supply",
        desc: "At OmniSource, we provide trained and screened personnel across unskilled, semi-skilled, and skilled cleaning roles — ranging from general cleaners and janitors to rope access facade cleaners and marble polishing technicians. Our teams meet DDA, DHA, and JCI standards.",
        images: ["/assets/2150454568-1.jpg", "/assets/2150454559-1.jpg"],
        whyChoose: [
            "Eco-Friendly Practices",
            "Customized Cleaning Plans",
            "Advanced Equipment",
            "Trained Professionals",
            "Rope Access Specialists",
            "Cost-Effective"
        ]
    },
    {
        id: "machinery-rental",
        menuTitle: "Machinery & Equipment Rental",
        heading: "Machinery & Equipment Rental",
        desc: "At OmniSource, we provide dependable, flexible rental options supporting all construction and industrial scopes. Our fleet includes wheel loaders, mini excavators, dump trucks, terrain cranes, forklifts, and boom/spider lifts — backed by trained operators and full maintenance support.",
        images: ["/assets/c-csxxX-1.png.webp", "/assets/2149352224-1.jpg"],
        whyChoose: [
            "Diverse Fleet Available",
            "Trained Operators Included",
            "Flexible Rental Terms",
            "Full Maintenance Support",
            "Rapid Deployment",
            "Cost-Effective Solutions"
        ]
    }
];

export default function ServiceDetailPage() {
    const router = useRouter();
    const params = useParams();

    // Unpack dynamic route slug string (handles paths like /services/mechanical)
    const currentId = params?.id || "mechanical";

    // Locate requested data node or fallback to array index 0 safety state
    const currentService = servicesData.find(s => s.id === currentId) || servicesData[0];
    return (
        <>
            <section className="relative h-[440px] w-full overflow-hidden bg-skin-background font-public-sans select-none">
                <Navbar />

                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-10">
                    <img
                        src="/assets/267-1.webp"
                        alt="services background"
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 w-full h-full z-20">
                    <div className="absolute inset-0 bg-gradient-primary" />
                    <div className="absolute inset-0 bg-gradient-left hidden lg:block" />
                </div>

                {/* Page Header Content */}
                <div className="relative z-30 flex h-full items-center justify-center px-4 pt-16">
                    <div className="text-center">
                        <div className="w-fit mx-auto">
                            <Badge text={"Certified Across Every Trade"} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight leading-none mb-3">
                            Our <span className="text-skin-logo">Services</span>
                        </h1>
                        <div className="w-12 h-1 bg-skin-logo mx-auto rounded-full" />
                    </div>
                </div>
            </section>
            <section className="bg-skin-background text-skin-light py-12 md:py-24 px-4 md:px-20 font-public-sans min-h-screen relative">
                {/* Outer wrapper switches flex layout on lg breakpoint */}
                <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-start">

                    {/* Background Radial Glow */}
                    <div
                        className="absolute right-0 lg:right-[20%] top-0 lg:top-[10%] w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[600px] lg:h-[800px] rounded-full pointer-events-none select-none z-0 opacity-40 lg:opacity-60 mix-blend-screen blur-[60px] sm:blur-[120px]"
                        style={{
                            background: 'radial-gradient(circle, rgba(10,70,185,1) 0%, rgba(10,70,185,0.4) 40%, rgba(0,0,0,0) 70%)'
                        }}
                    />

                    {/* 1. Services Navigation: Scrollable row on mobile, Vertical list on desktop */}
                    <div className="w-full lg:w-[28%] bg-skin-backgroundHighlight lg:bg-skin-backgroundHighlight border-b lg:border border-skin-borderHover lg:border-skin-borderHover p-2 sm:p-4 lg:p-6 lg:rounded-sm z-20 overflow-x-auto lg:overflow-x-visible scrollbar-none snap-x whitespace-nowrap lg:whitespace-normal flex lg:flex-col gap-2 sm:gap-3">
                        <h2 className="hidden lg:block text-2xl font-bold tracking-tight mb-3 px-2">Services</h2>
                        {servicesData.map((tab) => {
                            const isSelected = currentId === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => router.push(`/services/${tab.id}`)}
                                    className={`inline-block lg:block text-center lg:text-left px-4 lg:px-4 py-2.5 lg:py-4 rounded-sm transition-all duration-300 font-medium text-xs lg:text-sm border snap-center flex-shrink-0 lg:flex-shrink-1 ${isSelected
                                        ? 'bg-skin-backgroundHighlight text-skin-light border-skin-borderHover'
                                        : 'bg-skin-backgroundHighlight text-zinc-400 border-skin-subtle lg:border-skin-subtle hover:border-skin-borderHover hover:text-skin-light'
                                        }`}
                                >
                                    {tab.menuTitle}
                                </button>
                            );
                        })}
                    </div>

                    {/* 2. Main Content Area: Placed underneath on mobile screens */}
                    <div className="w-full lg:flex-1 z-10 mt-4 lg:mt-0">
                        <motion.div
                            key={currentService.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Image Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:mb-10">
                                {currentService.images.map((imgSrc, index) => (
                                    <div key={index} className="h-48 sm:h-64 md:h-80 w-full rounded-sm overflow-hidden bg-skin-primary">
                                        <img
                                            src={imgSrc}
                                            alt={`${currentService.heading} ${index + 1}`}
                                            className="w-full h-full object-cover transition-all duration-700"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Typography Section */}
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 lg:mb-6">
                                {currentService.heading}
                            </h1>
                            <p className="text-zinc-300 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-4xl mb-8 lg:mb-12">
                                {currentService.desc}
                            </p>

                            {/* Feature Check Grid Layout */}
                            <div className="border-t border-skin-borderHover pt-8 lg:pt-10">
                                <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-6 lg:mb-8">Why Choose Us</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-12">
                                    {currentService.whyChoose.map((point, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <HardHat size={16} className="text-skin-logo flex-shrink-0" strokeWidth={2.5} />
                                            <span className="text-xs sm:text-sm md:text-base font-medium text-skin-light">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </>
    );
}