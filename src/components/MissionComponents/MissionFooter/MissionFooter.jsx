// IMPORT STYLE
import './missionFooter.css'

// IMPORT IMAGES
import MX5 from '../../../assets/images/mx5_icon.png'

// IMPORT SUBCOMPONENTS
import Button from '../../ReusableComponents/ButtonComponent/Button'

export default function MissionFooter() {

    return(
            <div className='mission_footer'>
                <h2>Ready To File?</h2>
                <p>
                    Relax, enjoy your favorite daytime TV shows, and let SMTS handle the rest. Professional, convenient, and designed with seniors and veterans in mind.
                </p>
                <p className='make_the_call'>
                    Don’t drive... Make the call
                </p>
                <p className='make_the_call'>
                    <b>Seniors Mobile Tax Services</b>
                </p>
                <img src={ MX5 } alt="SMTS Miata" />
                <Button to="/contact" text="Contact Us" color="red" />
            </div>
    );
};