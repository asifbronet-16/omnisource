"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "./gsap";

const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribe(onChange) {
  const query = window.matchMedia(REDUCED);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// Lenis smooth scrolling for the home page. It still scrolls the real window,
// so window.scrollY, scroll listeners and sticky/fixed elements keep working.
// Lenis is ticked by GSAP's clock, so ScrollTrigger reads the same scroll
// position Lenis just wrote and pinned sections do not jitter.
export default function SmoothScroll() {
  const lenisRef = useRef(null);
  // The server cannot know the preference, so it renders without Lenis and the
  // client switches it on after hydration.
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia(REDUCED).matches, () => true);

  useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (reduced) return;
    const tick = (time) => lenisRef.current?.lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, lerp: 0.085, wheelMultiplier: 1, smoothWheel: true }}
    />
  );
}
