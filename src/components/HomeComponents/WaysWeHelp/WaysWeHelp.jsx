// IMPORT STYLE
import './waysWeHelp.css'

export default function WaysWeHelp() {
    
    return(
        <div className='ways_we_help'>
            {/* Title */}
            <h2>
                Ways We Can Help You All Year Long
            </h2>
            {/* Sub Title */}
            <h5>
                SMTS offers year-round support, from tax preparation and ITIN applications to notary services and tax planning guidance.
            </h5>
            {/* Box Container */}
            <div className='ways_we_help_box_wrapper'>
                {/* BOX1 */}
                <div className='ways_we_help_box'>
                    <div className='ways_we_help_title'>
                        <h3>
                            TAX SEASON
                        </h3>
                    </div>
                    <div className='ways_we_help_box_body'>
                        <p>
                            Small-Business Quarterly Taxes Personal Annual Taxes State and Local Taxes
                        </p>
                    </div>
                </div>
                {/* BOX2 */}
                <div className='ways_we_help_box'>
                    <div className='ways_we_help_title'>
                        <h3>
                            MID-YEAR
                        </h3>
                    </div>
                    <div className='ways_we_help_box_body'>
                        <p>
                            Small-Business Employment Taxes Small-Business Quarterly Taxes Small Business Advising
                        </p>
                    </div>
                </div>
                {/* BOX3 */}
                <div className='ways_we_help_box'>
                    <div className='ways_we_help_title'>
                        <h3>
                            END-OF-YEAR
                        </h3>
                    </div>
                    <div className='ways_we_help_box_body'>
                        <p>
                            Small-Business Employment Taxes Small-Business Quarterly Taxes Year-End Tax Planning
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};