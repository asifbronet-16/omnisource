"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "What is a manpower supply company in Abu Dhabi?",
        answer: "A manpower supply company in Abu Dhabi provides skilled, semi-skilled, and unskilled workers to businesses across various industries. These companies help employers meet their workforce needs efficiently by supplying highly trained professionals for construction, maintenance, hospitality, oil & gas, and other sectors in compliance with UAE labor laws."
    },
    {
        question: "Do you offer manpower solutions in Abu Dhabi, UAE?",
        answer: "Yes, we provide comprehensive manpower solutions across Abu Dhabi and the wider UAE, ensuring businesses have access to the right talent at the right time."
    },
    {
        question: "What are manpower supply services?",
        answer: "Manpower supply services involve the recruitment, vetting, and placement of workers on a temporary or permanent basis to fulfill specific project requirements."
    },
    // Add the remaining questions from your list here...
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#020b1e] py-24 px-6 md:px-20 font-public-sans text-white">
            <div className="max-w-6xl mx-auto">

                {/* Header Title Space */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 border border-blue-900/50 rounded-full mb-6 bg-[#0f5cf2]/10 backdrop-blur-sm">
                        <p className="text-xs tracking-[0.2em] text-blue-200 font-semibold uppercase">
                            <span className="text-[#0f5cf2] mr-1">✳</span> Clarity and Operational Compliance
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Frequently Asked <span className="text-[#0f5cf2]">Questions</span>
                    </h2>
                </div>

                {/* Premium Corporate Accordion Container */}
                <div className="border border-blue-900/30 rounded-lg bg-[#041232]/20 backdrop-blur-sm overflow-hidden shadow-xl shadow-black/20">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border-b border-blue-900/20 last:border-b-0 transition-colors duration-300 ${isOpen ? 'bg-[#041232]/40' : ''
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#041232]/60 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Branded Dynamic Math Control Indicator */}
                                        <span className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#0f5cf2]' : 'text-slate-400 group-hover:text-white'
                                            }`}>
                                            {isOpen ? '−' : '+'}
                                        </span>

                                        {/* Question Label Heading string */}
                                        <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#0f5cf2]' : 'text-white group-hover:text-blue-300'
                                            }`}>
                                            {item.question}
                                        </span>
                                    </div>
                                </button>

                                {/* Animated Expandable Drawer with Framer Motion */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden border-t border-blue-900/10 bg-[#020b1e]/30"
                                        >
                                            <div className="px-14 pb-6 pt-4 text-slate-300 font-normal text-sm md:text-base leading-relaxed max-w-5xl">
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

export default FAQ;