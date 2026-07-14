"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const locations = [
    {
        city: "Dubai",
        plusCode: "783H+RC Dubai",
        address: "783H+RC, - Office No: 801, Block B, Centurion Star Tower, Near Deira City Centre Metro Station - Dubai - United Arab Emirates",
        // For the <iframe> — embeddable endpoint
        embedUrl: "https://maps.google.com/maps?q=25.2545737,55.3285988&z=16&output=embed",
        // For the external-link button — navigation endpoint
        mapUrl: "https://www.google.com/maps/search/?api=1&query=25.2545737,55.3285988",
        isWide: false
    },
];
const ContactLocations = () => {

    return (
        <section className="bg-[#0D0809] py-16 px-6 md:px-20 font-public-sans select-none">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 gap-6 mb-6">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group rounded-xl overflow-hidden border border-red-900/20 bg-[#130305]/50 shadow-xl transition-all duration-300 hover:border-red-900/40"
                        >
                            {/* Premium Frosted Floating Information Banner Overlay */}
                            <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start bg-[#130305]/90 backdrop-blur-md p-4 rounded-xl border border-red-900/40 shadow-2xl">
                                <div className="max-w-[70%]">
                                    <h4 className="text-skin-light font-bold text-sm tracking-tight truncate">{loc.plusCode}</h4>
                                    <p className="text-slate-400 text-[10px] tracking-wide uppercase font-semibold mt-1 truncate">{loc.address}</p>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                                        className="p-2 bg-[#0D0809]/60 border border-red-900/30 text-slate-300 hover:text-skin-light hover:bg-skin-logo hover:border-skin-logo rounded-lg transition-all duration-200"
                                        title="View External Map"
                                    >
                                        <ExternalLink size={15} />
                                    </a>
                                </div>
                            </div>

                            {/* Clean Full-Color High Fidelity Iframe */}
                            <iframe
                                src={loc.embedUrl}
                                className="w-full h-[320px] relative z-10"
                                style={{ border: 0 }}
                                // allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactLocations;