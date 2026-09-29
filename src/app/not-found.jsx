// OmniSource — 404 Not Found
// Drop into app/not-found.jsx (Next.js App Router) or use as a route component.
// Fonts: uses Manrope (brand secondary). If Blanquotey is loaded on your site,
// swap it into the headline via the font-[family] classes marked below.

import Image from "next/image";
import Link from "next/link";

const ONYX = "#0D0809";
const CRIMSON = "#E22E33";
const DEEP_RED = "#9F212B";

/* The "0" of 404 — the OmniSource brand mark */
function ArcZero({ className }) {
  return (
    <Image
      src="/assets/icons/brand-icon.png"
      alt="0"
      width={1500}
      height={1500}
      priority
      // object-contain keeps the square mark from stretching into the
      // taller box it shares with the two 4s
      className={`object-contain ${className}`}
    />
  );
}

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor: ONYX }}
    >
      {/* Brand gradient: crimson corner glows on Raw Onyx */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 0% 0%, rgba(226,46,51,0.35) 0%, rgba(159,33,43,0.15) 45%, transparent 70%),
            radial-gradient(ellipse 60% 70% at 100% 100%, rgba(159,33,43,0.30) 0%, transparent 60%)
          `,
        }}
      />

      {/* faint site-grid texture, echoing the brand book concept pages */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* eyebrow */}
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
          One Source&nbsp;.&nbsp;Every Trade
        </p>

        {/* 4 [arcs] 4 — swap font-sans for Blanquotey here if loaded */}
        <div className="flex items-center select-none ">
          <span className="text-[7rem] font-extrabold leading-none text-white sm:text-[10rem]">
            4
          </span>
          <ArcZero className="h-40 w-32" />
          <span className="text-[7rem] font-extrabold leading-none text-white sm:text-[10rem]">
            4
          </span>
        </div>

        <h1 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
          This page is off-site.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
          The page you're looking for isn't on this site. It may have
          been moved, renamed, or never deployed to this site.
        </p>

        {/* actions */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-md px-7 py-3 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.03] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70"
            style={{
              background: `linear-gradient(135deg, ${CRIMSON}, ${DEEP_RED})`,
            }}
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/25 px-7 py-3 text-sm font-semibold text-white/90 transition-colors duration-150 hover:border-white/60 hover:text-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Contact us
          </Link>
        </div>

        {/* footer line */}
        <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-white/30">
          OmniSource &nbsp;|&nbsp; Workforce Solutions
        </p>
      </div>
    </main>
  );
}
