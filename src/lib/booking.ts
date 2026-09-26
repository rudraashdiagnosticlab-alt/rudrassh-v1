// Lets any "Book" button on the page pre-fill the booking form and scroll to it.
export const BOOK_EVENT = "rudraash:book";
export const BOOK_SECTION_ID = "book";

// Pages that render <BookingSection />. "Book" links on any other page go to Contact Us.
export const BOOKING_PAGES = ["/", "/services", "/packages", "/contact-us"];
export const BOOKING_FALLBACK = `/contact-us#${BOOK_SECTION_ID}`;

export function requestBooking(item: string) {
  window.dispatchEvent(new CustomEvent<string>(BOOK_EVENT, { detail: item }));
  document
    .getElementById(BOOK_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
