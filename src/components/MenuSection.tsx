import { useMemo, useState } from "react";
import { Info, Plus } from "lucide-react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import { MENU_CATEGORIES, menuItems, formatINR, type MenuCategory } from "../data/menu";
import { business } from "../data/business";

type Filter = "All" | MenuCategory;

export default function MenuSection() {
  const [active, setActive] = useState<Filter>("All");

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", menuItems.length]]);
    MENU_CATEGORIES.forEach((c) =>
      map.set(c, menuItems.filter((i) => i.category === c).length),
    );
    return map;
  }, []);

  const visible = useMemo(
    () => (active === "All" ? menuItems : menuItems.filter((i) => i.category === active)),
    [active],
  );

  const filters: Filter[] = ["All", ...MENU_CATEGORIES];

  return (
    <section id="menu" className="scroll-mt-24 bg-parchment/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-caramel-deep">
            The Menu Board
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
            Something for <em className="italic text-caramel">every craving</em>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mocha">
            From seared smash burgers to slow-brewed chai and thick shakes —
            find your next favourite bite.
          </p>
        </Reveal>

        {/* Demo notice */}
        <Reveal delay={80}>
          <p className="mt-5 inline-flex items-start gap-2 rounded-lg border border-caramel/40 bg-caramel/10 px-4 py-2.5 text-xs font-semibold leading-relaxed text-caramel-deep">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Sample menu shown for preview — final dishes &amp; prices will be
            confirmed by the cafe before launch.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={120}>
          <div
            aria-label="Menu categories"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(f)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4.5 py-2.5 text-sm font-bold transition-all duration-300",
                    isActive
                      ? "border-espresso bg-espresso text-cream shadow-card"
                      : "border-sand bg-cream text-cocoa hover:border-caramel/60 hover:text-espresso",
                  )}
                >
                  {f}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                      isActive ? "bg-cream/20 text-cream" : "bg-parchment text-mocha",
                    )}
                  >
                    {counts.get(f) ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid — keyed by filter so cards re-animate on change */}
        <div
          key={active}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((item, i) => (
            <article
              key={item.id}
              className="animate-fade group flex flex-col overflow-hidden rounded-2xl border border-sand/70 bg-cream shadow-[0_2px_10px_-6px_rgb(42_27_18/0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={940}
                  height={700}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-espresso/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold leading-snug text-espresso">
                    {item.name}
                  </h3>
                  <p className="whitespace-nowrap font-display text-lg font-semibold text-caramel-deep">
                    {formatINR(item.price)}
                  </p>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mocha">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-parchment px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-mocha"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${item.name} — contact the cafe`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand text-cocoa transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-sand bg-cream p-12 text-center">
            <p className="font-display text-xl font-semibold text-espresso">
              Nothing here just yet
            </p>
            <p className="mt-2 text-sm text-mocha">
              This category is being updated — check back soon.
            </p>
          </div>
        )}

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-mocha">
            Craving something specific?{" "}
            <a
              href={business.phoneHref}
              className="font-bold text-caramel-deep underline decoration-caramel/40 underline-offset-4 transition-colors hover:text-espresso"
            >
              Call the cafe
            </a>{" "}
            and we&apos;ll tell you what&apos;s fresh today.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
