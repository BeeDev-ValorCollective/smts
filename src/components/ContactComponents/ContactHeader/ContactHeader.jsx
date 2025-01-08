// IMPORT STYLE
import './contactHeader.css'

// IMPORT IMAGES
import Phone_Icon from '../../../assets/images/phone_icon.png'
import Email_Icon from '../../../assets/images/email_icon.png'

export default function ContactHeader() {
    
    const PhoneLink = import.meta.env.VITE_LINK_PHONE;
    const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;
    const EmailLink = import.meta.env.VITE_INFO_EMAIL;



    return(
        <>
            <div className='contact_header'>
                <h2>
                    Get In Touch
                </h2>
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
                        <a href={`mailto:${ EmailLink }?subject=Request%20For%20Proposal&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about...`}>
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