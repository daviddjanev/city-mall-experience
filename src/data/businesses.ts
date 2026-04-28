import mrgyroCard from "@/assets/cards/mrgyro.webp";
import sansiroCard from "@/assets/cards/sansiro.webp";
import cliqueCard from "@/assets/cards/clique.webp";
import bakingBreadCard from "@/assets/cards/baking-bread.webp";
import esotiqCard from "@/assets/cards/esotiq.webp";
import klimiCard from "@/assets/cards/klimi.webp";
import dukiDasoCard from "@/assets/cards/duki-daso.webp";
import citypointCard from "@/assets/cards/citypoint.webp";

export type Category =
  | "Fashion"
  | "Food & Drink"
  | "Health & Beauty"
  | "Tech"
  | "Sport"
  | "Services"
  | "Home";

export interface Business {
  name: string;
  category: Category;
  url: string;
  /** Full pre-designed card image (1:~1.3 portrait). */
  card: string;
  /** Short tagline shown when the strip expands. */
  tagline?: string;
}

export const businesses: Business[] = [
  {
    name: "Mr.Gyro",
    category: "Food & Drink",
    url: "https://mrgyro.mk",
    card: mrgyroCard,
    tagline: "Fresh. Authentic. Greek.",
  },
  {
    name: "Sansiro Perfume",
    category: "Health & Beauty",
    url: "#",
    card: sansiroCard,
    tagline: "Essence of elegance.",
  },
  {
    name: "Clique Cabaret",
    category: "Fashion",
    url: "#",
    card: cliqueCard,
    tagline: "Where nights become legendary.",
  },
  {
    name: "Baking Bread",
    category: "Food & Drink",
    url: "#",
    card: bakingBreadCard,
    tagline: "Built different. Built to last.",
  },
  {
    name: "Esotiq",
    category: "Fashion",
    url: "#",
    card: esotiqCard,
    tagline: "Lingerie · Nightwear · Swimwear.",
  },
  {
    name: "Klimi.mk",
    category: "Home",
    url: "#",
    card: klimiCard,
    tagline: "Clean. Cool. Class.",
  },
  {
    name: "Duki Daso",
    category: "Food & Drink",
    url: "#",
    card: dukiDasoCard,
    tagline: "Signature taste.",
  },
  {
    name: "City Point",
    category: "Food & Drink",
    url: "#",
    card: citypointCard,
    tagline: "Coffee, spirits & tobacco.",
  },
];
