/**
 * Button Component
 * 
 * This component is used to render a customizable button inside a link. The button 
 * allows users to navigate to a specified route and can be customized by passing 
 * different text and color options.
 * 
 * Key Features:
 * - **Customizable Button Text**: The text displayed on the button is passed as a prop.
 * - **Routing with React Router**: The button is wrapped in a `Link` component, which 
 *   allows navigation to a specified route using React Router.
 * - **Color Options**: The button color can be customized using the `color` prop. 
 *   Available color options are 'red', 'white', and 'blue'. If no color is provided, 
 *   a default style is applied.
 * - **Click Handling**: The `onClick` prop can be used to handle any additional actions 
 *   when the button is clicked.
 * 
 * Props:
 * - **`color`** (`string`, optional): The color of the button. It can be 'red', 
 *   'white', or 'blue'. If not provided, the default style is used.
 * - **`to`** (`string`): The route to navigate to when the button is clicked.
 * - **`text`** (`string`): The text to display inside the button.
 * - **`onClick`** (`function`, optional): A callback function to handle additional actions 
 *   when the button is clicked.
 * 
 * Usage:
 * This component renders a button that is inside a `Link` element, which navigates to 
 * a provided route when clicked. The button color can be customized by passing one of 
 * the available color options, and it supports additional click handling via the `onClick` function.
 */


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