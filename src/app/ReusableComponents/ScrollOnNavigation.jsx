"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Sections whose sibling pages swap content in place rather than being a fresh
// page — the services switcher is the one today. Moving between two of them
// should leave the reader where they are, next to the control they just used,
// instead of throwing them back above the hero.
const IN_PLACE_SECTIONS = ['/services/'];

function isInPlaceSwap(from, to) {
  if (!from || !to || from === to) return false;
  return IN_PLACE_SECTIONS.some((section) => from.startsWith(section) && to.startsWith(section));
}

export default function ScrollOnNavigation() {
  const pathname = usePathname();
  const previousPathname = useRef(null);

  useEffect(() => {
    const from = previousPathname.current;
    previousPathname.current = pathname;

    if (isInPlaceSwap(from, pathname)) return;

    // Check if the current window location contains an anchor hash (e.g. #faq)
    // We wrap it in a typeof check to ensure it doesn't break during Next.js Server-Side Rendering (SSR)
    const hasHash = typeof window !== 'undefined' && window.location.hash;

    if (!hasHash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname]);

  return null;
}
