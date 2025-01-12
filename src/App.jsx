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
        // this can be replaced with a spinner or something more exciting at some point
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