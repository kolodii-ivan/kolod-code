import { defineConfig, devices } from "@playwright/test";

const PORT = 8788;
// Set E2E_BASE_URL to run the suite against a deployed host (preview or production) instead of a local Worker.
const REMOTE = process.env.E2E_BASE_URL;
// Locally the static export is rebuilt first; CI builds it in an earlier step.
const BUILD = process.env.CI ? "" : "npm run build && ";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: REMOTE ?? `http://localhost:${PORT}`,
    locale: "en-US",
    timezoneId: "UTC",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: REMOTE
    ? undefined
    : {
        // The same runtime as production: the static-assets Worker serving ./out in local mode.
        command: `${BUILD}npx wrangler dev --port ${PORT}`,
        url: `http://localhost:${PORT}/`,
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
