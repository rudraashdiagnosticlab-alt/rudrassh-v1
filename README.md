# Rudraash Diagnostics & Labs — Website

Marketing website for Rudraash Diagnostics & Labs Pvt Ltd, built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://www.example.com`) in production. Canonical URLs, link previews, `/sitemap.xml` and `/robots.txt` are built from it; without it they point at `localhost`.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about-us` | About Us: who we are, vision & mission, the three labs |
| `/services` | Services: the 9 lab services, with booking |
| `/services/<slug>` | One page per service (e.g. `/services/hematology`): overview, department head, test lists, related packages, booking |
| `/packages` | Packages: all 16 health packages, with booking |
| `/packages/<slug>` | One page per package (e.g. `/packages/diabetes-package`): overview, profile options with their tests, sample & preparation, who it's recommended for, related services, booking |
| `/training-academy` | Training Academy: programs, collaborations, enquiry form |
| `/contact-us` | Contact Us: lab addresses, home collection numbers, hours, map, booking |

URLs match the old WordPress site. A few old URLs redirect (see `next.config.ts`): `/book-a-test` goes to the booking form on Contact Us; the old Gestational Marker Studies, Karyotyping and Sequencing sub-pages go to their sections of `/services/genetic-studies`; `/services/allergy-profile` goes to the Allergy Profile package; and the old Fertility package URL (`/packages/fertility-profile-men-women-2`) drops its `-2` suffix.

## Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, email, social links, menu, lab branches (address, numbers, hours) | `src/lib/site.ts` |
| Services, packages, page intros, vision & mission, academy, testimonials | `src/lib/data.ts` |
| Service page content (overview, department heads, test lists, related packages) | `src/lib/services.ts` |
| Package page content (overview, profile options, sample & fasting, recommended for, related services) | `src/lib/packages.ts` |
| Brand colours, fonts, gradients | `src/app/globals.css` (`@theme`) |
| Pages | `src/app/*/page.tsx` |
| Header, top bar, footer, mobile bar (shared by every page) | `src/components/layout/*` |
| Sections used on several pages | `src/components/sections/*` |
| Home-only sections (banner, search) | `src/components/home/*` |

All text, services, packages, testimonials, lab addresses and contact details come from the current rudraash.com pages. One thing is an assumption and should be confirmed: the WhatsApp number (the main phone number is used, since rudraash.com lists none). The contact email is contact@rudraash.com (a Hostinger mailbox).

### Home banner photo

The banner uses `src/assets/hero-lab-test.jpg`, a placeholder photo by the CDC on Unsplash (free under the Unsplash License). To use a photo of the Rudraash lab, replace that file with a portrait or square image (at least 1600px wide), with the person near the top. It fills the right half of the banner on desktop and the top of the banner on mobile. Next.js resizes and converts it to WebP automatically.

## Brand palette (sampled from the logo)

| Token | Hex | Use |
| --- | --- | --- |
| `brand-800` | `#3C2E80` | Indigo: dark surfaces, headings accent |
| `brand-600` | `#663E98` | Violet: primary |
| `brand-500` | `#7C4A9D` | Purple |
| `magenta-600` | `#CE158B` | Magenta: CTA gradient start |
| `magenta-500` | `#ED067B` | Pink accent |
| `magenta-300` | `#F68CC1` | Accent on dark backgrounds |
| `night` | `#120B2E` | Deep indigo for dark sections |
| `ink-700` | `#373536` | Charcoal body text |

The logo also contains orange; it is used in the logo only, not as a page colour.

## Booking flow

The booking form (`#book`) appears on Home, Services, Packages and Contact Us. Every "Book" button, the hero search and the form feed into it. "Book a Test" in the header opens the form on the current page, or the one on Contact Us from pages that don't have one. On submit it validates the name, mobile number and location, then opens WhatsApp with the booking details pre-filled to the number in `site.ts`. The Training Academy enquiry form works the same way. Swap `onSubmit` in `src/components/sections/BookingForm.tsx` (and `AcademyForm.tsx`) for an API call if you later add a backend or CRM.
