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
        <section className="bg-[#020b1e] text-white py-24 px-6 md:px-20 font-public-sans overflow-hidden selection:bg-[#0f5cf2]/30">

            {/* Header Layout Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="inline-block px-4 py-1.5 border border-blue-900/50 rounded-full mb-6 bg-[#0f5cf2]/10 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold">
                        <span className="text-[#0f5cf2] mr-1">✳</span> Reach Us
                    </p>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Get in Touch <span className="text-[#0f5cf2]">With Us</span>
                </h2>
            </div>

            {/* Main Interactive Corporate Contact Card */}
            <div className="relative max-w-7xl mx-auto bg-[#041232]/60 rounded-2xl border border-blue-900/20 backdrop-blur-md overflow-hidden p-8 md:p-16 shadow-2xl">

                {/* Background Skyline Vector Silhouette */}
                <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-5 pointer-events-none select-none z-0">
                    <img
                        src="/assets/Frame.png"
                        alt="Skyline Graphic"
                        className="w-full h-full object-contain object-right-bottom grayscale invert"
                    />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Corporate Information Pack */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Connect With Us Now</h3>
                            <p className="text-slate-300 font-normal leading-relaxed max-w-md text-sm md:text-base">
                                Reach out today for quick, reliable staffing solutions tailored specifically to your project requirements and workforce operational timelines.
                            </p>
                        </div>

                        {/* Location Addresses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Abu Dhabi HQ */}
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 border border-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#020b1e]/60 text-slate-400 group-hover:text-[#0f5cf2] group-hover:border-[#0f5cf2]/40 transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base text-white mb-1">Abu Dhabi</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Office No: 221, Al Fahim Building, Musaffah-4, P.O Box: 778356, Abu Dhabi, UAE</p>
                                </div>
                            </div>

                            {/* Dubai Office */}
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 border border-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#020b1e]/60 text-slate-400 group-hover:text-[#0f5cf2] group-hover:border-[#0f5cf2]/40 transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base text-white mb-1">Dubai</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed font-normal">Office No: 211, Al Mozna Building, Near Al Nahda Metro Station, P.O Box: 23013, Dubai, UAE</p>
                                </div>
                            </div>

                            {/* Sharjah Branch */}
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 border border-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#020b1e]/60 text-slate-400 group-hover:text-[#0f5cf2] group-hover:border-[#0f5cf2]/40 transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base text-white mb-1">Sharjah</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed font-normal">BCC Building, Al Zahra's Street, P.O. Box: 77967, Sharjah, UAE</p>
                                </div>
                            </div>
                        </div>

                        {/* Email & Phone Contact Footer */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-blue-900/20">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 border border-blue-900/40 rounded-xl flex items-center justify-center bg-[#020b1e]/60 text-slate-400 group-hover:text-[#0f5cf2] group-hover:border-[#0f5cf2]/40 transition-colors duration-300">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">info@bestmanpower.ae</span>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 border border-blue-900/40 rounded-xl flex items-center justify-center bg-[#020b1e]/60 text-slate-400 group-hover:text-[#0f5cf2] group-hover:border-[#0f5cf2]/40 transition-colors duration-300">
                                    <Phone size={18} />
                                </div>
                                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 leading-tight space-y-0.5">
                                    <p>+971 26588663</p>
                                    <p>+971 565473850</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Rebranded Premium Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-[#020b1e]/40 border border-blue-900/30 rounded-lg px-4 py-3 text-sm focus:border-[#0f5cf2] transition-colors outline-none text-white placeholder-slate-500"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email</label>
                            <input
                                type="type"
                                placeholder="Enter Your Mail"
                                className="w-full bg-[#020b1e]/40 border border-blue-900/30 rounded-lg px-4 py-3 text-sm focus:border-[#0f5cf2] transition-colors outline-none text-white placeholder-slate-500"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Enter Your Message"
                                className="w-full bg-[#020b1e]/40 border border-blue-900/30 rounded-lg px-4 py-3 text-sm focus:border-[#0f5cf2] transition-colors outline-none text-white placeholder-slate-500 resize-none"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0f5cf2] text-white font-bold py-4 rounded-lg shadow-lg shadow-[#0f5cf2]/20 hover:bg-[#0d52d6] active:scale-[0.99] transition-all duration-200"
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