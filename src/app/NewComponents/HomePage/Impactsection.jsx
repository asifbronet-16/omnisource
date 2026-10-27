"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Badge from '../../ReusableComponents/Badge';
import { gsap, useGSAP, MOTION_OK } from './motion/gsap';

const sectors = [
    {
        title: "Civil Construction",
        description: "WPS-compliant, mobilization-ready manpower including certified scaffolders, masons, foremen, and support crews for infrastructure and fit-out contractors.",
        img: "/assets/icons/g2289.png.webp",
    },
    {
        title: "MEP Services",
        description: "Comprehensive technical workforces covering commercial and industrial electricians, HVAC technicians, pipe fitters, and specialized MEP supervisors.",
        img: "/assets/icons/g15-1.png.webp",
    },
    {
        title: "Machinery & Equipment Rental",
        description: "Flexible, dependable fleet rental options including wheel loaders, excavators, dump trucks, cranes, and access solutions across all project scopes.",
        img: "/assets/icons/Group.png.webp",
    },
    {
        title: "Facilities & Cleaning Staffing",
        description: "Trained corporate and site personnel from general janitors and housekeeping attendants to highly specialized rope-access facade cleaners.",
        img: "/assets/icons/Group-1.png.webp",
    },
    {
        title: "Manufacturing & Industrial",
        description: "Skilled production-ready manpower including machine operators, assembly line workers, quality control inspectors, warehouse staff, and shift supervisors for factories, plants, and industrial facilities across all manufacturing sectors.",
        img: "/assets/icons/Group.png.webp",
    }
];

const COUNT = sectors.length;
const pad = (n) => String(n).padStart(2, '0');

// Where each card lands on the pile, relative to the pile's centre:
// x/y in px, r in degrees. Later cards land on top.
const SPOTS = {
    desktop: [
        { x: -150, y: -40, r: -9 },
        { x: 125, y: -70, r: 7 },
        { x: -60, y: 35, r: -3 },
        { x: 150, y: 45, r: 10 },
        { x: 15, y: 10, r: -4 },
    ],
    mobile: [
        { x: -28, y: -18, r: -7 },
        { x: 30, y: -26, r: 6 },
        { x: -18, y: 8, r: -3 },
        { x: 26, y: 16, r: 8 },
        { x: 0, y: 6, r: -2 },
    ],
};

/*
  Industries We Power: a pile of sector cards. The first card lands while the
  section scrolls into view, then the section pins and each scroll step
  throws the next card in from below, spinning, until it settles at its own
  slightly rotated spot on top of the pile.

  The pile layout only exists while the animation runs (the "is-pile" class).
  Without it (reduced motion, or before JavaScript) the cards are a plain,
  fully readable grid.
*/
const ImpactSection = () => {
    const root = useRef(null);
    const [top, setTop] = useState(0);

    useGSAP(() => {
        const section = root.current;
        const cards = gsap.utils.toArray('[data-industry-card]', section);
        const mm = gsap.matchMedia();

        mm.add({ motion: MOTION_OK, desktop: '(min-width: 1024px)' }, ({ conditions }) => {
            if (!conditions.motion) return;
            section.classList.add('is-pile');
            setTop(0);

            const spots = conditions.desktop ? SPOTS.desktop : SPOTS.mobile;
            const swing = conditions.desktop ? 260 : 120;
            gsap.set(cards, { xPercent: -50, yPercent: -50 });

            // Each card starts below the screen, off to one side and spun.
            const flyIn = (card, i) => {
                const spot = spots[i % spots.length];
                const side = i % 2 ? 1 : -1;
                return gsap.fromTo(card,
                    { x: spot.x + side * swing, y: () => window.innerHeight * 0.95, rotation: spot.r + side * 28, scale: 1.06 },
                    { x: spot.x, y: spot.y, rotation: spot.r, scale: 1, ease: 'power3.out', duration: 1, immediateRender: true });
            };

            // First card lands while the section scrolls up into view.
            gsap.timeline({
                scrollTrigger: { trigger: section, start: 'top 75%', end: 'top top', scrub: 1, invalidateOnRefresh: true },
            }).add(flyIn(cards[0], 0));

            // The rest land one per scroll step while the section is pinned.
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: `+=${(COUNT - 1) * 70}%`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => setTop(Math.round(self.progress * (COUNT - 1))),
                },
            });
            cards.slice(1).forEach((card, k) => tl.add(flyIn(card, k + 1), k));

            return () => section.classList.remove('is-pile');
        });
    }, { scope: root });

    return (
        // Plain wrapper: ScrollTrigger turns off pin spacing when the pinned
        // element's parent is flex (the body is).
        <div>
            <section
                ref={root}
                className="relative isolate w-full overflow-clip bg-skin-background font-public-sans [&.is-pile]:h-svh"
            >
                {/* Brand gradient backdrop */}
                <div aria-hidden="true" className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-primary" />
                    <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#E22E33]/20 blur-[120px]" />
                    <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#9F212B]/25 blur-[140px]" />
                </div>

                <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 lg:flex-row lg:items-start lg:gap-12 [.is-pile_&]:items-center [.is-pile_&]:h-full [.is-pile_&]:gap-4 [.is-pile_&]:pt-24 [.is-pile_&]:pb-8 lg:[.is-pile_&]:py-0">

                    {/* Heading + progress */}
                    <div className="w-full text-center lg:sticky lg:top-28 lg:w-5/12 lg:text-left [.is-pile_&]:static [.is-pile_&]:shrink-0">
                        <div className="flex items-center justify-center lg:justify-start">
                            <Badge text={"Real People. Real Results. Real Difference."} />
                        </div>
                        <h2 data-split className="text-4xl md:text-6xl font-extrabold text-skin-light tracking-tight">
                            Industries <span className="text-skin-logo">We Power</span>
                        </h2>

                        {/* Only shown while the pile is animating */}
                        <div className="mt-6 hidden flex-col items-center gap-3 lg:mt-10 lg:items-start [.is-pile_&]:flex">
                            <div className="flex items-baseline gap-2 font-extrabold text-white">
                                <span className="text-3xl lg:text-5xl tabular-nums">{pad(top + 1)}</span>
                                <span className="text-sm text-slate-400">/ {pad(COUNT)}</span>
                            </div>
                            <p className="hidden text-xl font-bold text-skin-mutedLight lg:block">{sectors[top].title}</p>
                            <div className="flex gap-1.5">
                                {sectors.map((s, i) => (
                                    <span
                                        key={s.title}
                                        className={`h-1 rounded-full transition-all duration-500 ${i <= top ? 'w-8 bg-skin-logo' : 'w-4 bg-white/20'}`}
                                    />
                                ))}
                            </div>
                            <span className="hidden text-[11px] uppercase tracking-[0.3em] text-slate-400 lg:block">Scroll to stack</span>
                        </div>
                    </div>

                    {/* The pile (a grid when not animating) */}
                    <div className="grid w-full justify-items-center gap-6 sm:grid-cols-2 lg:w-7/12 [.is-pile_&]:relative [.is-pile_&]:block [.is-pile_&]:min-h-0 [.is-pile_&]:flex-1 lg:[.is-pile_&]:h-full">
                        {sectors.map((sector) => (
                            <article
                                key={sector.title}
                                data-industry-card
                                data-tilt
                                className="group relative flex w-[270px] flex-col items-center pt-8 text-center sm:w-[300px] lg:w-[360px] [.is-pile_&]:absolute [.is-pile_&]:left-1/2 [.is-pile_&]:top-1/2"
                            >
                                {/* Icon badge floating over the top edge */}
                                <div className="absolute left-1/2 top-0 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-lg shadow-skin-logo ring-4 ring-[#2b0d10] transition-all duration-300 group-hover:-translate-y-1">
                                    <Image
                                        src={sector.img}
                                        width={36}
                                        height={36}
                                        alt={sector.title}
                                        className="object-contain grayscale-0 brightness-100 sepia-[1] hue-rotate-315 saturate-500 transition-all duration-300 hover:saturate-700"
                                    />
                                </div>

                                {/* Thin white frame around the card */}
                                <div className="relative z-10 flex w-full flex-1 rounded-[1.4rem] bg-[#f7f4f2] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
                                    {/* Card body. Solid (not see-through like before) so
                                        stacked cards do not show through each other. */}
                                    <div className="relative flex min-h-[230px] w-full flex-col items-center justify-start overflow-hidden rounded-2xl border border-skin-badgeBorder bg-linear-to-b from-[#2b0d10] to-[#150406] p-6 pt-12 transition-colors duration-300 group-hover:border-skin-borderHover lg:min-h-[250px]">
                                        {/* Red light that follows the pointer (position set by
                                            HomeMotion's data-tilt handler, along with the tilt) */}
                                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgba(226,46,51,0.42),transparent_65%)]" />
                                        <h3 className="relative mb-3 text-base md:text-xl font-bold tracking-tight text-skin-light transition-colors duration-300 group-hover:text-skin-logoHover">
                                            {sector.title}
                                        </h3>
                                        <p className="relative w-full px-2 text-xs md:text-sm leading-relaxed text-slate-400">
                                            {sector.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImpactSection;
