// CONTACT US VIEW PAGE
// This page will utilize the node backend to perform on page mailing functions

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