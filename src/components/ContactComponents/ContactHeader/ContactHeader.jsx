// IMPORT STYLE
import './contactHeader.css'

// IMPORT IMAGES
import Phone_Icon from '../../../assets/images/phone_icon.png'

export default function ContactHeader() {
    
    return(
        <>
            <div className='contact_header'>
                <img src={ Phone_Icon } alt="Call Us" />
                <h2>
                    TEST CONTACT HEADER
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus, provident amet ad assumenda dignissimos totam deleniti nemo? Nihil ipsa similique ut. Officia, autem? Facilis debitis quos cupiditate odio!
                </p>
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