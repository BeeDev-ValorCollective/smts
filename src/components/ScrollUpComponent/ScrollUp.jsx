// IMPORT REACT MAGIC
import { useEffect, useState } from "react";

// IMPORT STYLES
import './scrollUpStyle.css'

// IMPORT ICONS
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUpButton() {
    // State to determines whether the "Go to Top" button should be visible.
    // Initially, it's set to `false` since the button is hidden by default.
    const [backToTopButton, setBackToTopButton] = useState(false);

    // useEffect hook to add a scroll event listener when the component mounts
    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            // Show the button when the user scrolls down more than 150px
            if (window.scrollY > 150) {
                // Update state to show the button
                setBackToTopButton(true);
            } else {
                // Update state to hide the button
                setBackToTopButton(false);
            }
        };
        
        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup function to remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to scroll back to the top of the page with a smooth scrolling animation
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            { /* Conditionally render the button based on `backToTopButton` state */
                backToTopButton && (
                    <button className="scroll_up" onClick={ scrollUp }>
                        <FaArrowUp /> 
                        <span className="scroll_up_text">
                            Scroll 
                            <br />
                            Up
                        </span>
                    </button>
                )
            }
        </>
    );
};