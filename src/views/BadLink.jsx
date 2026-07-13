/**
 * Contact (Bad Link View) Component
 * 
 * This component is used to display a "404 Page Not Found" error page. It uses a custom hook to automatically scroll to the top of the page when the component is rendered.
 * The page includes a hero section that communicates the error, an icon image, and a button that redirects the user to the home page.
 * 
 * Key Features:
 * - **Error Page**: Displays a "404 Page Not Found" message with a clear title and accompanying image.
 * - **Auto Scroll to Top**: A custom hook (`useScrollToTop`) is used to scroll the page to the top upon rendering the component.
 * - **Navigation Button**: A button (`Button` component) is provided for users to navigate back to the home page.
 * - **Customizable Button**: The button includes customizable text and color, in this case, "Go Home" with a blue color.
 * 
 * Dependencies:
 * - **useScrollToTop**: A custom hook that handles automatic scrolling to the top of the page when the component is mounted.
 * - **Button**: A reusable button component (`ButtonComponent/Button`) used to redirect users to the home page.
 * - **PageHero**: A reusable hero component (`HeroComponent/Hero`) used to display the error message.
 * - **Images**:
 *   - `SMTSIcon` from `../assets/images/SMTS_Icon_noBG.png`
 * 
 * Usage:
 * The Contact component is designed to display when a user navigates to a non-existent page, 
 * guiding them back to the homepage with a clear error message and a button.
 **/
import React from 'react';
import { useInRouterContext } from 'react-router'; // v7 server-safe
import { Link } from 'react-router-dom';

import useScrollToTop from '../customHooks/useScrollToTop';

// SUBCOMPONENTS
import Button from '../components/ReusableComponents/ButtonComponent/Button';
import PageHero from '../components/ReusableComponents/HeroComponent/Hero';

// IMAGES
import SMTSIcon from '../assets/images/SMTS_Icon_noBG.png';

export default function BadLink() {
  useScrollToTop();
  const inRouter = useInRouterContext();

  return (
    <main>
      <PageHero Title1="ERROR 404 -" Title2="PAGE NOT FOUND" />
      <img src={SMTSIcon} alt="SMTS Icon" />

      {inRouter ? (
        <>
          {/* Button likely renders a <Link> internally */}
          <Button to="/home" text="Go Home" color="blue" />
          {/* Optional direct Link */}
          {/* <Link to="/home">Go Home</Link> */}
        </>
      ) : (
        // SSR-safe fallback if no Router context is available
        <a href="/home" className="button_box">Go Home</a>
      )}
    </main>
  );
}