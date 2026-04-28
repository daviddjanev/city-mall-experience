import { useState } from "react";
import { businesses } from "@/data/businesses";

export function AristideStrips() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? businesses[active] : null;

  return (
    <section className="relative w-full bg-ink text-cream overflow-hidden">
      {/* Section header — editorial */}
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
          HOVER A STRIP TO
          <br />
          REVEAL THE BRAND.
        </div>
      </div>

      {/* Strips row */}
      <div
        className="relative flex w-full px-6 md:px-10 gap-2 md:gap-3"
        style={{ height: "min(78vh, 760px)" }}
        onMouseLeave={() => setActive(null)}
      >
        {businesses.map((b, i) => {
          const isActive = active === i;
          const isDimmed = active !== null && !isActive;
          return (
            <a
              key={b.name}
              href={b.url}
              target={b.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group relative h-full overflow-hidden rounded-md outline-none ring-0 focus-visible:ring-2 focus-visible:ring-cream/60"
              style={{
                flex: isActive ? "8 1 0%" : active !== null ? "0.6 1 0%" : "1 1 0%",
                transition:
                  "flex-grow 900ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms ease",
                filter: isDimmed
                  ? "grayscale(1) brightness(0.55)"
                  : isActive
                    ? "grayscale(0) brightness(1)"
                    : "grayscale(0.85) brightness(0.7)",
              }}
              aria-label={b.name}
            >
              {/* Card image fills the strip */}
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

              {/* Index number — always visible at top */}
              <span className="absolute left-3 top-3 z-10 font-mono text-[10px] tracking-[0.3em] text-cream/80">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Vertical name when collapsed */}
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

              {/* Bottom meta when expanded */}
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
            </a>
          );
        })}
      </div>

      {/* HUD readout */}
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
    </section>
  );
}
