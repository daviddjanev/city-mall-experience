import { ArrowRight, ShoppingBag, Car, Coffee, Clock } from "lucide-react";
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

      {/* Cinematic overlays */}
      {/* 1. Strong left-to-right ink gradient for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.10 0.005 80 / 0.95) 0%, oklch(0.10 0.005 80 / 0.78) 28%, oklch(0.10 0.005 80 / 0.45) 55%, oklch(0.10 0.005 80 / 0.15) 80%, oklch(0.10 0.005 80 / 0.0) 100%)",
        }}
      />
      {/* 2. Top + bottom fade so chrome blends into ink */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.005 80 / 0.65) 0%, oklch(0.10 0.005 80 / 0.0) 18%, oklch(0.10 0.005 80 / 0.0) 55%, oklch(0.10 0.005 80 / 0.95) 100%)",
        }}
      />
      {/* 3. Subtle gold vignette on the right */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 40%, oklch(0.82 0.13 82 / 0.18) 0%, transparent 70%)",
        }}
      />
      {/* 4. Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), radial-gradient(oklch(0 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "3px 3px, 5px 5px",
          backgroundPosition: "0 0, 1px 2px",
        }}
      />

      {/* Top bar — logo + editorial index */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-7">
        <div className="flex items-center gap-3">
          <img src={stipLogo} alt="Štip City Mall" className="h-10 w-auto" />
          <span className="hidden sm:block font-sans text-[11px] tracking-[0.35em] text-cream/85 uppercase">
            The Mall <span className="text-gold mx-2">/</span> Štip
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-cream/60">
          ŠTIP · MK / EST. 2024
        </span>
      </header>

      {/* Main content — left aligned editorial */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl animate-fade-up">
          {/* Eyebrow with gold rule */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
              The Mall / Štip
            </span>
          </div>

          {/* Headline */}
          <h1 className="leading-[0.92] tracking-[-0.02em] text-cream">
            <span className="block font-serif italic font-light text-[clamp(4rem,11vw,9rem)] text-cream">
              Štip
            </span>
            <span className="block font-serif font-bold text-[clamp(3rem,8.5vw,7rem)] bg-gradient-to-r from-gold-soft via-gold to-gold-deep bg-clip-text text-transparent -mt-2">
              City Mall
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 font-serif italic text-2xl md:text-3xl text-cream/95">
            Поблиску до Вас.
          </p>

          {/* Body */}
          <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-cream/75">
            Вашето омилено место за шопинг, забава и незаборавни моменти —
            во срцето на Штип.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#businesses"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 bg-gradient-to-r from-gold-soft via-gold to-gold-deep text-ink font-sans font-medium text-sm tracking-wide shadow-[0_10px_40px_-10px_oklch(0.82_0.13_82_/_0.6)] hover:shadow-[0_14px_50px_-8px_oklch(0.82_0.13_82_/_0.8)] transition-all duration-500 hover:scale-[1.02]"
            >
              Дознај повеќе
              <span className="grid place-items-center h-7 w-7 rounded-full bg-ink/15 group-hover:bg-ink/25 transition-colors">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 border border-cream/25 backdrop-blur-md bg-cream/[0.04] text-cream font-sans text-sm tracking-wide hover:bg-cream/[0.08] hover:border-gold/60 transition-all duration-500"
            >
              За нас
            </a>
          </div>
        </div>
      </div>

      {/* Glassy bottom info bar */}
      <div className="relative z-20 px-4 md:px-10 pb-6 md:pb-8">
        <div
          className="rounded-2xl border border-cream/15 backdrop-blur-xl bg-ink/40 shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.6)]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.18 0.01 80 / 0.55), oklch(0.10 0.005 80 / 0.35))",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream/10">
            <InfoCell icon={<ShoppingBag className="h-5 w-5" />} value="10+" label="Продавници" />
            <InfoCell icon={<Car className="h-5 w-5" />} value="500+" label="Паркинг места" />
            <InfoCell icon={<Coffee className="h-5 w-5" />} value="Кафе" label="& Ресторани" />
            <InfoCell icon={<Clock className="h-5 w-5" />} value="09:00 – 22:00" label="Секој ден" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCell({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 px-5 md:px-7 py-5">
      <div className="grid place-items-center h-11 w-11 rounded-full border border-gold/40 text-gold bg-gold/[0.06]">
        {icon}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-serif text-lg md:text-xl text-cream">{value}</span>
        <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-cream/65">
          {label}
        </span>
      </div>
    </div>
  );
}
