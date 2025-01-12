// BAD LINK VIEW PAGE

// Import Custom Hooks
import useScrollToTop from "../customHooks/useScrollToTop";

// IMPORT SUBCOMPONENTS
import Button from "../components/ReusableComponents/ButtonComponent/Button";

// IMPORT IMAGES
import SMTSIcon from "../assets/images/SMTS_Icon_noBG.png"
import PageHero from "../components/ReusableComponents/HeroComponent/Hero";

export default function Contact() {

    useScrollToTop();

    return(
        <main>
            <PageHero Title1="ERROR 404 -" Title2="PAGE NOT FOUND" />
            <img src={SMTSIcon} alt="SMTS Icon" />
            <Button to="/home" text="Go Home" color="blue" />
        </main>
    );
};