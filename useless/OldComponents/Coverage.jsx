import React from "react";

const emirates = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
];

const pins = [
    { label: "DXB · HQ", top: "38%", left: "48%" },
    { label: "AUH", top: "58%", left: "32%" },
    { label: "SHJ", top: "30%", left: "56%" },
    { label: "AJM", top: "24%", left: "64%" },
    { label: "RAK", top: "14%", left: "76%" },
    { label: "FUJ", top: "22%", left: "84%" },
];

const CoverageSection = () => {
    return (
        <section className="bg-[var(--bg)] py-[130px] px-8">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-[1.4fr_1fr] max-lg:grid-cols-1 gap-[100px] items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-7 h-px bg-[var(--accent)]" />
                            <span className="text-[13px] text-accent font-mono uppercase tracking-[0.04em]">
                                Coverage
                            </span>
                        </div>
                        <h2 className="font-display font-light text-[clamp(38px,6vw,80px)]
                            leading-[0.95] tracking-[-0.05em] text-skin-light mb-8">
                            Across all<br />    
                            <em className="text-[var(--accent)] italic font-normal">
                                seven emirates.
                            </em>
                        </h2>
                        <p className="text-[16px] leading-[1.6] text-skin-light/60 max-w-[520px] mb-9 font-sans">
                            Headquartered in Dubai with mobilisation pipelines into Abu Dhabi, Sharjah, and the Northern Emirates.
                            Crews sourced through our Kerala recruitment network, processed through Dubai operations, and deployed
                            under UAE labour-law-compliant payroll.
                        </p>
                        {/* EMIRATES LIST */}
                        <ul className="flex flex-wrap gap-4 list-none">
                            {emirates.map((item) => (
                                <li
                                    key={item}
                                    className="text-[22px] font-normal text-skin-light/60 cursor-default
                                  hover:text-[var(--accent)] transition
                                   font-display-text"
                                >
                                    {item}
                                    <span className="text-[var(--accent)] ml-2">·</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* MAP SIDE */}
                    <div
                        className="relative aspect-square border border-white/10
                        bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)]
                        bg-[size:28px_28px]
                        bg-[var(--surface)]"
                    >

                        {/* LABELS */}
                        <span className="absolute top-4 left-5 font-mono text-[10.5px] tracking-[0.18em] text-skin-light/40">
                            UAE
                        </span>

                        <span className="absolute bottom-4 right-5 font-mono text-[10.5px] tracking-[0.18em] text-[var(--accent)]">
                            OPERATIONAL ZONE
                        </span>

                        {/* PINS */}
                        {pins.map((p) => (
                            <div
                                key={p.label}
                                className="absolute group"
                                style={{ top: p.top, left: p.left, transform: "translate(-50%, -50%)" }}
                            >
                                {/* PIN */}
                                <div className="relative w-[12px] h-[12px] bg-[var(--accent)] border border-[var(--accent)] rounded-full">

                                    {/* pulse ring */}
                                    <span
                                        className="absolute inset-[-8px] border border-[var(--accent)] rounded-full
                    opacity-40 animate-ping"
                                    />
                                </div>

                                {/* LABEL */}
                                <span className="absolute left-5 top-[-4px] font-mono text-[10px]
                  tracking-[0.12em] text-skin-light whitespace-nowrap">
                                    {p.label}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverageSection;