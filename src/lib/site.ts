// Central business details, taken from the current rudraash.com home page.
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
  email: "rudraashdiagnostics@gmail.com",
  locations: ["Dindigul", "Trichy", "Thanjavur"],
  founded: 2021,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61590859138940",
    instagram: "https://www.instagram.com/rudraashdiagnosticlab/",
    youtube: "https://www.youtube.com/@rudraashdiagnosticlab",
  },
} as const;

export const nav = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const telHref = `tel:${site.phone.replace(/\s+/g, "")}`;
export const mailHref = `mailto:${site.email}`;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
