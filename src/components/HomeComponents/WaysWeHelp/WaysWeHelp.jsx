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
                            Remind clients to submit the first quarterly estimated tax payment by April 15th (federal) and May 1st (state). 
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
                            Remind clients to submit their second and third quarterly estimated tax payments by June 15th and September 15th (federal) and their second and third quarterly estimated tax payments by June 15th and September 15th (state).
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
                        Remind clients to submit their final quarterly estimated tax payment by January 15th (federal) and January 15th (state) of the following year.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};