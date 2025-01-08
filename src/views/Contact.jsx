// CONTACT US VIEW PAGE
// This page will utilize the node backend to perform on page mailing functions

// IMPORT SUBCOMPONENTS
import ContactForm from "../components/ContactComponents/ContactForm/ContactForm";
import ContactHeader from "../components/ContactComponents/ContactHeader/ContactHeader";
import HomeHero from "../components/ReusableComponents/HeroComponent/Hero";


export default function Contact() {
    
    return(
        <main>
            <HomeHero Title1="Contact Us" />
            <ContactHeader />
            <ContactForm />
        </main>
    );
};