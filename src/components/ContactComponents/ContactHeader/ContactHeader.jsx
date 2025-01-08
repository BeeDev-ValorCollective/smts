// IMPORT STYLE
import './contactHeader.css'

// IMPORT IMAGES
import Phone_Icon from '../../../assets/images/phone_icon.png'

export default function ContactHeader() {
    
    return(
        <>
            <div className='contact_header'>
                <h2>
                    Get In Touch
                </h2>
                <p>
                    For reliable and convenient tax services, contact Thad at Seniors Mobile Tax Services LLC. Call today to schedule your appointment or ask any questions you may have—Thad is here to help!
                </p>
                <img src={ Phone_Icon } alt="Call Us" />
                <h3>PHONE</h3>
                <h4>(804) 986-2425</h4>
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