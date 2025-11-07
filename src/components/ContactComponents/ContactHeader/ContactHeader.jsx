/**
 * Contact Header Component
 * 
 * This component is responsible for displaying the contact information for 
 * Seniors Mobile Tax Services LLC. It includes the phone and email contact 
 * options, as well as a message to encourage users to reach out for inquiries 
 * and services. The contact details are dynamically loaded from environment variables.
 * 
 * Key Features:
 * - **Dynamic Contact Information**: The phone number and email address are 
 *   sourced from environment variables, allowing for easy configuration in different environments.
 * - **Phone and Email Links**: Provides clickable links for users to call or email directly.
 * - **Visual Contact Methods**: Displays icons next to the contact methods for better UX.
 * - **Friendly Message**: Includes a welcoming message for users to reach out for assistance.
 * 
 * Props:
 * - **None**
 * 
 * State:
 * - **None** (No internal state used in this component)
 * 
 * Environment Variables:
 * - **`VITE_LINK_PHONE`** (`string`): The phone number link (e.g., `tel:+1234567890`).
 * - **`VITE_DISPLAY_PHONE`** (`string`): The phone number as displayed on the UI.
 * - **`VITE_INFO_EMAIL`** (`string`): The email address to contact for inquiries.
 * 
 * Usage:
 * This component can be used as part of a contact or header section on a website, 
 * providing users with multiple ways to reach out via phone or email. It also 
 * encourages users to send messages directly to the service provider.
 */

// IMPORT STYLE
import './contactHeader.css'

// IMPORT IMAGES
import Phone_Icon from '../../../assets/images/phone_icon.png'
import Email_Icon from '../../../assets/images/email_icon.png'

export default function ContactHeader() {
    
    // IMPORT ENV DATA
    const PhoneLink = import.meta.env.VITE_LINK_PHONE;
    const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;
    const EmailLink = import.meta.env.VITE_INFO_EMAIL;
    
    return(
        <>
            <div className='contact_header'>
                <p>
                    For reliable and convenient tax services, contact Thad at Seniors Mobile Tax Services LLC.
                </p>
                <p>
                    Call today to schedule your appointment or ask any questions you may have — Thad is here to help!
                </p>
                <div className='contact_methods'>
                    <div className='contact_type'>
                        <img src={ Phone_Icon } alt="Call Us" />
                        <h4>Call Us</h4>
                        <a href={ PhoneLink }>
                            <h5>{ PhoneDisplay }</h5>
                        </a>
                    </div>
                    <div className='contact_type'>
                        <img src={ Email_Icon } alt="Email Us" />
                        <h4>Email Us</h4>
                        <a href={`mailto:${ EmailLink }?subject=Request%20For%20Tax%20Services&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about...`}>
                            <h5>{ EmailLink }</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="message_hr">
                <hr />
                <p>
                    Or send us a message
                </p>
                <p>(To make sure you don’t miss any messages, please add us to your email contacts. That way, our emails will drive straight into your inbox!)</p>
            </div>
        </>
    );
};