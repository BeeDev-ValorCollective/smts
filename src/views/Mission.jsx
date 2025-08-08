/**
 * About Component
 * 
 * This component represents the "About" page, which provides detailed information about the organization's mission, 
 * the problems it aims to solve, and the solutions it offers. It consists of several sections, including a hero section, 
 * mission header, problem and solution descriptions, and a mission footer. The page also automatically scrolls to the top 
 * upon rendering using a custom hook.
 * 
 * Key Features:
 * - **Hero Section**: Displays the title "Our Mission" using the `PageHero` component to introduce the organization's mission.
 * - **Mission Header**: The `MissionHeader` component provides an overview or introduction to the organization’s mission.
 * - **Problem and Solution**: The `TheProblem` and `TheSolution` components outline the challenges the organization addresses and the solutions it provides.
 * - **Mission Footer**: The `MissionFooter` component provides additional context or closing information about the organization’s mission.
 * - **Auto Scroll to Top**: The `useScrollToTop` hook ensures that the page automatically scrolls to the top when the component is loaded.
 * 
 * Dependencies:
 * - **useScrollToTop**: A custom hook that manages scrolling behavior to ensure the page loads from the top.
 * - **PageHero**: A reusable hero component displaying the main title for the page.
 * - **MissionHeader**: A component that provides the header or introduction for the mission section.
 * - **TheProblem**: A component detailing the problem the organization seeks to address.
 * - **TheSolution**: A component describing the solutions the organization offers.
 * - **MissionFooter**: A component providing additional context or conclusions related to the organization's mission.
 * 
 * Usage:
 * The About component introduces the organization's mission, highlights the challenges it addresses, and showcases its solutions. 
 * It provides a structured approach to communicating the core values and objectives of the organization.
 **/


// IMPORT SUBCOMPONENTS
import MissionFooter from "../components/MissionComponents/MissionFooter/MissionFooter";
import MissionHeader from "../components/MissionComponents/MissionHeader/MissionHeader";
import TheSolution from "../components/MissionComponents/The Solution/TheSolution";
import TheProblem from "../components/MissionComponents/TheProblem/TheProblem";
import PageHero from "../components/ReusableComponents/HeroComponent/Hero"

// Import Custom Hooks
import useScrollToTop from "../customHooks/useScrollToTop";

export default function About() {
    
    useScrollToTop();
    
    return(
        <main>
            <PageHero Title1="Our Mission" />
            <MissionHeader />
            <TheProblem />
            <TheSolution />
            <MissionFooter />
        </main>
    );
};