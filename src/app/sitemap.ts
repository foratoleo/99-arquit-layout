import type { MetadataRoute } from 'next';

/**
 * Sitemap configuration for SEO
 *
 * Generates sitemap.xml for search engine crawlers.
 * Update the URL with your production domain when deployed.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://re-arquitetura.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}#manifesto`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}#portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}#contato`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
