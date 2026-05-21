"use client";
import React, { useState } from "react";

 const services = [
     {
         num: "01",
         title: "Scaffolding",
         desc: "Erection, modification, and dismantling of cuplock, ringlock, and aluminium tower systems. Certified scaffolders, foremen, and inspectors deployed with our own equipment under your project safety framework.",
         tags: ["Cuplock", "Ringlock", "Aluminium tower", "Inspector"],
     },
     {
         num: "02",
         title: "Electromechanical",
         desc: "MEP execution crews for fit-out, project, and shutdown work. Mechanical, electrical, and plumbing trades supplied with charge-hand and supervisor leadership for short-burst or framework engagements.",
         tags: ["Mechanical", "Electrical", "Plumbing", "Fit-out"],
     },
     {
         num: "03",
         title: "HVAC",
         desc: "Skilled HVAC crews for chiller maintenance, AHU servicing, duct cleaning, cooling tower works, and major shutdown projects across commercial and industrial portfolios.",
         tags: ["Chiller", "AHU", "Duct", "Shutdown"],
     },
     {
         num: "04",
         title: "Building Maintenance",
         desc: "Day-to-day technical maintenance teams for commercial towers, residential communities, malls, and mixed-use developments. Reactive and planned preventive support backed by single-point coordination.",
         tags: ["Reactive", "PPM", "Multi-trade", "Tower"],
     },
     {
         num: "05",
         title: "Cleaning",
         desc: "Trained cleaning crews for commercial offices, industrial facilities, post-construction handovers, and façade washing. Equipment and chemicals supplied to international hygiene standards.",
         tags: ["Commercial", "Industrial", "Post-construction", "Façade"],
     },
 ];

const ServicesSection = () => {
    //State to track which service is currently selected
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = services[activeIndex];

    return (
        <section
            id="services"
            className="px-8 bg-[#0a0a0a] border-y border-white/10 -scroll-m-24"
        >
            <div className="max-w-[1240px] mx-auto">
                {/* SECTION HEAD */}
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[80px] mb-[90px] items-end">
                    <div>
                        {/* EYEBROW */}
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-7 h-px bg-[var(--accent)]" />
                            <span className="text-[13px] text-accent tracking-[0.08em] font-mono uppercase">
                                Services
                            </span>
                        </div>
                        <h2 className="font-display font-light leading-[1.0] tracking-[-0.03em] text-[clamp(38px,5.2vw,82px)] text-skin-light">
                            One source.<br />
                            <em className="text-[var(--accent)] font-normal italic">
                                Every trade.
                            </em>
                        </h2>
                    </div>
                    <p className="text-[16px] leading-[1.6] text-skin-light/60 max-w-[460px] ml-auto max-lg:ml-0">
                        Each service is delivered as specialist subcontracting — your scope, our crew, our equipment,
                        our supervisor on site. Engagements scale from short surge support to full work packages on framework agreements.
                    </p>
                </div>

                {/* MAIN INTERACTIVE GRID */}
                <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* LEFT SIDE: CONTENT DISPLAY (60%) */}
                    <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
                        <div className="relative flex flex-col gap-8 h-full">

                            {/* IMAGE CONTAINER */}
                            <div className="relative aspect-video lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden rounded-sm border border-white/10 bg-white/5 z-0">
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover opacity-80 lg:opacity-40 transition-opacity duration-700"
                                />
                                {/* Gradient Overlay for Readability on Large Screens */}
                                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="relative z-10 lg:h-full lg:flex lg:flex-col lg:justify-end lg:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h3 className="text-[var(--accent)] font-mono text-sm mb-2">
                                    Service {activeService.num}
                                </h3>
                                <h2 className="text-4xl font-display text-skin-light mb-6 lg:text-6xl">
                                    {activeService.title}
                                </h2>
                                <p className="text-skin-light/60 text-lg leading-relaxed max-w-[700px] mb-8 lg:text-skin-light/90">
                                    {activeService.desc}
                                </p>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2">
                                    {activeService.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="font-mono text-[10px] uppercase tracking-widest text-skin-light/40 px-4 py-2 border border-white/5 rounded-full bg-white/[0.02] lg:bg-black/40 lg:text-skin-light lg:border-white/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE: SIDEBAR NAVIGATION (40%) */}
                    {/* <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
                        <div className="flex flex-col border border-white/10 rounded-sm overflow-hidden">
                            <div className="bg-white/5 p-6 border-b border-white/10">
                                <h4 className="text-skin-light font-display text-xl">Our Services</h4>
                            </div>
                            {services.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`relative flex items-center justify-between p-6 text-left transition-all duration-300 group
                                        ${activeIndex === i
                                            ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                                            : "bg-transparent text-skin-light/50 hover:bg-white/[0.03] hover:text-skin-light"
                                        }
                                        ${i !== services.length - 1 ? "border-b border-white/10" : ""}
                                    `}
                                >
                                   
                                    {activeIndex === i && (
                                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)]" />
                                    )}

                                    <span className="font-display text-lg tracking-tight">
                                        {s.title}
                                    </span>

                                    <span className={`font-mono text-xs transition-transform duration-300 ${activeIndex === i ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100"}`}>
                                        →
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div> */}
                    <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
                        <div className="flex flex-row overflow-x-auto lg:overflow-visible scrollbar-hide lg:flex-col border border-white/10 rounded-sm"
                        >
                            {/* Header - Hidden on mobile to save horizontal space */}
                            <div className="hidden lg:block bg-white/5 p-6 border-b border-white/10">
                                <h4 className="text-skin-light font-display text-2xl">Select from Our Services</h4>
                            </div>

                            {services.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`relative flex items-center justify-between p-2.5 lg:p-4 text-left transition-all duration-300 group whitespace-nowrap lg:whitespace-normal
                                    ${activeIndex === i
                                            ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                                            : "bg-transparent text-skin-light/50 hover:bg-white/[0.03] hover:text-skin-light"
                                    } ${i !== services.length - 1 ? "border-r lg:border-r-0 lg:border-b border-white/10" : ""}`}
                                >
                                    {/* Active Indicator: Bottom bar on mobile, Left bar on desktop */}
                                    {activeIndex === i && (
                                        <span className="absolute left-0 right-0 bottom-0 h-1 lg:h-auto lg:top-0 lg:bottom-0 lg:w-1 bg-[var(--accent)]" />
                                    )}

                                    <span className="font-display text-base lg:text-lg tracking-tight px-4 lg:px-0">
                                        {s.title}
                                    </span>

                                    {/* Arrow - Hidden on mobile for cleaner look */}
                                    <span className={`hidden lg:block font-mono text-xs transition-transform duration-300 ${activeIndex === i ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100"}`}>
                                        →
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;