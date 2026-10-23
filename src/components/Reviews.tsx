import { Star, ExternalLink, MessageSquareHeart } from "lucide-react";
import Reveal from "./Reveal";
import { business } from "../data/business";

/**
 * No review quotes are invented here. We surface only the aggregate figure the
 * client supplied (attributed to Google Maps) and link out to the live listing
 * where guests can read and write real reviews.
 */
export default function Reviews() {
  return (
    <section id="reviews" className="grain scroll-mt-24 bg-espresso py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-caramel">
              Word of mouth
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Loved by the <em className="italic text-caramel">neighborhood</em>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
              The best reviews are the ones our guests write themselves. Read
              what people are saying about Sip &amp; Bite on Google — or drop by
              and give them something new to talk about.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-cream px-6 py-3.5 text-sm font-bold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-parchment"
              >
                Read reviews on Google
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-cream/25 px-6 py-[13px] text-sm font-bold text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
              >
                <MessageSquareHeart className="h-4 w-4" aria-hidden="true" />
                Share your experience
              </a>
            </div>
          </Reveal>

          {/* Rating card */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-cream/12 bg-cocoa/60 p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-caramel/15 blur-2xl"
              />
              <div className="flex items-end gap-4">
                <p className="font-display text-7xl font-semibold leading-none text-cream sm:text-8xl">
                  {business.rating.toFixed(1)}
                </p>
                <div className="pb-2">
                  <div className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-caramel text-caramel" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-cream/60">
                    {business.reviewCount} reviews
                  </p>
                </div>
              </div>

              <div className="my-7 h-px w-full bg-cream/12" aria-hidden="true" />

              <p className="text-sm leading-relaxed text-cream/70">
                Rating as listed on the cafe&apos;s Google Maps profile for{" "}
                <span className="font-semibold text-cream">{business.fullName}</span>,{" "}
                {business.locale}. Tap through to see every review in full.
              </p>

              <p className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-caramel">
                <Star className="h-3.5 w-3.5 fill-caramel" aria-hidden="true" />
                {business.ratingVerified
                  ? "Verified via Google Maps"
                  : "As reported on Google Maps"}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
