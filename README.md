# Rudraash Diagnostics & Labs — Website

Marketing website for Rudraash Diagnostics & Labs Pvt Ltd, built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://www.example.com`) in production so social share images resolve correctly.

## Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, email, locations, social links | `src/lib/site.ts` |
| Services, packages, about text, vision & mission, testimonials | `src/lib/data.ts` |
| Brand colours, fonts, gradients | `src/app/globals.css` (`@theme`) |
| Page sections | `src/components/home/*` |

Home page text, services, packages, testimonials and contact details come from the current rudraash.com home page. Two things are assumptions and should be confirmed: the WhatsApp number (the main phone number is used, since rudraash.com lists none) and the contact email (rudraashdiagnostics@gmail.com is used; the old site also shows info@rudraash.com).

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
| `sunset-600` | `#EF4D25` | Red-orange accent |
| `sunset-400` | `#F7941D` | Orange accent |
| `ink-700` | `#373536` | Charcoal body text |

## Booking flow

Every "Book" button, the hero search and the booking form feed into one form (`#book`). On submit it validates the name and mobile number, then opens WhatsApp with the booking details pre-filled to the number in `site.ts`. Swap `onSubmit` in `src/components/home/BookingForm.tsx` for an API call if you later add a backend or CRM.
