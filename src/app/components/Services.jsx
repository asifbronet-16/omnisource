import React from "react";

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
    return (
        <section
            id="services"
            className="py-[130px] px-12 bg-[var(--surface)] border-y border-white/10"
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
                        <h2 className="font-display font-light leading-[1.0] tracking-[-0.03em]
              text-[clamp(38px,5.2vw,82px)] text-white">
                            One source.<br />
                            <em className="text-[var(--accent)] font-normal italic">
                                Every trade.
                            </em>
                        </h2>
                    </div>
                    <p className="text-[16px] leading-[1.6] text-white/60 max-w-[460px] ml-auto max-lg:ml-0">
                        Each service is delivered as specialist subcontracting — your scope, our crew, our equipment,
                        our supervisor on site. Engagements scale from short surge support to full work packages on framework agreements.
                    </p>
                </div>

                {/* SERVICES */}
                <div className="border-t border-white/10">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="group relative grid grid-cols-[80px_1fr_2fr_1fr] max-lg:grid-cols-1
                                gap-10 py-[44px] border-b border-white/10 cursor-pointer
                                hover:bg-white/[0.02] transition-all duration-300"
                        >
                            {/* underline sweep */}
                            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-500" />
                            {/* NUMBER */}
                            <div className="font-mono text-[12px] text-[var(--accent)] tracking-[0.1em] pt-2">
                                {s.num}
                            </div>
                            {/* TITLE */}
                            <div className="font-display text-[clamp(28px,3.4vw,44px)]
                                leading-[1.05] tracking-[-0.02em] text-white
                                group-hover:text-[var(--accent)] transition-colors">
                                {s.title}
                            </div>
                            {/* DESC */}
                            <div className="text-[15px] leading-[1.6] text-white/60 pt-2">
                                {s.desc}
                            </div>
                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {s.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[10.5px] uppercase tracking-[0.06em]
                                        text-white/60 px-3 py-1 border border-white/10 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;