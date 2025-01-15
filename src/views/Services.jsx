/**
 * Services View Page
 * 
 * This is the main view page for displaying all available services. It uses the 
 * following subcomponents:
 * 
 * Subcomponents:
 * - PageHero: Displays the hero section of the page with a title.
 * - ServiceOptions: Dynamically renders a list of service cards.
 * 
 * Description:
 * - Displays a hero section at the top of the page.
 * - Renders the ServiceOptions component, which includes all active services from JSON data.
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