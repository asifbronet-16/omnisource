import React from "react";

const trades = [
    "Scaffolder",
    "Foreman",
    "Charge-hand",
    "Site Supervisor",
    "Scaffold Inspector",
    "MEP Technician",
    "Electrician",
    "Plumber",
    "Pipefitter",
    "HVAC Technician",
    "Duct Fitter",
    "Insulator",
    "Welder",
    "Mason",
    "Carpenter",
    "Painter",
    "Steel Fixer",
    "Rigger",
    "Cleaner",
    "Janitor",
    "Façade Cleaner",
    "Site Safety Officer",
    "QA / QC",
    "Helper",
];

const TradesSection = () => {
    return (
        <section
            id="trades"
            className="py-[140px] px-8 bg-[var(--bg)] relative"
        >
            <div className="max-w-[1240px] mx-auto">

                {/* SECTION HEAD */}
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[80px] mb-24 items-end">

                    <div>
                        {/* EYEBROW */}
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-7 h-px bg-[var(--accent)]" />
                            <span className="text-[13px] text-accent tracking-[0.08em] font-mono uppercase">
                                Positions Supplied
                            </span>
                        </div>

                        <h2 className="font-display font-light leading-[1.02]
                            tracking-[-0.03em]
                            text-[clamp(38px,5.2vw,88px)] text-white">
                            Every trade.<br />
                            <em className="text-[var(--accent)] italic font-normal">
                                Every certification.
                            </em>
                        </h2>
                    </div>

                    <p className="text-[16px] leading-[1.6] text-white/60 max-w-[460px] ml-auto max-lg:ml-0">
                        From a single helper to a sixty-strong shutdown crew — every position is sourced, certified,
                        and deployed under our supervision. Trakhees, OSHA, NEBOSH, CISRS, IPAF and EIAC-aligned
                        wherever scope demands.
                    </p>

                </div>

                {/* CHIPS */}
                <div className="flex flex-wrap gap-3 mt-6">

                    {trades.map((trade) => (
                        <div
                            key={trade}
                            className="group inline-flex items-center gap-2
                                px-5 py-[13px]
                                border border-white/10
                                bg-[var(--surface)]
                                text-[14px] font-medium tracking-[0.005em]
                                rounded-full cursor-pointer
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:border-[var(--accent)]
                                hover:bg-[var(--surface-elev)]
                                hover:text-[var(--accent)]"
                        >
                            {/* DOT */}
                            <span
                                className="w-[6px] h-[6px] rounded-full bg-[var(--accent-deep)]
                                group-hover:bg-[var(--accent)] transition-colors"
                            />

                            {trade}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TradesSection;