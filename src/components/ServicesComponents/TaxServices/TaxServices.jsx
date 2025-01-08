// IMPORT STYLE
import '../ServicesComponents.css'
import './TaxServices.css'

import MONEY from '../../../assets/images/money.png'

export default function TaxServices() {

    return (
        <div className="service_box">
            <div className="box_content">
                <h2>Tax Services</h2>
                <p>Seniors Mobile Tax Services LLC (SMTS) offers a full-service concierge mobile tax experience, bringing personalized care directly to your door. SMTS will collect and review your tax documents, prepare your return in a secure environment, and ensure you understand the results. Once reviewed and approved, your return will be electronically filed with the IRS, and a signed copy will be provided for your records.</p>
            </div>
            <img src={ MONEY } alt="Tax Services" />
        </div>
    )
}