// IMPORT REACT MAGIC
import React from "react";

// IMPORT STYLES
import './scrollUpStyle.css';

// IMPORT ICONS
import { FaArrowUp } from "react-icons/fa";

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
                    <FaArrowUp />
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
