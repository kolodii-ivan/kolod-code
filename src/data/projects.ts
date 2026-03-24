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
    name: "Air Quality",
    slug: "air-quality",
    description:
      "Real-time air quality monitoring dashboard. Track pollution levels, view historical data, and get health recommendations based on current conditions.",
    url: "https://air.kolodii.com/",
    screenshot: "/screenshots/air-quality.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Yana",
    slug: "yana",
    description:
      "A personal assistant web application designed to streamline daily workflows and task management with an intuitive interface.",
    url: "https://yana.ikolodiy.com/",
    screenshot: "/screenshots/yana.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Land Lab",
    slug: "land-lab",
    description:
      "Interactive land analysis and visualization tool. Explore geographic data, assess land properties, and generate detailed reports.",
    url: "https://land.ikolodiy.com/",
    screenshot: "/screenshots/land-lab.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
