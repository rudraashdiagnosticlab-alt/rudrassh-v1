// Central business details, taken from the current rudraash.com pages.
export const site = {
  name: "Rudraash Diagnostics & Labs",
  legalName: "Rudraash Diagnostics & Labs Pvt Ltd",
  shortName: "Rudraash",
  tagline: "The Diagnostic Care You Deserve, From Experts You Trust",
  description:
    "Explore affordable health checkup packages at Rudraash Diagnostics & Labs. Choose preventive health screenings, blood tests, and diagnostic packages with accurate results and expert care.",
  blurb:
    "Rudraash Lab offers cutting-edge diagnostic services with a strong focus on care, comfort, and accuracy. We help patients and doctors make informed decisions with confidence.",

  phone: "+91 91235 35501",
  // Assumes the main number is on WhatsApp; rudraash.com doesn't list a WhatsApp number.
  whatsapp: "919123535501", // digits only, with country code
  email: "contact@rudraash.com",
  locations: ["Dindigul", "Trichy", "Thanjavur"],
  founded: 2021,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61590859138940",
    instagram: "https://www.instagram.com/rudraashdiagnosticlab/",
    youtube: "https://www.youtube.com/@rudraashdiagnosticlab",
  },
} as const;

export type Lab = {
  city: (typeof site.locations)[number];
  address: string;
  phones: string[]; // home collection numbers
  whatsapp: string; // gets form leads for this lab; digits only, with country code
  hours: string;
  note?: string;
};

// Branch details from rudraash.com/contact-us, in the order the labs opened.
export const labs: Lab[] = [
  {
    city: "Dindigul",
    address: "No. 23, Thiruvalluvar Salai, Spencer Compound, Dindigul – 624 001",
    phones: ["81221 60930", "86107 00553"],
    whatsapp: "918122160930",
    hours: "7 am – 9 pm",
    note: `Founded in ${site.founded}`,
  },
  {
    city: "Trichy",
    address: "Old No. P3, New No. 23, Vivekananda Nagar, Woraiyur, Trichy – 620 003",
    phones: ["75502 69630", "91235 35501"],
    whatsapp: "919123535501",
    hours: "Open 24 × 7",
  },
  {
    city: "Thanjavur",
    address: "Bindhu Complex, Ramakrishna Puram, Pudukottai Road, Thanjavur – 613 007",
    phones: ["99521 13825"],
    whatsapp: "919952113825",
    hours: "7 am – 9 pm",
  },
];

export type NavItem = { label: string; href: string; menu?: "services" | "packages" };

// Same URLs as the old WordPress site, so existing links keep working.
export const nav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Packages", href: "/packages", menu: "packages" },
  { label: "Training Academy", href: "/training-academy" },
  { label: "Contact Us", href: "/contact-us" },
];

export const telHref = `tel:${site.phone.replace(/\s+/g, "")}`;
export const mailHref = `mailto:${site.email}`;
export const phoneHref = (phone: string) => `tel:+91${phone.replace(/\D/g, "")}`;
export const mapEmbedUrl = (address: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=15&output=embed`;
export const directionsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export function whatsappHref(message?: string, number: string = site.whatsapp) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// The WhatsApp number a form sends to for the chosen lab; the main number if none is chosen.
export const labWhatsapp = (city: string) => labs.find((l) => l.city === city)?.whatsapp ?? site.whatsapp;
