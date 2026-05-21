"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../ReusableComponents/Badge';

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
        <section id="faq" className="bg-skin-background py-24 px-6 md:px-20 font-public-sans text-skin-light">
            <div className="max-w-6xl mx-auto">

                {/* Header Title Space */}
                <div className="text-center mb-16">
                    <div className='w-fit mx-auto'><Badge text={"Clarity and Operational Compliance"}/></div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-skin-light">
                        Frequently Asked <span className="text-skin-logo">Questions</span>
                    </h2>
                </div>

                {/* Premium Corporate Accordion Container */}
                <div className="border border-skin-subtle rounded-lg bg-skin-primaryCard backdrop-blur-sm overflow-hidden shadow-xl shadow-glow">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border-b border-skin-subtle last:border-b-0 transition-colors duration-300 ${isOpen ? 'bg-skin-backgrounHighlight' : ''
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#041232]/60 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Branded Dynamic Math Control Indicator */}
                                        <span className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-skin-light' : 'text-light group-hover:text-skin-light'
                                            }`}>
                                            {isOpen ? '−' : '+'}
                                        </span>

                                        {/* Question Label Heading string */}
                                        <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-skin-light' : 'text-skin-light group-hover:text-skin-mutedLight'
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
                                            className="overflow-hidden border-t border-skin-subtle bg-skin-backgroundHighlight"
                                        >
                                            <div className="px-14 pb-6 pt-4 text-skin-light font-normal text-sm md:text-base leading-relaxed max-w-5xl">
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