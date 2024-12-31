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