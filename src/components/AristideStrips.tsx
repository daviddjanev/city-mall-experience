import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, MapPin, Clock, Phone, Sparkles, Tag, Image as ImageIcon } from "lucide-react";
import { businesses } from "@/data/businesses";

export function AristideStrips() {
  const [active, setActive] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const current = active !== null ? businesses[active] : null;
  const opened = openIdx !== null ? businesses[openIdx] : null;

  return (
    <section className="relative w-full bg-ink text-cream overflow-hidden">
      <div className="relative z-10 flex items-end justify-between px-6 md:px-10 pt-24 pb-16">
        <div>
          <p className="font-mono text-[11px] tracking-[0.4em] text-cream/50 mb-4">
            — DIRECTORY / 008
          </p>
          <h2 className="font-display font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.02em]">
            <span className="italic font-extralight">Eight</span>{" "}
            <span className="font-semibold">Houses.</span>
            <br />
            <span className="italic font-extralight">One</span>{" "}
            <span className="font-semibold">Address.</span>
          </h2>
        </div>
        <div className="hidden md:block font-mono text-[11px] tracking-[0.3em] text-cream/50 text-right leading-relaxed max-w-[14rem]">
          TAP A STRIP TO
          <br />
          OPEN THE BRAND.
        </div>
      </div>

      <div
        className="relative flex w-full px-6 md:px-10 gap-2 md:gap-3"
        style={{ height: "min(78vh, 760px)" }}
      >
        {businesses.map((b, i) => {
          const isActive = active === i;
          const isDimmed = active !== null && !isActive;
          return (
            <button
              key={b.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive((cur) => (cur === i ? null : cur))}
              onFocus={() => setActive(i)}
              onBlur={() => setActive((cur) => (cur === i ? null : cur))}
              onClick={() => setOpenIdx(i)}
              className="group relative h-full overflow-hidden rounded-md outline-none ring-0 focus-visible:ring-2 focus-visible:ring-cream/60 cursor-pointer"
              style={{
                flex: isActive ? "8 1 0%" : active !== null ? "0.7 1 0%" : "1 1 0%",
                transition:
                  "flex-grow 900ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms ease",
                filter: isDimmed
                  ? "saturate(0.6) brightness(0.7)"
                  : "saturate(1.05) brightness(1)",
              }}
              aria-label={b.name}
            >
              <img
                src={b.card}
                alt={b.name}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  transform: isActive ? "scale(1.02)" : "scale(1.15)",
                  transition: "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                loading="lazy"
              />

              <span className="absolute left-3 top-3 z-10 font-mono text-[10px] tracking-[0.3em] text-cream/80">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className="absolute left-1/2 bottom-6 z-10 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-cream/85 whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "translateX(-50%) rotate(180deg)",
                  opacity: isActive ? 0 : 1,
                  transition: "opacity 300ms ease",
                }}
              >
                {b.name.toUpperCase()}
              </span>

              <div
                className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 600ms ease 200ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) 200ms",
                }}
              >
                <p className="font-mono text-[10px] tracking-[0.3em] text-cream/60 mb-2">
                  — {b.category.toUpperCase()}
                </p>
                <h3 className="font-display font-light text-3xl md:text-5xl leading-[0.95] tracking-[-0.02em]">
                  {b.name}
                </h3>
                {b.tagline && (
                  <p className="mt-3 font-display italic text-base md:text-lg text-cream/80">
                    {b.tagline}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-8 mt-4 font-mono text-[10px] tracking-[0.35em] text-cream/50">
        <span>NOW VIEWING</span>
        <span className="text-cream/80">
          {current ? current.name.toUpperCase() : "— SELECT A STRIP —"}
        </span>
        <span>
          {String((active ?? 0) + (active !== null ? 1 : 0)).padStart(2, "0")} /{" "}
          {String(businesses.length).padStart(2, "0")}
        </span>
      </div>

      {/* Bento grid modal */}
      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-5xl w-[95vw] bg-ink text-cream border-cream/10 p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">{opened?.name}</DialogTitle>
          {opened && (
            <div className="p-5 md:p-7">
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[10px] tracking-[0.35em] text-cream/55">
                  — HOUSE / {String((openIdx ?? 0) + 1).padStart(2, "0")} OF 08
                </p>
                <p className="font-mono text-[10px] tracking-[0.35em] text-cream/55">
                  {opened.category.toUpperCase()}
                </p>
              </div>

              <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(110px,auto)]">
                {/* Brand title block */}
                <div className="col-span-12 md:col-span-7 row-span-2 rounded-2xl border border-cream/10 bg-gradient-to-br from-cream/[0.04] to-transparent p-6 md:p-8 flex flex-col justify-end relative overflow-hidden">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-cream/50 mb-3">— BRAND</p>
                  <h2 className="font-display font-light text-4xl md:text-6xl leading-[0.92] tracking-[-0.02em]">
                    <span className="italic font-extralight">{opened.name.split(" ")[0]}</span>
                    {opened.name.split(" ").slice(1).join(" ") && (
                      <>
                        {" "}
                        <span className="font-semibold">
                          {opened.name.split(" ").slice(1).join(" ")}
                        </span>
                      </>
                    )}
                  </h2>
                  {opened.tagline && (
                    <p className="mt-4 font-display italic text-cream/75 text-lg">
                      {opened.tagline}
                    </p>
                  )}
                </div>

                {/* Hero image */}
                <div className="col-span-12 md:col-span-5 row-span-2 rounded-2xl overflow-hidden border border-cream/10 relative group">
                  <img
                    src={opened.card}
                    alt={opened.name}
                    className="w-full h-full object-cover min-h-[220px] transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 backdrop-blur px-2.5 py-1 font-mono text-[9px] tracking-[0.3em] text-cream/80">
                    <ImageIcon className="h-3 w-3" /> COVER
                  </span>
                </div>

                {/* Category */}
                <div className="col-span-6 md:col-span-3 rounded-2xl border border-cream/10 bg-cream/[0.03] p-5 flex flex-col justify-between">
                  <Tag className="h-4 w-4 text-gold" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.3em] text-cream/50 mb-1">CATEGORY</p>
                    <p className="font-display text-lg leading-tight">{opened.category}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="col-span-6 md:col-span-3 rounded-2xl border border-cream/10 bg-cream/[0.03] p-5 flex flex-col justify-between">
                  <Clock className="h-4 w-4 text-gold" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.3em] text-cream/50 mb-1">HOURS</p>
                    <p className="font-display text-lg leading-tight">09:00 — 22:00</p>
                  </div>
                </div>

                {/* Location */}
                <div className="col-span-12 md:col-span-6 rounded-2xl border border-cream/10 bg-cream/[0.03] p-5 flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.3em] text-cream/50 mb-1">LOCATION</p>
                    <p className="font-display text-base leading-tight">Štip City Mall · Štip</p>
                  </div>
                </div>

                {/* Highlight */}
                <div className="col-span-12 md:col-span-8 rounded-2xl border border-cream/10 bg-gradient-to-br from-gold/[0.08] via-transparent to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <p className="font-mono text-[10px] tracking-[0.3em] text-cream/55">SIGNATURE</p>
                  </div>
                  <p className="font-display italic text-cream/85 text-lg md:text-xl leading-snug">
                    {opened.tagline ?? "A house worth visiting."}
                  </p>
                </div>

                {/* Contact tile */}
                <div className="col-span-12 md:col-span-4 rounded-2xl border border-cream/10 bg-cream/[0.03] p-5 flex items-center gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.3em] text-cream/50 mb-1">CONTACT</p>
                    <p className="font-display text-base">In-store</p>
                  </div>
                </div>

                {/* CTA tile */}
                <div className="col-span-12 rounded-2xl border border-cream/15 bg-gradient-to-r from-cream/[0.05] to-transparent p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-cream/55 mb-1">— VISIT</p>
                    <p className="font-display text-cream/85">
                      Discover the full <span className="italic">{opened.name}</span> experience.
                    </p>
                  </div>
                  {opened.url && opened.url !== "#" ? (
                    <a
                      href={opened.url}
                      target={opened.url.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-cream text-ink px-6 py-3 font-mono text-[11px] tracking-[0.25em] hover:bg-cream/90 transition"
                    >
                      OPEN WEBSITE <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-cream/60">
                      COMING SOON
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
