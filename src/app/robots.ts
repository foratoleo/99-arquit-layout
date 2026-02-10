import type { MetadataRoute } from 'next';

/**
 * Robots.txt configuration
 *
 * Controls search engine crawler access to the site.
 * Update the URL with your production domain when deployed.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://re-arquitetura.com.br';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
