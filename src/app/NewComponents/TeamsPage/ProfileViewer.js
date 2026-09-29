'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { DownloadButton } from '@/app/NewComponents/TeamsPage/CompanyProfile';
import { company } from '@/data/team';

// Must be set in the same module that renders <Document> (react-pdf docs)
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

// Fetch only the parts of the PDF that visible pages need (HTTP range requests),
// instead of downloading the whole file up front. Defined once so react-pdf
// doesn't reload the document on every render.
const pdfOptions = { disableAutoFetch: true, disableStream: true };

// Landscape A4, used to size pages before PDF.js has drawn them
const PAGE_RATIO = 595 / 842;

// Dark, page-shaped box shown until PDF.js has drawn the page
function PagePlaceholder({ width }) {
  return (
    <div
      className="mx-auto animate-pulse rounded-lg border border-white/10 bg-white/5"
      style={{ width, height: width * PAGE_RATIO }}
    />
  );
}

// Draws a page only once it's on (or close to) the screen, so the first page
// shows up without waiting for the rest of the document.
function LazyPage({ pageNumber, width }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(pageNumber === 1);

  useEffect(() => {
    if (visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin: '600px 0px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className="mx-auto" style={{ width, minHeight: width * PAGE_RATIO }}>
      {visible ? (
        <Page
          pageNumber={pageNumber}
          width={width}
          suspense={false}
          // The profile's pages are images with no real text or links, so the
          // text and link layers are skipped
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={<PagePlaceholder width={width} />}
          className="overflow-hidden rounded-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        />
      ) : (
        <PagePlaceholder width={width} />
      )}
    </div>
  );
}

// Real PDF viewer (PDF.js via react-pdf) with zoom.
export default function ProfileViewer({ zoom = 1 }) {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setBoxWidth(Math.floor(entry.contentRect.width)));
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  const width = Math.min(boxWidth, 1024) * zoom;

  if (failed) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center text-sm text-zinc-300">
        <p>The company profile couldn&apos;t be shown here.</p>
        <DownloadButton className="px-5 py-3" />
      </div>
    );
  }

  return (
    <div ref={boxRef} className="w-full">
      {boxWidth > 0 && (
        <Document
          file={company.profile.webPdf}
          options={pdfOptions}
          suspense={false}
          onLoadSuccess={(doc) => setNumPages(doc.numPages)}
          onLoadError={() => setFailed(true)}
          loading={<PagePlaceholder width={width} />}
          // w-max + mx-auto keeps zoomed pages scrollable to both edges
          className="mx-auto flex w-max min-w-full flex-col gap-4 sm:gap-6"
        >
          {Array.from({ length: numPages }, (_, i) => (
            <LazyPage key={i + 1} pageNumber={i + 1} width={width} />
          ))}
        </Document>
      )}
    </div>
  );
}
