// IMPORT STYLE
import './waysWeHelp.css'

export default function WaysWeHelp() {
    
    return(
        <div className='ways_we_help'>
            {/* Title */}
            <h2>
                We Can Help You All Year Long
            </h2>
            {/* Sub Title */}
            {/* <h5>
                Year-round support, from tax preparation and ITIN applications to notary services and tax planning guidance.
            </h5> */}
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
                            Assist with individual's quarterly federal and state tax payments
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
                            Ensure clients have submitted their June and September estimate quarterly tax payments on time
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
                            Ensure clients have made their final estimated quarterly tax payment by January 15th
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};