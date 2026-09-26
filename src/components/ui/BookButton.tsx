"use client";

import { requestBooking } from "@/lib/booking";

export function BookButton({
  item,
  label,
  className = "",
  children,
}: {
  item: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => requestBooking(item)} aria-label={label} className={className}>
      {children}
    </button>
  );
}
