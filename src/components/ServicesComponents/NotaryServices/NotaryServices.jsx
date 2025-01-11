// IMPORT STYLE
import '../ServicesComponents.css'
import './NotaryServices.css'
import NOTARY from '../../../assets/images/notary.png'

import Pricing from '../../ReusableComponents/PricingComponent/Pricing'


export default function NotaryServices() {

    return (
        <div className="service_box">
            <div className="service_content">
                <div className="box_content">
                    <h2>Notary Services</h2>
                    <p>Seniors Mobile Tax Services LLC provides professional notary services to meet your legal documentation needs. As a Virginia notary, SMTS can serve as an unbiased witness for signatures, oaths, and acknowledgments on important legal documents. With a fee of just $10 per notarial act, SMTS offers reliable and convenient service anywhere within the Commonwealth of Virginia.</p>
                </div>
                <img src={ NOTARY } alt="Notary Services" />
            </div>
            <div className="pricing">
                <h2>Pricing:</h2>
                    <Pricing service="Notary / per request" cost="10" />
            </div>
        </div>
    )
}