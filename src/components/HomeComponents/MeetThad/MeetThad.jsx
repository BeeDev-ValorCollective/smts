// HOME PAGE HERO SECTION
// Pass in Title1, Title2 and Subtitle as needed. 
// Title1  and Title2 allow for splitting content for smaller views

// IMPORT STYLES
import './meetThad.css'



// IMPORT IMAGES
import userIcon from "../../../assets/images/MeetThad.jpg"


export default function MeetThad() {
    
    return(
        <div className='meet_thad'>
            {/* Owner Image */}
            <img src={userIcon} alt="Meet Thad" />
            <div>
                <h2>
                    Thad A. Jones -&nbsp;
                    <br className="mobile_only" />
                    EA, CAA & Notary
                </h2>
                <h4>
                    Founder & Owner
                </h4>
                <h5>
                    Veteran Owned & Operated Business
                </h5>
                <p>
                    With over 18 years of experience as a tax practitioner.  He is dedicated to providing expert and reliable tax preparation services to his clients. He is a member of the NAEA and VASEA. Additionally, he is a commissioned notary for the Commonwealth of Virginia. He is a certified acceptance agent having processed over 200-ITINs since 2016.
                </p>
            </div>
        </div>
    );
};