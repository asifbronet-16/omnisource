import { redirect } from 'next/navigation';
import { defaultMember } from '@/data/team';

// /teams has no listing page of its own
export default function TeamsIndex() {
  redirect(`/teams/${defaultMember.slug}`);
}
