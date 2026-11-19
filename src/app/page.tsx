import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const SITE_URL = "https://code.ikolodiy.com";

function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const organizationId = `${SITE_URL}/#organization`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Ivan Kolodii",
        url: "https://ikolodiy.com",
        sameAs: ["https://github.com/kolodii-ivan"],
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Kolod Code",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icons/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og/home.png`,
        description:
          "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
        founder: { "@id": personId },
        sameAs: ["https://github.com/kolodii-ivan", "https://ikolodiy.com"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Kolod Code",
        url: SITE_URL,
        description:
          "Portfolio of web applications crafted with Claude Code by Ivan Kolodii.",
        inLanguage: "en",
        publisher: { "@id": organizationId },
        author: { "@id": personId },
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
      },
    ],
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
