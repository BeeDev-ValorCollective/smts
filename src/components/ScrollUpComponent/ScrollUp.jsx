/**
 * ScrollUpButton Component
 * 
 * This component provides a button that allows users to scroll back to the top of the page. 
 * It appears when the user scrolls down the page and disappears when the user scrolls back to the top. 
 * The button is customized for touch devices to enhance the user experience. 
 * A custom hook is used to manage the visibility and functionality of the button.
 * 
 * Key Features:
 * - **Scroll to Top Functionality**: The button triggers a scroll-up action to bring the user back to the top of the page.
 * - **Responsive for Touch Devices**: The appearance of the button is adjusted for touch devices to ensure a better mobile experience.
 * - **Dynamic Button Visibility**: The button only appears when the user scrolls down the page and hides when at the top.
 * - **Custom Hook**: A custom hook (`useScrollUpButton`) is used to manage button visibility, scroll behavior, and device detection.
 * 
 * Dependencies:
 * - **useScrollUpButton**: A custom hook that controls the scroll-up button's behavior and visibility.
 * - **Icons**: 
 *   - `UpArrow` from `../../assets/images/up_arrow.png`
 * - **CSS**: `scrollUpStyle.css`
 * 
 * Usage:
 * The ScrollUpButton component is used to provide a user-friendly way to return to the top of the page, 
 * with a responsive and touch-friendly design. It automatically appears when scrolling down the page.
 **/

// IMPORT REACT MAGIC
import React from "react";

// IMPORT STYLES
import './scrollUpStyle.css';

// IMPORT ICONS
import UpArrow from '../../assets/images/up_arrow.png'

// IMPORT HOOKS
import useScrollUpButton from "./ScrollUpHooks/useScrollUpButton";

export default function ScrollUpButton() {
    
    // Using the custom hook to get the button visibility and touch device state
    const { backToTopButton, isTouchDevice, scrollUp } = useScrollUpButton();
    
    return (
        <>
            {backToTopButton && (
                <button
                    className={`scroll_up ${isTouchDevice ? "touch_device" : ""}`}
                    onClick={scrollUp}
                >
                    <img src={ UpArrow } alt="Scroll To Top" />
                    {!isTouchDevice && (
                        <span className="scroll_up_text">
                            Scroll 
                            <br />
                            Up
                        </span>
                    )}
                </button>
            )}
        </>
    );
}
