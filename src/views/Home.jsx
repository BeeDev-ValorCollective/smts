/**
 * Home Component
 * 
 * This component represents the homepage of the website. It serves as an introductory page, 
 * displaying key sections such as benefits, partnership opportunities, and the company’s unique selling points.
 * A hero section with a title and subtitle is displayed at the top, followed by multiple sections highlighting 
 * the organization's offerings and the people behind it. The page automatically scrolls to the top using a custom hook.
 * 
 * Key Features:
 * - **Hero Section**: Displays a title (`Seniors Mobile Tax Services LLC`) and a subtitle ("Don't Drive... Make The Call") to grab the user's attention.
 * - **Meet Thad**: Introduces key personnel (e.g., Thad) through the `MeetThad` component.
 * - **What Makes Us Different**: Highlights the unique qualities and services of the organization via the `WhatMakesUsDifferent` component.
 * - **Partnership**: Describes opportunities for partnership with the `Partnership` component.
 * - **Ways We Help**: Outlines the services provided through the `WaysWeHelp` component.
 * - **Benefits**: Lists the benefits of using the company's services with the `Benefits` component.
 * - **Auto Scroll to Top**: The `useScrollToTop` hook ensures the page automatically scrolls to the top upon loading.
 * 
 * Dependencies:
 * - **useScrollToTop**: A custom hook that handles automatic scrolling to the top when the page is loaded.
 * - **PageHero**: A reusable hero component used to display the primary title, subtitle, and additional contextual information.
 * - **MeetThad**: A component used to introduce the person or team behind the service.
 * - **WhatMakesUsDifferent**: A component used to communicate the unique aspects of the service.
 * - **Partnership**: A component explaining partnership opportunities.
 * - **WaysWeHelp**: A component detailing the various ways the organization can assist clients.
 * - **Benefits**: A component that lists the benefits of using the service.
 * 
 * Usage:
 * The Home component provides an overview of the organization's key offerings, emphasizing its unique value propositions. 
 * It guides users through different sections that explain the service, benefits, and how to get involved.
 **/


// IMPORT SUBCOMPONENTS
import Benefits from "../components/HomeComponents/Benefits/Benefits";
import MeetThad from "../components/HomeComponents/MeetThad/MeetThad";
import Partnership from "../components/HomeComponents/Partnership/Partnership";
import WaysWeHelp from "../components/HomeComponents/WaysWeHelp/WaysWeHelp";
import WhatMakesUsDifferent from "../components/HomeComponents/WhatMakesUsDiff/WhatMakesUsDifferent";
import PageHero from "../components/ReusableComponents/HeroComponent/Hero";

// Import Custom Hooks
import useScrollToTop from "../customHooks/useScrollToTop";

export default function Home() {
    
    useScrollToTop();
    
    return(
        <main>
            <PageHero Title1="Seniors Mobile" Title2="Tax Services" Span="LLC" SubTitle="Don't Drive... Make The Call" />
            <MeetThad />
            <WhatMakesUsDifferent />
            <Partnership />
            <WaysWeHelp />
            <Benefits />
        </main>
    );
};