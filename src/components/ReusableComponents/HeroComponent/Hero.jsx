/**
 * PageHero Component
 * 
 * This component is used to display a hero section on the page. It includes an image, a main title, and a subtitle. 
 * The title can be split into two parts (Title1 and Title2) for better responsiveness on smaller screens. 
 * The `Span` prop allows for additional content to be highlighted within the title.
 * 
 * Key Features:
 * - **Responsive Title**: The component supports splitting the title into `Title1` and `Title2` to better adjust the layout for smaller screens.
 * - **Subtitle**: The subtitle is rendered beneath the title to provide additional context.
 * - **Image**: A hero image is displayed at the top of the section.
 * - **Span**: The `Span` prop allows additional text to be added within the title, helping to emphasize key parts of the message.
 * 
 * Props:
 * - **`Title1`** (`string`): The first part of the title, which is displayed at the beginning of the `h1` element.
 * - **`Title2`** (`string`): The second part of the title, which follows `Title1` and is displayed on a new line for smaller views.
 * - **`SubTitle`** (`string`): The subtitle text that provides additional context beneath the main title.
 * - **`Span`** (`string`): Additional text that will be rendered inside a `span` element within the title.
 * 
 * Usage:
 * The PageHero component is used to display a dynamic hero section with a customizable title, subtitle, and image, 
 * adjusting for responsiveness across screen sizes.
 **/

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