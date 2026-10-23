import { MapPin, Phone, ArrowUp } from "lucide-react";
import { business, formatAddress } from "../data/business";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso pb-24 pt-16 text-cream md:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-wide">
              SIP <span className="text-caramel">&amp;</span> BITE
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              {business.description}
            </p>
            <a
              href="#home"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-caramel transition-colors hover:text-cream"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-semibold text-cream/80 transition-colors hover:text-caramel"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50">
              Find us
            </p>
            <address className="mt-4 space-y-3 not-italic">
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden="true" />
                {formatAddress()}
              </p>
              <a
                href={business.phoneHref}
                className="flex items-center gap-2.5 text-sm font-semibold text-cream/80 transition-colors hover:text-caramel"
              >
                <Phone className="h-4 w-4 shrink-0 text-caramel" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </address>
            <p className="mt-4 text-xs text-cream/45">
              Opening hours will be published here once confirmed by the cafe.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/12 pt-6">
          <p className="text-[11px] leading-relaxed text-cream/40">
            Menu items, prices and photography shown on this site are
            illustrative previews pending the cafe&apos;s official details.
          </p>
          <p className="mt-3 text-xs text-cream/55">
            © {year} {business.fullName}, {business.locale}, Punjab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
