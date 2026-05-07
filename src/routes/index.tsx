import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { AristideStrips } from "@/components/AristideStrips";
import { TaxiBanner } from "@/components/TaxiBanner";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Štip City Mall — Сè на едно место" },
      {
        name: "description",
        content:
          "Štip City Mall — премиум шопинг искуство во Штип. Сите продавници, ресторани и сервиси на едно место.",
      },
      { property: "og:title", content: "Štip City Mall — Сè на едно место" },
      {
        property: "og:description",
        content:
          "Eight houses, one address. Discover every brand at Štip City Mall.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Hero />
      <AristideStrips />
      <Visit />
      <TaxiBanner />
      <Footer />
    </main>
  );
}
