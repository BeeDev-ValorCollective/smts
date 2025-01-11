// IMPORT STYLE
import '../ServicesComponents.css'
import './ITINServices.css'
import ID from '../../../assets/images/id.png'

import Pricing from '../../ReusableComponents/PricingComponent/Pricing'



export default function ITINServices() {

    return (
        <div className="service_box">
            <div className="service_content">
                <img src={ ID} alt="ITIN Services" />
                <div className="box_content">
                    <h2>Individual Tax Identification Number Services</h2>
                    <p>Seniors Mobile Tax Services LLC (SMTS) specializes in assisting clients with obtaining an Individual Taxpayer Identification Number (ITIN), a unique 9-digit number issued by the IRS for those who cannot obtain a Social Security Number but need to file a federal tax return. SMTS simplifies the process by reviewing and certifying necessary documents, allowing clients to keep important originals, such as passports, safe in their possession.</p>
                </div>
            </div>
            <div className="pricing">
                <h2>Pricing:</h2>
                    <Pricing service="One W7 and one W7(COA)" cost="300" />
                    <Pricing service="Two W7 and two W7(COA)" cost="400" />
                    <Pricing service="Three W7 and three W7(COA)" cost="500" />
                    <Pricing service="One W7" cost="200" />
                    <Pricing service="Two W7" cost="300" />
                    <Pricing service="Three W7" cost="400" />
                    <Pricing service="One W7(COA)" cost="250" />
                    <Pricing service="Two W7(COA)" cost="350" />
                    <Pricing service="Three W7(COA)" cost="450" />
            </div>
        </div>
    )
}