import React from "react";

const TrustStrip = () => {
    return (
        <section className="px-8 py-[38px] border-y border-white/10 bg-black/20">
            <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-y-6 gap-x-9 text-[12.5px] text-skin-light/60">

                {/* LABEL */}
                <span className="text-[var(--accent)] font-medium">
                    Compliant with
                </span>

                {/* LIST */}
                <ul className="flex flex-wrap gap-x-6 gap-y-3 list-none">
                    {[
                        "Dubai Municipality COP Ch. 8",
                        "OSHAD COP 26",
                        "Trakhees Construction Safety §9",
                        "BS EN 12810/11",
                        "ISO 45001 systems",
                    ].map((item) => (
                        <li key={item} className="relative pl-5">
                            {/* diamond bullet */}
                            <span
                                className="absolute left-0 top-1/2 -translate-y-1/2 rotate-45
                w-2 h-2 border border-[var(--accent)]"
                            />
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default TrustStrip;