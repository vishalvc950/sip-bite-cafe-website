import { MapPin, Phone, Navigation, Clock, LocateFixed } from "lucide-react";
import Reveal from "./Reveal";
import { business, formatAddress } from "../data/business";

export default function Contact() {
  return (
    <section id="contact" className="grain scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-caramel-deep">
                Visit &amp; Contact
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
                Come find your <em className="italic text-caramel">happy place</em>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-mocha">
                We&apos;re right opposite the GNDU campus — easy to reach, hard
                to leave. Call ahead for takeaway, or just follow the smell of
                fresh coffee.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-8 space-y-5">
              <div className="flex gap-4 rounded-2xl border border-sand/70 bg-cream p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-parchment text-caramel-deep">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe">
                    Address
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-cocoa">
                    {business.fullName}
                    <br />
                    {formatAddress()}
                  </p>
                </div>
              </div>

              <a
                href={business.phoneHref}
                className="group flex gap-4 rounded-2xl border border-sand/70 bg-cream p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-caramel/50 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-parchment text-caramel-deep transition-colors group-hover:bg-caramel group-hover:text-cream">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe">
                    Call us
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-espresso">
                    {business.phoneDisplay}
                  </p>
                </div>
              </a>

              <div className="flex gap-4 rounded-2xl border border-sand/70 bg-cream p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-parchment text-caramel-deep">
                  <LocateFixed className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe">
                    Plus Code
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cocoa">
                    {business.plusCode}
                  </p>
                </div>
              </div>

              {business.openingHours && (
                <div className="flex gap-4 rounded-2xl border border-sand/70 bg-cream p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-parchment text-caramel-deep">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe">
                      Hours
                    </p>
                    <p className="mt-1 text-sm font-semibold text-cocoa">
                      {business.openingHours}
                    </p>
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-espresso px-6 py-4 text-sm font-bold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-espresso/20 px-6 py-[14px] text-sm font-bold text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] border border-sand shadow-soft sm:min-h-[480px]">
              <iframe
                title={`Map showing the location of ${business.fullName} in ${business.locale}`}
                src={business.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[18%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/55 to-transparent p-5 pt-14">
                <p className="text-xs font-bold text-cream">
                  {business.fullName} · {business.locale}, Punjab
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
