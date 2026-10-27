"use client";

// Single place that registers GSAP plugins, so every home page component
// imports the same configured instance.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);

// Mobile browsers resize the viewport when the address bar hides. Refreshing
// every trigger on that would make pinned sections jump mid-scroll.
ScrollTrigger.config({ ignoreMobileResize: true });

// Every animation is gated behind this query. Visitors who ask for reduced
// motion get the static page, which is complete on its own.
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP };
