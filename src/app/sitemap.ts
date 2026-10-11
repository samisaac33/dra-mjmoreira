import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/practice";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const routes = ["", "/servicios", "/sobre-mi", "/contacto", "/privacidad"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
