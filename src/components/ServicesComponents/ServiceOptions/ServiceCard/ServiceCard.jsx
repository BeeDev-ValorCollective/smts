/**
 * ServiceCard Component
 * 
 * This component renders an individual service card with a title, description, image, 
 * and a list of pricing options.
 * 
 * Props:
 * - IdTag (string): The ID to uniquely identify the service card for use in styling or navigation.
 * - ServiceTitle (string): The title of the service to be displayed.
 * - ServiceDesc (string): A detailed description of the service.
 * - ServicePricing (array): An array of pricing options, where each item includes:
 *     - item_id (number): A unique identifier for the pricing option.
 *     - item_title (string): The title of the pricing option.
 *     - item_price (string): The price of the option.
 * - Image (string): The image URL or imported reference for the service card.
 **/


export default function ServiceCard({
    IdTag,
    ServiceTitle,
    ServiceDesc,
    ServicePricing,
    Image
}) {

    return(
        <div id={ IdTag } className='services_card'>
            <div className="service_titleblock">
                <h2>{ ServiceTitle }</h2>
                <img src={ Image } alt={ Image } />
            </div>
            <div className="service_content">
                <p>{ ServiceDesc }</p>
                <h4>Pricing:</h4>
                {/* MAP PRICING OPTIONS */}
                {ServicePricing.map((Price) => {
                    return (
                        <p key={ Price.item_id } className='pricing'>
                            { Price.item_title } <span>${ Price.item_price }</span>
                        </p>
                    );
                })}
                {/* END PRICING MAP */}
            </div>
        </div>
    );
};