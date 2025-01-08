// NAVBAR COMPONTENT 
// Uses data from json file for populating links
// HERO H1 goes away on smaller screen leaving just the SMTS Logo 

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
                    Tax Service
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