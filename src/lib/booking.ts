import { packages, services } from "@/lib/data";

// Lets any "Book" button on the page pre-fill the booking form and scroll to it.
export const BOOK_EVENT = "rudraash:book";
export const BOOK_SECTION_ID = "book";

// Pages that render <BookingSection />, including every service and package page (but not a 404 under them).
// "Book" links on any other page go to Contact Us.
const BOOKING_PAGES = new Set([
  "/",
  "/services",
  "/packages",
  "/contact-us",
  ...services.map((s) => `/services/${s.slug}`),
  ...packages.map((p) => `/packages/${p.slug}`),
]);
export const BOOKING_FALLBACK = `/contact-us#${BOOK_SECTION_ID}`;
export const hasBookingForm = (pathname: string) => BOOKING_PAGES.has(pathname);

export type BookingRequest = { item: string; note?: string };

// `item` is a package or service name; `note` (e.g. the chosen profile) goes into the message.
export function requestBooking(item: string, note?: string) {
  window.dispatchEvent(new CustomEvent<BookingRequest>(BOOK_EVENT, { detail: { item, note } }));
  document
    .getElementById(BOOK_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
