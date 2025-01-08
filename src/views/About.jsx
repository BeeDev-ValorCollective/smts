// ABOUT VIEW PAGE

// IMPORT SUBCOMPONENTS
import Button from "../components/ReusableComponents/ButtonComponent/Button";

// Import Custom Hooks
import useScrollToTop from "../customHooks/useScrollToTop";

export default function About() {

    useScrollToTop();

    return(
        <main>
            <h1>TEST About Us Page</h1>
            <h3>This is a test...</h3>
            <Button to="/" text="Home" color="red" />
        </main>
    );
};