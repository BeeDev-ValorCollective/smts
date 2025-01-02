// HOME VIEW PAGE

import MeetThad from "../components/HomeComponents/MeetThad/MeetThad";
import WhatMakesUsDifferent from "../components/HomeComponents/WhatMakesUsDiff/WhatMakesUsDifferent";
import HomeHero from "../components/ReusableComponents/HeroComponent/Hero";

export default function Home() {
    
    return(
        <main>
            <HomeHero Title1="Senior Mobile" Title2="Tax Services" SubTitle="Don't Drive... Make The Call" />
            <MeetThad />
            <WhatMakesUsDifferent />
        </main>
    );
};