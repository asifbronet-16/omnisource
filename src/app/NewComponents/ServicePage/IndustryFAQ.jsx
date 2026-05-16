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
        <section className="bg-black text-white py-24 px-6 md:px-20 font-public-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Content */}
                <div className="sticky top-24">
                    <div className="inline-block px-3 py-1 border border-white/20 rounded-sm mb-6 bg-white/5">
                        <p className="text-[10px] uppercase tracking-widest font-light">
                            ✳ Frequently Asked Questions
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        Top Manpower Company in UAE <br />
                        <span className="text-red-600">for Skilled & Unskilled <br /> Workforce</span>
                    </h2>
                    <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                        We provide tailored staffing solutions across industries, focusing on reliability,
                        productivity, and long-term partnerships you can count on.
                    </p>
                </div>

                {/* Right Side: Accordion */}
                <div className="space-y-4">
                    {faqData.map((item) => {
                        const isOpen = activeId === item.id;

                        return (
                            <div
                                key={item.id}
                                className="rounded-2xl border border-white/10 bg-[#1a0505] overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setActiveId(isOpen ? "" : item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-sm md:text-base font-medium pr-4">
                                        {item.id}: {item.question}
                                    </span>
                                    <span className="text-2xl font-light">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 pt-4">
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