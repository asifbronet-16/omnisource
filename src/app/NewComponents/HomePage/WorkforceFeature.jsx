import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GUTTER } from '../../ReusableComponents/gutter';
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
    Quote,
} from 'lucide-react';

// Same number as the hero and the floating WhatsApp button.
const WHATSAPP_HREF = "https://wa.me/971503441039";

const metrics = [
    // `count` makes the number tick up when it scrolls into view.
    { icon: Users, value: "500+", count: 500, suffix: "+", label: "Skilled Professionals" },
    { icon: ShieldCheck, value: "100%", count: 100, suffix: "%", label: "Verified & Compliant" },
    { icon: Clock, value: "24/7", label: "Support & Assistance" },
    { icon: MapPin, value: "UAE Wide", label: "Workforce Coverage" },
];

const benefits = [
    { icon: Users, text: "Skilled & Verified Personnel" },
    { icon: Clock, text: "Fast Mobilisation" },
    { icon: Briefcase, text: "Flexible Workforce Solutions" },
    { icon: ShieldCheck, text: "Safety, Compliance & Reliability" },
    { icon: MapPin, text: "Ongoing Operational Support" },
];

const trustedBy = [
    { icon: HardHat, label: "Contractors" },
    { icon: Building2, label: "Developers" },
    { icon: Briefcase, label: "Facility Operators" },
    { icon: Factory, label: "Industrial Clients" },
];

const tile = "relative overflow-hidden rounded-3xl border border-[#E22E33]/15";

/*
  Bento layout. Same content and photos as before, arranged as tiles:
  the engineer photo with the main promise, four stat tiles, a red quote
  tile, the night-site photo with the benefits, and a "Trusted By" tile.
  Animation hooks (data-reveal, data-zoom, data-count, data-tilt,
  data-magnetic, data-split, data-stagger) are handled by HomeMotion.
*/
export const WorkforceFeature = () => {
    return (
        <section className={`w-full bg-skin-background ${GUTTER} py-10 text-skin-light lg:py-16`}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">

                {/* ===== Promise: engineer photo, headline at the bottom ===== */}
                <div data-reveal="up" className={`${tile} min-h-[560px] lg:col-span-7 lg:row-span-2 lg:min-h-[640px]`}>
                    <div data-zoom className="absolute inset-0">
                        <Image
                            src="/assets/WorkforceFeature1.jpeg"
                            alt="OmniSource engineer on a UAE construction site"
                            fill
                            sizes="(min-width: 1024px) 58vw, 100vw"
                            className="object-cover object-[60%_30%]"
                        />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D0809] via-[#0D0809]/60 via-45% to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0D0809]/70 via-transparent to-transparent" />

                    <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-7 md:p-10">
                        <div className="w-fit rounded-full border border-white/15 bg-[#0D0809]/60 px-4 py-1.5 text-lg font-bold tracking-tight backdrop-blur-md">
                            <span className="text-white">Omni</span>
                            <span className="font-extrabold text-[#E22E33]">Source</span>
                        </div>

                        <div className="max-w-xl space-y-5">
                            <h2 data-split className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight text-white">
                                Workforce Solutions.<br />
                                Delivered with <span className="text-[#E22E33]">Certainty.</span>
                            </h2>
                            <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-300">
                                OmniSource provides premium workforce solutions across construction, MEP, facilities management and industrial operations.
                            </p>
                            <Link
                                href="/contact"
                                data-magnetic
                                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#E22E33] px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#E22E33]/25 sm:w-fit"
                            >
                                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-[#9F212B] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                                <span className="relative">Request Workforce</span>
                                <ArrowUpRight size={15} className="relative" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ===== Four stat tiles ===== */}
                <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:gap-5">
                    {metrics.map(({ icon: Icon, value, count, suffix, label }, i) => (
                        <div
                            key={label}
                            data-reveal="up"
                            data-reveal-delay={String(0.08 * i)}
                            data-tilt
                            className={`${tile} group flex flex-col justify-between gap-6 bg-linear-to-br from-[#1f080a] to-[#120405] p-5 md:p-6`}
                        >
                            {/* Red light that follows the pointer (set by HomeMotion) */}
                            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,50%),rgba(226,46,51,0.35),transparent_65%)]" />
                            <span className="relative w-fit rounded-xl border border-[#E22E33]/25 bg-[#E22E33]/10 p-2.5 text-[#E22E33]">
                                <Icon size={20} />
                            </span>
                            <div className="relative">
                                <div className="text-3xl md:text-4xl font-black tracking-tight text-white">
                                    {count ? (<><span data-count={count}>{count}</span>{suffix}</>) : value}
                                </div>
                                <div className="mt-1 text-xs md:text-sm font-semibold text-slate-400">{label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== Quote tile ===== */}
                <div data-reveal="up" data-reveal-delay="0.15" className={`${tile} flex flex-col justify-between gap-6 border-transparent bg-linear-to-br from-[#E22E33] to-[#9F212B] p-7 md:p-8 lg:col-span-5`}>
                    <Quote aria-hidden="true" size={120} strokeWidth={1} className="pointer-events-none absolute -right-4 -top-6 text-white/15" />
                    <span className="relative w-fit rounded-xl bg-white/15 p-2.5 text-white">
                        <Users size={18} />
                    </span>
                    <p className="relative text-lg md:text-2xl font-bold leading-snug tracking-tight text-white">
                        From a single professional to full-scale deployments, we ensure the right people, on time, every time.
                    </p>
                </div>

                {/* ===== Strengthening: night-site photo with the benefits ===== */}
                <div data-reveal="up" className={`${tile} min-h-[520px] lg:col-span-8 lg:min-h-[480px]`}>
                    <div data-zoom className="absolute inset-0">
                        <Image
                            src="/assets/WorkforceFeature2.jpeg"
                            alt="OmniSource team reviewing plans on a night-time construction site"
                            fill
                            sizes="(min-width: 1024px) 66vw, 100vw"
                            className="object-cover object-[40%_50%]"
                        />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D0809] via-[#0D0809]/85 to-[#0D0809]/30 md:bg-linear-to-r md:from-[#0D0809] md:from-25% md:via-[#0D0809]/75 md:via-50% md:to-transparent md:to-80%" />

                    <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end gap-6 p-7 md:max-w-[62%] md:justify-center md:p-10">
                        <div className="h-[2px] w-8 bg-[#E22E33]" />
                        <h3 className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-white">
                            Strengthening Your<br />
                            <span className="text-[#E22E33]">Workforce & Industry Impact</span>
                        </h3>
                        <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-300">
                            Whether you&apos;re building infrastructure or streamlining operations, we connect you with the manpower that drives growth.
                        </p>
                        <ul data-stagger className="grid gap-2.5 sm:grid-cols-2">
                            {benefits.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0D0809]/60 px-3 py-2.5 text-xs md:text-sm font-medium text-slate-200 backdrop-blur-sm">
                                    <span className="shrink-0 rounded-full border border-[#E22E33]/30 bg-[#E22E33]/10 p-1.5 text-[#E22E33]">
                                        <Icon size={14} />
                                    </span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-magnetic
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#E22E33]/60 bg-[#E22E33]/10 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#E22E33] sm:w-fit"
                        >
                            Speak With Our Team <ArrowUpRight size={15} />
                        </a>
                    </div>
                </div>

                {/* ===== Trusted By ===== */}
                <div data-reveal="up" data-reveal-delay="0.15" className={`${tile} flex flex-col justify-between gap-8 bg-linear-to-b from-[#1f080a] to-[#120405] p-7 md:p-8 lg:col-span-4`}>
                    <Image
                        src="/assets/icons/brand-icon.png"
                        alt=""
                        aria-hidden="true"
                        width={220}
                        height={220}
                        className="pointer-events-none absolute -right-10 -top-8 h-56 w-56 opacity-[0.08]"
                    />
                    <div className="relative">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">Trusted By</p>
                        <div className="mt-3 h-[2px] w-8 bg-[#E22E33]" />
                    </div>
                    <ul data-stagger className="relative space-y-3">
                        {trustedBy.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 hover:border-[#E22E33]/50 hover:bg-[#E22E33]/10"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E22E33]/15 text-[#E22E33]">
                                    <Icon size={18} />
                                </span>
                                <span className="text-sm md:text-base font-bold uppercase tracking-widest text-white">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
