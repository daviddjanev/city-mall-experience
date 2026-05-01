import { useEffect, useState } from "react";
import { ArrowRight, ShoppingBag, Car, Coffee, Clock } from "lucide-react";
import stipLogo from "@/assets/stipcitymall-logo.png";

const EASE = (t: number) => {
  // cubic-bezier(0.22, 1, 0.36, 1) approximation (easeOutQuint-ish)
  return 1 - Math.pow(1 - t, 5);
};

export function Hero() {
  const [neon, setNeon] = useState(0);

  useEffect(() => {
    const START = 80;
    const END = 350;
    const onScroll = () => {
      const y = window.scrollY;
      const raw = (y - START) / (END - START);
      const clamped = Math.max(0, Math.min(1, raw));
      setNeon(EASE(clamped));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="hero-root relative min-h-screen w-full flex flex-col overflow-hidden bg-ink"
      style={{ ["--neon" as string]: neon }}
    >
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.10 0.005 80 / 0.95) 0%, oklch(0.10 0.005 80 / 0.78) 28%, oklch(0.10 0.005 80 / 0.45) 55%, oklch(0.10 0.005 80 / 0.15) 80%, oklch(0.10 0.005 80 / 0.0) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.005 80 / 0.65) 0%, oklch(0.10 0.005 80 / 0.0) 18%, oklch(0.10 0.005 80 / 0.0) 55%, oklch(0.10 0.005 80 / 0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 40%, oklch(0.82 0.13 82 / 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), radial-gradient(oklch(0 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "3px 3px, 5px 5px",
          backgroundPosition: "0 0, 1px 2px",
        }}
      />

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-7">
        <div className="flex items-center gap-3">
          <img src={stipLogo} alt="Štip City Mall" className="h-10 w-auto" />
          <span className="hidden sm:block font-sans text-[11px] tracking-[0.35em] text-cream/85 uppercase">
            The Mall <span className="hero-eyebrow mx-2" data-hero-transition>/</span> Štip
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-cream/60">
          ŠTIP · MK / EST. 2024
        </span>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="hero-rule h-px w-12" data-hero-transition />
            <span
              className="hero-eyebrow font-sans text-[11px] tracking-[0.4em] uppercase"
              data-hero-transition
            >
              The Mall / Štip
            </span>
          </div>

          <h1 className="leading-[0.92] tracking-[-0.02em] text-cream">
            <span
              className="hero-stip block font-serif italic font-light text-[clamp(4rem,11vw,9rem)] text-cream"
              data-hero-transition
            >
              Štip
            </span>
            <span
              className="hero-citymall block font-serif font-bold text-[clamp(3rem,8.5vw,7rem)] -mt-2"
              data-hero-transition
            >
              City Mall
            </span>
          </h1>

          <p className="mt-8 font-serif italic text-2xl md:text-3xl text-cream/95">
            Поблиску до Вас.
          </p>

          <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-cream/75">
            Вашето омилено место за шопинг, забава и незаборавни моменти —
            во срцето на Штип.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#businesses"
              className="hero-cta-primary group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-ink font-sans font-medium text-sm tracking-wide hover:scale-[1.02]"
              data-hero-transition
            >
              Дознај повеќе
              <span className="grid place-items-center h-7 w-7 rounded-full bg-ink/15 group-hover:bg-ink/25 transition-colors">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
            </a>
            <a
              href="#about"
              className="hero-cta-ghost inline-flex items-center gap-2 rounded-full px-6 py-3.5 border border-cream/25 backdrop-blur-md bg-cream/[0.04] text-cream font-sans text-sm tracking-wide hover:bg-cream/[0.08]"
              data-hero-transition
            >
              За нас
            </a>
          </div>
        </div>
      </div>

      {/* Glassy bottom info bar */}
      <div className="relative z-20 px-4 md:px-10 pb-6 md:pb-8">
        <div
          className="hero-infobar rounded-2xl border border-cream/15 backdrop-blur-xl bg-ink/40 shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.6)]"
          data-hero-transition
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
      <div
        className="hero-info-icon grid place-items-center h-11 w-11 rounded-full border border-gold/40 text-gold bg-gold/[0.06]"
        data-hero-transition
      >
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
