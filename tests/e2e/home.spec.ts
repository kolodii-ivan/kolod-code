import { expect, test } from "@playwright/test";

test("hero shows the title and the explore link jumps to the projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Kolod");
  await page.getByRole("link", { name: /explore/ }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("heading", { level: 2, name: "Projects" })).toBeInViewport();
});

test("project grid lists live projects as links and unreleased ones as in development", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("#projects article");
  await expect(cards).toHaveCount(6);

  const landLab = cards.filter({ hasText: "Land Lab" });
  await expect(landLab.getByRole("link", { name: "View project" })).toHaveAttribute("href", "https://land.ikolodiy.com/");

  const roads = cards.filter({ hasText: "Roads Quality" });
  await expect(roads.getByText("Soon")).toBeVisible();
  await expect(roads.getByText("In development")).toBeVisible();
  await expect(roads.getByRole("link")).toHaveCount(0);
});

test("crawler files are served", async ({ request }) => {
  for (const file of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest"]) {
    const response = await request.get(file);
    expect(response.status(), file).toBe(200);
  }
});
