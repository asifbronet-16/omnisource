"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import Badge from '../../ReusableComponents/Badge';
import { GUTTER } from '../../ReusableComponents/gutter';
import { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP, MOTION_OK } from './motion/gsap';

const services = [
    {
        id: "civil-construction",
        name: "Civil Construction",
        title: "Civil Construction Workforce Solutions",
        roles: "Scaffolders · Masons · Foremen",
        desc: "We supply WPS-compliant, mobilization-ready civil crews, including certified scaffolders, masons, foremen, civil helpers, and site support crews for UAE infrastructure projects.",
        image: "/assets/01 copy.webp",
    },
    {
        id: "mep",
        name: "MEP Services",
        title: "MEP Workforce Solutions",
        roles: "Electricians · HVAC · Pipe Fitters",
        desc: "Comprehensive MEP workforce solutions spanning industrial and commercial electricians, HVAC and A/C technicians, duct installers, pipe fitters, mechanical helpers, and MEP supervisors.",
        image: "/assets/construction-workers-inspecting-hvac-installation-commercial-building.jpg.jpeg",
    },
    {
        id: "cleaning",
        name: "Cleaning",
        title: "Cleaning Workforce Solutions",
        roles: "Cleaners · Rope Access · Polishing",
        desc: "Trained and screened personnel across unskilled, semi-skilled, and skilled cleaning roles—ranging from general cleaners and janitors to rope access facade cleaners and marble polishing technicians.",
        image: "/assets/Cleaning.webp",
    },
    {
        id: "machinery-rental",
        name: "Machinery Rental",
        title: "Machinery & Equipment Rental",
        roles: "Loaders · Cranes · Forklifts",
        desc: "Dependable, flexible rental options supporting all construction and industrial scopes. Our fleet includes wheel loaders, mini excavators, dump trucks, terrain cranes, forklifts, and boom/spider lifts.",
        image: "/assets/magnific_change-the-uniform-and-he_2967867875.webp",
    }
];

const COUNT = services.length;
const LAST = COUNT - 1;
// Scroll distance each service owns while the stage is pinned (% of viewport).
const STEP = 80;
const pad = (n) => String(n).padStart(2, '0');
// Layers other than the first start hidden so the server-rendered page shows
// one clean card before GSAP takes over their visibility.
const hiddenUnlessFirst = (i) => (i === 0 ? '' : 'opacity-0 invisible');

// Smoothed scale setter. gsap.quickTo cannot drive the "scale" shorthand,
// so scaleX and scaleY get one each.
const zoomTo = (el) => {
    const x = gsap.quickTo(el, 'scaleX', { duration: 0.6, ease: 'power3' });
    const y = gsap.quickTo(el, 'scaleY', { duration: 0.6, ease: 'power3' });
    return (value) => {
        x(value);
        y(value);
    };
};

/*
  Services showcase. The stage pins and each service owns an equal slice of
  the scroll (STEP% of the viewport).
  Each step swaps the main card: the photo wipes in (from below going down,
  from above going up) while the old one drifts away, the title rolls over
  word by word, and the matching names on both sides light up. Names are
  clickable and scroll to their step. With reduced motion there is no pin;
  the names simply switch the card.
*/
export default function WorkforceServices() {
    const root = useRef(null);
    const controls = useRef(null);
    const lenisRef = useRef(null);
    const [active, setActive] = useState(0);
    const lenis = useLenis();

    useEffect(() => {
        lenisRef.current = lenis;
    }, [lenis]);

    useGSAP(() => {
        const q = gsap.utils.selector(root);
        const backgrounds = q('[data-svc-bg]');
        const photos = q('[data-svc-photo]');
        const titles = q('[data-svc-title]');
        const descs = q('[data-svc-desc]');
        const backdropZooms = q('[data-svc-bg-zoom]');
        const photoZooms = q('[data-svc-photo-zoom]');
        const words = titles.map((t) => SplitText.create(t, { type: 'words', mask: 'words' }).words);
        const ease = CustomEase.create('svcEase', 'M0,0 C0.86,0 0.07,1 1,1');

        const mm = gsap.matchMedia();
        // Both queries listed so this runs either way: matchMedia only calls
        // the setup when at least one condition matches.
        mm.add({ motion: MOTION_OK, reduced: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
            const { motion } = conditions;
            const D = motion ? 0.9 : 0;
            const each = motion ? 0.04 : 0;
            let current = 0;
            let target = 0;
            let busy = false;

            // ---- Starting state: first service showing ----------------------
            setActive(0);
            gsap.set([...backgrounds, ...photos], { autoAlpha: 0, zIndex: 0 });
            gsap.set([backgrounds[0], photos[0]], { autoAlpha: 1, zIndex: 2 });
            gsap.set([...titles, ...descs], { autoAlpha: 0 });
            gsap.set([titles[0], descs[0]], { autoAlpha: 1 });
            words.forEach((w, i) => gsap.set(w, { yPercent: i === 0 ? 0 : 100 }));

            // ---- One step from the current service to `next` ----------------
            const show = (next) => {
                const prev = current;
                const down = next > prev;
                current = next;
                busy = true;
                setActive(next);

                const tl = gsap.timeline({
                    defaults: { ease, duration: D },
                    onComplete: () => {
                        busy = false;
                        sync();
                    },
                });

                // Photos: new one wipes over the old, which drifts and drops out.
                [[backgrounds, 6], [photos, 8]].forEach(([layers, drift]) => {
                    layers.forEach((layer, i) => {
                        if (i !== next && i !== prev) gsap.set(layer, { autoAlpha: 0, zIndex: 0 });
                    });
                    tl.set(layers[prev], { zIndex: 1 }, 0)
                      .fromTo(layers[next],
                        { autoAlpha: 1, zIndex: 2, clipPath: down ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' },
                        { clipPath: 'inset(0% 0% 0% 0%)' }, 0)
                      .fromTo(layers[next].querySelector('img'), { scale: 1.25 }, { scale: 1, duration: D * 1.5, ease: 'expo.out' }, 0)
                      .to(layers[prev], { yPercent: down ? drift : -drift }, 0)
                      .set(layers[prev], { autoAlpha: 0, yPercent: 0, zIndex: 0 }, D);
                });

                // Title: old words roll out, new words roll in behind them.
                tl.to(words[prev], { yPercent: down ? -100 : 100, duration: D * 0.6, stagger: { each, from: down ? 'start' : 'end' } }, 0)
                  .set(titles[prev], { autoAlpha: 0 }, D * 0.6)
                  .set(titles[next], { autoAlpha: 1 }, 0)
                  .fromTo(words[next],
                    { yPercent: down ? 100 : -100 },
                    { yPercent: 0, stagger: { each: each * 1.25, from: down ? 'start' : 'end' } }, D * 0.15);

                // Description: quick cross-fade.
                tl.to(descs[prev], { autoAlpha: 0, y: down ? -12 : 12, duration: D * 0.4 }, 0)
                  .fromTo(descs[next], { autoAlpha: 0, y: down ? 12 : -12 }, { autoAlpha: 1, y: 0, duration: D * 0.7 }, D * 0.35);
            };

            // Move one service at a time towards wherever the scroll says we
            // should be, so a fast scroll still plays every step in order.
            function sync() {
                if (busy || target === current) return;
                show(current + Math.sign(target - current));
            }

            let pin = null;
            if (motion) {
                // Continuous zoom while scrolling through a service, before the
                // card changes: the backdrop pushes in, the card photo eases out.
                // Each layer follows its own slice, so scrolling back reverses it.
                const zoomBackdrop = backdropZooms.map(zoomTo);
                const zoomPhoto = photoZooms.map(zoomTo);
                gsap.set(photoZooms, { scale: 1.15 });

                pin = ScrollTrigger.create({
                    trigger: root.current,
                    start: 'top top',
                    end: `+=${COUNT * STEP}%`,
                    pin: q('[data-svc-stage]')[0],
                    anticipatePin: 1,
                    // No snapping: the swap is a timed animation, so the card
                    // is never caught half-way whatever the scroll position.
                    onUpdate: (self) => {
                        const pos = self.progress * COUNT;
                        target = Math.min(LAST, Math.floor(pos));
                        sync();
                        for (let i = 0; i < COUNT; i++) {
                            const local = gsap.utils.clamp(0, 1, pos - i);
                            zoomBackdrop[i](1 + 0.22 * local);
                            zoomPhoto[i](1.15 - 0.15 * local);
                        }
                    },
                });

                // Entrance: side names and the card arrive as the section comes in.
                gsap.from(q('[data-svc-item]'), {
                    autoAlpha: 0, y: 24, stagger: 0.06, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: root.current, start: 'top 65%', once: true },
                });
                gsap.from(q('[data-svc-card]'), {
                    autoAlpha: 0, y: 70, scale: 0.94, duration: 1.2, ease: 'expo.out',
                    scrollTrigger: { trigger: root.current, start: 'top 65%', once: true },
                });
            }

            controls.current = {
                select(i) {
                    if (!pin) {
                        target = i;
                        sync();
                        return;
                    }
                    // Land just inside the start of that service's slice.
                    const y = pin.start + (pin.end - pin.start) * (i / COUNT) + 2;
                    if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: 1.2 });
                    else window.scrollTo({ top: y, behavior: 'smooth' });
                },
            };
            return () => {
                controls.current = null;
            };
        });
    }, { scope: root });

    const select = (i) => controls.current?.select(i);
    const current = services[active];

    return (
        <section ref={root} className="relative text-skin-light">
            <div data-svc-stage className="relative h-svh w-full overflow-hidden">

                {/* Full-bleed backdrop, dimmed */}
                <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden fade-edges-y">
                    {services.map((s, i) => (
                        <div key={s.id} data-svc-bg className={`absolute inset-x-0 -top-[8%] h-[116%] ${hiddenUnlessFirst(i)}`}>
                            <div data-svc-bg-zoom className="absolute inset-0">
                                <Image src={s.image} alt="" fill sizes="100vw" className="object-cover" />
                            </div>
                        </div>
                    ))}
                    {/* Light overall tint; darker bands at the edges keep the
                        header, side lists and progress readable */}
                    <div className="absolute inset-0 z-10 bg-[#0D0809]/45" />
                    <div className="absolute inset-0 z-10 bg-linear-to-r from-[#0D0809]/80 via-transparent to-[#0D0809]/80" />
                    <div className="absolute inset-0 z-10 bg-linear-to-b from-[#0D0809]/75 via-transparent to-[#0D0809]/80" />
                </div>

                {/* Layout wrapper. The padding sits here, not on the pinned stage:
                    ScrollTrigger writes the stage's padding inline while pinned,
                    which would block the navbar-hidden rule in globals.css. */}
                <div data-svc-layout className="relative z-20 flex h-full flex-col pt-24 pb-6 lg:pt-28 lg:pb-10">

                {/* Header */}
                <div className={`relative z-20 mb-5 ${GUTTER} text-center lg:mb-7`}>
                    <div className="mx-auto flex w-full items-center justify-center">
                        <Badge text={"Expert Talent, Delivered with Precision "} />
                    </div>
                    <h2 data-split className="text-3xl lg:text-5xl font-extrabold tracking-tight">
                        Trusted <span className="text-skin-logo">Workforce Solution</span>
                    </h2>
                </div>

                {/* Middle: names | card | roles */}
                <div className={`relative z-20 flex min-h-0 flex-1 flex-col items-center justify-center gap-4 ${GUTTER} lg:flex-row lg:justify-between lg:gap-8`}>

                    {/* Left: service names (desktop) */}
                    <ul className="hidden w-[27%] flex-col gap-4 lg:flex">
                        {services.map((s, i) => (
                            <li key={s.id} data-svc-item>
                                <button
                                    type="button"
                                    onClick={() => select(i)}
                                    aria-current={i === active ? 'true' : undefined}
                                    className={`relative flex items-center gap-3 text-left text-lg xl:text-xl min-[1400px]:text-2xl font-extrabold uppercase tracking-tight transition-all duration-500 ease-out ${i === active ? 'translate-x-3 text-white opacity-100' : 'text-white opacity-35 hover:opacity-80'}`}
                                >
                                    <span className={`h-2 w-2 shrink-0 rounded-full bg-skin-logo transition-all duration-500 ${i === active ? 'scale-100' : 'scale-0'}`} />
                                    <span className="text-xs font-semibold tracking-widest text-skin-logo">{pad(i + 1)}</span>
                                    {s.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Center: the main card. The photo fills it and the copy sits
                        on a fade at the bottom. It grows to the height available
                        (more when the navbar tucks away). */}
                    <Link
                        href={`/services/${current.id}`}
                        data-svc-card
                        className="group relative min-h-[280px] w-full max-w-md md:max-w-none flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#0D0809] shadow-[0_30px_90px_-30px_rgba(226,46,51,0.6)] lg:h-full lg:max-h-[680px] lg:w-[min(38vw,580px)] lg:max-w-none lg:flex-none lg:shrink-0"
                    >
                        <div className="absolute inset-0">
                            {services.map((s, i) => (
                                <div key={s.id} data-svc-photo className={`absolute inset-x-0 -top-[12%] h-[124%] ${hiddenUnlessFirst(i)}`}>
                                    <div data-svc-photo-zoom className="absolute inset-0">
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            priority={i === 0}
                                            sizes="(max-width: 1024px) 100vw, 580px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 z-10 bg-linear-to-t from-[#0D0809] from-10% via-[#0D0809]/65 via-40% to-transparent to-70%" />

                        <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-[#0D0809]/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                            {pad(active + 1)} / {pad(services.length)}
                        </span>

                        <div className="absolute inset-x-0 bottom-0 z-20 space-y-3 p-5 lg:p-8">
                            {/* Titles stacked; only the active one is visible */}
                            <div className="relative h-[3.4rem] lg:h-[4.6rem]">
                                {services.map((s, i) => (
                                    <h3
                                        key={s.id}
                                        data-svc-title
                                        className={`absolute inset-x-0 bottom-0 text-[1.4rem] lg:text-[2rem] font-extrabold leading-tight tracking-tight text-white ${hiddenUnlessFirst(i)}`}
                                    >
                                        {s.title}
                                    </h3>
                                ))}
                            </div>
                            <div className="relative h-[2.8rem] lg:h-[4.4rem]">
                                {services.map((s, i) => (
                                    <p
                                        key={s.id}
                                        data-svc-desc
                                        className={`absolute inset-0 text-sm lg:text-[15px] leading-relaxed text-slate-200 line-clamp-2 lg:line-clamp-3 ${hiddenUnlessFirst(i)}`}
                                    >
                                        {s.desc}
                                    </p>
                                ))}
                            </div>
                            <span className="inline-flex items-center gap-3 pt-1 text-sm font-bold text-white">
                                Explore service
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-skin-logo bg-skin-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-skin-logo">
                                    <ArrowUpRight size={16} />
                                </span>
                            </span>
                        </div>
                    </Link>

                    {/* Right: what each service supplies (desktop) */}
                    <ul className="hidden w-[27%] flex-col items-end gap-4 lg:flex">
                        {services.map((s, i) => (
                            <li key={s.id} data-svc-item>
                                <button
                                    type="button"
                                    onClick={() => select(i)}
                                    className={`relative flex items-center gap-3 text-right text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-500 ease-out ${i === active ? '-translate-x-3 text-white opacity-100' : 'text-slate-300 opacity-35 hover:opacity-80'}`}
                                >
                                    <span className="text-balance">{s.roles}</span>
                                    <span className={`h-2 w-2 shrink-0 rounded-full bg-skin-logo transition-all duration-500 ${i === active ? 'scale-100' : 'scale-0'}`} />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile: names as chips under the card */}
                    <ul className="grid w-full max-w-md grid-cols-2 gap-2 md:max-w-none md:grid-cols-4 lg:hidden">
                        {services.map((s, i) => (
                            <li key={s.id} data-svc-item>
                                <button
                                    type="button"
                                    onClick={() => select(i)}
                                    aria-current={i === active ? 'true' : undefined}
                                    className={`w-full rounded-full border px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${i === active ? 'border-skin-logo bg-skin-logo text-white' : 'border-white/15 bg-white/5 text-slate-300'}`}
                                >
                                    {s.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Progress */}
                <div className="relative z-20 mt-4 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-slate-300">
                        <span className="text-white">{pad(active + 1)}</span>
                        <span className="relative block h-px w-32 bg-white/20 lg:w-40">
                            <span
                                className="absolute inset-y-0 left-0 bg-skin-logo transition-[width] duration-500 ease-out"
                                style={{ width: `${(active / LAST) * 100}%` }}
                            />
                        </span>
                        <span>{pad(services.length)}</span>
                    </div>
                    <span className="hidden text-[11px] uppercase tracking-[0.3em] text-slate-500 lg:block">Scroll to explore</span>
                </div>
                </div>
            </div>
        </section>
    );
}
