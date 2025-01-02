// IMPORT STYLES
import './WhatMakesUsDifferent.css'

// IMPORT ICONS
import { FaCar } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { GiMagnifyingGlass } from "react-icons/gi";


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
                        <FaCar />
                        <h3>
                            Mobile Convergence Service
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
                        <HiLightBulb />
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
                        <GiMagnifyingGlass />
                        <h3>
                            SPECIALIZED SERVICES
                        </h3>
                    </div>
                    <div className='box_body'>
                        <p>
                            SMTS offers specialized services, including Certified Acceptance Agent (CAA) assistance for ITIN applications, notary public services, and IRS-authorized electronic filing. These additional services cater to a wide range of client needs with expertise and convenience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};