import { expect, test } from "@playwright/test";

test("homepage exposes a visible h1 and service links", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Architects in Thanjavur for residential, commercial, and 3D design projects/i,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /Residential Architect in Thanjavur/i }),
  ).toBeVisible();
});

test("homepage hero card matches the visual baseline", async ({ page, browserName }, testInfo) => {
  test.skip(browserName !== "chromium", "Snapshots are recorded for Chromium projects only.");

  await page.goto("/");
  const heroCard = page.locator("section div").filter({
    has: page.getByRole("heading", {
      level: 1,
      name: /Architects in Thanjavur for residential, commercial, and 3D design projects/i,
    }),
  }).first();

  await expect(heroCard).toBeVisible();
  await expect(heroCard).toHaveScreenshot(`home-hero-${testInfo.project.name}.png`, {
    animations: "disabled",
    caret: "hide",
  });
});

test("contact form validates and submits successfully", async ({ page }) => {
  await page.goto("/contact");

  await page.getByRole("button", { name: /Send Inquiry/i }).click();
  await expect(page.getByText(/Please enter your full name\./i)).toBeVisible();

  await page.getByLabel(/Full Name/i).fill("Playwright User");
  await page.getByLabel(/^Email/i).fill("playwright@example.com");
  await page
    .getByLabel(/^Message/i)
    .fill("I would like to discuss a residential project in Thanjavur.");
  await page.getByRole("button", { name: /Send Inquiry/i }).click();

  await expect(
    page.getByText(/Thanks\. Our team will contact you within one business day\./i),
  ).toBeVisible();
});

test("quote flow enforces project fields and submits successfully", async ({ page }) => {
  await page.goto("/contact");

  await page.getByRole("button", { name: /Request a Quote/i }).click();
  await page.getByLabel(/Full Name/i).fill("Quote User");
  await page.getByLabel(/^Email/i).fill("quote@example.com");
  await page.getByLabel(/^Message/i).fill("Need a commercial architecture quote for a new site.");
  await page.getByRole("button", { name: /Request Quote/i }).click();

  await expect(
    page.getByText(/project type and location are required/i),
  ).toBeVisible();

  await page.getByLabel(/Project Type/i).fill("Commercial building");
  await page.getByLabel(/Project Location/i).fill("Thanjavur");
  await page.getByRole("button", { name: /Request Quote/i }).click();

  await expect(
    page.getByText(/Thanks\. Our team will contact you within one business day\./i),
  ).toBeVisible();
});

test("contact form blocks short messages in the browser", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel(/Full Name/i).fill("Short Message User");
  await page.getByLabel(/^Email/i).fill("short@example.com");
  await page.getByLabel(/^Message/i).fill("Too short");
  await page.getByRole("button", { name: /Send Inquiry/i }).click();

  await expect(
    page.getByText(/Please enter a project message with at least 10 characters\./i),
  ).toBeVisible();
});

test("contact API rejects invalid email payloads", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/api/contact`, {
    data: {
      fullName: "API Invalid Email User",
      email: "invalid-email",
      message: "This is a valid message body for API validation.",
    },
  });

  expect(response.status()).toBe(400);
  await expect(response.json()).resolves.toMatchObject({
    error: "A valid email is required.",
  });
});

test("service page includes FAQ content and primary CTA", async ({ page }) => {
  await page.goto("/residential-architect-thanjavur");

  await expect(
    page.getByRole("heading", { level: 1, name: /Residential Architect in Thanjavur/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Book Free Consultation/i })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: /FAQs: Residential Architect in Thanjavur/i }),
  ).toBeVisible();
});

test("contact form card matches the visual baseline", async ({ page, browserName }, testInfo) => {
  test.skip(browserName !== "chromium", "Snapshots are recorded for Chromium projects only.");

  await page.goto("/contact");
  const formCard = page.locator("article").filter({
    has: page.getByRole("button", { name: /Send Inquiry/i }),
  }).first();

  await expect(formCard).toBeVisible();
  await expect(formCard).toHaveScreenshot(`contact-form-${testInfo.project.name}.png`, {
    animations: "disabled",
    caret: "hide",
  });
});
