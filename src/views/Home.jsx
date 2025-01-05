// HOME VIEW PAGE

import Benefits from "../components/HomeComponents/Benefits/Benefits";
import MeetThad from "../components/HomeComponents/MeetThad/MeetThad";
import Partnership from "../components/HomeComponents/Partnership/Partnership";
import WaysWeHelp from "../components/HomeComponents/WaysWeHelp/WaysWeHelp";
import WhatMakesUsDifferent from "../components/HomeComponents/WhatMakesUsDiff/WhatMakesUsDifferent";
import HomeHero from "../components/ReusableComponents/HeroComponent/Hero";

export default function Home() {
    
    return(
        <main>
            <HomeHero Title1="Senior Mobile" Title2="Tax Services" SubTitle="Don't Drive... Make The Call" />
            <MeetThad />
            <WhatMakesUsDifferent />
            <Partnership />
            <WaysWeHelp />
            <Benefits />
        </main>
    );
};