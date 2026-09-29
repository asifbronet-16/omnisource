import Image from 'next/image';
import ProfileLink from '@/app/NewComponents/TeamsPage/ProfileLink';
import { company } from '@/data/team';

const icons = {
  website: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M4.5 6.5h15M4.5 17.5h15" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
      <path d="M10 2h7l3 3v7.2H10zM12 5h3.5v1.3H12zM12 7.8h6v1.3h-6z" />
      <path d="M2 12.5A1.5 1.5 0 0 1 3.5 11H8l2 2h10.5a1.5 1.5 0 0 1 1.5 1.5v5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5zM9 16.5h6v1.6H9z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
    </svg>
  ),
  call: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.86h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z" />
    </svg>
  ),
};

function buildLinks(member) {
  const whatsapp = (member.whatsapp ?? member.phone).replace(/\D/g, '');
  return [
    { label: 'Website', href: company.website, external: true, icon: icons.website },
    { label: 'Profile', href: company.profile.webPdf, popup: true, icon: icons.profile },
    { label: 'Email', href: `mailto:${member.email}`, icon: icons.email },
    { label: 'Call', href: `tel:${member.phone}`, icon: icons.call },
    { label: 'WhatsApp', href: `https://wa.me/${whatsapp}`, external: true, icon: icons.whatsapp },
    member.linkedin && { label: 'LinkedIn', href: member.linkedin, external: true, icon: icons.linkedin },
  ].filter(Boolean);
}

function LinkGrid({ links, className, itemClassName, separatorClassName, labelClassName }) {
  return (
    <nav className={`relative z-10 flex flex-wrap justify-center ${className}`}>
      {links.map((link, i) => {
        const className = `group relative flex aspect-3/2 flex-col items-center justify-center gap-[6%] rounded-[14%/21%] border border-[#b0222a]/70 bg-[#1b0607]/70 transition-colors hover:border-[#e0303a] hover:bg-[#2a0809]/80 ${itemClassName} ${
          i % 3 !== 2 && i !== links.length - 1 ? `after:absolute after:top-1/4 after:h-1/2 after:w-px after:bg-[#b0222a]/30 ${separatorClassName}` : ''
        }`;
        const content = (
          <>
            <span className="w-[32%] text-white drop-shadow-[0_0_6px_rgba(220,38,38,0.9)] transition-transform group-hover:scale-110 [&>svg]:w-full [&>svg]:h-auto">
              {link.icon}
            </span>
            <span className={`uppercase text-zinc-100 ${labelClassName}`}>{link.label}</span>
          </>
        );

        if (link.popup) {
          return (
            <ProfileLink key={link.label} href={link.href} className={className}>
              {content}
            </ProfileLink>
          );
        }
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            className={className}
          >
            {content}
          </a>
        );
      })}
    </nav>
  );
}

function SaveContact({ member, className }) {
  return (
    <a
      href={`/teams/${member.slug}/contact.vcf`}
      className={`flex items-center bg-linear-to-r from-[#a31a10] to-[#580608] font-semibold shadow-[0_8px_24px_rgba(160,20,25,0.35)] transition hover:from-[#b8231a] hover:to-[#6c0a0a] active:scale-[0.98] ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="h-[1.1em] w-[1.1em]">
        <path d="M6 5l10 10M16 7v8H8" />
        <path d="M4 20h9" />
      </svg>
      SAVE CONTACT CARD
    </a>
  );
}

const pinIcon = (
  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
);

export default function ContactCard({ member }) {
  const links = buildLinks(member);
  // Long names get a smaller laptop heading so they stay on one line
  const nameSize = member.name.length > 18 ? 'text-[calc(var(--u)*4.4)]' : 'text-[calc(var(--u)*6)]';

  return (
    // Phone sizing: --ws is the scene width (full screen width, capped on short
    // screens), --wc the content column width, kept small enough that the column
    // plus the scene's footer space fit in one screen height.
    <main className="relative h-dvh overflow-hidden bg-[#0b0405] bg-[url(/teams/page-background.jpg)] bg-cover bg-center text-white flex items-center justify-center [--ws:min(104vw,90dvh)] [--wc:min(100vw,620px,calc(100dvh*0.53),calc((100dvh-var(--ws)*0.26)/1.53))]">

      {/* PHONE / TABLET decorations: span the full screen width, behind the column */}
      <Image
        src="/teams/site-scene.jpg"
        alt=""
        width={2049}
        height={1500}
        sizes="(min-width: 64rem) and (orientation: landscape) 5vw, (max-width: 620px) 104vw, 90vh"
        loading="eager"
        className="pointer-events-none absolute bottom-0 right-0 desk:hidden w-(--ws) max-w-none h-auto mask-[linear-gradient(to_bottom,transparent,black_35%),linear-gradient(to_right,transparent,black_10%)] mask-intersect"
      />
      <Image src="/teams/brand/s-arc-top.png" alt="" width={724} height={914} className="pointer-events-none absolute desk:hidden h-auto opacity-25 right-[calc(var(--wc)*-0.2)] top-[15%] w-[calc(var(--wc)*0.36)] origin-[63%_50%] rotate-[-40deg]" />
      <Image src="/teams/brand/s-arc-bottom.png" alt="" width={718} height={918} className="pointer-events-none absolute desk:hidden h-auto opacity-25 left-[calc(var(--wc)*-0.2)] top-[55%] w-[calc(var(--wc)*0.34)] origin-[36%_50%] rotate-[-30deg]" />
      <p className="pointer-events-none absolute inset-x-0 z-10 desk:hidden bottom-[calc(var(--ws)*0.171)] translate-y-1/2 text-center text-[calc(var(--wc)*0.022)] font-light text-zinc-200">
        DUBAI <span className="mx-[1.2em]">|</span> UAE <span className="mx-[1.2em]">|</span> BEYOND
      </p>

      {/* PHONE / TABLET: full-height column; extra height goes around the middle content */}
      <div className="@container relative desk:hidden h-full w-(--wc) flex flex-col">

        {/* HEADER */}
        <header className="relative z-10 flex items-center gap-[2.5%] px-[4.5%] pt-[10%]">
          <Image src="/teams/omnisource-logo.png" alt={company.name} width={1200} height={208} priority className="w-[42%] shrink-0 h-auto" />
          <span className="h-px min-w-[2cqw] flex-1 bg-[#c0232b]/70" />
          <p className="shrink-0 text-[2.05cqw] whitespace-nowrap text-zinc-200">
            PEOPLE <span className="mx-[0.5em]">|</span> PROJECTS <span className="mx-[0.5em]">|</span> PROGRESS
          </p>
        </header>

        <div className="flex flex-1 flex-col justify-center">
        {/* PORTRAIT + SCRIPT */}
        <section className="relative z-10 mt-[10%]">
          <div className="relative mx-auto w-[44%]">
            <Image
              src={member.photo}
              alt={member.name}
              width={1195}
              height={1500}
              sizes="(max-width: 620px) 44vw, 280px"
              priority
              className="w-full h-auto aspect-612/651 object-cover mask-[linear-gradient(to_bottom,black_80%,transparent)]"
            />
          </div>
          <div className="absolute left-[8%] top-[64%] rotate-[-18deg] select-none">
            <p className="font-script text-[6.8cqw] leading-[1.05] text-white">
              Let&apos;s
              <br />
              <span className="ml-[0.5em]">Connect</span>
            </p>
            <span className="block ml-[45%] mt-[-1.5cqw] h-px w-[60%] bg-[#c0232b]" />
          </div>
        </section>

        {/* NAME */}
        <section className="relative z-10 text-center mt-[4.5%]">
          <h1 className="font-semibold text-[4.8cqw] leading-none uppercase">{member.name}</h1>
          <p className="mt-[0.8cqw] font-light text-[2.9cqw] tracking-wide uppercase text-zinc-100">{member.title}</p>
          <span className="mx-auto mt-[1.5cqw] block h-px w-[20%] bg-[#c0232b]" />
        </section>

        {/* LINK GRID */}
        <LinkGrid
          links={links}
          className="mx-auto mt-[6%] w-[61%] gap-x-[6%] gap-y-[2.2cqw]"
          itemClassName="w-[29.33%]"
          separatorClassName="after:right-[-10%]"
          labelClassName="text-[2cqw]"
        />

        {/* SAVE CONTACT */}
        <div className="relative z-10 mt-[6%] flex justify-center">
          <SaveContact member={member} className="gap-[1.2cqw] rounded-[1.8cqw] px-[3%] py-[2.4%] text-[2.7cqw]" />
        </div>

        {/* TAGLINE + ADDRESS */}
        <section className="relative z-10 mt-[5.5%] text-center">
          <div className="flex items-center gap-[3cqw]">
            <span className="h-px flex-1 bg-[#c0232b]/60" />
            <p className="font-light text-[3.3cqw] tracking-wide">One Source. Every Trade</p>
            <span className="h-px flex-1 bg-[#c0232b]/60" />
          </div>
          <svg viewBox="0 0 24 24" fill="#e0242d" className="mx-auto mt-[3.5%] w-[4.5%] h-auto">
            {pinIcon}
          </svg>
          <address className="mt-[1.5cqw] not-italic text-[2.4cqw] leading-snug text-zinc-50">
            {company.address.line1}
            <br />
            {company.address.line2}
          </address>
        </section>
        </div>

        {/* Space kept free over the scene's ground line (DUBAI | UAE | BEYOND sits there) */}
        <div className="shrink-0 h-[max(34.3cqw,calc(var(--ws)*0.26))]" />
      </div>

      {/* LAPTOP / DESKTOP (lg and landscape): two columns filling the screen */}
      <div className="relative hidden desk:flex h-full w-full flex-col overflow-hidden bg-[#0b0405] bg-[url(/teams/page-background.jpg)] bg-cover bg-center [--u:min(1dvh,0.56vw)]">
        <Image
          src="/teams/site-scene.jpg"
          alt=""
          width={2049}
          height={1500}
          sizes="(min-width: 64rem) and (orientation: landscape) 110vh, 5vw"
          loading="eager"
          className="pointer-events-none absolute bottom-0 right-0 h-[min(80dvh,55vw)] w-auto max-w-none mask-[radial-gradient(ellipse_at_100%_100%,black_45%,transparent_80%)]"
        />
        <Image src="/teams/brand/s-arc-top.png" alt="" width={724} height={914} className="pointer-events-none absolute opacity-25 right-[-24dvh] top-[12dvh] w-auto h-[50dvh] origin-[63%_50%] rotate-[-30deg]" />
        <Image src="/teams/brand/s-arc-bottom.png" alt="" width={718} height={918} className="pointer-events-none absolute opacity-25 left-[-22dvh] bottom-[8dvh] w-auto h-[44dvh] origin-[36%_50%] rotate-[-30deg]" />

        <header className="relative z-10 flex items-center gap-[2vw] px-[5vw] pt-[4.5dvh]">
          <Image src="/teams/omnisource-logo.png" alt={company.name} width={1200} height={208} loading="eager" className="h-[calc(var(--u)*5.5)] w-auto shrink-0" />
          <span className="h-px flex-1 bg-[#c0232b]/70" />
          <p className="shrink-0 whitespace-nowrap text-[calc(var(--u)*1.6)] text-zinc-200">
            PEOPLE <span className="mx-[0.6em]">|</span> PROJECTS <span className="mx-[0.6em]">|</span> PROGRESS
          </p>
        </header>

        <div className="relative z-10 flex flex-1 items-center justify-center gap-[7vw] px-[5vw] pb-[7dvh]">
          {/* Portrait + script */}
          <div className="relative shrink-0">
            <Image
              src={member.photo}
              alt={member.name}
              width={1195}
              height={1500}
              sizes="60vh"
              loading="eager"
              className="h-[calc(var(--u)*64)] w-auto aspect-612/651 object-cover mask-[radial-gradient(ellipse_75%_65%_at_50%_42%,black_70%,transparent_100%)]"
            />
            <div className="absolute left-[-36%] top-[12%] rotate-[-18deg] select-none">
              <p className="font-script text-[calc(var(--u)*7.5)] leading-[1.05] text-white">
                Let&apos;s
                <br />
                <span className="ml-[0.5em]">Connect</span>
              </p>
              <span className="block ml-[45%] mt-[calc(var(--u)*-1.6)] h-px w-[60%] bg-[#c0232b]" />
            </div>
          </div>

          {/* Details */}
          <div className="flex w-[calc(var(--u)*62)] shrink-0 flex-col items-center text-center">
            <h1 className={`${nameSize} whitespace-nowrap font-semibold uppercase leading-none`}>{member.name}</h1>
            <p className="mt-[calc(var(--u)*1.2)] text-[calc(var(--u)*2.7)] font-light uppercase tracking-wide text-zinc-100">{member.title}</p>
            <span className="mt-[calc(var(--u)*2)] block h-px w-[calc(var(--u)*12)] bg-[#c0232b]" />

            <LinkGrid
              links={links}
              className="mt-[calc(var(--u)*4.5)] w-full gap-x-[4%] gap-y-[calc(var(--u)*1.8)]"
              itemClassName="w-[30.66%]"
              separatorClassName="after:right-[-6.5%]"
              labelClassName="text-[calc(var(--u)*1.6)]"
            />

            <SaveContact member={member} className="mt-[calc(var(--u)*4.5)] gap-(--u) rounded-[calc(var(--u)*1.4)] px-[calc(var(--u)*3)] py-[calc(var(--u)*2.1)] text-[calc(var(--u)*2.2)]" />

            <div className="mt-[calc(var(--u)*4.5)] flex w-full items-center gap-[calc(var(--u)*2)]">
              <span className="h-px flex-1 bg-[#c0232b]/60" />
              <p className="text-[calc(var(--u)*2.8)] font-light tracking-wide">One Source. Every Trade</p>
              <span className="h-px flex-1 bg-[#c0232b]/60" />
            </div>
            <svg viewBox="0 0 24 24" fill="#e0242d" className="mt-[calc(var(--u)*2.2)] h-auto w-[calc(var(--u)*3)]">
              {pinIcon}
            </svg>
            <address className="mt-(--u) text-[calc(var(--u)*1.9)] not-italic leading-snug text-zinc-50">
              {company.address.line1}
              <br />
              {company.address.line2}
            </address>
          </div>
        </div>

        <footer className="absolute inset-x-0 bottom-[4dvh] z-10 text-center text-[calc(var(--u)*1.7)] font-light text-zinc-200">
          DUBAI <span className="mx-[1.2em]">|</span> UAE <span className="mx-[1.2em]">|</span> BEYOND
        </footer>
      </div>
    </main>
  );
}
