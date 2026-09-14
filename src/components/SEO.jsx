import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Updates the existing static tags from public/index.html in place (rather than
// rendering new ones) so there is never a duplicate <title>/<meta> per route.
const SITE_URL = 'https://www.al-afzahgroup.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;
const SITE_NAME = 'AL-AFZAH GROUP WLL';

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SEO = ({ title, description, image = DEFAULT_IMAGE, noindex = false }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonical = `${SITE_URL}${path}`;
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setLink('canonical', canonical);
    setMeta('name', 'robots', robotsContent);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [pathname, title, description, image, noindex]);

  return null;
};

export default SEO;
