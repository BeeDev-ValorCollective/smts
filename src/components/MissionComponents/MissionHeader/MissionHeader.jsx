/**
 * MissionHeader Component
 * 
 * This component serves as the introductory header section, highlighting the key service offerings 
 * of Seniors Mobile Tax Services (SMTS). It emphasizes the convenience and professionalism of the service.
 * 
 * Functionality:
 * - Displays a title and description to introduce the stress-free, mobile tax filing experience provided by SMTS.
 * - Adapts the title layout for smaller screens with the use of a conditional line break.
 * 
 * Renders:
 * - **Title**: "Stress-Free Tax Filing At Your Doorstep," dynamically formatted for mobile screens.
 * - **Description**: Explains the unique value proposition of SMTS, including the convenience of in-home tax preparation in the Richmond, Virginia area.
 * 
 * Styling:
 * - Styled using the `missionHeader.css` file.
 * - Uses responsive typography to adjust the title for mobile and desktop views.
 * - Simple yet professional layout to maintain focus on the message.
 * 
 * Notes:
 * - **Accessibility**:
 *   - The title and description are written in plain language, ensuring they are easy to read and understand.
 *   - The use of semantic HTML (`<h2>` and `<p>`) supports screen readers.
 * - **Responsive Design**:
 *   - The `<br className='mobile_only' />` ensures the title is properly formatted for smaller screens.
 * - **Scalability**:
 *   - Additional information or elements can be added without disrupting the existing structure.
 * 
 * Props:
 * - This component does not accept props and uses static content.
 * 
 * Dependencies:
 * - `missionHeader.css` (for styling).
 */


// IMPORT STYLE
import './missionHeader.css'

export default function MissionHeader() {

    return(
        <div className='mission_header'>
            <h2>
                Stress-Free Tax Filing&nbsp;
                <br className='mobile_only' />
                At Your Doorstep
            </h2>
            <p>
            Seniors Mobile Tax Services takes the stress out of tax filing by bringing personalized, professional service directly to your home in the Richmond, Virginia area. Forget the hassle of traveling, finding parking, and waiting in crowded offices—stay comfortable and confident in the privacy of your own home while we handle your tax needs. Life is busy enough; let us simplify the process and make filing your taxes stress-free.
            </p>
        </div>
    );
};