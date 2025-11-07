/**
 * Navbar Component
 * 
 * This component displays the website's navigation bar. It dynamically generates the list of links based on data from a JSON file and excludes the current page’s link. 
 * The header includes the SMTS logo and a title, with the title adjusted for smaller screens. The navigation bar also includes a message encouraging users to make 
 * a call to Seniors Mobile Tax Services rather than driving.
 * 
 * Key Features:
 * - **Dynamic Link Rendering**: The list of navigation links is populated from a JSON file (`Links`), 
 *   excluding the link for the current page.
 * - **Responsive Design**: On smaller screens, the `h1` element (title) disappears, leaving just the logo for a more compact header.
 * - **Navigation Message**: A message urging users not to drive but to make the call to Seniors Mobile Tax Services is included in the footer of the navigation.
 * - **External Navigation**: The links lead to different pages in the application, each rendered via the `Link` component from `react-router-dom`.
 * 
 * Props:
 * - **`currentPath`** (`string`): The current page URL path, used to exclude the corresponding link from the list of navigation links.
 * 
 * Usage:
 * The Navbar component dynamically generates navigation links from a JSON file, adjusting for the current page and offering a responsive layout for different screen sizes.
 **/

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";

// IMPORT JSON DATA
import Links from "../../assets/json/Links"

// IMPORT IMAGES
import NavIcon from "../../assets/images/SMTS_Icon_noBG.png"

export default function Navbar({ currentPath }) {
    
    return (
        <nav>
            <div className="nav_header">
                <img src={ NavIcon } alt="SMTS Logo" />
                <h1>
                    Seniors Mobile&nbsp;
                    <br />
                    Tax Services
                </h1>
            </div>
            <div className="nav_links">
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
                        ))
                    }
                </ul>
                <p>Don't drive... Make the call to <br className="mobile_only" />Seniors Mobile Tax Services</p>
            </div>
        </nav>
    );
};