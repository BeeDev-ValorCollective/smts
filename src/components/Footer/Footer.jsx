/**
 * Footer Component
 * 
 * This component is used to display the footer of the website. It dynamically generates 
 * the list of links from a JSON file and excludes the current page's link. It also includes 
 * credit sections for the creators and icon providers.
 * 
 * Key Features:
 * - **Dynamic Link Rendering**: Links are populated from a JSON file (`Links`), 
 *   excluding the link for the current page.
 * - **Footer Information**: The footer includes "Built By" and "Icons By" sections, 
 *   providing credit to the website's creators and icon providers.
 * - **Responsive Layout**: The footer is designed to be responsive and adapt to different 
 *   screen sizes, ensuring a clean presentation on all devices.
 * - **External Links**: The footer contains external links to the creator’s website and 
 *   icon resource, each of which opens in a new tab with proper security settings.
 * 
 * Props:
 * - **`currentPath`** (`string`): The current page URL path used to exclude the 
 *   corresponding link from the list of footer links.
 * 
 * Usage:
 * The Footer component automatically generates links from a JSON file, dynamically 
 * adjusting based on the current page. It also provides credit information for the 
 * creators and icon providers at the bottom of the page.
 **/

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";

// IMPORT JSON DATA
import Links from "../../assets/json/Links"

// IMPORT IMAGES
import FooterIcon from "../../assets/images/SMTS_Icon_noBG.png"

export default function Footer({ currentPath }) {
    
    return(
        <footer>
            <div className="footer_hidden_div">I'm A hidden element</div>
            {/* FOOTER SITE LINKS */}
            <div className="footer_links_container">
                <ul>
                    {Links
                        // filter out the path of the current view page
                        .filter(link => link.url !== currentPath)
                        .map(link => (
                            <li key={ link.id }>
                                <Link to={ link.url }>
                                    { link.name }
                                </Link>
                            </li>
                        ))}
                </ul>
                <hr />
                {/* FOOTER EXTERNAL LINKS */}
                <ul>
                    <li>
                        <p>Built By:</p>
                    </li>
                    <li>
                        <a href="https://beedev-services.com/" target="_blank" rel="noopener noreferrer">BeeDev-Services</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Icons By:</p>
                    </li>
                    <li>
                        <a href="https://icons8.com//" target="_blank" rel="noopener noreferrer">icons8</a>
                    </li>
                </ul>
            </div>
            <img src={ FooterIcon } alt="SMTS Icon" />
        </footer>
    );
};