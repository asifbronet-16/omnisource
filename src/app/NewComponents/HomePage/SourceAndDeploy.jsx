"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { UserSearch, ShieldCheck, HardHat, MapPin } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';
import { gsap, useGSAP, MOTION_OK } from './motion/gsap';

// The three stages the company manages, taken from its own description of the
// process (workforce planning and mobilization, screening and compliance,
// on-site deployment and after-placement support).
const steps = [
    {
        icon: UserSearch,
        title: "Source",
        text: "Workforce planning and candidate mobilization for every trade your project needs.",
    },
    {
        icon: ShieldCheck,
        title: "Screen",
        text: "Skills verified and documents checked: visas, Emirates ID, MOHRE contracts and WPS-registered salaries.",
    },
    {
        icon: HardHat,
        title: "Deploy",
        text: "On-site deployment and documentation, followed by ongoing compliance and after-placement support.",
    },
];

const sectors = ["Commercial", "Construction", "Facilities Management", "Retail", "Hospitality", "Industrial"];
const emirates = ["Dubai", "Sharjah", "Ajman", "Abu Dhabi"];

/*
  Who we are + how it works. The intro sits beside the photo; below it the
  Source -> Screen -> Deploy steps are joined by a line that draws as you
  scroll, lighting each step as it reaches it (horizontal on desktop,
  vertical on phones). With reduced motion the steps simply show lit.
*/
const SourceAndDeploy = () => {
    const root = useRef(null);

    useGSAP(() => {
        const q = gsap.utils.selector(root);
        const fills = q('[data-step-fill]');
        const markers = q('[data-step-marker]');
        const texts = q('[data-step-text]');

        const mm = gsap.matchMedia();
        mm.add({ motion: MOTION_OK, desktop: '(min-width: 1024px)' }, ({ conditions }) => {
            if (!conditions.motion) return;
            const { desktop } = conditions;
            const axis = desktop ? 'scaleX' : 'scaleY';

            gsap.set(fills, desktop ? { scaleX: 0, scaleY: 1 } : { scaleY: 0, scaleX: 1 });
            gsap.set(texts, { opacity: 0.3 });

            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: q('[data-steps]')[0],
                    start: 'top 80%',
                    end: desktop ? 'top 35%' : 'bottom 60%',
                    scrub: 0.6,
                },
            });
            markers.forEach((marker, i) => {
                tl.to(marker, { backgroundColor: '#E22E33', borderColor: '#E22E33', scale: 1.1, duration: 0.3 })
                  .to(texts[i], { opacity: 1, duration: 0.3 }, '<');
                if (fills[i]) tl.to(fills[i], { [axis]: 1, duration: 1 });
            });
        });
    }, { scope: root });

    return (
        <section ref={root} className="bg-skin-background text-skin-light py-20 px-6 md:px-20 font-public-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Intro beside the photo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image wipes up into view, then drifts as you scroll */}
                    <div data-clip className="relative h-[420px] lg:h-[600px] rounded-md overflow-hidden">
                        <div data-clip-img className="absolute inset-x-0 -top-[8%] h-[116%]">
                            <Image
                                src="/assets/magnific_change-the-uniform-and-he_2961257177.jpeg"
                                alt="OmniSource tradespeople on site"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0D0809]/60 via-transparent to-transparent" />
                        <div data-reveal="up" data-reveal-delay="0.9" className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/15 bg-[#0D0809]/60 px-4 py-2 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-skin-logo opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-skin-logo" />
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-widest text-white">Source · Screen · Deploy</span>
                        </div>
                    </div>

                    {/* Headline lights up word by word; one short paragraph; chips */}
                    <div className="flex flex-col gap-6">
                        <Badge text={"Bridging the Gap Between Skill and Demand"} />

                        <h2 data-scrub-words className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight">
                            We source, screen and deploy{" "}
                            <span className="text-skin-logo">verified, skilled & experienced</span>{" "}
                            trade labor
                        </h2>

                        <p data-reveal="up" className="text-base lg:text-lg text-slate-300 leading-relaxed">
                            OmniSource is a UAE-based workforce solutions company. Every engagement is
                            managed end-to-end, with a single point of accountability from first brief
                            to final handover, and we stay accountable for the people we place long
                            after the contract begins.
                        </p>

                        <div data-reveal="up" data-reveal-delay="0.1" className="flex flex-col gap-4">
                            <div>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Sectors we serve</p>
                                <ul className="flex flex-wrap gap-2">
                                    {sectors.map((s) => (
                                        <li key={s} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Across the UAE</p>
                                <ul className="flex flex-wrap gap-2">
                                    {emirates.map((e) => (
                                        <li key={e} className="flex items-center gap-1.5 rounded-full border border-[#E22E33]/40 bg-[#E22E33]/10 px-3 py-1.5 text-sm font-semibold text-skin-mutedLight">
                                            <MapPin size={14} className="text-skin-logo" />
                                            {e}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How it works: Source -> Screen -> Deploy */}
                <div data-steps className="mt-16 lg:mt-24">
                    <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
                        {steps.map(({ icon: Icon, title, text }, i) => (
                            <li key={title} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-6 lg:text-center">
                                {/* Connector to the next step: vertical on phones, horizontal on desktop */}
                                {i < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-7 top-14 h-[calc(100%-1rem)] w-px bg-white/10 lg:left-[calc(50%+1.75rem)] lg:top-7 lg:h-px lg:w-[calc(100%-1.5rem)]"
                                    >
                                        <span data-step-fill className="absolute inset-0 origin-top bg-skin-logo lg:origin-left" />
                                    </span>
                                )}
                                <span
                                    data-step-marker
                                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#160709] text-white"
                                >
                                    <Icon size={24} />
                                </span>
                                <div data-step-text>
                                    <span className="text-xs font-semibold tracking-[0.3em] text-skin-logo">{String(i + 1).padStart(2, '0')}</span>
                                    <h3 className="mt-1 text-2xl lg:text-3xl font-extrabold tracking-tight text-white">{title}</h3>
                                    <p className="mt-2 max-w-sm text-sm lg:text-base leading-relaxed text-slate-400">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default SourceAndDeploy;
