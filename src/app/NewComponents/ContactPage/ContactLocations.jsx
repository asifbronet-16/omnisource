"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Navigation } from 'lucide-react';

const locations = [
    {
        city: "Abu Dhabi",
        plusCode: "9G99+763",
        address: "9G99+763 - Abu Dhabi - United Arab Emirates",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14545.922114407875!2d54.4950341!3d24.3123048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e419808a383d3%3A0x6475659728329606!2s9G99%2B763!5e0!3m2!1sen!2sae!4v1715788000000!5m2!1sen!2sae",
        isWide: false
    },
    {
        city: "Dubai",
        plusCode: "79FC+5M6",
        address: "79FC+5M6 - Dubai - United Arab Emirates",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2323789035677!2d55.3725!3d25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzQ4LjAiTiA1NcKwMjInMjEuMCJF!5e0!3m2!1sen!2sae!4v1715788000000!5m2!1sen!2sae",
        isWide: false
    },
    {
        city: "Sharjah",
        plusCode: "Sharjah Branch",
        address: "BCC Building, Al Zahra's Street - Sharjah",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115401.55403061793!2d55.342111!3d25.328456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sSharjah!5e0!3m2!1sen!2sae!4v1715788000000!5m2!1sen!2sae",
        isWide: true
    }
];
const ContactLocations = () => {

    return (
        <section className="bg-[#020b1e] py-16 px-6 md:px-20 font-public-sans select-none">
            <div className="max-w-7xl mx-auto">

                {/* Top Two Regional Branch Maps Grid (Abu Dhabi & Dubai) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {locations.slice(0, 2).map((loc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group rounded-xl overflow-hidden border border-blue-900/20 bg-[#041232]/50 shadow-xl transition-all duration-300 hover:border-blue-900/40"
                        >
                            {/* Premium Frosted Floating Information Banner Overlay */}
                            <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start bg-[#041232]/90 backdrop-blur-md p-4 rounded-xl border border-blue-900/40 shadow-2xl">
                                <div className="max-w-[70%]">
                                    <h4 className="text-skin-light font-bold text-sm tracking-tight truncate">{loc.plusCode}</h4>
                                    <p className="text-slate-400 text-[10px] tracking-wide uppercase font-semibold mt-1 truncate">{loc.address}</p>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button
                                        onClick={() => window.open(loc.mapUrl, '_blank')}
                                        className="p-2 bg-[#020b1e]/60 border border-blue-900/30 text-slate-300 hover:text-skin-light hover:bg-skin-logo hover:border-skin-logo rounded-lg transition-all duration-200"
                                        title="View External Map"
                                    >
                                        <ExternalLink size={15} />
                                    </button>
                                    <button
                                        className="p-2 bg-[#020b1e]/60 border border-blue-900/30 text-slate-300 hover:text-skin-light hover:bg-skin-logo hover:border-skin-logo rounded-lg transition-all duration-200"
                                        title="Get Directions"
                                    >
                                        <Navigation size={15} />
                                    </button>
                                </div>
                            </div>

                            {/* Clean Full-Color High Fidelity Iframe */}
                            <iframe
                                src={loc.mapUrl}
                                className="w-full h-[320px] relative z-10"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Wide Map Container (Sharjah Regional View) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group rounded-xl overflow-hidden border border-blue-900/20 bg-[#041232]/50 shadow-xl transition-all duration-300 hover:border-blue-900/40"
                >
                    {/* Action Hub Overlay Button */}
                    <button
                        onClick={() => window.open(locations[2].mapUrl, '_blank')}
                        className="absolute top-6 left-6 z-20 bg-[#041232]/90 backdrop-blur-md border border-blue-900/40 px-5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 text-skin-light text-sm font-bold transition-all duration-200 hover:bg-skin-logo hover:border-skin-logo"
                    >
                        <span>Open Sharjah Branch in Maps</span>
                        <ExternalLink size={14} className="shrink-0" />
                    </button>

                    {/* Clean Full-Color Wide Horizon Iframe */}
                    <iframe
                        src={locations[2].mapUrl}
                        className="w-full h-[380px] relative z-10"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ContactLocations;