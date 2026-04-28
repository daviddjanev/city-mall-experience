import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Phone, Car, Apple, Smartphone, Globe, Clock, MapPin, Plane } from "lucide-react";
import taxiBanner from "@/assets/taxi-banner.png";

const PHONE = "074 222 101";
const PHONE_TEL = "+389074222101";
const WEBSITE = "https://stipcitytaxi.mk";

export function TaxiBanner() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-ink text-cream py-24 md:py-32 px-6 md:px-10">
      <div
        ref={ref}
        className="mx-auto max-w-[1400px]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1100ms cubic-bezier(0.22,1,0.36,1), transform 1100ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="flex items-end justify-between mb-8">
          <p className="font-mono text-[11px] tracking-[0.4em] text-cream/50">
            — MOBILITY / 009
          </p>
          <p className="hidden md:block font-mono text-[11px] tracking-[0.3em] text-cream/50">
            TAP TO ORDER
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-cream/60 cursor-pointer"
          aria-label="Open Štip City Taxi details"
        >
          <img
            src={taxiBanner}
            alt="Štip City Taxi — меѓуградски такси превоз, електрично возило"
            className="block w-full h-auto select-none"
            style={{
              transform: "scale(1)",
              transition: "transform 900ms cubic-bezier(0.22,1,0.36,1), filter 600ms ease",
              imageRendering: "auto",
            }}
            draggable={false}
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cream/10 group-hover:ring-cream/25 transition"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700"
          />
          <style>{`
            .taxi-img-hover:hover img { transform: scale(1.025); }
          `}</style>
        </button>

        <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.35em] text-cream/50">
          <span>ŠTIP CITY TAXI</span>
          <span className="text-cream/80">{PHONE} · 24/7</span>
          <span>009 / 009</span>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-ink text-cream border-cream/10 p-0 overflow-hidden">
          <DialogTitle className="sr-only">Štip City Taxi</DialogTitle>

          <div className="relative">
            <img src={taxiBanner} alt="Štip City Taxi" className="w-full h-48 md:h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.35em] text-cream/60 mb-2">— MOBILITY</p>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-[0.95] tracking-[-0.02em]">
                <span className="italic">Štip City</span>{" "}
                <span className="font-semibold">Taxi</span>
              </h2>
              <p className="mt-2 font-display italic text-cream/70">
                Брзо. Безбедно. Еколошки.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Primary CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="#order"
                className="flex items-center justify-center gap-2 rounded-md bg-cream text-ink px-5 py-3.5 font-mono text-[11px] tracking-[0.25em] hover:bg-cream/90 transition"
              >
                <Car className="h-4 w-4" />
                ORDER VEHICLE
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-md border border-cream/20 px-5 py-3.5 font-mono text-[11px] tracking-[0.25em] hover:bg-cream/5 transition"
              >
                <Phone className="h-4 w-4" />
                CALL {PHONE}
              </a>
            </div>

            {/* App downloads */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.35em] text-cream/50 mb-3">— DOWNLOAD APP</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md border border-cream/15 px-4 py-3 hover:bg-cream/5 transition"
                >
                  <Apple className="h-5 w-5" />
                  <div className="text-left leading-tight">
                    <div className="font-mono text-[8px] tracking-[0.3em] text-cream/50">DOWNLOAD ON</div>
                    <div className="font-display text-sm">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md border border-cream/15 px-4 py-3 hover:bg-cream/5 transition"
                >
                  <Smartphone className="h-5 w-5" />
                  <div className="text-left leading-tight">
                    <div className="font-mono text-[8px] tracking-[0.3em] text-cream/50">GET IT ON</div>
                    <div className="font-display text-sm">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.35em] text-cream/50 mb-3">— SERVICES</p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <li className="flex items-center gap-2 rounded-md border border-cream/10 px-3 py-2.5">
                  <MapPin className="h-4 w-4 text-cream/60" />
                  City rides
                </li>
                <li className="flex items-center gap-2 rounded-md border border-cream/10 px-3 py-2.5">
                  <Car className="h-4 w-4 text-cream/60" />
                  Intercity rides
                </li>
                <li className="flex items-center gap-2 rounded-md border border-cream/10 px-3 py-2.5">
                  <Plane className="h-4 w-4 text-cream/60" />
                  Airport transfer
                </li>
              </ul>
            </div>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2 border-t border-cream/10 font-mono text-[10px] tracking-[0.3em] text-cream/60">
              <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> 24/7 AVAILABLE</span>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-cream transition">
                <Phone className="h-3.5 w-3.5" /> {PHONE}
              </a>
              <a href={WEBSITE} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cream transition">
                <Globe className="h-3.5 w-3.5" /> WEBSITE
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
