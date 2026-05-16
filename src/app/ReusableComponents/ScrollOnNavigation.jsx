"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollOnNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current window location contains an anchor hash (e.g., #faq)
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