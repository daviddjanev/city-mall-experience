import stipLogo from "@/assets/stipcitymall-logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-ink">
      {/* Background video — aerial loop */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Color blend layers — soften video into the ink palette so it feels like water, not a cut */}
      {/* 1. Warm ink wash to unify hue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 40%, oklch(0.13 0.005 80 / 0.25) 0%, oklch(0.13 0.005 80 / 0.55) 55%, oklch(0.13 0.005 80 / 0.92) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      {/* 2. Cream tint over the midtones for editorial warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.94 0.015 85 / 0.06) 0%, transparent 30%, transparent 70%, oklch(0.94 0.015 85 / 0.04) 100%)",
          mixBlendMode: "soft-light",
        }}
      />
      {/* 3. Top + bottom fade so chrome (header/footer text) reads cleanly and the section dissolves into the strips below */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.005 80 / 0.85) 0%, oklch(0.13 0.005 80 / 0.15) 18%, oklch(0.13 0.005 80 / 0.15) 70%, oklch(0.13 0.005 80 / 1) 100%)",
        }}
      />
      {/* 4. Subtle grain for film feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), radial-gradient(oklch(0 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "3px 3px, 5px 5px",
          backgroundPosition: "0 0, 1px 2px",
        }}
      />

      {/* Top bar — editorial index */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-8">
        <span className="font-mono text-[11px] tracking-[0.25em] text-cream/80">
          ŠTIP · MK / EST. 2024
        </span>
        <span className="font-mono text-[11px] tracking-[0.25em] text-cream/80">
          INDEX — 010
        </span>
      </header>

      {/* Centered logo + huge editorial wordmark */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 animate-fade-up">
        <img
          src={stipLogo}
          alt="Štip City Mall"
          className="w-24 md:w-32 mb-8 drop-shadow-[0_20px_60px_oklch(0_0_0_/_0.6)]"
        />

        <p className="font-mono text-[11px] tracking-[0.4em] text-cream/70 mb-6">
          — THE MALL / ŠTIP —
        </p>

        <h1 className="font-display font-light leading-[0.88] tracking-[-0.03em] text-cream text-[clamp(3.5rem,12vw,11rem)] drop-shadow-[0_4px_30px_oklch(0_0_0_/_0.5)]">
          <span className="italic font-extralight">Štip</span>
          <br />
          <span className="font-semibold">City Mall</span>
        </h1>

        <p className="mt-10 max-w-xl font-display italic text-xl md:text-2xl text-cream/90">
          Поблиску до Вас.
        </p>
        <p className="mt-1 font-mono text-[11px] tracking-[0.3em] text-cream/60">
          CLOSER TO YOU
        </p>
      </div>

      {/* Bottom bar */}
      <footer className="relative z-20 flex items-end justify-between px-6 md:px-10 pb-8">
        <div className="font-mono text-[11px] tracking-[0.25em] text-cream/70 leading-relaxed">
          10 BUSINESSES
          <br />
          ONE ADDRESS
        </div>
        <div className="flex flex-col items-center gap-3 text-cream/70">
          <span className="font-mono text-[10px] tracking-[0.4em]">SCROLL</span>
          <div className="h-10 w-px bg-cream/40" />
        </div>
        <div className="font-mono text-[11px] tracking-[0.25em] text-cream/70 text-right leading-relaxed">
          41°44′N
          <br />
          22°11′E
        </div>
      </footer>
    </section>
  );
}
