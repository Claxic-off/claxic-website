import { useEffect } from 'react';

const SITE_URL = 'https://www.claxic.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// Public URL for the founder photo.
// The image is served from the existing src/assets/Profile/Nithesh.jpeg import.
const FOUNDER_IMAGE = `${SITE_URL}/images/Nithesh.jpeg`;

const LINKEDIN_URL =
  'https://www.linkedin.com/in/nithesh-deva-02736736b';

function ensureMetaTag(selector, attributes, tagName = 'meta') {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement(tagName);

    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value);
    });

    document.head.appendChild(tag);
    return tag;
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  return tag;
}

function removeMetaTag(selector) {
  const tag = document.head.querySelector(selector);
  if (tag) tag.remove();
}

function normalizeCanonicalPath(canonicalPath) {
  if (!canonicalPath) return `${SITE_URL}/`;

  const sanitized = canonicalPath.split(/[?#]/)[0];
  const trimmed = sanitized.startsWith('/')
    ? sanitized
    : `/${sanitized}`;

  return `${SITE_URL}${trimmed || '/'}`;
}

function ensureJsonLd(data) {
  const selector = 'script[data-claxic-jsonld="true"]';
  let script = document.head.querySelector(selector);

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-claxic-jsonld', 'true');
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  robots = 'index, follow',
  ogType = 'website',
}) {
  useEffect(() => {
    const safeTitle = title || 'Claxic';

    const safeDescription =
      description ||
      'Claxic builds modern digital solutions and practical learning experiences.';

    const isFounderPage =
      canonicalPath.replace(/\/+$/, '') === '/founder';

    const canonicalUrl = normalizeCanonicalPath(canonicalPath);
    const ogImage = isFounderPage
      ? FOUNDER_IMAGE
      : DEFAULT_OG_IMAGE;

    document.title = safeTitle;

    ensureMetaTag('meta[name="description"]', {
      name: 'description',
      content: safeDescription,
    });

    ensureMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });

    ensureMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: safeTitle,
    });

    ensureMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: safeDescription,
    });

    ensureMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    ensureMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: ogType,
    });

    ensureMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Claxic Technologies',
    });

    ensureMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: ogImage,
    });

    ensureMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    ensureMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: safeTitle,
    });

    ensureMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: safeDescription,
    });

    ensureMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: ogImage,
    });

    ensureMetaTag(
      'link[rel="canonical"]',
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
      'link'
    );

    if (isFounderPage) {
      ensureJsonLd({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: safeTitle,
        url: canonicalUrl,
        mainEntity: {
          '@type': 'Person',
          '@id': `${SITE_URL}/founder#person`,
          name: 'Nithesh Devaraj',
          image: FOUNDER_IMAGE,
          jobTitle: 'Founder & CEO',
          url: `${SITE_URL}/founder`,
          sameAs: [LINKEDIN_URL],
          worksFor: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'Claxic Technologies',
            url: `${SITE_URL}/`,
          },
          description: safeDescription,
        },
      });
    } else {
      removeMetaTag('script[data-claxic-jsonld="true"]');
    }

    return () => {
      removeMetaTag('meta[name="description"]');
      removeMetaTag('meta[name="robots"]');
      removeMetaTag('meta[property="og:title"]');
      removeMetaTag('meta[property="og:description"]');
      removeMetaTag('meta[property="og:url"]');
      removeMetaTag('meta[property="og:type"]');
      removeMetaTag('meta[property="og:site_name"]');
      removeMetaTag('meta[property="og:image"]');
      removeMetaTag('meta[name="twitter:card"]');
      removeMetaTag('meta[name="twitter:title"]');
      removeMetaTag('meta[name="twitter:description"]');
      removeMetaTag('meta[name="twitter:image"]');
      removeMetaTag('link[rel="canonical"]');
      removeMetaTag('script[data-claxic-jsonld="true"]');
    };
  }, [title, description, canonicalPath, robots, ogType]);

  return null;
}
