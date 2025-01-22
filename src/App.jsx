/**
 * App Component
 * 
 * This is the main application component that serves as the entry point to the website. It uses React Router for 
 * routing and lazy loading to optimize performance by loading views only when necessary. The app is wrapped in 
 * a `BrowserRouter` for routing, and components like `NavBar`, `Footer`, and `ScrollUpButton` are included for 
 * navigation and usability.
 * 
 * Key Features:
 * - **Lazy Loading**: The app utilizes React's `React.lazy` for dynamically importing view components (`Home`, 
 *   `Services`, `Contact`, `Mission`, and `BadLink`) to improve initial load time.
 * - **Routing**: Routes are managed using `React Router`, which enables navigation between different views. It also 
 *   handles a fallback route (`BadLink`) for invalid URLs.
 * - **Meta Data Management**: Custom hooks (`useLoadMetaData` and `useUpdateMetaData`) are used to fetch and update 
 *   the document title and meta tags for each page based on dynamic data.
 * - **Navigation Bar**: The `NavBar` component is included to allow users to navigate between different pages of the app.
 * - **Scroll Up Button**: A `ScrollUpButton` component is included to allow users to scroll back to the top of the page.
 * - **Footer**: The `Footer` component provides additional information or links at the bottom of the page.
 * 
 * Subcomponents:
 * - **NavBar**: A component that renders the navigation bar and highlights the current page based on the `location.pathname`.
 * - **Footer**: A footer component that adjusts its content based on the current page URL.
 * - **ScrollUpButton**: A button component that appears when the user scrolls down, allowing them to scroll back to the top.
 * - **BadLink**: A fallback component displayed when the user attempts to access a non-existent route.
 * 
 * Custom Hooks:
 * - **useLoadMetaData**: A custom hook responsible for fetching metadata, which includes document title and meta tags for SEO.
 * - **useUpdateMetaData**: A custom hook that updates the document’s title and meta tags based on the metadata fetched.
 * 
 * Routing:
 * - **Home** (`/home`): The landing page of the application, where users are introduced to the core features.
 * - **Services** (`/services`): The page listing all available services provided by the organization.
 * - **Contact** (`/contact`): The contact form page, allowing users to reach out for inquiries or support.
 * - **Mission** (`/mission`): A page describing the organization's mission, goals, and the problems it aims to solve.
 * - **BadLink** (`*`): A catch-all route that displays the `BadLink` component for invalid URLs.
 * 
 * Usage:
 * The `App` component sets up routing and lazy loads the main views. It provides a consistent navigation experience 
 * with dynamic metadata management, ensuring users always have the latest context and SEO information for each page. 
 * The page structure is flexible, allowing for easy updates and additions of new routes or components.
 **/

// IMPORT REACT MAGIC
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// IMPORT STYLES
import './App.css'

// IMPORT VIEWS (Lazy load for speed)
const Index = React.lazy(() => import('./views/Home'));
const Services = React.lazy(() => import('./views/Services'));
const Contact = React.lazy(() => import('./views/Contact'));
const Mission = React.lazy(() => import('./views/Mission'));
const BadLink = React.lazy(() => import('./views/BadLink'));

// IMPORT COMPONENTS
import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollUpButton from './components/ScrollUpComponent/ScrollUp';

// Import custom hooks
import useLoadMetaData from './customHooks/useLoadMetaData';
import useUpdateMetaData from './customHooks/useUpdateMetaData';

// WRAPPER TO UTILIZE THE LAZY LOADING
function App() {
  return (
    <BrowserRouter>
      <Suspense 
        fallback={ <BadLink /> }
      >
        <AppContent />
      </Suspense>
    </BrowserRouter>
  );
}

function AppContent() {

    // Fetch metadata from custom hook
    const metaData = useLoadMetaData();

    // Update document title and meta tags using custom hook
    useUpdateMetaData(metaData);
  

  // USE LOCATION GETS URL NAME
  const location = useLocation();

  return (
    <div className="app_wrapper">

      {/* NAVBAR COMPONENT */}
      <NavBar 
        currentPath={location.pathname}
      />

      {/* ROUTES */}
      <Routes>

        {/* HOME PAGE */}
        <Route 
          path='/' 
          element={
            <Navigate to="/home" replace />
          }
        />

        {/* LANDING PAGE */}
        <Route 
          path='/home'
          element={
            <Index />
          }
        />

        {/* SERVICES PAGE */}
        <Route 
          path='/services'
          element={
            <Services />
          }
        />

        {/* CONTACT PAGE */}
        <Route 
          path='/contact'
          element={
            <Contact />
          }
        />

        {/* MISSION PAGE */}
        <Route 
          path='/mission'
          element={
            <Mission />
          }
        />

        {/* CATCH ALL FOR BAD LINKS */}
        <Route 
          path='*'
          element={
            <BadLink />
          }
        />

      </Routes>

      {/* GO TO TOP COMPONENT */}
      <ScrollUpButton />

      {/* FOOTER COMPONENT */}
      <Footer 
        currentPath={location.pathname}
      />

    </div>
  );
};

export default App;