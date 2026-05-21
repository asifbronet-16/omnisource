"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';
import Navbar from '../../ReusableComponents/Navbar';


const servicesData = [
    {
        id: "mechanical",
        menuTitle: "Mechanical Manpower",
        heading: "Mechanical Manpower Supply",
        desc: "At OmniSource, we deliver highly skilled mechanical professionals tailored to industries such as oil & gas, manufacturing, construction, and facility management. Our workforce includes certified technicians, engineers, and supervisors specializing in HVAC systems, heavy machinery maintenance, piping, welding, and industrial equipment repair. Whether you need turnkey project teams or emergency mechanical support, we provide qualified, safety-trained personnel who ensure operational efficiency and minimize downtime.",
        images: ["/assets/WhatsApp-Image-2025-07-18-at-6.42.24-PM.jpeg", "/assets/WhatsApp-Image-2025-07-18-at-6.43.56-PM.jpeg"],
        whyChoose: [
            "Certified & Compliant Workforce",
            "Heavy Equipment Specialists",
            "Specialized Expertise",
            "OEM-Trained Technicians",
            "Rapid Mobilization",
            "Cost-Effective Staffing"
        ]
    },
    {
        id: "civil",
        menuTitle: "Civil Manpower",
        heading: "Civil Manpower Supply",
        desc: "At OmniSource, we provide highly trained civil construction professionals for projects ranging from high-rise buildings and infrastructure to roads and mega-developments. Our workforce includes certified masons, steel fixers, crane operators, surveyors, and civil engineers who are experienced in Dutco, ALEC, and ASGC projects. Whether you need bulk labor for large-scale construction or specialized civil teams, we deliver reliable, safety-compliant manpower to keep your projects on schedule",
        images: ["/assets/2148233793-1.jpg", "/assets/18842.webp"],
        whyChoose: [
            "Skilled & Certified Workforce",
            "Bulk Labor Solutions",
            "Mega-Project Experience",
            "Quality-Focused Teams",
            "Bilingual Supervisors",
            "Cost-Effective Staffing"
        ]
    },
    {
        id: "electrical",
        menuTitle: "Electrical Manpower",
        heading: "Electrical Manpower Supply",
        desc: "At OmniSource, we provide DEWA/ADDC-approved electrical professionals for all sectors including construction, industrial plants, renewable energy, and facility management. Our workforce includes certified electricians, solar PV installers, HV technicians, and automation engineers who meet the strictest safety and quality standards in the UAE",
        images: ["/assets/male-electrician-working-switchboard-with-fuses-1-1024x683.jpg", "/assets/2151615008-1.jpg"],
        whyChoose: [
            "DEWA/ADDC Certified",
            "HV/LV Specialists",
            "Safety-First Approach",
            "OEM-Trained Technicians",
            "Proven UAE Experience",
            "Cost-Effective Staffing"
        ]
    },
    {
        id: "oil",
        menuTitle: "Oil & Gas Manpower",
        heading: "Oil & Gas Manpower Supply",
        desc: "At OmniSource, we specialize in providing highly skilled, safety-certified professionals for all segments of the oil and gas industry. From upstream exploration to downstream refining, our workforce includes rig operators, petroleum engineers, HSE specialists, and maintenance technicians who meet the strictest international standards.",
        images: ["/assets/WhatsApp-Image-2025-07-18-at-6.40.35-PM.jpeg", "/assets/WhatsApp-Image-2025-07-18-at-6.39.25-PM.jpeg"],
        whyChoose: [
            "Industry-Certified Professionals",
            "Safety-First Culture",
            "Rapid Mobilization",
            "Cost-Effective Solutions",
            "Proven Track Record",
            "OEM-Trained Technicians"
        ]
    },
    {
        id: "infrastructure",
        menuTitle: "Infrastructure Manpower",
        heading: "Infrastructure Manpower Supply",
        desc: "At Best Man Power, we provide specialized manpower for large-scale infrastructure projects across the UAE. From roads and bridges to railways and utilities, our workforce includes skilled laborers, engineers, and heavy equipment operators with extensive experience in government and private sector developments.",
        images: ["/assets/2149352224-1.jpg", "/assets/120564-1.jpg"],
        whyChoose: [
            "Specialized equipment operators",
            "Connection to related civil and MEP services",
            "Bulk Labor Solutions",
            "Government-Approved Workforce",
            "Quality Assurance Experts",
            "Specialized Skills"
        ]
    },
    {
        id: "cleaning",
        menuTitle: "Cleaning Manpower",
        heading: "Cleaning Manpower Supply",
        desc: "At OmniSource, we provide trained, reliable cleaning professionals for all sectors, including commercial, residential, industrial, and healthcare facilities. Our teams are equipped with modern tools and eco-friendly products to deliver hygienic, efficient cleaning services that meet DDA, DHA, and JCI standards.",
        images: ["/assets/2150454568-1.jpg", "/assets/2150454559-1.jpg"],
        whyChoose: [
            "Eco-Friendly Practices",
            "Customized Cleaning Plans",
            "Cost-Effective",
            "Advanced Equipment",
            "Trained Professionals",
            "Trusted Since 2015"
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
        <section className='bg-black'>
            <Navbar />
            <div className="relative z-10 flex h-full items-center justify-center px-4 pt-12">

                <div className="text-center ">
                    <h1 className="text-3xl md:text-5xl font-bold text-skin-light tracking-tight">
                        Our Services
                    </h1>
                </div>
            </div>
            <section className="text-skin-light py-12 md:py-24 px-4 md:px-20 font-public-sans min-h-screen relative">
                {/* Outer wrapper switches flex layout on lg breakpoint */}
                <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-start">

                    {/* Background Radial Glow */}
                    <div
                        className="absolute right-0 lg:right-[20%] top-0 lg:top-[10%] w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[600px] lg:h-[800px] rounded-full pointer-events-none select-none z-0 opacity-40 lg:opacity-60 mix-blend-screen blur-[60px] sm:blur-[120px]"
                        style={{
                            background: 'radial-gradient(circle, rgba(220,38,38,1) 0%, rgba(220,38,38,0.4) 40%, rgba(0,0,0,0) 70%)'
                        }}
                    />

                    {/* 1. Services Navigation: Scrollable row on mobile, Vertical list on desktop */}
                    <div className="w-full lg:w-[28%] bg-[#180303] lg:bg-[#180303] border-b lg:border border-red-700 lg:border-red-600 p-2 sm:p-4 lg:p-6 lg:rounded-sm z-20 overflow-x-auto lg:overflow-x-visible scrollbar-none snap-x whitespace-nowrap lg:whitespace-normal flex lg:flex-col gap-2 sm:gap-3">
                        <h2 className="hidden lg:block text-2xl font-bold tracking-tight mb-3 px-2">Services</h2>
                        {servicesData.map((tab) => {
                            const isSelected = currentId === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => router.push(`/services/${tab.id}`)}
                                    className={`inline-block lg:block text-center lg:text-left px-4 lg:px-4 py-2.5 lg:py-4 rounded-sm transition-all duration-300 font-medium text-xs lg:text-sm border snap-center flex-shrink-0 lg:flex-shrink-1 ${isSelected
                                        ? 'bg-[#3b0d0d] text-skin-light border-red-600 shadow-md shadow-red-900/10'
                                        : 'bg-[#120202] text-zinc-400 border-red-600 lg:border-red-800 hover:border-red-600 hover:text-skin-light'
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
                                    <div key={index} className="h-48 sm:h-64 md:h-80 w-full rounded-sm overflow-hidden bg-zinc-900">
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
                            <div className="border-t border-zinc-800 pt-8 lg:pt-10">
                                <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-6 lg:mb-8">Why Choose Us</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-12">
                                    {currentService.whyChoose.map((point, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <HardHat size={16} className="text-red-600 flex-shrink-0" strokeWidth={2.5} />
                                            <span className="text-xs sm:text-sm md:text-base font-medium text-zinc-200">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </section>
    );
}