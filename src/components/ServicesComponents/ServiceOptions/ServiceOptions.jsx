/**
 * ServiceOptions Component
 * 
 * This component dynamically renders a list of service cards using data from 
 * a JSON file (`Services.json`). It filters out inactive services and passes 
 * relevant data to the `ServiceCard` component.
 * 
 * Imports:
 * - ServicesData (JSON): The JSON file containing service data.
 * - ServiceCard (Component): The subcomponent used to display individual services.
 * - Icon imports: Maps image references from the JSON file to imported assets.
 * 
 * Description:
 * - Filters the service data to include only active services (`isActive: true`).
 * - Maps each service to a `ServiceCard` with relevant props.
 * - Provides fallback logic for images, defaulting to `CarIcon` if no match is found.
 * 
 * Usage:
 * This component is used in the Services view page to display all active services.
 */

// IMPORT JSON DATA
import ServicesData from '../../../assets/json/Services.json'

// IMPORT STYLE
import './serviceOptions.css'

// IMPORT SUBCOMPONENT
import ServiceCard from './ServiceCard/ServiceCard'

// IMPORT ICONS
import CarIcon from '../../../assets/images/car_icon.png'
import BadgeIcon from '../../../assets/images/badge_icon.png'
import EIcon from '../../../assets/images/e_icon.png'
import CheckmarkIcon from '../../../assets/images/checkmark_icon.png'

// Map image references in JSON to the actual image imports  // MUST MATCH JSON NAME!
const imageMap = {
    CarIcon,
    EIcon,
    BadgeIcon,
    CheckmarkIcon
};


export default function ServiceOptions() {

    // GET AND FILTER SERVICE DATA JSON FILE FOR ACTIVE ITEMS ONLY
    const ServiceData = ServicesData
    .filter(data => data.isActive)

    return(
        <>
            {/* MAP SERVICE DATA */}
            {ServiceData.map((Service) => {
                // GET IMAGE BY MATCHING img_ref // DEFAULT TO CarIcon IF NO MATCH
                const image = imageMap[Service.img_ref] || CarIcon;
                return (
                    <div className='service_card_container' key={ Service.id }>
                        <hr />
                        <ServiceCard 
                            IdTag= { Service.id_tag }
                            ServiceTitle= { Service.service_title }
                            ServiceDesc= { Service.service_desc }
                            ServicePricing= { Service.service_pricing }
                            Image= { image }
                            />
                    </div>
                )
            })}
        </>
    );
};