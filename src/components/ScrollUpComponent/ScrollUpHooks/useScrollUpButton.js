/**
 * useScrollUpButton Hook
 *
 * This custom React hook provides functionality for a "Scroll to Top" button.
 * It monitors the user's scroll position and determines whether the button should
 * be visible based on the scroll depth. Additionally, it detects if the device
 * is touch-enabled, which can be useful for styling or functionality adjustments.
 *
 * Returns:
 * - `backToTopButton` (boolean): Indicates if the "Go to Top" button should be visible.
 * - `isTouchDevice` (boolean): Indicates if the user is on a touch-enabled device.
 * - `scrollUp` (function): A function that scrolls the window to the top smoothly.
 *
 * Note:
 * The hook automatically adds and cleans up a scroll event listener to track the
 * scroll position and state. The button will be shown when the user scrolls down
 * more than 150 pixels.

 **/


// IMPORT REACT MAGIC
import { useEffect, useState } from "react";

// Custom hook for the Scroll Up button
export default function useScrollUpButton() {
    // State to determine if the "Go to Top" button should be visible
    const [backToTopButton, setBackToTopButton] = useState(false);

    // State to track if the device is touch-enabled
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // useEffect to detect touch devices
    useEffect(() => {
        const touchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(touchSupport);
    }, []);

    // useEffect to add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            // Show button if scrolled down more than 150px
            if (window.scrollY > 150) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to scroll back to the top of the page
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Return the states and the scroll function
    return { backToTopButton, isTouchDevice, scrollUp };
}
