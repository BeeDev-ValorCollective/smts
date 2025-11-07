/**
 * Custom React Hook: useUpdateMetaData
 *
 * This hook dynamically updates the document's metadata (title, description, Open Graph, Twitter cards)
 * whenever the `metaData` object is updated. It is useful for single-page applications (SPAs) where
 * the metadata needs to change based on the current route or component state.
 *
 * The hook updates the following elements in the `<head>`:
 * - Document title
 * - Meta tags for description, keywords, and Open Graph/Twitter metadata
 * 
 * Usage:
 * - Import and call `useUpdateMetaData` in a component to update the page's metadata dynamically.
 * - Pass an object containing the metadata fields (e.g., `title`, `description`, `ogTitle`, etc.) to the hook.
 *
 * Notes:
 * - The hook updates the page's `<title>` and several `<meta>` tags, including those used for SEO and social media.
 * - It relies on the `metaData` object being passed to it, which should contain specific properties for SEO and social sharing (Open Graph and Twitter).
 * - The hook automatically reacts to changes in the `metaData` object, making it suitable for dynamic content.
 * 
 * @param {Object} metaData - The metadata object containing fields for title, description, Open Graph, and Twitter tags.
 * @returns {void}
 */


// IMPORT REACT MAGIC
import { useEffect } from 'react';


function useUpdateMetaData(metaData = {}) {
  useEffect(() => {
    // Skip entirely during SSR/prerender
    if (typeof document === 'undefined') return;

    const {
      title,
      description,
      keywords,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      twitterTitle,
      twitterDescription,
    } = metaData;

    // Title
    if (title) document.title = title;

    // Helper to set a meta tag if both tag and content exist
    const setMeta = (selector, content, attr = 'content') => {
      if (!content) return;
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, content);
    };

    // Standard meta
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]', keywords);

    // Open Graph
    setMeta('meta[property="og:title"]', ogTitle);
    setMeta('meta[property="og:description"]', ogDescription);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:url"]', ogUrl);

    // Twitter
    setMeta('meta[name="twitter:title"]', twitterTitle);
    setMeta('meta[name="twitter:description"]', twitterDescription);
  }, [metaData]);
}

export default useUpdateMetaData;