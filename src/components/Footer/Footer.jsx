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
            <div className="footer_hidden_div">I'm A hidden element</div>
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