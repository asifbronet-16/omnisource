"use client";

import React from 'react';
import Badge from '../../ReusableComponents/Badge';
import Image from 'next/image';

// const stats = [
//     { label: 'Manpower', value: '5,000+', color: 'text-red-600', className: 'md:col-span-1 md:w-54 md:ml-auto h-28 mt-auto ' },
//     { label: 'Years Of Experience', value: '10+', color: 'text-red-600', className: 'md:col-span-1 rounded-tr-[100px] ' },
//     { label: 'Happy Clients', value: '1,000+', color: 'text-red-600', className: 'md:col-span-1' },
//     { label: 'Project completed', value: '1,500+', color: 'text-red-600', className: 'md:col-span-1' },
//     { label: 'Ongoing Projects', value: '200+', color: 'text-red-600', className: 'col-span-2' },
// ];

const SourceAndDeploy = () => {
    return (
        <>
            <section className="bg-skin-background text-skin-light py-20 px-6 md:px-20 font-public-sans overflow-hidden">
                {/* <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

           
                <div className="relative">
                  
                    <div
                        className="absolute inset-0 z-0 opacity-15"
                        style={{
                            backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                   
                    <span
                        className="absolute -top-24 right-0 md:text-[220px] text-[150px] font-extrabold select-none pointer-events-none leading-none opacity-30 [text-stroke:2px_#0f5cf2] [-webkit-text-stroke:2px_#0f5cf2] text-transparent"
                    >
                        2015
                    </span>

                    <div className="relative z-10">
                      
                        <Badge text={"Bridging the Gap Between Skill and Demand"}/>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                            Established to Connect <br />
                            Talent and <span className="text-skin-">Opportunity Since</span>
                        </h2>
                        
                        <p className="text-7xl md:text-9xl font-black tracking-tighter text-skin-logo drop-shadow-lg shadow-[#E22E33]/20">
                            2015
                        </p>
                    </div>
                </div>

                
                <div className="grid grid-cols-2 gap-4 z-10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`border border-skin-subtle p-8 flex flex-col justify-center items-center text-center bg-skin-backgroundHighlight backdrop-blur-xs rounded-md hover:border-skin-logo/50 hover:bg-skin-primary transition-all duration-500 ${stat.className}`}
                        >
                            <h3 className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${
                                stat.color && !stat.color.includes('red') ? stat.color : 'text-skin-light'
                            }`}>
                                {stat.value}
                            </h3>
                            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div> */}

            </section>
            <section className="bg-skin-background text-skin-light py-20 px-6 md:px-20 font-public-sans overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left — image wipes up into view, then drifts as you scroll */}
                    <div data-clip className="relative h-[600px] rounded-md overflow-hidden">
                        <div data-clip-img className="absolute inset-x-0 -top-[8%] h-[116%]">
                            <Image
                                src="/assets/magnific_change-the-uniform-and-he_2961257177.jpeg"
                                alt="Labor Worker"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0D0809]/60 via-transparent to-transparent" />
                        {/* Corner tag */}
                        <div data-reveal="up" data-reveal-delay="0.9" className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/15 bg-[#0D0809]/60 px-4 py-2 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-skin-logo opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-skin-logo" />
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-widest text-white">Source · Screen · Deploy</span>
                        </div>
                    </div>

                    {/* Right — headline lights up word by word, copy follows */}
                    <div className="flex flex-col gap-4">
                        <Badge text={"One Source, Every Trade"} />

                        {/* <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
                            THE TRUSTED WORKFORCE SOLUTIONS COMPANY IN THE{" "}
                            <span className="text-skin-logo">UAE.</span>
                        </h2>

                        <p className="text-sm text-skin-light font-semibold leading-relaxed uppercase tracking-widest border-l-2 border-skin-logo pl-4">
                            One Source, Every Trade – For All Industries.
                        </p> */}
                        <h2 data-scrub-words className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight">
                            We source, screen and deploy{" "}
                            <span className="text-skin-logo">
                                verified, skilled & experienced
                            </span>{" "}
                            trade labor
                        </h2>
                        <h3 data-reveal="left" className="text-2xl md:text-3xl font-black text-skin-logo drop-shadow-md tracking-tight">
                            One Source, Every Trade – For All Industries.
                        </h3>

                        <p data-reveal="up" className="text-base text-skin-light leading-relaxed">
                            OmniSource is a UAE-based workforce solutions company serving{" "}
                            <span className="font-bold">
                                commercial, construction, facilities management, retail, hospitality
                            </span>
                            , and <span className="font-bold">industrial</span> sectors across Dubai,
                            Sharjah, Ajman and Abu Dhabi.
                        </p>

                        <p data-reveal="up" data-reveal-delay="0.1" className="text-base text-skin-light leading-relaxed">
                            We <span className="font-bold">source</span>,{" "}
                            <span className="font-bold">screen</span>, and{" "}
                            <span className="font-bold">deploy</span>{" "}
                            <span className="font-bold text-skin-logo">verified</span>,{" "}
                            <span className="font-bold text-skin-logo">skilled</span>, and{" "}
                            <span className="font-bold text-skin-logo">experienced</span> trade
                            labor — managing every stage from workforce planning and candidate
                            mobilization, through on-site deployment and documentation, to ongoing
                            compliance and after-placement support. Every client engagement is
                            managed end-to-end, with a single point of accountability from first
                            brief to final handover.
                        </p>

                        <p data-reveal="up" data-reveal-delay="0.2" className="text-base text-skin-light leading-relaxed">
                            We do not just fill positions. We design the complete workforce supply
                            chain, coordinate the logistics, and stay accountable for the people
                            we place — long after the contract begins.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SourceAndDeploy;