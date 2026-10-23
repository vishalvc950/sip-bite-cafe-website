import { MapPin, Navigation, BookOpen, Phone, UtensilsCrossed } from "lucide-react";
import { business } from "../data/business";

const HERO_MAIN =
  "https://images.pexels.com/photos/38895878/pexels-photo-38895878.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900";
const HERO_SIDE =
  "https://images.pexels.com/photos/32542054/pexels-photo-32542054.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=760";

export default function Hero() {
  return (
    <section id="home" className="grain relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Ambient warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-caramel/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-72 h-[420px] w-[420px] rounded-full bg-terracotta/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <p
              className="animate-rise inline-flex items-center gap-2 rounded-full border border-sand bg-cream px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mocha"
              style={{ animationDelay: "60ms" }}
            >
              <MapPin className="h-3.5 w-3.5 text-caramel" aria-hidden="true" />
              Opp. GNDU Campus · {business.locale}, Punjab
            </p>

            <h1
              className="animate-rise mt-6 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-espresso sm:text-6xl lg:text-[4.4rem]"
              style={{ animationDelay: "140ms" }}
            >
              Good Food.
              <br />
              Great Sips.
              <br />
              <em className="font-medium italic text-caramel">Better Moments.</em>
            </h1>

            <p
              className="animate-rise mt-6 max-w-md text-base leading-relaxed text-mocha sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              Your neighborhood spot for delicious bites, refreshing sips, and
              moments worth sharing — right on the Dinanagar–Narot Jaimal Singh
              Road.
            </p>

            <div
              className="animate-rise mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#menu"
                className="group inline-flex items-center gap-2.5 rounded-full bg-espresso px-7 py-4 text-sm font-bold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa"
              >
                <BookOpen className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true" />
                Explore Our Menu
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-espresso/20 bg-transparent px-7 py-[14px] text-sm font-bold text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Find Us
              </a>
            </div>

            <ul
              className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.16em] text-taupe"
              style={{ animationDelay: "380ms" }}
            >
              <li className="flex items-center gap-2">
                <UtensilsCrossed className="h-3.5 w-3.5 text-caramel" aria-hidden="true" />
                Walk-ins welcome
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-caramel" aria-hidden="true" />
                {business.phoneDisplay}
              </li>
            </ul>
          </div>

          {/* Imagery */}
          <div className="relative lg:col-span-6">
            <div className="animate-rise relative" style={{ animationDelay: "200ms" }}>
              {/* Offset frame accent */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] border-2 border-caramel/35 sm:block"
              />
              <img
                src={HERO_MAIN}
                alt="A cheeseburger with melted cheddar and crispy fries served on a rustic wooden table at the cafe"
                width={1200}
                height={900}
                fetchPriority="high"
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
              />

              {/* Overlapping portrait shot */}
              <img
                src={HERO_SIDE}
                alt="Tall glass of iced coffee with milk foam and ice"
                width={600}
                height={760}
                className="absolute -bottom-10 -left-4 hidden w-36 rounded-2xl border-4 border-cream object-cover shadow-card sm:block sm:w-44 lg:-left-10 lg:w-52"
              />

              {/* Floating chip */}
              <div className="absolute -top-5 left-6 flex items-center gap-2 rounded-full bg-cream px-4 py-2.5 shadow-card">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-caramel/15">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-caramel-deep" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <line x1="6" x2="6" y1="2" y2="4" />
                    <line x1="10" x2="10" y1="2" y2="4" />
                    <line x1="14" x2="14" y1="2" y2="4" />
                  </svg>
                </span>
                <span className="text-xs font-bold text-cocoa">Specialty brews &amp; thick shakes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-20 pb-4 sm:mt-24">
          <div className="dotted-rule w-full" aria-hidden="true" />
          <div className="grid gap-4 py-6 text-center sm:grid-cols-3 sm:text-left">
            {[
              { title: "Easy to find", note: "Opposite GNDU Campus, Dinanagar Road" },
              { title: "Made to order", note: "Burgers, pizza, snacks & fresh pours" },
              { title: "Made for lingering", note: "A warm spot to catch up with friends" },
            ].map((f) => (
              <div key={f.title} className="px-2">
                <p className="font-display text-lg font-semibold text-espresso">{f.title}</p>
                <p className="mt-1 text-sm text-mocha">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
