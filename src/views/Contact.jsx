/**
 * Contact Component
 * 
 * This component represents the "Contact Us" page. It integrates a contact form for users to submit inquiries, 
 * along with a header and a hero section for context. The component also includes a custom hook to automatically scroll 
 * to the top of the page upon rendering.
 * 
 * Key Features:
 * - **Contact Form**: The page includes a form (`ContactForm` component) for users to submit their inquiries directly.
 * - **Header**: A header (`ContactHeader` component) is displayed at the top of the contact section, offering additional context or instructions.
 * - **Hero Section**: The hero section (`PageHero` component) displays a title and enhances the page's visual appeal.
 * - **Auto Scroll to Top**: The page automatically scrolls to the top using the custom hook (`useScrollToTop`) when the component is loaded.
 * - **Node Backend Integration**: The contact form will interact with the backend server for email-related functionality (i.e., sending contact form submissions via email).
 * 
 * Dependencies:
 * - **useScrollToTop**: A custom hook that handles the automatic scrolling of the page to the top when the component is mounted.
 * - **ContactForm**: A component for displaying and submitting the contact form.
 * - **ContactHeader**: A component that provides a heading or description for the contact section.
 * - **PageHero**: A reusable hero component used to display the page title.
 * 
 * Usage:
 * The Contact component serves as the central point for user inquiries, offering a form to submit questions or feedback, 
 * with helpful context provided by the header and hero section.
 **/

// IMPORT SUBCOMPONENTS
import ContactForm from "../components/ContactComponents/ContactForm/ContactForm";
import ContactHeader from "../components/ContactComponents/ContactHeader/ContactHeader";
import PageHero from "../components/ReusableComponents/HeroComponent/Hero";

// Import Custom Hooks
import useScrollToTop from "../customHooks/useScrollToTop";

export default function Contact() {
    
    useScrollToTop();
    
    return(
        <main>
            <PageHero Title1="Contact Us" />
            <ContactHeader />
            <ContactForm />
        </main>
    );
};