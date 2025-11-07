/**
 * Services Component
 * 
 * This component represents the "Services" view page, where users can explore all available services. 
 * It includes a hero section with the page title, followed by a dynamic list of service options. The page 
 * also includes a service card header to provide additional context for the services displayed.
 * The component automatically scrolls to the top when loaded using a custom hook.
 * 
 * Key Features:
 * - **Hero Section**: The `PageHero` component displays the title "Our Services" at the top of the page to introduce the section.
 * - **Service Header**: The `ServiceCardHeader` component provides a header or introductory text for the services section.
 * - **Service Options**: The `ServiceOptions` component dynamically renders a list of available services, typically sourced from JSON data.
 * - **Auto Scroll to Top**: The `useScrollToTop` hook ensures that the page scrolls to the top when it is first loaded.
 * 
 * Subcomponents:
 * - **`PageHero`**: A reusable component that displays the hero section with the title for the page.
 * - **`ServiceCardHeader`**: A component that displays the header for the services section, providing context for the upcoming content.
 * - **`ServiceOptions`**: A dynamic component that renders a list of service cards, allowing users to explore all available services.
 * 
 * Dependencies:
 * - **useScrollToTop**: A custom hook that ensures the page scrolls to the top upon rendering.
 * - **PageHero**: A reusable component for displaying the main title in the hero section.
 * - **ServiceCardHeader**: A component used to introduce the services section.
 * - **ServiceOptions**: A component responsible for rendering the list of active services.
 * 
 * Usage:
 * The Services component serves as the main page for displaying all available services, starting with an engaging hero section 
 * and following with a list of services that users can browse. The layout is dynamic, ensuring that the available services 
 * are rendered based on the current data.
 **/

// IMPORT CUSTOM HOOKS
import useScrollToTop from "../customHooks/useScrollToTop";

// IMPORT SUBCOMPONENTS
import PageHero from "../components/ReusableComponents/HeroComponent/Hero";
import ServiceOptions from "../components/ServicesComponents/ServiceOptions/ServiceOptions";
import ServiceCardHeader from "../components/ServicesComponents/ServiceHeader/ServiceCardHeader";

export default function Services() {

    useScrollToTop();
    
    return(
        <main>
            <PageHero Title1="Our Services"/>
            <ServiceCardHeader />
            <ServiceOptions />
        </main>
    );
};