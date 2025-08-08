/**
 * ServiceCardHeader Component
 * 
 * Overview:
 * The `ServiceCardHeader` component serves as a header section for the services page.
 * It provides:
 * - A brief description of the services offered.
 * - Jump links for smooth navigation to specific service sections on the page.
 * - Access to helpful informational modals for additional resources.
 * 
 * Key Features:
 * - **Introductory Paragraph:** Describes the professional and convenient services offered.
 * - **Helpful Information Modals:** Includes two modals for supplemental resources:
 *   - `DocPrepModal`: A reusable modal providing document preparation guidance.
 *   - `ThadsTidBits`: A reusable modal offering helpful ITIN-related information.
 * - **Jump Links:** Enables users to smoothly navigate to specific sections of the services page.
 *   - "E-File" -> Scrolls to the `tax_services` section.
 *   - "ITIN" -> Scrolls to the `itin_services` section.
 *   - "Notary" -> Scrolls to the `notary_services` section.
 * - **Custom Hook Integration:** Utilizes the `useJumpLink` hook for smooth scrolling behavior.
 * 
 * Props:
 * This component does not accept any props. All functionality is self-contained.
 * 
 * Dependencies:
 * - `useJumpLink` (custom hook): Handles the smooth scrolling behavior when jump links are clicked.
 * - `DocPrepModal`: Provides guidance for document preparation.
 * - `ThadsTidBits`: Displays helpful tips and ITIN information.
 * - `serviceCardHeader.css`: Contains styling for the component.
 * 
 * Usage:
 * The `ServiceCardHeader` is used in the services page to:
 * - Offer a brief overview of services.
 * - Display helpful resources for document preparation and ITIN guidance.
 * - Provide quick and user-friendly navigation to specific service sections.
 * 
 * 
 * Notes:
 * - Ensure that each target section on the page has a corresponding `id` attribute (e.g., `tax_services`, `itin_services`, `notary_services`) to enable smooth scrolling.
 * - The modals (`DocPrepModal` and `ThadsTidBits`) are designed to be reusable and customizable as needed.
 * - The `useJumpLink` hook is assumed to handle both preventing default click behavior and scrolling functionality.
 */


// IMPORT STYLE
import DocPrepModal from '../../ReusableComponents/DocumentModals/DocPrepModal';
import ThadsTidBits from '../../ReusableComponents/DocumentModals/ThadsTidBits';
import './serviceCardHeader.css'

// IMPORT HOOK
import useJumpLink from './useJumpLinks'

export default function ServiceCardHeader() {

    const handleClick = useJumpLink();

    return(
        <div className='service_options'>
            {/* HEADER CONTENT */}
            <p className='option_header'>
                We take pride in offering a range of professional and convenient services tailored to meet your needs. With a commitment to personalized care and attention to detail, we ensure a seamless and stress-free experience for every client.  
            </p>
            {/* THADS HELPFUL INFO */}
            <p className='option_header'><b>View helpful information</b></p>
            <div className='helpful_info'>
                <p><DocPrepModal /></p>
                <p><ThadsTidBits /></p>
            </div>
            <br />
            {/* JUMP LINKS */}
            <p className='option_header'><b>Explore our services below:</b></p>
            <ul className='service_jump_links'>
                <li onClick={(e) => handleClick(e, "tax_services")}>E-File</li>
                <li onClick={(e) => handleClick(e, "itin_services")}>ITIN</li>
                <li onClick={(e) => handleClick(e, "notary_services")}>Notary</li>
            </ul>
            {/* END JUMP LINKS */}
        </div>
    );
};