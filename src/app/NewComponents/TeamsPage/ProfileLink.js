'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { DownloadButton } from '@/app/NewComponents/TeamsPage/CompanyProfile';

// The PDF viewer (and the PDF) only loads once the popup is first opened.
// Hovering or touching the button starts fetching the viewer code early.
const loadViewer = () => import('@/app/NewComponents/TeamsPage/ProfileViewer');
const ProfileViewer = dynamic(loadViewer, {
  ssr: false,
  loading: () => <div className="mx-auto aspect-842/595 w-full max-w-5xl animate-pulse rounded-lg border border-white/10 bg-white/5" />,
});

const ZOOMS = [1, 1.25, 1.5, 2, 2.5];

function IconButton({ label, onClick, disabled, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/15 text-zinc-200 transition hover:border-[#e0303a] hover:bg-[#2a0809] disabled:pointer-events-none disabled:opacity-35"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="h-4 w-4">
        {children}
      </svg>
    </button>
  );
}

// The card's Profile button. Opens the company profile in a popup; the href
// (the PDF itself) is only followed if JavaScript hasn't loaded.
export default function ProfileLink({ href, className, children }) {
  const dialogRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);

  const open = (event) => {
    event.preventDefault();
    setOpened(true);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <a
        href={href}
        aria-label="Company profile"
        aria-haspopup="dialog"
        onClick={open}
        onPointerEnter={loadViewer}
        onTouchStart={loadViewer}
        onFocus={loadViewer}
        className={className}
      >
        {children}
      </a>

      <dialog
        ref={dialogRef}
        aria-label="Company profile"
        // Clicking the dark area around the panel closes it
        onClick={(event) => event.target === dialogRef.current && close()}
        className="m-auto h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-left text-white backdrop:bg-black/80 backdrop:backdrop-blur-sm sm:h-[92dvh] sm:w-[min(94vw,64rem)] sm:rounded-xl"
      >
        <div className="flex h-full flex-col overflow-hidden border-white/10 bg-[#0b0405] sm:rounded-xl sm:border">
          <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1 border-b border-white/10 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:flex-nowrap sm:gap-3 sm:px-5">
            {/* Own centered line on phones, left of the controls on wider screens */}
            <h2 className="w-full py-1 text-center font-script text-2xl leading-normal sm:w-auto sm:flex-1 sm:text-left">Company Profile</h2>

            {/* Zoom */}
            <div className="flex flex-1 items-center gap-1.5 sm:flex-none">
              <IconButton label="Zoom out" onClick={() => setZoomIndex((i) => i - 1)} disabled={zoomIndex === 0}>
                <path d="M5 12h14" />
              </IconButton>
              <span className="w-11 text-center text-xs tabular-nums text-zinc-300">{Math.round(ZOOMS[zoomIndex] * 100)}%</span>
              <IconButton label="Zoom in" onClick={() => setZoomIndex((i) => i + 1)} disabled={zoomIndex === ZOOMS.length - 1}>
                <path d="M5 12h14M12 5v14" />
              </IconButton>
            </div>

            <DownloadButton compact className="px-3 py-2 text-xs sm:px-4 sm:text-sm" />
            <IconButton label="Close" onClick={close}>
              <path d="M6 6l12 12M18 6L6 18" />
            </IconButton>
          </div>
          <div className="flex-1 overflow-auto overscroll-contain p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5">
            {opened && <ProfileViewer zoom={ZOOMS[zoomIndex]} />}
          </div>
        </div>
      </dialog>
    </>
  );
}
