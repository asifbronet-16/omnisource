import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#080A0A] pt-[90px] px-8 pb-8 border-t border-white/10">
            {/* TOP GRID */}
            <div
                className="max-w-[1240px] mx-auto grid grid-cols-[1.4fr_1fr_1fr_1.4fr] max-lg:grid-cols-2 max-sm:grid-cols-1gap-[60px] pb-16 border-b border-white/10"
            >
                {/* BRAND */}
                <div>
                    <a href="#" className="flex items-center gap-3 text-skin-light">
                        <div className="w-[30px] h-[30px]">
                            <svg
                                viewBox="0 0 30 30"
                                className="w-full h-full stroke-[var(--accent)] fill-none"
                                style={{ strokeWidth: 1.4 }}
                            >
                                <circle cx="15" cy="15" r="3" fill="currentColor" stroke="none" />
                                <line x1="15" y1="15" x2="2" y2="15" />
                                <line x1="15" y1="15" x2="28" y2="15" />
                                <line x1="15" y1="15" x2="15" y2="2" />
                                <line x1="15" y1="15" x2="15" y2="28" />
                                <line x1="15" y1="15" x2="5" y2="5" />
                                <line x1="15" y1="15" x2="25" y2="25" />
                            </svg>
                        </div>

                        <span className="font-display text-[22px] leading-none tracking-[0.02em]">
                            Omni{" "}
                            <em className="italic text-[var(--accent)] font-normal">
                                Source
                            </em>
                        </span>
                    </a>

                    <p className="mt-[22px] mb-[26px] font-display italic text-[17px] leading-[1.4] text-skin-light/60">
                        "The best crew.
                        <br />
                        At your service."
                    </p>
                    <p className="font-mono uppercase text-[11px] leading-[1.7] tracking-[0.12em] text-skin-light/40">
                        DET License · Activity 4390008
                        <br />
                        Scaffolding Erecting &amp; Dismantling Contracting
                    </p>
                </div>
                {/* SERVICES */}
                <div>
                    <h5 className="mb-[22px] font-mono font-normal uppercase tracking-[0.18em] text-[11px] text-[var(--accent)]" >
                        Services
                    </h5>

                    <ul className="space-y-[11px]">
                        {[
                            "Scaffolding",
                            "Electromechanical",
                            "HVAC",
                            "Building maintenance",
                            "Cleaning",
                        ].map((item) => (
                            <li key={item}>
                                <a href="#services"
                                    className="text-[14px] text-skin-light/60 hover:text-[var(--accent)] transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* COMPANY */}
                <div>
                    <h5 className="mb-[22px] font-mono font-normal uppercase tracking-[0.18em] text-[11px] text-[var(--accent)]">
                        Company
                    </h5>

                    <ul className="space-y-[11px]">
                        {[
                            { label: "How we work", href: "#how" },
                            { label: "Standards", href: "#standards" },
                            { label: "Trades supplied", href: "#trades" },
                            { label: "Contact", href: "#contact" },
                            { label: "Careers", href: "/careers" },
                        ].map((item) => (
                            <li key={item.label}>
                                <a href={item.href}
                                    className="text-[14px] text-skin-light/60 hover:text-[var(--accent)] transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* OFFICES */}
                <div>
                    <h5
                        className="mb-[22px] font-mono font-normal uppercase tracking-[0.18em] text-[11px] text-[var(--accent)]"
                    >
                        Reach us
                    </h5>
                    <div className="mb-[22px] text-[13px] leading-[1.55] text-skin-light/60">
                        <strong
                            className="block mb-1 font-display italic font-normal text-[16px] text-skin-light"
                        >
                            Dubai
                        </strong>
                        Operations &amp; Headquarters
                        <br />
                        contact@omnisource.ae
                        <br />
                        +971 4 ___ ____
                    </div>

                    <div className="text-[13px] leading-[1.55] text-skin-light/60">
                        <strong
                            className="block mb-1 font-display italic font-normal text-[16px] text-skin-light"
                        >
                            Abu Dhabi
                        </strong>
                        Mussafah operations
                        <br />
                        +971 2 ___ ____
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div
                className="max-w-[1240px] mx-auto pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.1em] text-skin-light/40"
            >
                <span>© 2026 Omni Source. All rights reserved.</span>
                <div className="flex gap-5">
                    {["Privacy", "Terms", "License"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-[var(--accent)] transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;