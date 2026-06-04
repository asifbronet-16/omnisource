import React from 'react';
import {
    Users,
    ShieldCheck,
    Clock,
    MapPin,
    ArrowUpRight,
    Briefcase,
    Building2,
    Factory,
    HardHat,
    Smartphone, // Dynamic replacement helper if needed
} from 'lucide-react';

export const WorkforceFeature = () => {
    // Metrics Grid (Left Card Bottom)
    const metrics = [
        { icon: <Users size={20} />, value: "500+", label: "Skilled Professionals" },
        { icon: <ShieldCheck size={20} />, value: "100%", label: "Verified & Compliant" },
        { icon: <Clock size={20} />, value: "24/7", label: "Support & Assistance" },
        { icon: <MapPin size={20} />, value: "UAE Wide", label: "Workforce Coverage" },
    ];

    // List Items (Right Card) - Circular themed outline icons
    const benefits = [
        { icon: <Users size={14} />, text: "Skilled & Verified Personnel" },
        { icon: <Clock size={14} />, text: "Fast Mobilisation" },
        { icon: <Briefcase size={14} />, text: "Flexible Workforce Solutions" },
        { icon: <ShieldCheck size={14} />, text: "Safety, Compliance & Reliability" },
        { icon: <MapPin size={14} />, text: "Ongoing Operational Support" }
    ];

    return (
        <div className="w-full  bg-skin-background text-skin-light p-4 md:p-8 flex flex-col justify-between font-sans lg:px-24">
            {/* 2-Column Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-8xl w-full mx-auto flex-grow items-stretch mb-10">

                {/* ================= LEFT CARD ================= */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-800/50 bg-[#070d1e] p-8 md:p-12 flex flex-col justify-between shadow-2xl">
                    {/* Background image overlay - Fixed size unit and applied clean right-side framing */}
                    <div
                        className="absolute inset-0 bg-no-repeat opacity-90 pointer-events-none bg-[35%]"
                        style={{ backgroundImage: `url('/assets/WorkforceFeature1.jpeg')` }}
                    />

                    {/* Clean gradient fallback to ensure text legibility over darker image assets */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0f1d42] via-[#0f1d42]/90 to-transparent pointer-events-none" />

                    {/* Top text content cluster */}
                    <div className="relative z-10 space-y-6 max-w-xl">
                        {/* Logo placeholder matching layout */}
                        <div className="flex items-center text-2xl font-bold tracking-tight">
                            <span className="text-white">Omni</span>
                            <span className="text-blue-500 font-extrabold">Source</span>
                        </div>

                        {/* Standardized Heading Spacing */}
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.15] text-white">
                            Workforce Solutions.<br />
                            Delivered with{" "}
                            <span className="text-blue-500">Certainty.</span>
                        </h2>

                        <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
                            OmniSource provides premium workforce solutions across construction, MEP, facilities management and industrial operations.
                        </p>

                        {/* Sub-badge descriptor row */}
                        <div className="flex items-start gap-3 bg-slate-950/40 border border-slate-800/40 p-3.5 rounded-xl max-w-md backdrop-blur-sm">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                                <Users size={16} />
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 leading-normal">
                                From a single professional to full-scale deployments, we ensure the right people, on time, every time.
                            </p>
                        </div>
                    </div>

                    {/* Metrics grids matching the bottom boxes */}
                    <div className="relative z-10 mt-12 space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {metrics.map((m, idx) => (
                                <div key={idx} className="bg-slate-950/40 border border-slate-800/40 p-4 rounded-xl text-center flex flex-col items-center justify-center backdrop-blur-sm">
                                    <div className="text-blue-500/80 mb-2 p-1.5 bg-blue-500/5 rounded-md border border-blue-500/10">{m.icon}</div>
                                    <div className="text-xl font-black tracking-tight text-white">{m.value}</div>
                                    <div className="text-[10px] md:text-xs text-slate-400 font-semibold mt-1 leading-tight">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] transition-all px-6 py-3 rounded-lg text-sm font-bold tracking-wide w-full sm:w-fit justify-center shadow-lg shadow-blue-600/10">
                            Request Workforce <ArrowUpRight size={15} />
                        </button>
                    </div>
                </div>

                {/* ================= RIGHT CARD ================= */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-800/50 bg-[#040814] p-6 md:p-8 flex flex-col justify-center items-start shadow-2xl">
                    {/* Construction crane motif background */}
                    <div
                       className="absolute inset-0 bg-no-repeat opacity-90 pointer-events-none bg-[25%]"
                        style={{ backgroundImage: `url('/assets/WorkforceFeature2.jpeg')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0f1d42] via-[#0f1d42]/90 to-transparent pointer-events-none" />

                    {/* Dark Glassmorphism container layer */}
                    <div className="relative z-10 max-w-lg  bg-slate-950/60 backdrop-blur-md border border-slate-800/40 p-6 md:p-8 rounded-2xl shadow-2xl space-y-6 border-l-blue-500/20 md:w-[60%] ">

                        {/* Top decorative accent bar */}
                        <div className="w-6 h-[2px] bg-blue-500" />

                        <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-snug text-white">
                            Strengthening Your<br />
                            <span className="text-blue-500">Workforce & Industry Impact</span>
                        </h3>

                        <p className="text-sm text-slate-400 leading-relaxed">
                            Whether you're building infrastructure or streamlining operations, we connect you with the manpower that drives growth.
                        </p>

                        {/* List entries with circular icons matching image_e7f53f.png */}
                        <ul className="space-y-3.5 pt-1">
                            {benefits.map((b, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-slate-300 font-medium">
                                    <div className="p-1.5 rounded-full border border-blue-500/30 bg-blue-950/50 text-blue-400 shrink-0">
                                        {b.icon}
                                    </div>
                                    {b.text}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] transition-all px-6 py-3 rounded-lg text-sm font-bold tracking-wide w-full sm:w-fit justify-center shadow-lg shadow-blue-600/10">
                                Speak With Our Team <ArrowUpRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* ================= TRUSTED BY FIXED FOOTER ================= */}
            <div className="w-full max-w-7xl mx-auto border-t border-slate-900 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-[11px] font-bold text-slate-500 tracking-widest uppercase select-none py-8">
                <span className="text-slate-400">Trusted By</span>

                <div className="hidden md:block h-3 w-[1px] bg-slate-800 mx-2" />

                {/* Layout items broken up with visual pipeline separators */}
                <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-4">
                    <div className="flex items-center gap-2 text-slate-400">
                        <HardHat size={14} className="text-slate-600" /> <span>Contractors</span>
                    </div>
                    <span className="text-slate-800 font-normal">|</span>

                    <div className="flex items-center gap-2 text-slate-400">
                        <Building2 size={14} className="text-slate-600" /> <span>Developers</span>
                    </div>
                    <span className="text-slate-800 font-normal">|</span>

                    <div className="flex items-center gap-2 text-slate-400">
                        <Briefcase size={14} className="text-slate-600" /> <span>Facility Operators</span>
                    </div>
                    <span className="text-slate-800 font-normal">|</span>

                    <div className="flex items-center gap-2 text-slate-400">
                        <Factory size={14} className="text-slate-600" /> <span>Industrial Clients</span>
                    </div>
                </div>
            </div>
        </div>
    );
};