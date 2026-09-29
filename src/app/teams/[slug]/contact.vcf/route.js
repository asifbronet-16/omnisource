// Serves each member's "Save Contact Card" vCard at /teams/<slug>/contact.vcf
import { company, getMember, team } from '@/data/team';

export const dynamicParams = false;

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

// vCard text values must escape backslashes, commas and semicolons
const esc = (value) => String(value).replace(/[\\,;]/g, (c) => `\\${c}`);

function buildVCard(member) {
  const [first, ...rest] = member.name.split(' ');
  const { address } = company;
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(rest.join(' '))};${esc(first)};;;`,
    `FN:${esc(member.name)}`,
    `ORG:${esc(company.name)}`,
    `TITLE:${esc(member.title)}`,
    `TEL;TYPE=CELL,VOICE:${member.phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${member.email}`,
    `URL:${company.website}`,
    `ADR;TYPE=WORK:;;${esc(`${address.line1}, ${address.line2}`)};${esc(address.city)};;;${esc(address.country)}`,
    'END:VCARD',
    '',
  ].join('\r\n');
}

export async function GET(request, { params }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return new Response('Not found', { status: 404 });

  const fileName = member.name.replace(/\s+/g, '-');
  return new Response(buildVCard(member), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${fileName}.vcf"`,
    },
  });
}
