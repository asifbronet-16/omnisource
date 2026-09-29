import { notFound } from 'next/navigation';
import ContactCard from '@/app/NewComponents/TeamsPage/ContactCard';
import { company, getMember, team } from '@/data/team';

// Only the slugs in the team array exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} - ${member.title} at OmniSource`,
    description: `${company.name} - One Source. Every Trade.`,
  };
}

export default async function MemberPage({ params }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  return <ContactCard member={member} />;
}
