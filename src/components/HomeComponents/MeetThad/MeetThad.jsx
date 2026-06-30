/**
 * MeetThad Component
 * 
 * This component is designed to display the profile of the owner, Thad A. Jones. It includes an image of Thad, 
 * along with his title, qualifications, and a brief description of his experience and services.
 * 
 * Renders:
 * - **Image**: Displays an image of Thad, sourced from `userIcon`.
 * - **Title**: Displays Thad’s name and professional titles in a heading (`h2`), with the title "EA, CAA & Notary".
 * - **Subtitle**: Displays Thad’s role as Founder & Owner in a heading (`h4`).
 * - **Description**: A paragraph (`p`) providing detailed information about Thad’s qualifications and experience.
 * 
 * The content is responsive, with the `br` tag added for smaller screens (via the class `mobile_only`) to ensure proper text wrapping for the title.
 * 
 * Styling:
 * - The component is styled using the `meetThad.css` file.
 * - The image and text are arranged to create a clean and informative layout, ensuring accessibility and readability.
 * 
 * Notes:
 * - The `alt` attribute for the image is set to "Meet Thad" for accessibility purposes.
 * - The component also includes details about Thad’s professional qualifications, including being a tax practitioner, notary, and certified acceptance agent.
 */

// IMPORT STYLES
import './meetThad.css'

// IMPORT IMAGES
import userIcon from "../../../assets/images/MeetThad.jpg"

export default function MeetThad() {

    const years = new Date().getFullYear() - 2006
    
    return(
        <div className='meet_thad'>
            {/* OWNER IMAGE */}
            <img src={userIcon} alt="Meet Thad" />
            <div>
                <h2>
                    Thad A. Jones -&nbsp;
                    <br className="mobile_only" />
                    EA, CAA & Notary Public
                </h2>
                <h4>
                    Founder & Mobile Tax Practitioner
                </h4>
                <p>
                    With over {years} years of experience as a tax practitioner.  He is dedicated to providing expert and reliable tax preparation services to his clients. He is a member of the National Association of Enrolled Agents (NAEA) and Virginia Society of Enrolled Agents (VASEA). Additionally, he is a Commonwealth of Virginia Commissioned Notary Public. He is a Certified Acceptance Agent (CAA), having processed hundreds of Individual Taxpayer Identification Number (ITIN) applications. He is a retired Army Veteran and retired from law enforcement profession. SMTS is State certified as a Small, Women and Minority (SWaM) and Service Disabled Veteran Owned Business (SDVOB).
                </p>
            </div>
        </div>
    );
};