"use client";

import { requestBooking } from "@/lib/booking";

export function BookButton({
  item,
  className = "",
  children,
}: {
  item: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => requestBooking(item)} className={className}>
      {children}
    </button>
  );
}
