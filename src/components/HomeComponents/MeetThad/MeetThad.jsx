// HOME PAGE HERO SECTION
// Pass in Title1, Title2 and Subtitle as needed. 
// Title1  and Title2 allow for splitting content for smaller views

// IMPORT STYLES
import './meetThad.css'



// IMPORT IMAGES
import userIcon from "../../../assets/images/UserIcon.jpg"


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
                    With over 16 years of experience in tax preperation he is dedicated to providing expert and reliable tax services. As a proud member of the Virginia Society of Enrolled Agents and the National Enrolled Agents Association, he has successfully assisted hundres of clients, including processing over 200 ITINs since 2016.
                </p>
            </div>
        </div>
    );
};