"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      px-12 max-lg:px-8 max-sm:px-5
      transition-all duration-300
      border-b border-white/10
      backdrop-blur-[20px] bg-[#0e1110]/80
      ${scrolled ? "py-3" : "py-5"}`}
        >
            {/* BRAND */}
            <a href="#" className="flex items-center gap-3 text-skin-light">
                <div className="w-[30px] h-[30px]">
                    <svg
                        viewBox="0 0 30 30"
                        className="w-full h-full stroke-[var(--accent)] fill-none"
                        style={{ strokeWidth: 1.4 }}
                    >
                        <circle cx="15" cy="15" r="3" fill="currentColor" stroke="none" />
                        <line x1="15" y1="15" x2="2" y2="15" />
                        <line x1="15" y1="15" x2="28" y2="15" />
                        <line x1="15" y1="15" x2="15" y2="2" />
                        <line x1="15" y1="15" x2="15" y2="28" />
                        <line x1="15" y1="15" x2="5" y2="5" />
                        <line x1="15" y1="15" x2="25" y2="25" />
                    </svg>
                </div>

                <span className="font-display text-[22px] leading-none tracking-wide">
                    Omni <em className="italic text-[var(--accent)] font-normal tracking-wide">Source</em>
                </span>
            </a>

            {/* LINKS */}
            <ul className="hidden lg:flex items-center gap-8">
                {[
                    ["Services", "#services"],
                    ["Trades", "#trades"],
                    ["How we work", "#how"],
                    ["Standards", "#standards"],
                    ["Contact", "#contact"],
                ].map(([label, href]) => (
                    <li key={label} className="relative group">
                        <a
                            href={href}
                            className="text-[13.5px] font-medium tracking-[0.02em] text-skin-light/60 hover:text-skin-light transition"
                        >
                            {label}
                        </a>

                        {/* underline */}
                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href="#contact"
                className="group inline-flex items-center gap-[10px] px-5 py-[11px] border border-[var(--accent)] bg-[var(--accent)] text-[13px] font-semibold tracking-[0.02em] text-[var(--bg)] transition-all duration-200 hover:bg-transparent hover:text-[var(--accent)]"
            >
                <span className="hidden md:inline-block">Request a crew</span>

                {/* arrow */}
                <span className="relative inline-block w-[14px] h-px bg-current transition-all duration-200 group-hover:w-[18px]">
                    <span className="absolute right-0 top-[-3px] w-[7px] h-[7px] border-t border-r border-current rotate-45" />
                </span>
            </a>
        </nav>
    );
};

export default Navbar;