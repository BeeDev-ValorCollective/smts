// BUTTON COMPONTENT //
// Uses input on its rendering page that are passed down to populate 'text', 'to' and 'button color'

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";

export default function Button ({ color, to, text }) {
    
    return (
        <Link className="button_box" to={ to }>
            <button className={!color? "button_default" : `button_${color}`} >
                { text }
            </button>
        </Link>
    );
};