"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "../NewComponents/HomePage/motion/gsap";

// How far each glow drifts (in % of its own size) from the top of the page to
// the bottom, so the light slowly shifts as you scroll.
const DRIFT = [
    { x: -12, y: 38 },
    { x: 14, y: -34 },
    { x: -18, y: 22 },
];

/*
  The shared background behind every marketing page (rendered once in
  (site)/layout.jsx). Styles live in globals.css under "AMBIENT SITE
  BACKGROUND". Sections are transparent, so this one layer is what you see
  between and behind them.

  Motion (skipped with reduced motion): the glows drift with the page scroll
  and slowly breathe. It listens to window scroll, which Lenis also drives,
  so it works on pages with and without smooth scrolling.
*/
export default function AmbientBackground() {
    const root = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(MOTION_OK, () => {
            const glows = gsap.utils.toArray("[data-ambient-glow]", root.current);
            const movers = glows.map((glow) => ({
                x: gsap.quickTo(glow, "xPercent", { duration: 1.6, ease: "power3" }),
                y: gsap.quickTo(glow, "yPercent", { duration: 1.6, ease: "power3" }),
            }));

            const update = () => {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
                movers.forEach((move, i) => {
                    move.x(DRIFT[i].x * progress);
                    move.y(DRIFT[i].y * progress);
                });
            };
            update();
            window.addEventListener("scroll", update, { passive: true });

            gsap.to(glows, {
                opacity: 0.55,
                duration: 7,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: { each: 2.3, from: "random" },
            });

            return () => window.removeEventListener("scroll", update);
        });
    }, { scope: root });

    return (
        <div ref={root} aria-hidden="true" className="ambient">
            <div data-ambient-glow className="ambient-glow ambient-glow--a" />
            <div data-ambient-glow className="ambient-glow ambient-glow--b" />
            <div data-ambient-glow className="ambient-glow ambient-glow--c" />
            <div className="ambient-grid" />
            <div className="ambient-grain" />
        </div>
    );
}
