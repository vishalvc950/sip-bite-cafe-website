import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Reveal from "./Reveal";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + galleryImages.length) % galleryImages.length,
      ),
    [],
  );

  // Keyboard controls + scroll lock + focus management for the lightbox
  useEffect(() => {
    if (openIndex === null) return;

    restoreFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);

    // Move focus into the dialog
    const t = window.setTimeout(() => {
      document.getElementById("lightbox-close")?.focus();
    }, 30);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(t);
      restoreFocusRef.current?.focus();
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : galleryImages[openIndex];

  return (
    <section id="gallery" className="grain scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-caramel-deep">
              Gallery
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
              A taste of the <em className="italic text-caramel">good life</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mocha">
              Golden crusts, slow pours and corners made for long conversations.
              Tap any photo to view it up close.
            </p>
          </div>
          <p className="hidden text-xs font-bold uppercase tracking-[0.18em] text-taupe md:block">
            {galleryImages.length} moments · preview photography
          </p>
        </Reveal>

        {/* Editorial masonry */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delay={(i % 3) * 70} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${img.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl text-left focus-visible:outline-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.orientation === "landscape" ? 1100 : img.orientation === "portrait" ? 760 : 820}
                  height={img.orientation === "landscape" ? 760 : img.orientation === "portrait" ? 1000 : 820}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/0 to-espresso/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg font-medium text-cream">
                    {img.caption}
                  </span>
                  <Maximize2 className="h-4 w-4 text-cream/90" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${openIndex! + 1} of ${galleryImages.length}: ${current.caption}`}
          className="animate-fade fixed inset-0 z-[70] flex flex-col bg-espresso/97 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/70">
              {openIndex! + 1} / {galleryImages.length}
            </p>
            <button
              id="lightbox-close"
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center gap-3 sm:gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <figure className="animate-lightbox flex max-h-full min-w-0 flex-col items-center" key={current.id}>
              <img
                src={current.full}
                alt={current.alt}
                className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-soft"
              />
              <figcaption className="mt-4 text-center font-display text-lg italic text-cream/90">
                {current.caption}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="hidden text-center text-[11px] text-cream/50 sm:block">
            Use ← → arrow keys to browse · Esc to close
          </p>
        </div>
      )}
    </section>
  );
}
