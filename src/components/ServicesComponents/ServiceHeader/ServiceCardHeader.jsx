/**
 * ServiceCardHeader Component
 * 
 * This component displays a brief description of the services offered and provides
 * jump links to different sections of the page. These links smoothly scroll to 
 * specific service sections identified by unique IDs. 
 * 
 * Key Features:
 * - Displays a header with an introductory paragraph describing the services.
 * - Contains jump links for easy navigation to each service section (E-File, ITIN, Notary).
 * - Utilizes the custom `useJumpLink` hook to smoothly scroll to target sections on click.
 * 
 * Imports:
 * - `useJumpLink` (custom hook): Handles the smooth scrolling behavior when a link is clicked.
*
 * Usage:
 * This component is used in the Services page to give users an easy way to jump to different service cards.
 * It is designed to work with a smooth scrolling effect for a better user experience.
 * 
 * Example:
 * - Clicking on "E-File" will scroll smoothly to the section with the ID `tax_services`.
 * - Clicking on "ITIN" will scroll to the `itin_services` section.
 * - Clicking on "Notary" will scroll to the `notary_services` section.
 */



// IMPORT STYLE
import './serviceCardHeader.css'

// IMPORT HOOK
import useJumpLink from './useJumpLinks'

export default function ServiceCardHeader() {

    const handleClick = useJumpLink();

    return(
        <div className='service_options'>
            <p className='option_header'>
                We take pride in offering a range of professional and convenient services tailored to meet your needs. With a commitment to personalized care and attention to detail, we ensure a seamless and stress-free experience for every client.  <b>Explore our services below:</b>
            </p>
            {/* JUMP LINKS */}
            <ul>
                <li onClick={(e) => handleClick(e, "tax_services")}>E-File</li>
                <li onClick={(e) => handleClick(e, "itin_services")}>ITIN</li>
                <li onClick={(e) => handleClick(e, "notary_services")}>Notary</li>
            </ul>
            {/* END JUMP LINKS */}
        </div>
    );
};