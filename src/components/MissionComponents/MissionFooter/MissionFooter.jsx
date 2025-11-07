/**
 * MissionFooter Component
 * 
 * This component serves as the footer section of the website, encouraging users to take action and contact 
 * Seniors Mobile Tax Services (SMTS) for their tax preparation needs.
 * 
 * Functionality:
 * - Displays a call-to-action message to prompt users to contact SMTS.
 * - Includes a button that navigates to the contact page.
 * - Features an image for visual appeal and branding.
 * 
 * Renders:
 * - **Title**: "Ready To File?"
 * - **Description**: A message highlighting the ease and convenience of SMTS services, tailored for seniors and veterans.
 * - **Call-to-Action**: Encourages users to make the call instead of driving, emphasizing SMTS's mobile services.
 * - **Image**: Displays the MX5 icon associated with SMTS for branding purposes.
 * - **Button**: A reusable button component that redirects users to the contact page.
 * 
 * Styling:
 * - Styled using the `missionFooter.css` file.
 * - Uses distinct typography and spacing to emphasize the call-to-action message.
 * - Red button highlights the urgency and importance of contacting SMTS.
 * 
 * Notes:
 * - **Accessibility**:
 *   - Includes alt text for the image to support screen readers.
 *   - The button is easily navigable and clearly labeled.
 * - **Reusability**:
 *   - The button is implemented as a reusable component (`Button`).
 * - **Responsive Design**:
 *   - The layout is designed to adapt to different screen sizes.
 * - **Scalability**:
 *   - Additional messaging or elements can be added without significant changes to the structure.
 * 
 * Props:
 * - This component does not accept props and uses static content.
 * 
 * Dependencies:
 * - `missionFooter.css` (for styling).
 * - Image asset:
 *   - `MX5` (mx5_icon.png)
 * - Subcomponent:
 *   - `Button` (from `../../ReusableComponents/ButtonComponent/Button`)
 */

// IMPORT STYLE
import './missionFooter.css'

// IMPORT IMAGES
import MX5 from '../../../assets/images/mx5_icon.png'

// IMPORT SUBCOMPONENTS
import Button from '../../ReusableComponents/ButtonComponent/Button'

export default function MissionFooter() {
    
    return(
            <div className='mission_footer'>
                <h2>Ready To File?</h2>
                <p>
                    Relax, enjoy your favorite daytime TV shows, and let SMTS handle the rest. Professional, convenient, and designed with seniors and veterans in mind.
                </p>
                <p className='make_the_call'>
                    Don’t drive... Make the call
                </p>
                <p className='make_the_call'>
                    <b>Seniors Mobile Tax Services</b>
                </p>
                <img src={ MX5 } alt="SMTS Miata" />
                <Button to="/contact" text="Contact Us" color="red" />
            </div>
    );
};