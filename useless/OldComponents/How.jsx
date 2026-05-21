import React from "react";

const steps = [
    {
        num: "Step 01",
        title: "Brief us",
        desc: "Send the scope, the site, the duration, and the trade. We confirm crew availability, equipment scope, and rate within 24 hours.",
    },
    {
        num: "Step 02",
        title: "Subcontract",
        desc: "We issue a defined work-package subcontract under DET activity 4390008. Method statement annex confirms adoption of your project safety framework.",
    },
    {
        num: "Step 03",
        title: "Execute",
        desc: "Crew mobilised within 7 days. Our supervisor on site every working day. Daily timesheets and weekly inspection logs filed with your team.",
    },
    {
        num: "Step 04",
        title: "Demobilise",
        desc: "Site handover, documentation closed, scope-based invoice issued under the subcontract reference. Standard payment terms 30 to 60 days.",
    },
];

const HowSection = () => {
    return (
        <section
            id="how"
            className="relative bg-[var(--warm)] border-y border-white/10 overflow-hidden px-8"
        >
            {/* GLOW */}
            <div
                className="absolute top-0 right-0 w-[380px] h-[380px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                }}
            />

            <div className="">
                <div className="max-w-[1240px] mx-auto">

                    {/* SECTION HEAD */}
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[80px] mb-[90px] items-end">

                        <div>
                            {/* EYEBROW */}
                            <div className="flex items-center gap-3 mb-7">
                                <span className="w-7 h-px bg-[var(--accent)]" />
                                <span className="text-[13px] text-accent font-mono uppercase tracking-[0.05em]">
                                    Engagement
                                </span>
                            </div>

                            <h2 className="display font-display font-light leading-[1.02]
                                tracking-[0.03em]
                                text-[clamp(38px,5.8vw,80px)] text-skin-light">
                                How we<br />
                                <em className="text-[var(--accent)] italic font-normal">
                                    work with you.
                                </em>
                            </h2>
                        </div>

                        <p className="text-[16px] leading-[1.6] text-skin-light/60 max-w-[460px] ml-auto max-lg:ml-0">
                            A structured four-step engagement designed for principal subcontractors and main contractors
                            who need execution capacity without onboarding overhead. Compliant with UAE labour and contracting
                            frameworks from day one.
                        </p>

                    </div>

                    {/* STEPS */}
                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 border-t border-white/10">

                        {steps.map((s, i) => (
                            <div
                                key={i}
                                className={`relative px-8 py-[44px] max-lg:px-6
                ${i !== 0 ? "border-l border-white/10" : ""}`}
                            >

                                {/* STEP HEADER */}
                                <div className="flex items-center gap-3 mb-9 text-[11px] font-mono tracking-[0.18em] text-[var(--accent)]">
                                    <span>{s.num}</span>
                                    <span className="flex-1 h-px bg-white/10" />
                                </div>

                                {/* TITLE */}
                                <h3 className="font-display text-[26px] leading-[1.15]
                  tracking-[-0.015em] text-skin-light mb-4">
                                    {s.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-[14.5px] leading-[1.6] text-skin-light/60">
                                    {s.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowSection;