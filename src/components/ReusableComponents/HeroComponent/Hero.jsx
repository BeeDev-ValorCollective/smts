// HOME PAGE HERO SECTION
// Pass in Title1, Title2 and Subtitle as needed. 
// Title1  and Title2 allow for splitting content for smaller views

// IMPORT STYLES
import './hero.css'

// IMPORT IMAGES
import HeroImage from '../../../assets/images/AmericanFlag.png'

export default function HomeHero({ Title1, Title2, SubTitle }) {
    
    return(
        <div className='home_hero'>
            <img src={HeroImage} alt="SMTS Hero" />
            <h1>
                { Title1 }&nbsp;
                <br className='mobile_only' />
                { Title2 }
            </h1>
            <p>
                { SubTitle }
            </p>
        </div>
    );
};