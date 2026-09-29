This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Team cards (`/teams/<slug>`)

One-page digital business cards for the OmniSource team, ported in from the
standalone `linktree-omnisource` project. Phones get a single-screen portrait
layout; laptops and desktops get a two-column layout.

### Adding a team member

1. Put their portrait in `public/teams/people/` (1195×1500 works best, dark background).
2. Add an entry to the `team` array in `src/data/team.js`:

   ```js
   {
     slug: 'ahmed-khan',              // page: /teams/ahmed-khan
     name: 'Ahmed Khan',
     title: 'Operations Manager',
     photo: '/teams/people/ahmed-khan.jpg',
     email: 'ahmed@omnisource.global',
     phone: '+971500000000',          // used for Call and WhatsApp
     linkedin: 'https://www.linkedin.com/in/ahmed-khan', // optional
   }
   ```

   Optional: `whatsapp` if it differs from `phone`. Leave `linkedin` out entirely
   to hide that button — don't point it at a placeholder URL.

Company-wide details (website, address, company profile PDF) are in `company` in
the same file.

### Routes

| URL | What it is |
| --- | --- |
| `/teams/<slug>` | A team member's card |
| `/teams/<slug>/contact.vcf` | Their vCard (Save Contact Card) |
| `/teams` | Redirects to the Managing Director's card |

### Layout groups

The marketing site lives in the `src/app/(site)/` route group, whose layout adds
the footer, ScrollToTop and WhatsApp button. The cards sit outside that group so
they render full-screen with none of that chrome. Route groups don't affect URLs
— `/`, `/about`, `/contact` and `/services` are unchanged.

### Files

- `src/data/team.js`: team members and company details
- `src/app/NewComponents/TeamsPage/`: the card plus the company-profile popup and PDF viewer (PDF.js via `react-pdf`)
- `src/app/teams/`: card pages, the vCard route, and the local-font layout
- `src/app/fonts/`: Sora and Great Day font files
- `public/teams/`: background, scene, logo, S-arc decorations, portraits, and the
  company profile in two versions: `Omni_Source_Company_Profile.pdf` (print
  quality, ~16 MB, used for Download) and `..._web.pdf` (200 DPI, ~1.8 MB, shown
  in the popup)

### Licensing note

Great Day (`src/app/fonts/Great Day Personal Use.ttf`) is a **personal-use** font.
A commercial license from Billy Argel (billyargel@gmail.com) is required before
the site goes live. Sora is licensed under the SIL Open Font License
(`src/app/fonts/Sora-OFL.txt`).
