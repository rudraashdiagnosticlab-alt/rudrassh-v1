// Lets any "Book" button on the page pre-fill the booking form and scroll to it.
export const BOOK_EVENT = "rudraash:book";
export const BOOK_SECTION_ID = "book";

export function requestBooking(item: string) {
  window.dispatchEvent(new CustomEvent<string>(BOOK_EVENT, { detail: item }));
  document
    .getElementById(BOOK_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
