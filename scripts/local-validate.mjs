const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/residential-architect-thanjavur",
  "/commercial-architect-thanjavur",
  "/3d-elevation-design-thanjavur",
  "/architect-kumbakonam",
  "/architect-trichy",
  "/architect-pudukkottai",
];

const seoRoutes = publicRoutes.filter((route) => route !== "/");

let failures = 0;
let checks = 0;

function pass(message) {
  checks += 1;
  console.log(`PASS ${message}`);
}

function fail(message) {
  checks += 1;
  failures += 1;
  console.error(`FAIL ${message}`);
}

async function expectRouteOk(route) {
  const response = await fetch(`${baseUrl}${route}`);
  if (!response.ok) {
    fail(`${route} returned ${response.status}`);
    return "";
  }

  pass(`${route} returned ${response.status}`);
  return response.text();
}

function expectMatch(haystack, regex, message) {
  if (regex.test(haystack)) {
    pass(message);
    return;
  }

  fail(message);
}

function expectNotMatch(haystack, regex, message) {
  if (!regex.test(haystack)) {
    pass(message);
    return;
  }

  fail(message);
}

function expectJsonValue(value, predicate, message) {
  if (predicate(value)) {
    pass(message);
    return;
  }

  fail(message);
}

async function testPublicRoutes() {
  for (const route of publicRoutes) {
    const html = await expectRouteOk(route);
    if (!html) {
      continue;
    }

    expectMatch(html, /<title>[^<]+<\/title>/i, `${route} has a title tag`);
    expectMatch(
      html,
      /<meta[^>]+name="description"[^>]+content="[^"]+"/i,
      `${route} has a meta description`,
    );
    expectMatch(
      html,
      new RegExp(`<link[^>]+rel="canonical"[^>]+href="${route === "/" ? "https://www\\.jcdesignsconsulting\\.in/?": `https://www\\.jcdesignsconsulting\\.in${route}`}"`, "i"),
      `${route} has the expected canonical URL`,
    );
  }
}

async function testHeadingStructure() {
  const homeHtml = await expectRouteOk("/");
  if (homeHtml) {
    expectMatch(homeHtml, /<h1\b/i, `/ has a visible h1`);
  }

  for (const route of seoRoutes) {
    const html = await expectRouteOk(route);
    if (!html) {
      continue;
    }

    const h1Matches = html.match(/<h1\b/gi) ?? [];
    if (h1Matches.length === 1) {
      pass(`${route} has exactly one h1`);
    } else {
      fail(`${route} has exactly one h1`);
    }
  }
}

async function testRobotsAndSitemap() {
  const robots = await fetch(`${baseUrl}/robots.txt`);
  if (!robots.ok) {
    fail(`/robots.txt returned ${robots.status}`);
  } else {
    pass(`/robots.txt returned ${robots.status}`);
    const body = await robots.text();
    expectMatch(body, /User-Agent:\s*\*/i, `/robots.txt contains User-Agent`);
    expectMatch(body, /Sitemap:\s*https:\/\/www\.jcdesignsconsulting\.in\/sitemap\.xml/i, `/robots.txt contains sitemap`);
  }

  const sitemap = await fetch(`${baseUrl}/sitemap.xml`);
  if (!sitemap.ok) {
    fail(`/sitemap.xml returned ${sitemap.status}`);
  } else {
    pass(`/sitemap.xml returned ${sitemap.status}`);
    const body = await sitemap.text();
    for (const route of publicRoutes) {
      const url = route === "/" ? "https://www.jcdesignsconsulting.in/" : `https://www.jcdesignsconsulting.in${route}`;
      expectMatch(body, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `/sitemap.xml contains ${url}`);
    }
  }
}

async function postJson(path, body, headers = {}) {
  return fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

async function testContactApi() {
  const invalidJsonResponse = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "{invalid",
  });
  expectJsonValue(invalidJsonResponse.status, (status) => status === 400, `/api/contact rejects invalid JSON`);

  const missingNameResponse = await postJson("/api/contact", {
    email: "test@example.com",
    message: "This is a valid message.",
  });
  expectJsonValue(missingNameResponse.status, (status) => status === 400, `/api/contact rejects missing full name`);

  const invalidEmailResponse = await postJson("/api/contact", {
    fullName: "Test User",
    email: "invalid",
    message: "This is a valid message.",
  });
  expectJsonValue(invalidEmailResponse.status, (status) => status === 400, `/api/contact rejects invalid email`);

  const shortMessageResponse = await postJson("/api/contact", {
    fullName: "Test User",
    email: "test@example.com",
    message: "short",
  });
  expectJsonValue(shortMessageResponse.status, (status) => status === 400, `/api/contact rejects short message`);

  const quoteMissingFieldsResponse = await postJson("/api/contact", {
    inquiryType: "quote",
    fullName: "Test User",
    email: "test@example.com",
    message: "This is a valid message.",
  });
  expectJsonValue(
    quoteMissingFieldsResponse.status,
    (status) => status === 400,
    `/api/contact rejects quote requests without projectType and location`,
  );

  const validGeneralResponse = await postJson("/api/contact", {
    inquiryType: "general",
    fullName: "Test User",
    email: "test@example.com",
    message: "This is a valid message.",
  });
  if (validGeneralResponse.ok) {
    const payload = await validGeneralResponse.json();
    expectJsonValue(payload.ok, Boolean, `/api/contact accepts a valid general inquiry`);
    expectJsonValue(payload.leadId, (value) => typeof value === "string" && value.startsWith("JC-"), `/api/contact returns a leadId for valid submissions`);
  } else {
    fail(`/api/contact accepts a valid general inquiry`);
  }

  const honeypotResponse = await postJson("/api/contact", {
    fullName: "Bot User",
    email: "bot@example.com",
    message: "This is a valid message.",
    website: "https://spam.invalid",
  });
  if (honeypotResponse.ok) {
    const payload = await honeypotResponse.json();
    expectJsonValue(payload.ok, Boolean, `/api/contact honeypot path returns ok`);
    expectJsonValue(payload.leadId, (value) => value === undefined, `/api/contact honeypot path does not create a leadId`);
  } else {
    fail(`/api/contact honeypot path returns ok`);
  }
}

async function testStructuredData() {
  const homeHtml = await expectRouteOk("/");
  if (homeHtml) {
    expectMatch(homeHtml, /ArchitecturalFirm/i, `/ includes ArchitecturalFirm schema`);
  }

  const faqRoute = "/residential-architect-thanjavur";
  const faqHtml = await expectRouteOk(faqRoute);
  if (faqHtml) {
    expectMatch(faqHtml, /FAQPage/i, `${faqRoute} includes FAQ schema`);
  }

  const aboutHtml = await expectRouteOk("/about");
  if (aboutHtml) {
    expectNotMatch(aboutHtml, /Typical Job Cost[^<]*Rs\. 1500 - Rs\. 150000/i, `/about avoids obviously placeholder-like pricing text`);
  }
}

async function main() {
  console.log(`Running local validation against ${baseUrl}`);

  await testPublicRoutes();
  await testHeadingStructure();
  await testRobotsAndSitemap();
  await testContactApi();
  await testStructuredData();

  if (failures > 0) {
    console.error(`\n${failures} of ${checks} checks failed.`);
    process.exit(1);
  }

  console.log(`\nAll ${checks} checks passed.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
