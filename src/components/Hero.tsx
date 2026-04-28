import stipLogo from "@/assets/stipcitymall-logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-ink">
      {/* Top bar — editorial index */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-8">
        <span className="font-mono text-[11px] tracking-[0.25em] text-cream/70">
          ŠTIP · MK / EST. 2024
        </span>
        <span className="font-mono text-[11px] tracking-[0.25em] text-cream/70">
          INDEX — 010
        </span>
      </header>

      {/* Centered logo + huge editorial wordmark */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 animate-fade-up">
        <img
          src={stipLogo}
          alt="Štip City Mall"
          className="w-28 md:w-36 mb-10 drop-shadow-[0_10px_40px_oklch(0_0_0_/_0.5)]"
          style={{ filter: "brightness(1.05)" }}
        />

        <p className="font-mono text-[11px] tracking-[0.4em] text-cream/60 mb-6">
          — THE MALL / ŠTIP —
        </p>

        <h1 className="font-display font-light leading-[0.88] tracking-[-0.03em] text-cream text-[clamp(3.5rem,12vw,11rem)]">
          <span className="italic font-extralight">Štip</span>
          <br />
          <span className="font-semibold">City Mall</span>
        </h1>

        <p className="mt-10 max-w-xl font-display italic text-xl md:text-2xl text-cream/80">
          Поблиску до Вас.
        </p>
        <p className="mt-1 font-mono text-[11px] tracking-[0.3em] text-cream/50">
          CLOSER TO YOU
        </p>
      </div>

      {/* Bottom bar */}
      <footer className="relative z-20 flex items-end justify-between px-6 md:px-10 pb-8">
        <div className="font-mono text-[11px] tracking-[0.25em] text-cream/60 leading-relaxed">
          10 BUSINESSES
          <br />
          ONE ADDRESS
        </div>
        <div className="flex flex-col items-center gap-3 text-cream/60">
          <span className="font-mono text-[10px] tracking-[0.4em]">SCROLL</span>
          <div className="h-10 w-px bg-cream/40" />
        </div>
        <div className="font-mono text-[11px] tracking-[0.25em] text-cream/60 text-right leading-relaxed">
          41°44′N
          <br />
          22°11′E
        </div>
      </footer>
    </section>
  );
}
