// IMPORT STYLE
import './benefits.css'

// IMPORT IMAGES
import ConfidenceIcon from "../../../assets/images/confidence_icon.png"
import SaveIcon from "../../../assets/images/save_icon.png"
import BigMoneyIcon from "../../../assets/images/big_money_icon.png"

export default function Benefits() {
    
    return(
        <div className="home_benefits">
            <div className="home_benefits_wrapper">
                <img src={ ConfidenceIcon } alt="Build Confidence Icon" />
                <h5>
                    E-FILE WITH <br />CONFIDENCE
                </h5>
                <p>
                    Seniors Mobile Tax Service offers an easy-to-use experience, up-to-date standards, and exceptional support.
                </p>
            </div>

            <div className="home_benefits_wrapper">
                <img src={ SaveIcon } alt="No Hidden Fees Icon" />
                <h5>
                    NO HIDDEN <br />FEES
                </h5>
                <p>
                    You receive access to all federal forms and deductions without any extra fees or hidden costs.
                </p>
            </div>

            <div className="home_benefits_wrapper">
                <img src={ BigMoneyIcon } alt="Save Big Icon" />
                <h5>
                    SWITCH AND <br />SAVE BIG
                </h5>
                <p>
                    You save big when you switch from the competitor, all from the comfort of your own home.
                </p>
            </div>
        </div>
    );
};