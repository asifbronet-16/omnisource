import { gsap } from "./gsap";

// The section badge (see ReusableComponents/Badge.jsx): its two rules draw
// outward from the icon, the icon spins in and the label slides after it.
export function badgeTimeline(badge, vars = {}) {
  const tl = gsap.timeline(vars);
  const left = badge.querySelector("[data-badge-line='left']");
  const right = badge.querySelector("[data-badge-line='right']");
  const icon = badge.querySelector("[data-badge-icon]");
  const label = badge.querySelector("[data-badge-text]");

  if (left) tl.fromTo(left, { scaleX: 0, transformOrigin: "right center" }, { scaleX: 1, duration: 1, ease: "expo.out" }, 0);
  if (right) tl.fromTo(right, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1, ease: "expo.out" }, 0.15);
  if (icon) tl.fromTo(icon, { scale: 0, rotation: -120 }, { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(2)" }, 0);
  if (label) tl.fromTo(label, { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.7, ease: "power3.out" }, 0.25);
  return tl;
}
