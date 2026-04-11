import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://books-library-ashy.vercel.app'

  // Use a fixed date to avoid unnecessary re-crawls
  const lastModified = new Date('2026-04-11')

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Dynamic year routes (1-8)
  const yearRoutes = Array.from({ length: 8 }, (_, i) => ({
    url: `${baseUrl}/year/${i + 1}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...yearRoutes]
}
