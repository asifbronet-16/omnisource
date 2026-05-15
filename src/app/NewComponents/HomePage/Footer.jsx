import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] text-white pt-20 pb-10 px-6 md:px-20 font-public-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Logo, Contact & Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Logo & Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center text-2xl font-black italic px-2">
                            <span className=" py-1 rounded-sm text-white">Omni</span>
                            <span className="tracking-tighter">Source</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-red-600 mt-1">📞</span>
                                <div>
                                    <p className="text-red-600 text-xs uppercase tracking-widest mb-1">Phone no.</p>
                                    <p className="text-sm font-light">+971 26588663</p>
                                    <p className="text-sm font-light">+971 565473850</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-red-600 mt-1">📧</span>
                                <div>
                                    <p className="text-red-600 text-xs uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-sm font-light">info@bestmanpower.ae</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 opacity-70">
                            <span className="hover:text-red-600 cursor-pointer transition-colors">Instagram</span>
                            <span className="hover:text-red-600 cursor-pointer transition-colors">X</span>
                            <span className="hover:text-red-600 cursor-pointer transition-colors">YouTube</span>
                            <span className="hover:text-red-600 cursor-pointer transition-colors">WhatsApp</span>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-red-600 text-sm font-bold uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-sm font-light text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-red-600 text-sm font-bold uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4 text-sm font-light text-gray-300">
                            <li>Mechanical Manpower Supply</li>
                            <li>Civil Manpower Supply</li>
                            <li>Electrical Manpower Supply</li>
                            <li>Oil & Gas Manpower Supply</li>
                            <li>Infrastructure Manpower Supply</li>
                            <li>Cleaning Manpower Supply</li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-red-600 text-sm font-bold uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-4 text-sm font-light text-gray-300">
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-12" />

                {/* Middle Section: Office Locations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-light leading-relaxed mb-12">
                    <div>
                        <h5 className="text-red-600 font-bold mb-4">Abu Dhabi</h5>
                        <p className="text-gray-400">Office No: 221, Al Fahim Building, Musaffah-4, P.O Box: 778356, Abu Dhabi, UAE</p>
                    </div>
                    <div className="border-l border-white/10 pl-0 md:pl-12">
                        <h5 className="text-red-600 font-bold mb-4">Dubai</h5>
                        <p className="text-gray-400">Office No: 211, Al Mozna Building, Near Al Nahda Metro Station, P.O Box: 23013, Dubai, UAE</p>
                    </div>
                    <div className="border-l border-white/10 pl-0 md:pl-12">
                        <h5 className="text-red-600 font-bold mb-4">Sharjah</h5>
                        <p className="text-gray-400">BCC Building, Al Zahra's Street P.O. Box: 77967, Sharjah, UAE</p>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-8" />

                {/* Bottom Section: Copyright */}
                <div className="text-center text-xs text-gray-500 font-light">
                    © Copyright {currentYear}, All Rights Reserved by Best Manpower
                </div>
            </div>
        </footer>
    );
};

export default Footer;