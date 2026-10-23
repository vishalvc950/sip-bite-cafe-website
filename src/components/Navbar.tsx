import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { cn } from "../utils/cn";
import { business } from "../data/business";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape + lock scroll while the mobile panel is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-cream/95 shadow-[0_8px_30px_-18px_rgb(42_27_18/0.35)] backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "py-3" : "py-4 sm:py-6",
        )}
      >
        {/* Wordmark */}
        <a
          href="#home"
          className="group flex items-baseline gap-2"
          aria-label="Sip and Bite — back to top"
        >
          <span className="font-display text-xl font-semibold tracking-wide text-espresso sm:text-2xl">
            SIP <span className="text-caramel">&amp;</span> BITE
          </span>
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-mocha sm:inline">
            · {business.locale}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-cocoa transition-colors hover:text-espresso"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-caramel transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa hover:shadow-card"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Explore Menu
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand bg-cream text-espresso transition-colors hover:bg-parchment lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="space-y-1 border-t border-sand/70 px-5 pb-6 pt-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-display text-lg font-medium text-cocoa transition-colors hover:bg-parchment hover:text-espresso"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-espresso px-5 py-3.5 text-sm font-bold text-cream"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
