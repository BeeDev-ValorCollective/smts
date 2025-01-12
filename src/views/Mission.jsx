// ABOUT VIEW PAGE

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