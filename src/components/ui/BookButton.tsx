"use client";

import { requestBooking } from "@/lib/booking";

export function BookButton({
  item,
  note,
  label,
  className = "",
  children,
}: {
  item: string;
  note?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => requestBooking(item, note)} aria-label={label} className={className}>
      {children}
    </button>
  );
}
