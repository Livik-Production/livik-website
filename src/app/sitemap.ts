// app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.liviktech.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.liviktech.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.liviktech.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.liviktech.com/contact",
      lastModified: new Date(),
    },
  ];
}
