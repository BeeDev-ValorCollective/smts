// IMPORT STYLE
import '../ServicesComponents.css'
import './ITINServices.css'
import ID from '../../../assets/images/id.png'


export default function ITINServices() {

    return (
        <div className="service_box">
            <img src={ ID} alt="ITIN Services" />
            <div className="box_content">
                <h2>Individual Tax Identification Number Services</h2>
                <p>Seniors Mobile Tax Services LLC (SMTS) specializes in assisting clients with obtaining an Individual Taxpayer Identification Number (ITIN), a unique 9-digit number issued by the IRS for those who cannot obtain a Social Security Number but need to file a federal tax return. SMTS simplifies the process by reviewing and certifying necessary documents, allowing clients to keep important originals, such as passports, safe in their possession.</p>
            </div>
        </div>
    )
}