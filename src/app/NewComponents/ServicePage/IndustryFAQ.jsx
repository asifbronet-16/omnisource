"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../ReusableComponents/Badge';

const faqData = [
    {
        id: "1",
        question: "What industries do you provide staffing solutions for?",
        answer: "We offer staffing solutions across various sectors including construction, logistics, maintenance, manufacturing, and other technical fields."
    },
    {
        id: "2",
        question: "How do you ensure the right fit for each role?",
        answer: "We employ a rigorous vetting process that includes skill assessment, background checks, and industry-specific certifications to ensure every worker meets our high standards."
    },
    {
        id: "3",
        question: "Are your staffing solutions short-term or long-term?",
        answer: "We provide flexible solutions tailored to your project timeline, ranging from temporary daily labor to long-term permanent placements."
    },
    {
        id: "4",
        question: "What makes your staffing services different?",
        answer: "Our commitment to reliability, our deep understanding of the UAE labor market, and our focus on enhancing client productivity sets us apart."
    }
];

const IndustryFAQ = () => {
    const [activeId, setActiveId] = useState("1");

    return (
        <section className="bg-skin-background text-skin-light py-24 px-6 md:px-20 font-public-sans selection:bg-skin-logo/30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Content Box (Stays anchored during scroll) */}
                <div className="lg:sticky lg:top-28">
                    <div className='w-fit mx-auto lg:mx-0'>
                    <Badge text={"Frequently Asked Questions"}/>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                        Top Manpower Company in UAE <br />
                        <span className="text-skin-logo italic font-bold">for Skilled & Unskilled <br /> Workforce</span>
                    </h2>
                    <p className="text-slate-300 font-normal leading-relaxed max-w-lg text-base">
                        We provide tailored staffing solutions across industries, focusing on operational reliability, regulatory compliance, and long-term partnerships you can completely count on.
                    </p>
                </div>

                {/* Right Side: Rebranded Accordion Column */}
                <div className="space-y-4">
                    {faqData.map((item) => {
                        const isOpen = activeId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`group rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "border-skin-borderHover  bg-skin-primaryCard"
                                        : "border-skin-badgeBorder  bg-skin-backgroundHighlight hover:border-skin-borderHover"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveId(isOpen ? "" : item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-sm md:text-base font-bold pr-4 transition-colors duration-300 ${isOpen ? "text-skin-logo" : "text-skin-light group-hover:text-skin-light"
                                        }`}>
                                        {item.id}. {item.question}
                                    </span>

                                    {/* Animated Modern Chevron Icon */}
                                    <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                            ? "border-skin-badgeBorder bg-skin-background text-skin-logo rotate-180"
                                            : "border-skin-muted  text-skin-light group-hover:text-skin-muted group-hover:border-skin-badgeBorder"
                                        }`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className="w-3.5 h-3.5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-sm text-skin-light font-normal leading-relaxed border-t border-skin-subtle pt-4 bg-skin-backgroundHighlight">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustryFAQ;