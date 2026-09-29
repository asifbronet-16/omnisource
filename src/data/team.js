// Shared company details shown on every card and in every vCard
export const company = {
  name: 'OmniSource Workforce Solutions',
  website: 'https://omnisource.global',
  // Company profile. The popup shows the light web copy (pages at 200 DPI,
  // ~1.8 MB); Download gives the original print-quality PDF (~16 MB).
  profile: {
    pdf: '/teams/Omni_Source_Company_Profile.pdf',
    webPdf: '/teams/Omni_Source_Company_Profile_web.pdf',
    downloadName: 'OmniSource-Company-Profile.pdf',
  },
  address: {
    line1: 'Office No: 802 - Centurion Star Building',
    line2: 'Block B Port Saeed, Deira',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
};

// One entry per team member. The page lives at /teams/<slug>.
// The Managing Director is the default card: /teams goes there.
//
// Fields:
//   slug      URL segment, lowercase with dashes (e.g. 'jasim-adnan')
//   name      Full name
//   title     Job title
//   photo     Portrait in /public/teams/people (1195x1500 works best);
//             '/teams/people/placeholder.jpg' until a real photo is available
//   email     Work email
//   phone     International format with + and no spaces (used for Call and WhatsApp)
//   whatsapp  Optional, only if different from phone
//   linkedin  Optional; the LinkedIn button is hidden when missing
export const team = [
  {
    slug: 'jasim-adnan',
    name: 'Jasim Adnan',
    title: 'Managing Director',
    photo: '/teams/people/jasim-adnan.jpg',
    email: 'Jasim@omnisource.global',
    phone: '+971503441039',
    linkedin: 'https://www.linkedin.com/in/jasim-adnan-/',
  },
  {
    slug: 'surak-abbas',
    name: 'Surak Abbas',
    title: 'Operations Executive',
    photo: '/teams/people/surak-abbas.jpg',
    email: 'Surak@omnisource.global',
    phone: '+971503853234',
    linkedin: 'https://www.linkedin.com', // TODO: profile URL
  },
  {
    slug: 'vaishak-valiya-valappil',
    name: 'Vaishak Valiya Valappil',
    title: 'Senior Operations Manager',
    photo: '/teams/people/vaishak-valiya-valappil.jpg',
    email: 'Vaishak@omnisource.global',
    phone: '+971542158345',
    linkedin: 'https://www.linkedin.com', // TODO: profile URL
  },
];

export const defaultMember = team.find((member) => member.title === 'Managing Director') ?? team[0];

export function getMember(slug) {
  return team.find((member) => member.slug === slug);
}
