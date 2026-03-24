export interface Project {
  name: string;
  slug: string;
  description: string;
  url?: string;
  screenshot: string;
  techStack: string[];
  comingSoon?: boolean;
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
  {
    name: "Roads Quality",
    slug: "roads-quality",
    description:
      "Data aggregation platform for analyzing road quality across Ukrainian oblast capitals. Interactive maps, city comparisons, contractor rankings, and 8 integrated data sources.",
    screenshot: "/screenshots/roads-quality.svg",
    techStack: ["React", "FastAPI", "PostGIS", "Celery"],
    comingSoon: true,
  },
  {
    name: "SMM Desk",
    slug: "smm-desk",
    description:
      "AI-powered social media management platform. Draft, generate, and optimize content across X, LinkedIn, Facebook, Telegram, and more with dual LLM support and trend intelligence.",
    screenshot: "/screenshots/smm-desk.svg",
    techStack: ["Angular", "NestJS", "Claude API", "Gemini"],
    comingSoon: true,
  },
  {
    name: "Investment Desk",
    slug: "inv-desk",
    description:
      "Personal investment analysis tool with AI-powered research, tax optimization insights, and leverage analysis for building and managing investment portfolios.",
    screenshot: "/screenshots/inv-desk.svg",
    techStack: ["React", "Express", "SQLite", "Claude API"],
    comingSoon: true,
  },
];
