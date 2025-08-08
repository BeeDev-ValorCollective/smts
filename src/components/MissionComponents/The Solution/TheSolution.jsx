/**
 * TheSolution Component
 * 
 * This component outlines the unique value proposition of Seniors Mobile Tax Services (SMTS), 
 * emphasizing its commitment to providing convenient, stress-free tax preparation services 
 * specifically for seniors and veterans in the Richmond area.
 * 
 * Functionality:
 * - Displays a structured breakdown of the SMTS process in four steps, highlighting key benefits.
 * - Provides a concise and reassuring message to potential clients about the ease and safety of the service.
 * - Includes a horizontal rule (`<hr />`) for visual separation at the end of the content.
 * 
 * Renders:
 * - **Title**: "The Solution."
 * - **Introduction**: Brief description of the SMTS mission and appeal to seniors and veterans.
 * - **Steps**: Ordered list explaining the four-step process:
 *   1. In-home collection of tax documents.
 *   2. Rapid preparation of tax returns.
 *   3. In-person review and consultation.
 *   4. Electronic filing upon client approval.
 * - **Closing Statement**: Encourages clients to trust the service and avoid travel-related stress.
 * 
 * Styling:
 * - Styled using the `theSolution.css` file.
 * - Ensures clarity and readability through structured layout and emphasis on key details.
 * 
 * Notes:
 * - **Accessibility**:
 *   - Semantic HTML elements (`<h2>`, `<p>`, `<ul>`, `<li>`, `<hr />`) enhance screen reader compatibility.
 *   - Plain, easy-to-read language ensures accessibility for all users.
 * - **Scalability**:
 *   - Additional steps or details can be added without disrupting the current structure.
 *   - The layout supports further customization with minimal code changes.
 * 
 * Props:
 * - This component does not accept props and uses static content.
 * 
 * Dependencies:
 * - `theSolution.css` (for styling).
 */

// IMPORT STYLE
import './theSolution.css'

export default function TheSolution() {

    return(
        <div className='the_solution'>
            <h2>The Solution</h2>
            <p>
                Seniors and veterans, "Don't drive... Make the call." &nbsp;
                <b>Seniors Mobile Tax Services</b> (SMTS) is a full-service, veteran-owned tax preparation business serving the Richmond area. Our mission is simple:.
            </p>
            <ul>
                <li><b>1 - We come to you.</b> We’ll visit your home to securely collect your tax documents.</li>
                <li><b>2 - We prepare your return quickly.</b> Most returns are completed within hours, not days or weeks.</li>
                <li><b>3 - We follow up in person.</b> At your second in-home appointment, we review your completed return with you, answer your questions, and ensure your satisfaction.</li>
                <li><b>4 - We file electronically.</b> Once you’re satisfied and payment is received, your return is filed immediately.</li>
            </ul>
            <p>
                Stay home, stay safe, and stay comfortable while we take care of your taxes. Skip the stress of winter travel and let us handle the hard work.
            </p>
            <hr />
        </div>
    );
};