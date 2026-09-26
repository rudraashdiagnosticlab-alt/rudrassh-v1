import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/rudraash-logo.webp";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className={`inline-flex shrink-0 ${className}`}>
      <Image
        src={logo}
        alt={site.legalName}
        loading="eager"
        sizes="200px"
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
