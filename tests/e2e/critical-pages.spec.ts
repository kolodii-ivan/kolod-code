import { mkdirSync } from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";
import pages from "./critical-pages.json";

// Console errors that are known noise and not caused by the app (add a comment per entry).
const ALLOWED_CONSOLE_ERRORS: RegExp[] = [];

for (const entry of pages) {
  test(`critical page: ${entry.id} (${entry.title})`, async ({ page }, testInfo) => {
    const pageErrors: string[] = [];
    const consoleErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error" && !ALLOWED_CONSOLE_ERRORS.some((re) => re.test(message.text()))) {
        consoleErrors.push(message.text());
      }
    });

    const response = await page.goto(entry.path);
    expect(response?.status(), `HTTP status of ${entry.path}`).toBeLessThan(400);
    await expect(page.locator(entry.ready).first()).toBeVisible();

    const screenshotDir = process.env.E2E_SCREENSHOTS;
    if (screenshotDir) {
      try {
        const dir = path.join(screenshotDir, testInfo.project.name);
        mkdirSync(dir, { recursive: true });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForLoadState("networkidle");
        await page.screenshot({
          path: path.join(dir, `${entry.id}.png`),
          fullPage: true,
          animations: "disabled",
        });
      } catch (error) {
        // Screenshots are best effort and never fail the test.
        console.warn(`screenshot of ${entry.id} failed: ${String(error)}`);
      }
    }

    expect(pageErrors, "uncaught page errors").toEqual([]);
    expect(consoleErrors, "console errors").toEqual([]);
  });
}
