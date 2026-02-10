import { MetadataRoute } from 'next';

/**
 * Sitemap configuration for SEO
 *
 * Generates sitemap.xml for search engine crawlers.
 * Update the URL with your production domain when deployed.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://re-arquitetura.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}#manifesto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}#portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}#contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
