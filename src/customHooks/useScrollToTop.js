/**
 * Custom React Hook: useScrollToTop
 *
 * This hook automatically scrolls the window to the top of the page
 * whenever the component that uses it is mounted. It is useful for
 * single-page applications where you want to reset the scroll position
 * when navigating between views.
 *
 * Usage:
 * - Import and call `useScrollToTop` in a component to ensure the page
 *   scrolls to the top when the component is rendered.
 *
 * Notes:
 * - Ensure the hook is used only within View components.
 **/



import { useEffect } from "react";

const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
};

export default useScrollToTop;