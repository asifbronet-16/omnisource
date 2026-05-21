import React from "react";

const CTASection = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden py-[160px] px-10 bg-[var(--bg)]"
        >

            {/* GLOW */}
            <div
                className="absolute left-1/2 top-1/2 w-[800px] h-[800px]
        -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, var(--accent-glow), transparent 65%)",
                }}
            />

            {/* CONTENT */}
            <div className="relative max-w-[980px] mx-auto text-center">

                {/* EYEBROW */}
                <div className="inline-flex items-center justify-center gap-3 mb-7">
                    <span className="w-7 h-px bg-[var(--accent)]" />

                    <span className="text-[13px] tracking-[0.08em] text-accent font-mono uppercase">
                        Get in touch
                    </span>
                </div>

                {/* TITLE */}
                <h2
                    className="font-display font-light
          text-[clamp(40px,6.4vw,92px)]
          leading-[1.02]
          tracking-[-0.035em]
          text-skin-light
          mb-7"
                >
                    Need crew
                    <br />
                    on site{" "}
                    <em className="italic font-normal text-[var(--accent)]">
                        this week?
                    </em>
                </h2>

                {/* TEXT */}
                <p
                    className="max-w-[560px] mx-auto mb-11
          text-[16.5px] leading-[1.6] text-skin-light/60"
                >
                    Tell us the trade, the site, and the duration. We will confirm
                    availability, scope, and rate within 24 hours.
                </p>

                {/* ACTIONS */}
                <div className="flex flex-wrap justify-center gap-3">

                    {/* PRIMARY BUTTON */}
                    <a
                        href="mailto:contact@omnisource.ae"
                        className="group inline-flex items-center gap-[10px]
            px-5 py-[11px]
            border border-[var(--accent)]
            bg-[var(--accent)]
            text-[var(--bg)]
            text-[13px] font-semibold tracking-[0.02em]
            transition-all duration-200
            hover:bg-transparent hover:text-[var(--accent)]"
                    >
                        Request a crew

                        {/* ARROW */}
                        <span
                            className="relative inline-block w-[14px] h-px bg-current
              transition-all duration-200 group-hover:w-[18px]"
                        >
                            <span
                                className="absolute right-0 top-[-3px]
                w-[7px] h-[7px]
                border-t border-r border-current rotate-45"
                            />
                        </span>
                    </a>

                    {/* GHOST BUTTON */}
                    <a
                        href="tel:+97140000000"
                        className="group inline-flex items-center gap-[10px]
            px-5 py-[11px]
            border border-white/10
            bg-transparent
            text-skin-light
            text-[13px] font-semibold tracking-[0.02em]
            transition-all duration-200
            hover:border-white hover:text-skin-light"
                    >
                        Call operations

                        {/* ARROW */}
                        <span
                            className="relative inline-block w-[14px] h-px bg-current
              transition-all duration-200 group-hover:w-[18px]"
                        >
                            <span
                                className="absolute right-0 top-[-3px]
                w-[7px] h-[7px]
                border-t border-r border-current rotate-45"
                            />
                        </span>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default CTASection;