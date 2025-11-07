/** 
*** Custom hook for smooth scrolling to target element by id ***
*Description:
*The useJumpLink hook provides smooth scrolling functionality for navigating to a specific element within the same page. 
*When triggered, it scrolls the page to the target element identified by its id attribute, 
*
*Usage:
*This hook can be used to handle scroll actions when a user clicks the button. 
*
*Return Value:
*The hook returns a handleClick function, which can be attached to any event (like onClick) 
*in your component to initiate the smooth scroll.
*
*Parameters:
*- e (event): The event object that is passed when the click event is triggered. This is necessary for preventing the default link behavior.
*- targetId (string): The id of the target element you want to scroll to. This must match the id attribute of the element you want to navigate to.
*
**/


const useJumpLink = () => {
    
    const handleClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        // If Target ID exists, perform the scroll
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50,
                behavior: 'smooth'
            });
        };
    };
    
    return handleClick;
};

export default useJumpLink;
