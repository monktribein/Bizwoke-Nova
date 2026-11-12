import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({
  title = 'Bizwoke Nova™ | Enterprise Software, AI Solutions & Digital Transformation',
  description = 'Bizwoke Nova builds enterprise software, AI-powered digital platforms, mobile apps, ERP solutions and digital growth services for businesses and institutions across India.',
  canonicalUrl = '',
  image = 'https://bizwoke.com/assets/og-image.jpg',
  structuredData = null
}) {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://bizwoke.com${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://bizwoke.com${image.startsWith('/') ? '' : '/'}${image}`;

  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 3. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = currentUrl;

    // 4. Open Graph & Twitter Tags
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Bizwoke Nova™' },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:secure_url', content: fullImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl }
    ];

    metaTags.forEach(({ property, name, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', property);
        if (name) tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // 5. JSON-LD Structured Data
    const existingScript = document.getElementById('bizwoke-structured-data');
    if (existingScript) existingScript.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'bizwoke-structured-data';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, currentUrl, structuredData]);

  return null;
}
