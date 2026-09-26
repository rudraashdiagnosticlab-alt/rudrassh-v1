import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/site";
import { BOOK_SECTION_ID } from "@/lib/booking";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200/70 bg-white/90 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-[auto_auto_1fr] gap-2">
        <a
          href={telHref}
          aria-label="Call us"
          className="grid size-12 place-items-center rounded-full border border-ink-200 bg-white text-brand-700"
        >
          <Phone className="size-5" aria-hidden />
        </a>
        <a
          href={whatsappHref("Hi Rudraash, I'd like to book a test.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-12 place-items-center rounded-full border border-ink-200 bg-white text-brand-700"
        >
          <MessageCircle className="size-5" aria-hidden />
        </a>
        <a
          href={`#${BOOK_SECTION_ID}`}
          className="bg-cta-gradient flex items-center justify-center gap-2 rounded-full font-semibold text-white"
        >
          <CalendarCheck className="size-5" aria-hidden />
          Book a Test
        </a>
      </div>
    </div>
  );
}
