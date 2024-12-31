// FOOTER COMPONTENT //
// Uses data from json file for populating links

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";

// IMPORT JSON DATA
import Links from "../../assets/json/Links"

// IMPORT IMAGES
import FooterIcon from "../../assets/images/SMTS_Icon_noBG.png"

export default function Footer({ currentPath }) {
    
    return(
        <footer>
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
            <img src={ FooterIcon } alt="SMTS Icon" />
        </footer>
    );
};