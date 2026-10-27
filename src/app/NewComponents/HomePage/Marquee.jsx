"use client";

import React, { useRef } from 'react';
import { Users2 } from 'lucide-react';
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from './motion/gsap';

const logos = [
  { src: "/assets/icons/splash building-ts1633320180.svg", name: "Splash Building Contracting" },
  { src: "/assets/icons/logo.png", name: "City Night Contracting LLC" },
  { src: "/assets/icons/al-tayer-logo.png", name: "Al Tayer" },
  { src: "/assets/icons/SP__Lulu-Group-International.png", name: "LULU Group International" },
  { src: "/assets/icons/Be-Bright-Dark-logo.webp", name: "BeBright" },
  { src: "/assets/icons/ferrari-logo.png", name: "Ferrari" },
  { src: "/assets/icons/samsung-logo.png", name: "Samsung" },
];

const phrases = ["One Source", "Every Trade", "All Industries", "UAE Wide"];

// Each track holds its content twice; moving it by exactly half its width and
// repeating makes the loop seamless. The second copy is hidden from screen readers.
function Track({ direction, duration, children, className = "" }) {
  return (
    <div
      data-marquee-track
      data-direction={direction}
      data-duration={duration}
      className={`flex w-max will-change-transform ${className}`}
    >
      <div className="flex shrink-0 items-center">{children}</div>
      <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
    </div>
  );
}

const ClientMarquee = () => {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const loops = gsap.utils.toArray('[data-marquee-track]', root.current).map((track) => {
        const forward = track.dataset.direction !== 'reverse';
        const loop = gsap.fromTo(
          track,
          { xPercent: forward ? 0 : -50 },
          { xPercent: forward ? -50 : 0, duration: Number(track.dataset.duration) || 30, ease: 'none', repeat: -1 },
        );
        // Start deep into the repeats so playing backwards never hits time 0.
        loop.totalTime(loop.duration() * 200);
        return loop;
      });

      // Scrolling speeds the loops up; scrolling up runs them backwards. They
      // then ease back to their normal pace in whichever direction was last used.
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate(self) {
          const dir = self.direction;
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 350, 6);
          gsap.to(loops, {
            timeScale: boost * dir,
            duration: 0.25,
            overwrite: true,
            onComplete: () => gsap.to(loops, { timeScale: dir, duration: 1.4, ease: 'power2.out', overwrite: true }),
          });
        },
      });

      gsap.fromTo(
        '[data-marquee-icon]',
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: 'back.out(1.8)',
          scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
        },
      );
    });
  }, { scope: root });

  return (
    <section ref={root} className="bg-skin-background py-20 overflow-hidden font-public-sans text-skin-light text-center">

      {/* Header */}
      <div className="flex flex-col items-center mb-12 px-4">
        <div data-marquee-icon className="text-3xl mb-3 text-skin-logo p-3 bg-skin-backgroundHighlight rounded-full backdrop-blur-xs border border-red-900/40">
          <Users2 size={32} strokeWidth={1.5} />
        </div>
        <h2 data-split className="text-4xl font-extrabold tracking-tight">
          <span className="font-normal text-skin-light">Trusted Corporate Clients</span>
        </h2>
      </div>

      {/* Client logos */}
      <div className="relative flex overflow-hidden border-y border-skin-subtle bg-skin-backgroundHighlight py-8 backdrop-blur-xs">
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-linear-to-r from-[#0D0809] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-linear-to-l from-[#0D0809] to-transparent z-10 pointer-events-none" />

        <Track direction="forward" duration={28}>
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-16 px-8 lg:px-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-24 w-32 object-contain grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </Track>
      </div>

      {/* Oversized tagline band running the other way */}
      <div aria-hidden="true" className="relative mt-14 overflow-hidden select-none">
        <Track direction="reverse" duration={40}>
          {phrases.map((phrase, i) => (
            <span key={phrase} className="flex items-center">
              <span
                className={`px-6 text-6xl lg:text-[8.5rem] font-extrabold uppercase leading-none tracking-tight whitespace-nowrap ${
                  i % 2 === 0
                    ? 'text-transparent [-webkit-text-stroke:1.5px_#E22E33]'
                    : 'text-skin-light/90'
                }`}
              >
                {phrase}
              </span>
              <span className="text-skin-logo text-4xl lg:text-7xl">✦</span>
            </span>
          ))}
        </Track>
      </div>
    </section>
  );
};

export default ClientMarquee;
