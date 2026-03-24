import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kolod Code",
    url: "https://code.ikolodiy.com",
    description:
      "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects
        .filter((p) => p.url)
        .map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: project.url,
        })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}
