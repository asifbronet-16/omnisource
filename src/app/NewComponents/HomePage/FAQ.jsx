"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, Phone } from 'lucide-react';
import { useLenis } from 'lenis/react';
import Badge from '../../ReusableComponents/Badge';
import { GUTTER } from '../../ReusableComponents/gutter';
import { gsap, SplitText, useGSAP, MOTION_OK } from './motion/gsap';

const faqData = [
    {
        question: "How quickly can OmniSource mobilize workers for my project ?",
        answer: "We maintain a ready pool of vetted, document-complete workers across all trades. For standard requests, we can mobilize within 24–72 hours. For large-scale deployments, our team works with your timeline from day one to ensure zero delays on-site."
    },
    {
        question: "Are all OmniSource workers WPS-compliant and legally documented?",
        answer: "Yes. Every worker we supply is fully compliant with UAE labor law, including valid visas, Emirates ID, MOHRE contracts, and WPS-registered salaries. You take on zero compliance risk when you work with us."
    },
    {
        question: "What trades and industries does OmniSource supply manpower for?",
        answer: "We supply skilled and semi-skilled workers across Civil Construction, MEP Services, Facilities & Cleaning, Manufacturing, and Machinery Operations. From masons and electricians to quality inspectors and machine operators — if your site needs it, we are the source for it."
    },
     {
        question: "What makes OmniSource different from other manpower companies in the UAE?",
        answer: "We don't just fill headcounts — we match the right worker to the right role with full accountability from mobilization to performance. With dedicated account managers, full compliance handling, and multi-trade capability under one roof, OmniSource operates as an extension of your team, not just a supplier."
    },
    // Add the remaining questions from your list here...
];

// Same number as the hero and the floating WhatsApp button.
const PHONE_DISPLAY = "+971 50 344 1039";
const PHONE_HREF = "tel:+971503441039";
const WHATSAPP_HREF = "https://wa.me/971503441039";

const pad = (n) => String(n).padStart(2, '0');

// The answer text rises in line by line each time a question opens.
function Answer({ text }) {
    const ref = useRef(null);
    useGSAP(() => {
        if (!window.matchMedia(MOTION_OK).matches) return;
        const split = SplitText.create(ref.current, { type: 'lines', mask: 'lines' });
        gsap.from(split.lines, { yPercent: 100, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.07, delay: 0.12 });
    }, { scope: ref });
    return (
        <div ref={ref} className="px-5 pb-6 pl-[3.75rem] text-sm md:text-base leading-relaxed text-slate-300 md:px-7 md:pl-[4.75rem]">
            {text}
        </div>
    );
}

/*
  FAQ. Lines up with the navbar through the shared GUTTER padding, so the
  heading starts under the logo and the cards end under "Contact Us".

  Motion (skipped with reduced motion):
  - the question cards swing in from the side in 3D, tied to the scroll
  - a red rail beside the questions fills as you scroll through them (desktop)
  - a giant outlined "?" behind the heading turns and drifts with the scroll
  - answers rise in line by line when opened, and if an opened answer ends up
    below the fold, Lenis glides it into view
*/
const FAQ = () => {
    const root = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const lenis = useLenis();

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // After an answer finishes opening, make sure the whole card is visible.
    const keepInView = (card) => {
        const box = card.getBoundingClientRect();
        if (box.bottom <= window.innerHeight - 24) return;
        const y = window.scrollY + box.top - Math.max(96, window.innerHeight - box.height - 48);
        if (lenis) lenis.scrollTo(y, { duration: 1 });
        else card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    useGSAP(() => {
        const q = gsap.utils.selector(root);
        const mm = gsap.matchMedia();
        mm.add({ motion: MOTION_OK, desktop: '(min-width: 1024px)' }, ({ conditions }) => {
            if (!conditions.motion) return;
            const { desktop } = conditions;
            const list = q('[data-faq-list]')[0];

            // Giant "?" turns and drifts as the section passes.
            gsap.fromTo(q('[data-faq-mark]'),
                { yPercent: -12, rotation: -16 },
                { yPercent: 12, rotation: 14, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } });

            // Cards swing in from the side, one after another, with the scroll.
            gsap.fromTo(q('[data-faq-card]'),
                {
                    autoAlpha: 0,
                    x: desktop ? 160 : 0,
                    y: desktop ? 0 : 60,
                    rotationY: desktop ? -30 : 0,
                    rotationX: desktop ? 0 : 18,
                    transformPerspective: 1100,
                    transformOrigin: desktop ? '100% 50%' : '50% 100%',
                },
                {
                    autoAlpha: 1, x: 0, y: 0, rotationY: 0, rotationX: 0,
                    ease: 'power2.out',
                    stagger: 0.18,
                    scrollTrigger: { trigger: list, start: 'top 88%', end: 'top 38%', scrub: 0.8 },
                });

            // Rail fills as you read down the questions; the dot rides its tip.
            if (desktop) {
                const range = { trigger: list, start: 'top 65%', end: 'bottom 55%', scrub: true };
                gsap.fromTo(q('[data-faq-rail-fill]'), { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: range });
                gsap.fromTo(q('[data-faq-rail-dot]'), { top: '0%' }, { top: '100%', ease: 'none', scrollTrigger: { ...range } });
            }
        });
    }, { scope: root });

    return (
        <section
            ref={root}
            id="faq"
            className={`relative overflow-hidden py-24 ${GUTTER} font-public-sans text-skin-light`}
        >
            {/* Giant outlined question mark behind the heading (desktop) */}
            <span
                data-faq-mark
                aria-hidden="true"
                className="marquee-outline pointer-events-none absolute -left-16 top-1/2 hidden -translate-y-1/2 select-none text-[34rem] font-black leading-none opacity-[0.13] lg:block"
            >
                ?
            </span>
            {/* Soft brand glow behind the questions */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#E22E33]/10 blur-[140px]" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-x-16">

                {/* Heading */}
                <div className="lg:col-span-5 lg:row-start-1">
                    <div className="flex items-center justify-center lg:justify-start">
                        <Badge text={"Clarity and Operational Compliance"} />
                    </div>
                    <h2 data-split className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-skin-light lg:text-left">
                        Frequently Asked <span className="text-skin-logo">Questions</span>
                    </h2>
                    <p data-reveal="up" className="mt-5 text-center text-base leading-relaxed text-slate-400 lg:text-left">
                        Straight answers on mobilization, compliance and the trades we cover.
                    </p>
                </div>

                {/* Questions, with a progress rail on the left (desktop) */}
                <div data-faq-list className="relative space-y-3 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
                    <div aria-hidden="true" className="absolute -left-8 top-2 bottom-2 hidden w-0.5 rounded-full bg-white/10 lg:block">
                        <div data-faq-rail-fill className="absolute inset-0 origin-top rounded-full bg-linear-to-b from-[#9F212B] to-[#E22E33] shadow-[0_0_10px_rgba(226,46,51,0.5)]" />
                        <div data-faq-rail-dot className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E22E33] shadow-[0_0_14px_4px_rgba(226,46,51,0.6)]" />
                    </div>

                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        const buttonId = `faq-q-${index}`;
                        const panelId = `faq-a-${index}`;
                        return (
                            <div
                                key={index}
                                data-faq-card
                                className={`group rounded-2xl border transition-colors duration-300 ${
                                    isOpen
                                        ? 'border-[#E22E33]/60 bg-linear-to-br from-[#2a0b0e] to-[#140506] shadow-[0_24px_60px_-30px_rgba(226,46,51,0.65)]'
                                        : 'border-white/10 bg-[#120405] hover:border-[#E22E33]/40'
                                }`}
                            >
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center gap-4 px-5 py-5 text-left md:gap-5 md:px-7 md:py-6"
                                    >
                                        <span className={`w-6 shrink-0 text-sm font-bold tabular-nums transition-colors duration-300 ${isOpen ? 'text-skin-logo' : 'text-slate-500'}`}>
                                            {pad(index + 1)}
                                        </span>
                                        <span className="flex-1 text-base md:text-lg font-bold tracking-tight text-skin-light">
                                            {item.question}
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                                isOpen
                                                    ? 'rotate-45 border-skin-logo bg-skin-logo text-white'
                                                    : 'border-white/20 text-white group-hover:border-skin-logo group-hover:rotate-90'
                                            }`}
                                        >
                                            <Plus size={16} />
                                        </span>
                                    </button>
                                </h3>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            onAnimationComplete={(def) => {
                                                if (def.height === 'auto') keepInView(document.getElementById(panelId).parentElement);
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <Answer text={item.answer} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Still have a question? */}
                <div data-reveal="up" className="relative overflow-hidden rounded-2xl border border-[#E22E33]/25 bg-linear-to-br from-[#1f080a] to-[#120405] p-6 md:p-7 lg:col-span-5 lg:row-start-2 lg:self-start">
                    <p className="text-lg font-bold text-white">Still have a question?</p>
                    <p className="mt-1 text-sm text-slate-400">Talk to our team directly.</p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-magnetic
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-skin-logo px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-skin-logoHover"
                        >
                            <MessageCircle size={16} /> WhatsApp Us
                        </a>
                        <a
                            href={PHONE_HREF}
                            data-magnetic
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-skin-logo"
                        >
                            <Phone size={16} className="text-skin-logo" /> {PHONE_DISPLAY}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
