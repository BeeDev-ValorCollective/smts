
/**
 * Custom React Hook: useLoadMetaData
 *
 * This hook dynamically loads and returns the metadata (title, description, Open Graph data, etc.)
 * based on the current route of the application. It is useful for single-page applications (SPAs)
 * where each route may require unique metadata for SEO purposes.
 *
 * The metadata is loaded from a JSON file that contains page-specific information.
 * The hook returns the metadata for the current page based on the URL path.
 *
 * Usage:
 * - Import and call `useLoadMetaData` in a component to load the appropriate metadata for the current route.
 * - This hook is used in conjunction with `useUpdateMetaData` to update the document head for SEO.
 *
 *
 * Notes:
 * - The hook uses the `useLocation` hook from `react-router-dom` to get the current route's pathname.
 * - It matches the current route with data from a JSON file (`Links.json`) and returns the corresponding metadata.
 * - If no metadata is found for the current route, it falls back to default metadata for the homepage or a generic page.
 * - This hook is particularly useful for SEO purposes in SPAs where each route has its own metadata.
 * - Ensure the `Links.json` file is structured correctly to include a `meta` object for each route.
 *
 *
 * @returns {Object} - An object containing metadata (title, description, keywords, OG data, etc.) for the current route.
 **/


// Import React Magic
import { useLocation } from 'react-router-dom';

// Import Json File
import LinksData from '../assets/Json/Links.json';

const useLoadMetaData = () => {

  // Get Route Location
  const location = useLocation();

  // Find the page data that matches the current URL path
  const currentPage = LinksData.find(link => location.pathname.includes(link.url));

  if (currentPage && currentPage.meta) {
    return currentPage.meta;  // Return the metadata for the current page
  }

  // Fallback metadata for the homepage or a generic page
  return {
    title: "Seniors Mobile Tax Services",
    description: "",
    keywords: "",
    ogTitle: "Seniors Mobile Tax Services",
    ogDescription: "Seniors Mobile Tax Services",
    ogImage: "./src/assets/images/SMTS_Icon_White.jpg",
    ogUrl: "",
  };
};

export default useLoadMetaData;