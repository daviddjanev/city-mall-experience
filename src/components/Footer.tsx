import stipLogo from "@/assets/stipcitymall-logo.png";
import { businesses } from "@/data/businesses";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream overflow-hidden border-t border-cream/10">
      {/* Marquee of business names */}
      <div className="relative overflow-hidden py-10 border-b border-cream/10">
        <div className="flex gap-16 whitespace-nowrap animate-marquee font-display italic text-5xl md:text-7xl text-cream/80">
          {[...businesses, ...businesses].map((b, i) => (
            <span key={i} className="flex items-center gap-16">
              {b.name}
              <span className="text-cream/30">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-5">
          <img src={stipLogo} alt="Štip City Mall" className="w-24" />
          <h2 className="font-display font-light text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em]">
            <span className="italic">Štip</span>
            <br />
            <span className="font-semibold">City Mall</span>
          </h2>
          <p className="font-display italic text-xl text-cream/70 max-w-sm">
            Поблиску до Вас.
          </p>
        </div>

        <div className="md:col-span-3 font-mono text-[11px] tracking-[0.25em] text-cream/70 leading-relaxed">
          <div className="text-cream/40 mb-3">— LOCATION</div>
          ŠTIP
          <br />
          NORTH MACEDONIA
          <br />
          41°44′N · 22°11′E
        </div>

        <div className="md:col-span-4 font-mono text-[11px] tracking-[0.25em] text-cream/70 leading-relaxed">
          <div className="text-cream/40 mb-3">— DIRECTORY</div>
          {businesses.length} BUSINESSES
          <br />
          FASHION · FOOD · TECH
          <br />
          HEALTH · HOME · SERVICES
        </div>
      </div>

      <div className="relative border-t border-cream/10 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-[0.3em] text-cream/50">
        <span>© {new Date().getFullYear()} ŠTIP CITY MALL</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
