// IMPORT STYLES
import './WhatMakesUsDifferent.css'

// IMPORT IMAGES
import Car from "../../../assets/images/car_icon.png"
import Lightbulb from "../../../assets/images/light_bulb.png"
import Magnifying from "../../../assets/images/magnifying_glass.png"


export default function WhatMakesUsDifferent() {

    return(
        <div className='what_makes_smts'>

            <h2>
                How Seniors Mobile Tax Service Is Different
            </h2>

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