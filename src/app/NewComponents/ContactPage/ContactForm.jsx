"use client";

import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';
import { ContactCard, ContactInfoItem, FormField } from './ContactComponents';

const offices = [
    // {
    //     city: "Abu Dhabi",
    //     address:
    //         "Office No: 221, Al Fahim Building, Musaffah-4, P.O Box: 778356, Abu Dhabi, UAE",
    // },
    {
        city: "Dubai",
        address:
            "Office No: 801, Block B, Centurion Star Tower,  Near Deira City Centre Metro Station, Dubai, UAE",
    },

    // {
    //     city: "Sharjah",
    //     address:
    //         "BCC Building, Al Zahra's Street, P.O. Box: 77967, Sharjah, UAE",
    // },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add your email logic here
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="bg-skin-background text-skin-light py-24 px-6 md:px-20 font-public-sans overflow-hidden selection:bg-skin-logo/30">
            {/* Header Layout Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                {/* <div className=' mx-auto'>
                    <Badge text={"Reach Us"} />
                </div> */}
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Get in Touch <span className="text-skin-logo">With Us</span>
                </h2>
            </div>

            {/* Main Interactive Corporate Contact Card */}
            <div className="relative max-w-7xl mx-auto bg-skin-backgroundHighlight rounded-2xl border border-skin-subtle backdrop-blur-md overflow-hidden p-8 md:p-16 shadow-2xl">

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
                            <p className="text-skin-light font-normal leading-relaxed max-w-md text-sm md:text-base">
                                Reach out today for quick, reliable staffing solutions tailored specifically to your project requirements and workforce operational timelines.
                            </p>
                        </div>

                        {/* Location Addresses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {offices.map((office, index) => (
                                <ContactCard
                                    key={index}
                                    icon={MapPin}
                                    title={office.city}
                                >
                                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                                        {office.address}
                                    </p>
                                </ContactCard>
                            ))}
                        </div>

                        {/* Email & Phone Contact Footer */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-skin-borderHover">

                            <ContactInfoItem icon={Mail}>
                                <span>jasim@omnisource.global</span>
                            </ContactInfoItem>

                            <ContactInfoItem icon={Phone}>
                                <div className="space-y-0.5">
                                    <p>+971 50 344 1039</p>
                                    {/* <p>+971 565473850</p> */}
                                </div>
                            </ContactInfoItem>

                        </div>
                    </div>

                    {/* Right Column: Rebranded Premium Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        <FormField
                            label="Name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <FormField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter Your Mail"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <FormField
                            label="Message"
                            name="message"
                            textarea
                            placeholder="Enter Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="w-full bg-skin-logo text-skin-light font-bold py-4 rounded-lg shadow-lg shadow-skin-logo/20 hover:bg-[#0d52d6] active:scale-[0.99] transition-all duration-200"
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