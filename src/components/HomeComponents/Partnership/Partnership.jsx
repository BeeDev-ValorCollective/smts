// IMPORT STYLE
import './partnership.css'

// IMPORT IMAGES
import ChatIcon from "../../../assets/images/chat_icon.png"
import ChecklistIcon from "../../../assets/images/checklist_icon.png"
import CalendarIcon from "../../../assets/images/calendar_icon.png"
import MoneyIcon from "../../../assets/images/money_icon.png"
import DocumentIcon from "../../../assets/images/documents_icon.png"
import IdeaIcon from "../../../assets/images/lightbulb_idea_icon.png"


export default function Partnership() {
    
    return(
        <div className='home_partnership'>
            {/* Title */}
            <h2>
                Working With Seniors Mobile Tax Services
            </h2>
            <h2>
                Is A Partnership
            </h2>
            {/* Sub Title */}
            <h5>
                Clients can trust SMTS for its commitment to professionalism, personalized care, and a seamless partnership that prioritizes their needs every step of the way.
            </h5>
            {/* Container for the info boxes */}
            <div className="partner_split_box">
                {/* Info box 1 */}
                <div className="partner_sub_box">
                    <h3>
                        WHAT YOU DO
                    </h3>
                    <ul>
                        <li>
                            <img src={ ChatIcon } alt="Chat Icon" />
                            <p>
                                Ask your adviser questions - even after tax season 
                            </p>
                        </li>
                        <li>
                            <img src={ ChecklistIcon } alt="Checklist Icon" />
                            <p>
                                Get your documents organized with our free Tax Prep Checklist
                            </p>
                        </li>
                        <li>
                            <img src={ CalendarIcon } alt="Calendar Icon" />
                            <p>
                                Check in throughut the year to continue building trust 
                            </p>
                        </li>
                    </ul>
                </div>
                {/* Info box 2 */}
                <div className="partner_sub_box">
                    <h3>
                        WHAT WE DO
                    </h3>
                    <div className="partner_sub_box">
                        <li>
                            <img src={ MoneyIcon } alt="Chat Icon" />
                            <p>
                                Research tax code changes to make sure all bases are covered 
                            </p>
                        </li>
                        <li>
                            <img src={ DocumentIcon } alt="Chat Icon" />
                            <p>
                                Prepare your taxes and get them ready for filing 
                            </p>
                        </li>
                        <li>
                            <img src={ IdeaIcon } alt="Chat Icon" />
                            <p>
                                Provide tax inside and advice to help clients with tax avoidance stratagies, but never promote tax evasion schemes
                            </p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};