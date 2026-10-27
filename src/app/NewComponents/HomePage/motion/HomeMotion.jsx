"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from "./gsap";
import { badgeTimeline } from "./badge";

/*
  Scroll animations for the home page, driven by data attributes so the
  sections stay plain markup (most of them are server components).

  data-split            heading: words rise out of a mask, line by line
  data-scrub-words      text: words brighten as you scroll through it
  data-reveal="up|left|right|scale"   fade in from a direction (data-reveal-delay)
  data-stagger          children fade up one after another
  data-clip             wipe-in reveal; a [data-clip-img] child zooms out and drifts
  data-parallax="12"    drifts by that many % of its height across the viewport
  data-zoom             slow scale from 1.2 to 1 while the section scrolls by
  data-count="500"      counts up from 0 when it appears
  data-badge            section badge (lines draw out, icon spins in)
  data-pin-scene        desktop: pinned statement that builds as you scroll
  data-tilt             3D tilt + spotlight following the pointer
  data-magnetic         button leans towards the pointer

  The hero has its own intro in Hero.jsx; anything inside [data-hero] is skipped
  here, except the pointer effects.
*/

const outsideHero = (el) => !el.closest("[data-hero]");
const all = (selector) => gsap.utils.toArray(selector).filter(outsideHero);
const onceAt = (trigger, start = "top 85%") => ({ trigger, start, once: true });

const FROM = {
  up: { y: 60 },
  left: { x: -90 },
  right: { x: 90 },
  scale: { scale: 0.9, y: 40 },
};

function splitHeadings() {
  all("[data-split]").forEach((el) => {
    SplitText.create(el, {
      type: "lines,words",
      mask: "lines",
      autoSplit: true,
      ignore: "[data-split-ignore]",
      onSplit: (self) =>
        gsap.from(self.words, {
          yPercent: 115,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.035,
          scrollTrigger: onceAt(el),
        }),
    });
  });
}

function scrubWords() {
  all("[data-scrub-words]").forEach((el) => {
    SplitText.create(el, {
      type: "words",
      autoSplit: true,
      onSplit: (self) =>
        gsap.fromTo(
          self.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
          },
        ),
    });
  });
}

// Sideways entrances only on desktop. On phones an element parked off to the
// right widens the layout viewport and the whole page zooms out.
function reveals(desktop) {
  all("[data-reveal]").forEach((el) => {
    const kind = desktop ? el.dataset.reveal : el.dataset.reveal === "scale" ? "scale" : "up";
    const from = FROM[kind] ?? FROM.up;
    gsap.fromTo(
      el,
      { autoAlpha: 0, ...from },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: Number(el.dataset.revealDelay) || 0,
        scrollTrigger: onceAt(el, "top 88%"),
      },
    );
  });
}

function staggers() {
  all("[data-stagger]").forEach((el) => {
    gsap.fromTo(
      el.children,
      { autoAlpha: 0, y: 80, rotationX: -14, transformPerspective: 900, transformOrigin: "50% 100%" },
      {
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: onceAt(el),
      },
    );
  });
}

function clips() {
  all("[data-clip]").forEach((el) => {
    const img = el.querySelector("[data-clip-img]");
    const tl = gsap.timeline({ scrollTrigger: onceAt(el, "top 80%") });
    tl.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0% round 6px)" },
      { clipPath: "inset(0% 0% 0% 0% round 6px)", duration: 1.5, ease: "expo.inOut" },
    );
    if (!img) return;
    tl.fromTo(img, { scale: 1.45 }, { scale: 1, duration: 2, ease: "expo.out" }, 0.2);
    gsap.fromTo(
      img,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

function parallax() {
  all("[data-parallax]").forEach((el) => {
    const amount = Number(el.dataset.parallax) || 10;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

function zooms() {
  all("[data-zoom]").forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 1.2 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

// Returns a cleanup that puts the real numbers back if the animations are
// torn down part-way, for example when the visitor turns on reduced motion.
function counters() {
  const els = all("[data-count]");
  els.forEach((el) => {
    const end = Number(el.dataset.count);
    const value = { n: 0 };
    el.textContent = "0";
    gsap.to(value, {
      n: end,
      duration: 2.2,
      ease: "power3.out",
      onUpdate: () => {
        el.textContent = Math.round(value.n).toLocaleString();
      },
      scrollTrigger: onceAt(el, "top 92%"),
    });
  });
  return () => els.forEach((el) => (el.textContent = Number(el.dataset.count).toLocaleString()));
}

function badges() {
  all("[data-badge]").forEach((el) => {
    badgeTimeline(el, { scrollTrigger: onceAt(el, "top 90%") });
  });
}

const inDocumentOrder = (a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);

function pinScenes(desktop) {
  all("[data-pin-scene]").forEach((scene) => {
    const bg = scene.querySelector("[data-pin-bg]");
    const heading = scene.querySelector("[data-pin-heading]");
    const extras = scene.querySelectorAll("[data-pin-fade]");
    if (!heading) return;

    SplitText.create(heading, {
      type: "words",
      autoSplit: true,
      // The gradient phrase is clipped to its own text; splitting it would
      // leave the gradient behind. It animates as a single unit instead.
      ignore: "[data-split-ignore]",
      onSplit: (self) => {
        const words = [...self.words, ...heading.querySelectorAll("[data-split-ignore]")].sort(inDocumentOrder);

        if (!desktop) {
          return gsap.fromTo(
            words,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.9, ease: "power3.out", scrollTrigger: onceAt(heading) },
          );
        }

        const tl = gsap.timeline({
          scrollTrigger: { trigger: scene, start: "top top", end: "+=130%", pin: true, scrub: 1 },
        });
        if (bg) tl.fromTo(bg, { scale: 1.4, rotation: 2 }, { scale: 1, rotation: 0, ease: "none", duration: 1 }, 0);
        tl.fromTo(words, { opacity: 0.08, y: 24 }, { opacity: 1, y: 0, ease: "none", stagger: 0.05, duration: 0.3 }, 0.05);
        tl.fromTo(extras, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, ease: "power2.out", stagger: 0.1, duration: 0.25 }, 0.6);
        return tl;
      },
    });

    if (!desktop) {
      gsap.fromTo(
        extras,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, stagger: 0.12, duration: 1, ease: "power3.out", scrollTrigger: onceAt(scene, "top 60%") },
      );
    }
  });
}

function pointerEffects() {
  const cleanups = [];
  const listen = (el, type, fn) => {
    el.addEventListener(type, fn);
    cleanups.push(() => el.removeEventListener(type, fn));
  };

  gsap.utils.toArray("[data-tilt]").forEach((el) => {
    const rotX = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
    const rotY = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
    gsap.set(el, { transformPerspective: 900 });
    listen(el, "pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      rotY((px - 0.5) * 10);
      rotX((0.5 - py) * 10);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
    listen(el, "pointerleave", () => {
      rotX(0);
      rotY(0);
    });
  });

  gsap.utils.toArray("[data-magnetic]").forEach((el) => {
    const x = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    const y = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    listen(el, "pointermove", (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.3);
      y((e.clientY - (r.top + r.height / 2)) * 0.4);
    });
    listen(el, "pointerleave", () => {
      x(0);
      y(0);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

export default function HomeMotion() {
  const bar = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      { motion: MOTION_OK, desktop: "(min-width: 1024px)", finePointer: "(hover: hover) and (pointer: fine)" },
      ({ conditions }) => {
        if (!conditions.motion) return;

        gsap.to(bar.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });

        badges();
        splitHeadings();
        scrubWords();
        reveals(conditions.desktop);
        staggers();
        clips();
        parallax();
        zooms();
        const restoreCounters = counters();
        pinScenes(conditions.desktop);
        const removePointer = conditions.finePointer ? pointerEffects() : () => {};

        // Triggers were created by type, not page order. The pinned scene adds
        // scroll distance, so everything below it must be measured after it.
        ScrollTrigger.sort();
        ScrollTrigger.refresh();

        // Re-measure when the page height changes (an FAQ answer opening,
        // late images), otherwise later triggers and the progress bar drift.
        let lastHeight = document.body.scrollHeight;
        let timer;
        const resize = new ResizeObserver(() => {
          const height = document.body.scrollHeight;
          if (Math.abs(height - lastHeight) < 2) return;
          lastHeight = height;
          clearTimeout(timer);
          timer = setTimeout(() => ScrollTrigger.refresh(), 200);
        });
        resize.observe(document.body);

        return () => {
          resize.disconnect();
          clearTimeout(timer);
          restoreCounters();
          removePointer();
        };
      },
    );
  });

  return (
    <div
      ref={bar}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-110 h-0.75 origin-left bg-linear-to-r from-[#9F212B] via-[#E22E33] to-[#ff7a7e] shadow-[0_0_12px_rgba(226,46,51,0.8)]"
    />
  );
}
