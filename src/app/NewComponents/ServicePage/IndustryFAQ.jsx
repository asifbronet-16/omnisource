"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <section className="bg-[#020b1e] text-white py-24 px-6 md:px-20 font-public-sans selection:bg-[#0f5cf2]/30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Content Box (Stays anchored during scroll) */}
                <div className="lg:sticky lg:top-28">
                    <div className="inline-block px-4 py-1.5 border border-blue-900/50 rounded-full mb-6 bg-[#0f5cf2]/10 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold">
                            <span className="text-[#0f5cf2] mr-1">✳</span> Frequently Asked Questions
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                        Top Manpower Company in UAE <br />
                        <span className="text-[#0f5cf2] italic font-bold">for Skilled & Unskilled <br /> Workforce</span>
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
                                        ? "border-[#0f5cf2]/40 bg-[#041232]"
                                        : "border-blue-900/20 bg-[#041232]/50 hover:border-blue-900/40"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveId(isOpen ? "" : item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-sm md:text-base font-bold pr-4 transition-colors duration-300 ${isOpen ? "text-[#0f5cf2]" : "text-slate-100 group-hover:text-white"
                                        }`}>
                                        {item.id}. {item.question}
                                    </span>

                                    {/* Animated Modern Chevron Icon */}
                                    <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                            ? "border-[#0f5cf2] bg-[#0f5cf2]/10 text-[#0f5cf2] rotate-180"
                                            : "border-slate-600 text-slate-400 group-hover:text-slate-200 group-hover:border-slate-400"
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
                                            <div className="px-6 pb-6 text-sm text-slate-300 font-normal leading-relaxed border-t border-blue-900/20 pt-4 bg-[#020b1e]/40">
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