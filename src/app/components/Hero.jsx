export default function Hero() {
    return (
        <header className="min-h-screen relative overflow-hidden flex flex-col justify-between px-12 pt-[180px] pb-20 bg-transparent">

            {/* GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-[0.18] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
                    backgroundSize: "96px 96px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />

            {/* SVG DECORATION */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-50 pointer-events-none">
                <svg
                    viewBox="0 0 800 900"
                    preserveAspectRatio="xMidYMid slice"
                    className="w-full h-full"
                    style={{ stroke: "var(--accent)", strokeWidth: 0.5, fill: "none" }}
                >
                    <g opacity="0.7">
                        <line x1="100" y1="100" x2="700" y2="100" />
                        <line x1="100" y1="250" x2="700" y2="250" />
                        <line x1="100" y1="400" x2="700" y2="400" />
                        <line x1="100" y1="550" x2="700" y2="550" />
                        <line x1="100" y1="700" x2="700" y2="700" />

                        <line x1="200" y1="50" x2="200" y2="850" />
                        <line x1="400" y1="50" x2="400" y2="850" />
                        <line x1="600" y1="50" x2="600" y2="850" />

                        <line x1="200" y1="100" x2="400" y2="250" opacity="0.6" />
                        <line x1="400" y1="100" x2="200" y2="250" opacity="0.6" />
                        <line x1="400" y1="400" x2="600" y2="550" opacity="0.6" />
                        <line x1="600" y1="400" x2="400" y2="550" opacity="0.6" />
                        <line x1="200" y1="550" x2="400" y2="700" opacity="0.6" />
                        <line x1="400" y1="550" x2="200" y2="700" opacity="0.6" />

                        {[
                            [200, 100],
                            [400, 100],
                            [600, 100],
                            [200, 250],
                            [400, 250],
                            [600, 250],
                            [200, 400],
                            [400, 400],
                            [600, 400],
                            [200, 550],
                            [400, 550],
                            [600, 550],
                            [200, 700],
                            [400, 700],
                            [600, 700],
                        ].map(([cx, cy], i) => (
                            <circle
                                key={i}
                                cx={cx}
                                cy={cy}
                                r="3.5"
                                fill="var(--accent)"
                                stroke="none"
                            />
                        ))}
                    </g>
                </svg>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-[1240px] mx-auto w-full">

                {/* EYEBROW */}
                <div className="flex items-center gap-3 mb-14 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
                    <span className="w-7 h-px bg-accent" />
                    <span className="text-xs tracking-wider text-accent font-mono uppercase">
                        Specialist Subcontracting · UAE
                    </span>
                </div>

                {/* TITLE */}
                <h1 className="font-display font-light leading-[0.96] tracking-[-0.035em]
          text-[clamp(54px,9.5vw,148px)]
          mb-9 opacity-0 animate-[fadeUp_0.9s_ease_0.25s_forwards]">

                    The best crew.
                    <span className="block italic font-normal text-[var(--accent)] pl-[0.4em]">
                        At your service.
                    </span>
                </h1>

                {/* SUBTEXT */}
                <p className="max-w-[600px] text-[17.5px] leading-[1.55] text-white/60 mb-12
          opacity-0 animate-[fadeUp_0.9s_ease_0.4s_forwards] " >
                    Omni Source supplies certified crews and equipment to contractors and facility operators
                    across the United Arab Emirates — for cleaning, electromechanical, HVAC, building maintenance,
                    and scaffolding works.
                </p>

                {/* ACTIONS */}
                <div className="flex gap-3 flex-wrap opacity-0 animate-[fadeUp_0.9s_ease_0.55s_forwards]">

                    {/* PRIMARY BUTTON */}
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-[10px]
                            px-5 py-[11px]
                            border border-[var(--accent)]
                            bg-[var(--accent)]
                            text-[var(--bg)]
                            text-[13px] font-semibold tracking-[0.02em]
                            transition-all duration-200 hover:bg-transparent hover:text-[var(--accent)]"
                    >
                        Request a crew

                        {/* ARROW */}
                        <span className="relative inline-block w-[14px] h-px bg-current transition-all duration-200 group-hover:w-[18px]">
                            <span
                                className="absolute right-0 top-[-3px] w-[7px] h-[7px]
                                border-t border-r border-current rotate-45"
                            />
                        </span>
                    </a>

                    {/* GHOST BUTTON */}
                    <a
                        href="#services"
                        className="group inline-flex items-center gap-[10px]
                        px-5 py-[11px]
                        border border-[var(--line-bright)]
                        bg-transparent
                        text-[var(--text)]
                        text-[13px] font-semibold tracking-[0.02em]
                        transition-all duration-200
                        hover:border-[var(--text)] hover:text-[var(--text)]"
                    >
                        Explore services

                        {/* ARROW */}
                        <span className="relative inline-block w-[14px] h-px bg-current transition-all duration-200 group-hover:w-[18px]">
                            <span
                                className="absolute right-0 top-[-3px] w-[7px] h-[7px]
                                border-t border-r border-current rotate-45"
                            />
                        </span>
                    </a>

                </div>
            </div>

            {/* METRICS */}
            <div className="relative z-10 max-w-[1240px] mx-auto w-full mt-[130px]
                grid grid-cols-4 border-t border-white/10 pt-10
                opacity-0 animate-[fadeUp_0.9s_ease_0.7s_forwards]">
                {[
                    {
                        num: "5·",
                        desc: "Trade verticals from one source — scaffolding, MEP, HVAC, building maintenance, cleaning.",
                    },
                    {
                        num: "7·",
                        desc: "Days standard mobilisation. Faster on framework agreements.",
                    },
                    {
                        num: "7·",
                        desc: "Emirates served. Single point of contact across the UAE.",
                    },
                    {
                        num: "4390008",
                        desc: "DET activity — Scaffolding Erecting & Dismantling Contracting.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className={`pr-7 ${i !== 3 ? "border-r border-white/10" : ""}`}
                    >
                        <div className="font-display font-light text-[clamp(32px,4vw,52px)] leading-none text-white mb-2">
                            {item.num}
                            <em className="text-[var(--accent)] font-normal italic"> </em>
                        </div>
                        <div className="text-[12.5px] leading-[1.5] text-white/60">
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>
        </header>
    );
}