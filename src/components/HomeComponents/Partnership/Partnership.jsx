/**
 * Partnership Component
 * 
 * This component highlights the collaborative relationship between Seniors Mobile Tax Services (SMTS) 
 * and its clients. It outlines the roles and responsibilities of both parties, emphasizing a professional 
 * and personalized partnership.
 * 
 * Functionality:
 * - Displays titles and subtitles explaining the partnership philosophy of SMTS.
 * - Includes two sections: "What You Do" (client responsibilities) and "What We Do" (services provided by SMTS).
 * - Utilizes a reusable `DocPrepModal` component for document organization support.
 * - Uses icons to visually enhance each responsibility or service.
 * 
 * Renders:
 * - **Title and Subtitles**: Communicates the partnership philosophy of SMTS.
 * - **"What You Do" Section**:
 *   - Lists client responsibilities with accompanying icons and descriptions.
 *   - Includes a clickable link that opens a `DocPrepModal` for document preparation.
 * - **"What We Do" Section**:
 *   - Lists SMTS services with relevant icons and descriptions.
 * 
 * Styling:
 * - Styled using the `partnership.css` file.
 * - Sections and list items are designed for clear readability and visual appeal.
 * - Icons add a graphical element, enhancing the user experience.
 * 
 * Notes:
 * - **Accessibility**: 
 *   - Each icon includes an `alt` attribute for screen readers.
 * - **Reusability**:
 *   - The `DocPrepModal` subcomponent is imported and used for providing additional functionality.
 * - **Responsive Design**:
 *   - Designed for both desktop and mobile views with a structured layout for smaller screens.
 * 
 * Props:
 * - This component does not accept props directly; it uses static content and imported subcomponents.
 * 
 * Dependencies:
 * - `DocPrepModal` (reusable subcomponent).
 * - `partnership.css` (for styling).
 * - Icon assets such as `ChatIcon`, `ChecklistIcon`, and others for visual enhancement.
 */

// IMPORT STYLE
import './partnership.css'

// IMPORT IMAGES
import ChatIcon from "../../../assets/images/chat_icon.png"
import ChecklistIcon from "../../../assets/images/checklist_icon.png"
import CalendarIcon from "../../../assets/images/calendar_icon.png"
import RefundIcon from "../../../assets/images/refund_icon.png"
import DocumentIcon from "../../../assets/images/documents_icon.png"
import IdeaIcon from "../../../assets/images/lightbulb_idea_icon.png"

// IMPORT SUBCOMPONENTS
import DocPrepModal from '../../ReusableComponents/DocumentModals/DocPrepModal'


export default function Partnership() {
    
    return(
        <div className='home_partnership'>
            {/* Title */}
            <h2>
                Working With Seniors Mobile Tax Services
            </h2>
            <h2>
                Is A Partnership
            </h2>
            {/* Sub Title */}
            <h5>
                Clients can trust SMTS for its commitment to professionalism, personalized care, and a seamless partnership that prioritizes their needs every step of the way.
            </h5>
            {/* Container for the info boxes */}
            <div className="partner_split_box">
                {/* Info box 1 */}
                <div className="partner_sub_box">
                    <h3>
                        WHAT YOU DO
                    </h3>
                    <ul>
                        <li>
                            <img src={ ChatIcon } alt="Chat Icon" />
                            <p>
                                Ask your adviser questions - even after tax season 
                            </p>
                        </li>
                        <li>
                            <img src={ ChecklistIcon } alt="Checklist Icon" />
                            <div className='check_list_link'>
                                <p>
                                    Get your documents organized with our free <DocPrepModal />
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src={ CalendarIcon } alt="Calendar Icon" />
                            <p>
                                Check in throughut the year to continue building trust 
                            </p>
                        </li>
                    </ul>
                </div>
                {/* Info box 2 */}
                <div className="partner_sub_box">
                    <h3>
                        WHAT WE DO
                    </h3>
                    <div className="partner_sub_box">
                        <ul>
                            <li>
                                <img src={ RefundIcon } alt="Chat Icon" />
                                <p>
                                    Research tax code changes to make sure all bases are covered 
                                </p>
                            </li>
                            <li>
                                <img src={ DocumentIcon } alt="Chat Icon" />
                                <p>
                                    Prepare your taxes and get them ready for filing 
                                </p>
                            </li>
                            <li>
                                <img src={ IdeaIcon } alt="Chat Icon" />
                                <p>
                                    Provide tax inside and advice to help clients with tax avoidance stratagies, but never promote tax evasion schemes
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};