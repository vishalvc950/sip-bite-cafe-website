import { Coffee, UtensilsCrossed, Users, ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { business } from "../data/business";

const ABOUT_IMG =
  "https://images.pexels.com/photos/30294329/pexels-photo-30294329.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1200";

const pillars = [
  {
    icon: Coffee,
    title: "Brews worth slowing down for",
    note: "Specialty coffee, thick shakes and slow-brewed masala chai — poured with care, every single cup.",
  },
  {
    icon: UtensilsCrossed,
    title: "A kitchen made for sharing",
    note: "Seared burgers, wood-fired pizzas and crispy snacks, prepared fresh and built to be passed around the table.",
  },
  {
    icon: Users,
    title: "Room to linger",
    note: "Whether it's a study break between lectures or a long evening with friends, there's always a chair for you.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[2rem] bg-caramel/15 sm:block"
            />
            <img
              src={ABOUT_IMG}
              alt="Warm cafe interior filled with greenery, soft light and comfortable seating"
              width={1000}
              height={1200}
              loading="lazy"
              className="relative aspect-[5/6] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute -right-3 bottom-6 flex items-center gap-2.5 rounded-xl bg-espresso px-4 py-3 shadow-card sm:-right-6">
              <MapPin className="h-4 w-4 text-caramel" aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/60">
                  Find us at
                </p>
                <p className="text-xs font-bold text-cream">Opp. GNDU Campus</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-caramel-deep">
                About Sip &amp; Bite
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
                A warm corner of{" "}
                <em className="italic text-caramel">{business.locale}</em>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mocha sm:text-lg">
                Sip &amp; Bite is the neighborhood cafe you wander to when you
                want something good — a properly made coffee, a burger that
                needs two hands, a shake thick enough to share. It&apos;s a
                place for first dates, study sessions, family treats and
                everything in between.
              </p>
            </Reveal>

            <div className="mt-10 space-y-7">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-parchment text-caramel-deep">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-espresso">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-mocha">
                      {p.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-bold text-espresso"
              >
                <span className="border-b-2 border-caramel pb-0.5 transition-colors group-hover:border-espresso">
                  Plan your visit
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
