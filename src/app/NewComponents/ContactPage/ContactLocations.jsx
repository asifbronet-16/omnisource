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
        <section className="bg-black py-16 px-6 md:px-20 font-public-sans">
            <div className="max-w-7xl mx-auto">

                {/* Top Two Maps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {locations.slice(0, 2).map((loc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#111]"
                        >
                            {/* Header Overlay */}
                            <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg">
                                <div>
                                    <h4 className="text-black font-bold text-sm">{loc.plusCode}</h4>
                                    <p className="text-gray-500 text-[10px] uppercase mt-1">{loc.address}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ExternalLink size={16} className="text-gray-600" /></button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Navigation size={16} className="text-gray-600" /></button>
                                </div>
                            </div>

                            {/* Map Iframe with Grayscale Filter */}
                            <iframe
                                src={loc.mapUrl}
                                className="w-full h-[300px] grayscale contrast-125 invert-[0.05] brightness-90"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Wide Map (Sharjah/Full View) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#111]"
                >
                    <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
                        <span className="text-black font-bold text-sm italic">Open in Maps</span>
                        <ExternalLink size={14} className="text-black" />
                    </div>

                    <iframe
                        src={locations[2].mapUrl}
                        className="w-full h-[350px] grayscale contrast-125 brightness-90"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ContactLocations;