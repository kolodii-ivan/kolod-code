export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  screenshot: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    name: "Land Lab",
    slug: "land-lab",
    description:
      "Real estate land search aggregator for the Ivano-Frankivsk region. Combines listings from OLX, DIM.RIA, LUN, and Telegram into an interactive map with filters by price, area, and land type.",
    url: "https://land.ikolodiy.com/",
    screenshot: "/screenshots/land-lab.png",
    techStack: ["Next.js", "Supabase", "Leaflet", "Cheerio"],
  },
  {
    name: "Air Quality",
    slug: "air-quality",
    description:
      "Personalized air quality and allergy risk tracker. Set up your allergen profile, monitor multiple locations, and get pollen forecasts tailored to your sensitivities.",
    url: "https://air.kolodii.com/",
    screenshot: "/screenshots/air-quality.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Yana's World",
    slug: "yana",
    description:
      "Interactive educational game for children. Kids learn animals, letters, and words through timed visual challenges with playful illustrations and a countdown-based gameplay loop.",
    url: "https://yana.ikolodiy.com/",
    screenshot: "/screenshots/yana.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
