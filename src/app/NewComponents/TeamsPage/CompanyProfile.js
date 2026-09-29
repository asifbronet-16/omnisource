import { company } from '@/data/team';

const { pdf, downloadName } = company.profile;

// Red gradient button that downloads the company profile PDF
export function DownloadButton({ compact = false, className = '' }) {
  return (
    <a
      href={pdf}
      download={downloadName}
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-linear-to-r from-[#a31a10] to-[#580608] font-semibold text-white shadow-[0_8px_24px_rgba(160,20,25,0.35)] transition hover:from-[#b8231a] hover:to-[#6c0a0a] active:scale-[0.98] ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[1.15em] w-[1.15em]">
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
      <span>DOWNLOAD<span className={compact ? 'hidden sm:inline' : ''}> PDF</span></span>
    </a>
  );
}
