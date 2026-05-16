"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add your email logic here
    };

    return (
        <section className="bg-black text-white py-24 px-6 md:px-20 font-public-sans overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="inline-block px-4 py-1 border border-white/20 rounded-sm mb-6 bg-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/80">✳ Reach Us</p>
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold">
                    Get in Touch <span className="text-red-600">With Us</span>
                </h2>
            </div>

            {/* Main Contact Card */}
            <div className="relative max-w-7xl mx-auto bg-[#2A0000] rounded-sm border border-red-900/30 overflow-hidden p-8 md:p-16">

                {/* Background Skyline Silhouette */}
                <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none select-none z-0">
                    <img
                        src="/assets/Frame.png"
                        alt="Skyline"
                        className="w-full h-full object-contain object-right-bottom grayscale invert"
                    />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-4xl font-bold mb-6">Conect Us Now</h3>
                            <p className="text-gray-300 font-light leading-relaxed max-w-md">
                                Reach out today for quick, reliable staffing solutions tailored to your project and workforce needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Locations */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center flex-shrink-0">
                                    <MapPin size={18} className="text-white/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Abu Dhabi</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-light">Office No:221, Al Fahim Building, Musaffah-4,P.O Box: 778356, Abu Dhabi, UAE</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center flex-shrink-0">
                                    <MapPin size={18} className="text-white/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Dubai</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-light">Office No:211, Al Mozna Buiding, Near Al Nahda Metro Station, P.O Box:23013, Dubai, UAE</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center flex-shrink-0">
                                    <MapPin size={18} className="text-white/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">sharjah</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed font-light">BCC Building, Al Zahra's Street P.O. Box: 77967, Sharjah, UAE</p>
                                </div>
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm font-medium">info@bestmanpower.ae</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center">
                                    <Phone size={18} />
                                </div>
                                <div className="text-sm font-medium leading-tight">
                                    <p>+971 26588663</p>
                                    <p>+971 565473850</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-sm focus:border-white transition-colors outline-none"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Mail"
                                className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-sm focus:border-white transition-colors outline-none"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Enter Your Message"
                                className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-sm focus:border-white transition-colors outline-none resize-none"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 rounded transition-transform active:scale-[0.98] hover:bg-gray-100"
                        >
                            Send Your Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;