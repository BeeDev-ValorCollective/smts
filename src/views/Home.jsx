// HOME VIEW PAGE

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