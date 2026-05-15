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
        <section className="bg-black py-24 px-6 md:px-20 font-public-sans text-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <h2 className="text-4xl md:text-6xl font-semibold text-center mb-16">
                    Frequently Asked <span className="text-red-600">Questions (FAQ)</span>
                </h2>

                {/* FAQ Container */}
                <div className="border border-white rounded-sm">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`border-b border-white last:border-b-0 transition-colors duration-300 ${activeIndex === index ? 'bg-white/[0.02]' : ''}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-6 py-2.5 text-left hover:bg-white/[0.05] transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-red-600 text-lg font-light">
                                        {activeIndex === index ? '−' : '+'}
                                    </span>
                                    <span className={`text-lg  font-medium transition-colors ${activeIndex === index ? 'text-red-600' : 'text-red-600'}`}>
                                        {item.question}
                                    </span>
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden border-t border-white"
                                    >
                                        <div className="px-10 pb-4 pt-4 text-gray-100 font-light leading-relaxed max-w-5xl">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;