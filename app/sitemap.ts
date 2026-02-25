import type { MetadataRoute } from "next";

const siteUrl = "https://www.jcdesignsconsulting.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
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

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
