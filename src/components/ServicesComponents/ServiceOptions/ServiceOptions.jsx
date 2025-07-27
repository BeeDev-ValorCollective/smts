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

import { useState, useEffect } from 'react';

// IMPORT JSON DATA
// import ServicesData from '../../../assets/json/Services.json'

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

const SERVICES_URL = import.meta.env.VITE_SERVICES_API

console.log(SERVICES_URL)

export default function ServiceOptions() {

    const [services, setServices] = useState([]);
    const [jsonError, setJsonError] = useState(null);

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVICES_API)
            .then(res => res.json())
            .then(data => console.log('JSON loaded:', data))
            .catch(err => console.error('Fetch error:', err));
    }, []);

    useEffect(() => {
        fetch(SERVICES_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => {
                const activeServices = data.filter((service) => service.isActive);
                setServices(activeServices);
            })
            .catch((err) => {
                setJsonError(err.message);
            });
    }, []);

    if (jsonError) {
        return <p>Error loading services: {jsonError}</p>;
    }

    return (
        <>
            {/* MAP SERVICE DATA */}
            {services.map((service) => {
                // GET IMAGE BY MATCHING img_ref // DEFAULT TO CarIcon IF NO MATCH
                const image = imageMap[service.img_ref] || CarIcon;
                return (
                    <div className='service_card_container' key={service.id}>
                        <hr />
                        <ServiceCard
                            IdTag={service.id_tag}
                            ServiceTitle={service.service_title}
                            ServiceDesc={service.service_desc}
                            ServicePricing={service.service_pricing}
                            Image={image}
                        />
                    </div>
                )
            })}
        </>
    );
};