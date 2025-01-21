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


function useUpdateMetaData(metaData) {
  useEffect(() => {
    // Update document title with the provided metaData
    document.title = metaData.title;

    // Update meta description tag with the provided content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaData.description);
    }

    // Update meta keywords tag with the provided content
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metaData.keywords);
    }

    // OPEN GRAPH METADATA
    // Update Open Graph title with the provided content
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metaData.ogTitle);
    }

    // Update Open Graph description with the provided content
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metaData.ogDescription);
    }

    // Update Open Graph image with the provided content
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', metaData.ogImage);
    }

    // Update Open Graph URL with the provided content
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', metaData.ogUrl);
    }

    // TWITTER METADATA
    // Update Twitter title with the provided content
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', metaData.twitterTitle);
    }
    
    // Update Twitter description with the provided content
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', metaData.twitterDescription);
    }
    
  }, [metaData]); // Re-run the effect whenever metaData changes
}

export default useUpdateMetaData;