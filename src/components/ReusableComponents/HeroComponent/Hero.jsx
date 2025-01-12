// PAGE HERO SECTION
// Pass in Title1, Title2 and Subtitle as needed. 
// Title1  and Title2 allow for splitting content for smaller views

// IMPORT STYLES
import './hero.css'

// IMPORT IMAGES
import HeroImage from '../../../assets/images/AmericanFlag.png'

export default function PageHero({ Title1, Title2, SubTitle, Span }) {
    
    return(
        <div className='page_hero'>
            <img src={HeroImage} alt="SMTS Hero" />
            <h1>
                { Title1 }&nbsp;
                <br className='mobile_only' />
                { Title2 }
                <span>{Span}</span>
            </h1>
            <p>
                { SubTitle }
            </p>
        </div>
    );
};