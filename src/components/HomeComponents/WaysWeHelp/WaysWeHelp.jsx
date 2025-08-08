/**
 * WaysWeHelp Component
 * 
 * This component provides an overview of year-round tax-related assistance offered by the service.
 * It highlights key responsibilities and reminders for clients during different parts of the year.
 * 
 * Functionality:
 * - Displays a title summarizing the component's purpose.
 * - Divides the year into three key periods: Tax Season, Mid-Year, and End-of-Year.
 * - Provides actionable reminders for clients about submitting estimated tax payments.
 * 
 * Renders:
 * - **Title**: Communicates the year-round support focus.
 * - **Three Key Sections**:
 *   - **Tax Season**: Highlights the first quarterly estimated tax payment deadlines.
 *   - **Mid-Year**: Reminds clients of the second and third quarterly payment deadlines.
 *   - **End-of-Year**: Indicates the final quarterly payment deadlines for the following year.
 * 
 * Styling:
 * - Styled using the `waysWeHelp.css` file for layout and design.
 * - Each section is visually distinct for better readability.
 * - A structured box layout ensures consistent presentation across different screen sizes.
 * 
 * Notes:
 * - **Accessibility**:
 *   - Each section includes clear, concise text for easy comprehension.
 * - **Reusability**:
 *   - Static content can be replaced or enhanced with dynamic data if needed.
 * - **Responsive Design**:
 *   - Layout is designed to adapt to different screen sizes.
 * - **Scalability**:
 *   - Additional time periods or features can be added as separate sections.
 * 
 * Props:
 * - This component does not accept props and uses static content.
 * 
 * Dependencies:
 * - `waysWeHelp.css` (for styling).
 */


// IMPORT STYLE
import './waysWeHelp.css'

export default function WaysWeHelp() {
    
    return(
        <div className='ways_we_help'>
            {/* Title */}
            <h2>
                We Can Help You All Year Long
            </h2>
            {/* Box Container */}
            <div className='ways_we_help_box_wrapper'>
                {/* BOX1 */}
                <div className='ways_we_help_box'>
                    <div className='ways_we_help_title'>
                        <h3>
                            TAX SEASON
                        </h3>
                    </div>
                    <div className='ways_we_help_box_body'>
                        <p>
                            Remind clients to submit the first quarterly estimated tax payment by April 15th (federal) and May 1st (state). 
                        </p>
                    </div>
                </div>
                {/* BOX2 */}
                <div className='ways_we_help_box'>
                    <div className='ways_we_help_title'>
                        <h3>
                            MID-YEAR
                        </h3>
                    </div>
                    <div className='ways_we_help_box_body'>
                        <p>
                            Remind clients to submit their second and third quarterly estimated tax payments by June 15th and September 15th (federal) and their second and third quarterly estimated tax payments by June 15th and September 15th (state).
                        </p>
                    </div>
                </div>
                {/* BOX3 */}
                <div className='ways_we_help_box'>
                    <div className='ways_we_help_title'>
                        <h3>
                            END-OF-YEAR
                        </h3>
                    </div>
                    <div className='ways_we_help_box_body'>
                        <p>
                        Remind clients to submit their final quarterly estimated tax payment by January 15th (federal) and January 15th (state) of the following year.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};