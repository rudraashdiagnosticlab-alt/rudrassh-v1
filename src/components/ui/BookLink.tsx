"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOK_SECTION_ID, BOOKING_FALLBACK, hasBookingForm } from "@/lib/booking";

// "Book a Test" link: scrolls to this page's booking form, or opens the one on Contact Us.
export function BookLink({
  className = "",
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const href = hasBookingForm(pathname) ? `#${BOOK_SECTION_ID}` : BOOKING_FALLBACK;
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
