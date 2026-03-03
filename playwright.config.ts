import { defineConfig, devices } from "@playwright/test";

const port = 3000;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: 0,
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}-{projectName}{ext}",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: "./node_modules/.bin/next dev --hostname 127.0.0.1 --port 3000 --webpack",
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["Pixel 7"],
      },
    },
  ],
});
