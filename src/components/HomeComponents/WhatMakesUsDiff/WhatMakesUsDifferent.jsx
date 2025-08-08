/**
 * WhatMakesUsDifferent Component
 * 
 * This component highlights the unique features and services provided by Seniors Mobile Tax Services (SMTS).
 * It outlines three key differentiators that set SMTS apart from other tax preparation services.
 * 
 * Functionality:
 * - Displays a title summarizing the component's purpose.
 * - Showcases three primary aspects of the service:
 *   - **Mobile Convergence Services**: Fully mobile tax preparation for convenience and safety.
 *   - **Stress-Free Process**: Transparent, private, and flat-rate tax preparation services.
 *   - **Specialized Services**: Unique offerings such as ITIN application assistance, notary public services, and electronic filing.
 * 
 * Renders:
 * - **Title**: "How Seniors Mobile Tax Service Is Different."
 * - **Three Highlighted Boxes**:
 *   - Each box contains:
 *     - An icon visually representing the service.
 *     - A title summarizing the feature.
 *     - A description elaborating on the benefit.
 * 
 * Styling:
 * - Styled using the `WhatMakesUsDifferent.css` file.
 * - Each box is visually distinct and neatly arranged for readability.
 * - Icons enhance the visual appeal and support content comprehension.
 * 
 * Notes:
 * - **Accessibility**:
 *   - Includes alt text for all icons to support screen readers.
 *   - Content is structured for easy readability.
 * - **Reusability**:
 *   - Can be expanded with additional differentiators or modified for other services.
 * - **Responsive Design**:
 *   - Layout adapts to various screen sizes for optimal viewing.
 * - **Scalability**:
 *   - Additional sections or boxes can be added without significant restructuring.
 * 
 * Props:
 * - This component does not accept props and uses static content.
 * 
 * Dependencies:
 * - `WhatMakesUsDifferent.css` (for styling).
 * - Image assets:
 *   - `Car` (car_icon.png)
 *   - `Lightbulb` (light_bulb.png)
 *   - `Magnifying` (magnifying_glass.png)
 */

// IMPORT STYLES
import './WhatMakesUsDifferent.css'

// IMPORT IMAGES
import Car from "../../../assets/images/car_icon.png"
import Lightbulb from "../../../assets/images/light_bulb.png"
import Magnifying from "../../../assets/images/magnifying_glass.png"

export default function WhatMakesUsDifferent() {
    
    return(
        <div className='what_makes_smts'>
            {/* TITLE */}
            <h2>
                How Seniors Mobile Tax Services Is Different
            </h2>
            {/* BOX WRAPPER */}
            <div className='home_box_wrapper'>
                {/* BOX1 */}
                <div className='home_box'>
                    <div className='box_title'>
                        <img src={ Car } alt="car icon" />
                        <h3>
                            MOBILE CONVERGENCE SERVICES
                        </h3>
                    </div>
                    <div className='box_body'>
                        <p>
                            SMTS provides a fully mobile tax preparation service, coming directly to clients' homes to collect, review, and finalize tax documents. This convenient approach spares seniors and veterans from traveling in dangerous weather or dealing with the hassle of office visits.
                        </p>
                    </div>
                </div>
                {/* BOX2 */}
                <div className='home_box'>
                    <div className='box_title'>
                        <img src={ Lightbulb } alt="lightbulb icon" />
                        <h3>
                            STRESS-FREE PROCESS
                        </h3>
                    </div>
                    <div className='box_body'>
                        <p>
                            SMTS provides a private and comfortable tax preparation experience, with secure processing and an in-home review to ensure clients understand their return. The service is transparent, personalized, and offered at a flat rate of $225.
                        </p>
                    </div>
                </div>
                {/* BOX3 */}
                <div className='home_box'>
                    <div className='box_title'>
                        <img src={ Magnifying } alt="Magnifying Glass Icon" />
                        <h3>
                            SPECIALIZED SERVICES
                        </h3>
                    </div>
                    <div className='box_body'>
                        <p>
                            SMTS offers specialized services, including Certified Acceptance Agent (CAA) assistance for Individual Taxpayer Identification Number (ITIN) applications, notary public services, and IRS-authorized electronic filing. These additional services cater to a wide range of client needs with expertise and convenience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};