// SERVICES VIEW PAGE

// IMPORT SUBCOMPONENTS
import Button from "../components/ReusableComponents/ButtonComponent/Button";
import HomeHero from "../components/ReusableComponents/HeroComponent/Hero";
import ITINServices from "../components/ServicesComponents/ITINServices/ITINServices";
import NotaryServices from "../components/ServicesComponents/NotaryServices/NotaryServices";
import TaxServices from "../components/ServicesComponents/TaxServices/TaxServices";

export default function Services() {
    
    return(
        <main>
            <HomeHero Title1="Services" Title2="" SubTitle="" />
            <TaxServices />
            <ITINServices />
            <NotaryServices />
            <Button to="/" text="Home" color="blue" />
        </main>
    );
};