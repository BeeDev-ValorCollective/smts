// BAD LINK VIEW PAGE

// Import Custom Hooks
import useScrollToTop from "../customHooks/useScrollToTop";

// IMPORT SUBCOMPONENTS
import Button from "../components/ReusableComponents/ButtonComponent/Button";

// IMPORT IMAGES
import SMTSIcon from "../assets/images/SMTS_Icon_noBG.png"

export default function Contact() {

    useScrollToTop();

    return(
        <main>
            <h1>404 page not found</h1>
            <img src={SMTSIcon} alt="" />
            <Button to="/" text="Home" color="blue" />
        </main>
    );
};