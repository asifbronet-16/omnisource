import React from "react";

const standards = [
    {
        title: "Safety frameworks",
        desc: "Dubai Municipality Code of Construction Safety Practice Chapter 8. OSHAD CoP 26. Trakhees Construction Safety §9. DMCC HSE 9.10.3. Sharjah OSHJ.",
        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M12 2 L21 6 L21 13 C21 18 12 22 12 22 C12 22 3 18 3 13 L3 6 Z" />
                <path d="M9 12 L11 14 L15 10" />
            </svg>
        ),
    },
    {
        title: "Engineering standards",
        desc: "Scaffold works to BS 1139, BS 5973, and BS EN 12810/11. Design and inspection records issued under our DET activity 4390008 contracting license.",
        icon: (
            <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" />
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="9" y1="4" x2="9" y2="20" />
            </svg>
        ),
    },
    {
        title: "Crew certifications",
        desc: "Trakhees scaffolder cards. OSHA 30 Construction. NEBOSH IGC. CISRS. IPAF. First Aid. Working at Height. H2S. Verified per deployment.",
        icon: (
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7 L12 12 L15 14" />
            </svg>
        ),
    },
    {
        title: "Management systems",
        desc: "ISO 9001 quality, ISO 14001 environment, and ISO 45001 occupational health and safety systems aligned. EIAC-accredited certification roadmap underway.",
        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M3 7 L12 3 L21 7 L12 11 Z" />
                <path d="M3 12 L12 16 L21 12" />
                <path d="M3 17 L12 21 L21 17" />
            </svg>
        ),
    },
    {
        title: "Labour & payroll",
        desc: "WPS-compliant monthly payroll. Workmen's compensation. Public liability AED 5M+. UAE Labour Law (Federal Decree-Law 33/2021) compliance audited.",
        icon: (
            <svg viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="14" rx="1" />
                <path d="M3 10 L21 10" />
                <path d="M8 6 L8 3 M16 6 L16 3" />
            </svg>
        ),
    },
    {
        title: "Vendor readiness",
        desc: "Documentation packages prepared for SGB, Altrad Cape, Drydocks World, KHK, Layher referral network, and ADNOC JQS portal vendor pre-qualification.",
        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M4 20 L4 4" />
                <path d="M4 4 L14 4 L17 7 L14 10 L4 10" />
                <path d="M4 14 L18 14 L20 16 L18 18 L4 18" />
            </svg>
        ),
    },
];

const StandardsSection = () => {
    return (
        <section
            id="standards"
            className="py-[130px] px-8 bg-[var(--surface)]
      border-y border-white/10"
        >
            <div className="max-w-[1240px] mx-auto">

                {/* HEADER */}
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[80px] mb-[90px] items-end">

                    <div>
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-7 h-px bg-[var(--accent)]" />
                            <span className="text-[13px] tracking-[0.08em] text-accent font-mono uppercase">
                                Standards
                            </span>
                        </div>

                        <h2 className="font-display font-light text-[clamp(38px,5.2vw,76px)]
              leading-[1.02] tracking-[-0.03em] text-white">
                            The standard,<br />
                            <em className="text-[var(--accent)] italic font-normal">
                                sourced.
                            </em>
                        </h2>
                    </div>

                    <p className="text-[16px]  leading-[1.6] text-white/50 max-w-[460px] ml-auto max-lg:ml-0">
                        Every engagement runs under documented compliance. Our paperwork is the reason main contractors
                        and Tier 1 vendor compliance teams keep us on file.
                    </p>

                </div>

                {/* GRID */}
                <div
                    className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1
          bg-white/10 border border-white/10"
                >

                    {standards.map((item, i) => (
                        <div
                            key={i}
                            className="p-10 bg-[var(--surface)]
              hover:bg-[var(--surface-elev)]
              transition-all duration-300 border-[.5px] border-line"
                        >

                            {/* ICON */}
                            <div className="w-9 h-9 mb-6 text-[var(--accent)]">
                                {React.cloneElement(item.icon, {
                                    className: "w-full h-full stroke-current fill-none",
                                    style: { strokeWidth: 1.4 },
                                })}
                            </div>

                            {/* TITLE */}
                            <h4 className="font-display-text text-[22px] leading-[1.2]
                tracking-[-0.015em] text-white mb-3">
                                {item.title}
                            </h4>

                            {/* DESC */}
                            <p className="text-[14px] leading-[1.6] text-white/60">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default StandardsSection;