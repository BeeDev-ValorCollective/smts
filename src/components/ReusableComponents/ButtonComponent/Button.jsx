// BUTTON COMPONTENT //
// Pass down  'text', 'to' and 'button color' to populate. 
// If not color is provided, a default style will be used
// Colors MUST BE EXACTLY AS - 'red' 'white' 'blue' 

import './button.css'

// IMPORT REACT MAGIC
import { Link } from "react-router-dom";

export default function Button ({ color, to, text, onClick }) {
    
    return (
        <Link className="button_box" to={ to }>
            <button onClick={onClick || undefined}  className={!color? "button_default" : `button_${color}`} >
                { text }
            </button>
        </Link>
    );
};