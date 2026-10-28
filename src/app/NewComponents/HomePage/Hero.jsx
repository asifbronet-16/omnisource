"use client";
import { useRef } from 'react';
import { ArrowUpRight, Phone, Users, ShieldCheck, Clock } from 'lucide-react';
import Navbar from '../../ReusableComponents/Navbar';
import Badge from '../../ReusableComponents/Badge';
import { GUTTER } from '../../ReusableComponents/gutter';
import { gsap, SplitText, useGSAP, MOTION_OK } from './motion/gsap';
import { badgeTimeline } from './motion/badge';

// Figures already stated elsewhere on the site (workforce stats and the FAQ).
const highlights = [
    { icon: Users, value: "500+", label: "Skilled professionals" },
    { icon: Clock, value: "24–72h", label: "Mobilisation for standard requests" },
    { icon: ShieldCheck, value: "100%", label: "Verified & WPS compliant" },
];

export default function HeroSection() {
    const root = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({ motion: MOTION_OK, finePointer: "(hover: hover) and (pointer: fine)" }, ({ conditions }) => {
            if (!conditions.motion) return;

            const q = gsap.utils.selector(root);
            const nav = root.current.querySelector(':scope > nav');
            const para = q('[data-hero-para]')[0];
            const words = SplitText.create(para, { type: 'words' }).words;

            // ---- Intro ----------------------------------------------------
            // Elements marked data-hero-hide start hidden in CSS (globals.css)
            // so the server-rendered page does not flash before this runs.
            // Their visibility is never cleared afterwards, only transforms.
            // The CSS no-JS fallback is switched off so GSAP alone decides
            // what is visible (the scroll-out fade relies on that).
            gsap.set([...q('[data-hero-hide]'), nav], { animation: 'none' });
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            tl.fromTo(q('[data-hero-media]'),
                { clipPath: 'inset(16% 12% 16% 12% round 32px)', scale: 1.06 },
                { clipPath: 'inset(0% 0% 0% 0% round 0px)', scale: 1, duration: 1.9, ease: 'expo.inOut' })
              .fromTo(q('[data-hero-video]'), { scale: 1.4 }, { scale: 1, duration: 2.6 }, 0)
              .fromTo(nav,
                { yPercent: -100, autoAlpha: 0 },
                { yPercent: 0, autoAlpha: 1, duration: 1.2, clearProps: 'transform' }, 1)
              .set(q('[data-hero-badge]'), { autoAlpha: 1 }, 0.9)
              .add(badgeTimeline(q('[data-hero-badge] [data-badge]')[0]), 0.9)
              .fromTo(q('[data-hero-line]'),
                { yPercent: 115, rotation: 3, autoAlpha: 1 },
                { yPercent: 0, rotation: 0, duration: 1.5, stagger: 0.12 }, 1)
              .set(para, { autoAlpha: 1 }, 1.35)
              .fromTo(words,
                { autoAlpha: 0, y: 18, filter: 'blur(8px)' },
                { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.018, ease: 'power3.out' }, 1.35)
              .fromTo(q('[data-hero-ctas]'), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1.2 }, 1.6)
              .fromTo(q('[data-hero-chip]'),
                { autoAlpha: 0, x: 90, rotation: 4 },
                { autoAlpha: 1, x: 0, rotation: 0, duration: 1.5, stagger: 0.14 }, 1.4)
              .fromTo(q('[data-hero-cue]'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1 }, 2.1);

            // ---- Idle loops -----------------------------------------------
            gsap.to(q('[data-float]'), {
                y: -14,
                duration: (i) => 2.6 + i * 0.45,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });
            gsap.fromTo(q('[data-hero-cue-dot]'), { yPercent: -100 }, { yPercent: 200, duration: 1.6, ease: 'power2.inOut', repeat: -1 });

            // ---- Scrolling away -------------------------------------------
            // Copy drifts up and fades, the footage pushes in and darkens, and
            // the stat cards travel faster than the text for depth.
            gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: { trigger: q('[data-hero-stage]')[0], start: 'top top', end: 'bottom top', scrub: true },
            })
              .to(q('[data-hero-content]'), { yPercent: -18, duration: 1 }, 0)
              .to(q('[data-hero-content]'), { autoAlpha: 0, duration: 0.55 }, 0.45)
              .to(q('[data-hero-cue-wrap]'), { autoAlpha: 0, duration: 0.15 }, 0)
              .to(q('[data-hero-chips]'), { yPercent: -40, duration: 1 }, 0)
              .to(q('[data-hero-parallax]'), { scale: 1.18, yPercent: 10, duration: 1 }, 0)
              .to(q('[data-hero-shade]'), { opacity: 0.65, duration: 1 }, 0);

            // ---- Pointer glow ---------------------------------------------
            if (!conditions.finePointer) return;
            const glow = q('[data-hero-glow]')[0];
            const gx = gsap.quickTo(glow, 'x', { duration: 1.2, ease: 'power3' });
            const gy = gsap.quickTo(glow, 'y', { duration: 1.2, ease: 'power3' });
            const stage = q('[data-hero-stage]')[0];
            // x/y are offsets from the glow's resting spot, so subtract it.
            const follow = (e) => {
                const r = stage.getBoundingClientRect();
                gx(e.clientX - r.left - glow.offsetLeft - glow.offsetWidth / 2);
                gy(e.clientY - r.top - glow.offsetTop - glow.offsetHeight / 2);
            };
            stage.addEventListener('pointermove', follow);
            return () => stage.removeEventListener('pointermove', follow);
        });
    }, { scope: root });

    return (
        <section ref={root} data-hero className="relative w-full overflow-hidden z-20">
            <Navbar />
            <section data-hero-stage className={`relative min-h-screen ${GUTTER} flex flex-col lg:flex-row justify-between lg:items-center lg:gap-10 pt-40 pb-24 lg:py-56 overflow-hidden`}>

                {/* Background video, masked in on load */}
                <div data-hero-media className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-skin-background fade-edge-b">
                    <div data-hero-parallax className="absolute inset-0">
                        <video
                            data-hero-video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/download.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* Legibility + a soft fade into the next section */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#0D0809]/85 via-[#0D0809]/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-[#0D0809] to-transparent" />
                    <div data-hero-shade className="absolute inset-0 bg-[#0D0809] opacity-0" />
                </div>

                {/* Red glow that trails the pointer */}
                <div
                    aria-hidden="true"
                    data-hero-glow
                    className="pointer-events-none absolute -left-40 top-1/3 z-0 h-[520px] w-[520px] rounded-full bg-[#E22E33]/20 blur-[130px] mix-blend-screen"
                />

                {/* Copy */}
                <div data-hero-content className="relative w-full lg:w-3/5 text-skin-light text-center lg:text-start z-10 h-full flex flex-col justify-center items-center lg:items-start">

                    <div data-hero-hide data-hero-badge className="w-full">
                        <Badge text={"One source, Every trade"} />
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                        <span className="block overflow-hidden pb-[0.08em]">
                            <span data-hero-hide data-hero-line className="inline-block origin-bottom-left bg-text-gradient-right bg-clip-text text-transparent">
                                Best Workforce
                            </span>
                        </span>
                        <span className="block overflow-hidden pb-[0.08em]">
                            <span data-hero-hide data-hero-line className="inline-block origin-bottom-left bg-text-gradient-right bg-clip-text text-transparent">
                                Solutions In UAE
                            </span>
                        </span>
                    </h1>

                    <p data-hero-hide data-hero-para className="text-slate-300 text-xl lg:text-2xl mb-10 max-w-xl leading-relaxed">
                        Reliable workforce solutions in <span className="text-skin-logo font-bold">UAE</span> for all industries. We are your source for every trade. Skilled and experienced labour for all <span className="text-skin-logo font-bold">Industries</span>
                    </p>

                    <div data-hero-hide data-hero-ctas className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-16 lg:mb-0 w-full sm:w-auto">
                        <a
                            data-magnetic
                            href="/contact"
                            className="group relative overflow-hidden flex items-center justify-center gap-2 bg-skin-logo text-skin-light lg:px-10 lg:py-4 py-3 px-6 rounded-md font-bold shadow-xl shadow-glow/30 w-full sm:w-auto"
                        >
                            {/* Darker fill sweeps in from the left on hover */}
                            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-skin-logoHover transition-transform duration-500 ease-out group-hover:translate-x-0" />
                            <span className="relative">Get a Quote</span>
                            <ArrowUpRight size={20} className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                            data-magnetic
                            href="tel:+971503441039"
                            className="flex items-center justify-center gap-2 border border-red-700 bg-white/5 backdrop-blur-xs lg:px-10 lg:py-4 px-6 py-3 rounded-md font-bold text-skin-light hover:bg-white/10 hover:border-slate-500 transition-colors duration-300 w-full sm:w-auto"
                        >
                            <Phone size={18} className="text-skin-logo" /> +971 50 344 1039
                        </a>
                    </div>
                </div>

                {/* Floating highlight cards (desktop) */}
                <div data-hero-chips className="relative z-10 hidden lg:flex w-2/5 flex-col items-end gap-5">
                    {highlights.map(({ icon: Icon, value, label }, i) => (
                        <div key={label} data-hero-hide data-hero-chip className={i === 1 ? 'mr-16' : ''}>
                            <div data-float className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0D0809]/50 px-5 py-4 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(226,46,51,0.45)]">
                                <div className="rounded-xl border border-[#E22E33]/30 bg-[#E22E33]/15 p-3 text-skin-logo">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <div className="text-2xl font-black tracking-tight text-white">{value}</div>
                                    <div className="text-sm text-slate-300">{label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll cue */}
                {/* Outer wrapper fades on scroll, inner element is revealed by the intro */}
                <div data-hero-cue-wrap aria-hidden="true" className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
                    <div data-hero-hide data-hero-cue className="flex flex-col items-center gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Scroll</span>
                        <span className="relative block h-14 w-px overflow-hidden bg-white/15">
                            <span data-hero-cue-dot className="absolute left-0 top-0 block h-1/2 w-px bg-skin-logo" />
                        </span>
                    </div>
                </div>
            </section>
        </section>
    );
}
