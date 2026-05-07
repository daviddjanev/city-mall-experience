import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const HOURS: { day: string; time: string; today?: boolean }[] = [
  { day: "Понеделник", time: "09:00 — 22:00" },
  { day: "Вторник", time: "09:00 — 22:00" },
  { day: "Среда", time: "09:00 — 22:00" },
  { day: "Четврток", time: "09:00 — 22:00", today: true },
  { day: "Петок", time: "09:00 — 23:00" },
  { day: "Сабота", time: "09:00 — 23:00" },
  { day: "Недела", time: "10:00 — 22:00" },
];

export function Visit() {
  return (
    <section
      id="visit"
      className="relative w-full bg-ink text-cream overflow-hidden border-t border-cream/10"
    >
      {/* Soft gold radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, oklch(0.82 0.13 82 / 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid gap-16 md:grid-cols-12">
        {/* Left — editorial heading */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <p className="font-mono text-[11px] tracking-[0.4em] text-cream/50">
            — VISIT / 009
          </p>
          <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.02em]">
            <span className="italic font-extralight">Find</span>{" "}
            <span className="font-semibold">us.</span>
            <br />
            <span className="italic font-extralight">Stay</span>{" "}
            <span className="font-semibold">a while.</span>
          </h2>
          <p className="max-w-md font-sans text-[15px] leading-relaxed text-cream/70">
            Во срцето на Штип. Десет минути од центарот, со простран паркинг и
            отворено секој ден.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <a
              href="https://maps.google.com/?q=Štip+City+Mall"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-5 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:bg-cream/[0.05] hover:border-gold/40 transition-all"
            >
              <span className="grid place-items-center h-10 w-10 rounded-full border border-gold/40 text-gold bg-gold/[0.06] shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="flex-1">
                <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-cream/50">
                  Адреса
                </span>
                <span className="block font-serif text-lg text-cream mt-1">
                  ул. Маршал Тито бб, Штип 2000
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-cream/40 group-hover:text-gold transition-colors mt-2" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+38932000000"
                className="group flex items-center gap-3 p-4 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:bg-cream/[0.05] hover:border-gold/40 transition-all"
              >
                <span className="grid place-items-center h-9 w-9 rounded-full border border-gold/40 text-gold bg-gold/[0.06]">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cream/50">
                    Телефон
                  </span>
                  <span className="font-serif text-sm text-cream mt-0.5">
                    +389 32 000 000
                  </span>
                </span>
              </a>
              <a
                href="mailto:hello@stipcitymall.mk"
                className="group flex items-center gap-3 p-4 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:bg-cream/[0.05] hover:border-gold/40 transition-all"
              >
                <span className="grid place-items-center h-9 w-9 rounded-full border border-gold/40 text-gold bg-gold/[0.06]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cream/50">
                    E-mail
                  </span>
                  <span className="font-serif text-sm text-cream mt-0.5">
                    hello@stipcitymall.mk
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right — hours card */}
        <div className="md:col-span-7">
          <div
            className="relative rounded-3xl border border-cream/10 backdrop-blur-xl overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.18 0.01 80 / 0.6), oklch(0.10 0.005 80 / 0.4))",
              boxShadow:
                "0 30px 80px -30px oklch(0 0 0 / 0.7), inset 0 1px 0 oklch(1 0 0 / 0.04)",
            }}
          >
            <div className="flex items-center justify-between px-7 md:px-9 py-6 border-b border-cream/10">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-full border border-gold/40 text-gold bg-gold/[0.06]">
                  <Clock className="h-4 w-4" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/50">
                    Работно време
                  </span>
                  <span className="font-serif text-lg text-cream mt-0.5">
                    Отворено секој ден
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-gold/40 bg-gold/[0.08]">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold">
                  Сега отворено
                </span>
              </span>
            </div>

            <ul className="divide-y divide-cream/5">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between px-7 md:px-9 py-4 transition-colors ${
                    h.today
                      ? "bg-gold/[0.04]"
                      : "hover:bg-cream/[0.02]"
                  }`}
                >
                  <span
                    className={`font-sans text-sm tracking-wide ${
                      h.today ? "text-gold" : "text-cream/85"
                    }`}
                  >
                    {h.day}
                    {h.today && (
                      <span className="ml-3 font-mono text-[9px] tracking-[0.3em] uppercase text-gold/80">
                        Денес
                      </span>
                    )}
                  </span>
                  <span
                    className={`font-serif text-base tabular-nums ${
                      h.today ? "text-cream" : "text-cream/75"
                    }`}
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>

            <div className="px-7 md:px-9 py-5 border-t border-cream/10 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/50">
                Празници — посебно работно време
              </span>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-cream/80 hover:text-gold transition-colors"
              >
                Детали
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
