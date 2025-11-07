/**
 * Benefits Component
 * 
 * This component displays a section showcasing the key benefits of using Seniors Mobile Tax Services.
 * It includes three distinct benefit items, each with an associated icon, heading, and description.
 * 
 * Renders:
 * - Three benefits sections, each containing:
 *   - An image (icon) representing the benefit.
 *   - A heading (h5) with a brief description of the benefit.
 *   - A paragraph (p) providing more detailed information about the benefit.
 * 
 * The benefits displayed in the component are:
 * 1. **E-File with Confidence**: Highlighting the ease of use and support for e-filing.
 * 2. **No Hidden Fees**: Emphasizing transparency and the absence of additional fees.
 * 3. **Switch and Save Big**: Promoting savings for customers switching from competitors.
 * 
 * Styling:
 * - The component is styled using the `benefits.css` file.
 * 
 * Images:
 * - **ConfidenceIcon**: An image representing the "Build Confidence" benefit.
 * - **SaveIcon**: An image representing the "No Hidden Fees" benefit.
 * - **BigMoneyIcon**: An image representing the "Save Big" benefit.
 * 
 * Notes:
 * - The `alt` attribute for images describes each benefit for accessibility.
 **/

// IMPORT STYLE
import './benefits.css'

// IMPORT IMAGES
import ConfidenceIcon from "../../../assets/images/confidence_icon.png"
import SaveIcon from "../../../assets/images/save_icon.png"
import BigMoneyIcon from "../../../assets/images/big_money_icon.png"

export default function Benefits() {
    
    return(
        <div className="home_benefits">
            {/* SECTION 1 */}
            <div className="home_benefits_wrapper">
                <img src={ ConfidenceIcon } alt="Build Confidence Icon" />
                <h5>
                    E-FILE WITH <br />CONFIDENCE
                </h5>
                <p>
                    Seniors Mobile Tax Services offers an easy-to-use experience, up-to-date standards, and exceptional support.
                </p>
            </div>
            {/* SECTION 2 */}
            <div className="home_benefits_wrapper">
                <img src={ SaveIcon } alt="No Hidden Fees Icon" />
                <h5>
                    NO HIDDEN <br />FEES
                </h5>
                <p>
                    You receive access to all federal forms and deductions without any extra fees or hidden costs.
                </p>
            </div>
            {/* SECTION 3 */}
            <div className="home_benefits_wrapper">
                <img src={ BigMoneyIcon } alt="Save Big Icon" />
                <h5>
                    SWITCH AND <br />SAVE BIG
                </h5>
                <p>
                    You save big when you switch from the competitor, all from the comfort of your own home.
                </p>
            </div>
        </div>
    );
};