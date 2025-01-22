/**
 * ThadsTidBits Component
 * 
 * Overview:
 * The `ThadsTidBits` component provides users with a modal that displays an ITIN (Individual Taxpayer Identification Number) checklist. 
 * The modal contains valuable information to assist users in preparing and submitting their ITIN applications, including guidance for different processing options (DIY, TAC, and CAA).
 * 
 * Key Features:
 * - **Modal Trigger:** A clickable text element ("Thad's Tid Bits") opens the modal.
 * - **Informational Modal:** Contains detailed instructions, FAQs, and tips for completing ITIN applications.
 * - **Custom Close Button:** Allows users to close the modal, with a fallback overlay click handler for dismissal.
 * - **Accessibility:** The modal ensures proper scrolling behavior when opened or closed by toggling a "no-scroll" class on the `body` element.
 * 
 * Props:
 * - This component does not accept any props. All functionality is self-contained.
 * 
 * State:
 * - `isOpen` (boolean): Determines whether the modal is open or closed.
 * 
 * Dependencies:
 * - **Assets:** 
 *   - `SMTSIcon`: An image used in the modal header.
 * - **Subcomponents:** 
 *   - `Button`: A reusable button component for the modal's close button.
 * - **Styles:**
 *   - `docPrepModal.css`: Contains styling for the modal and its elements.
 * 
 * Functions:
 * - `openModal`: Opens the modal, adds a "no-scroll" class to the `body` to prevent background scrolling.
 * - `closeModal`: Closes the modal, removes the "no-scroll" class from the `body`.
 * 
 * Usage:
 * This component is designed to be used anywhere detailed guidance for ITIN applications is required. 
 * 
 * Notes:
 * - Ensure the `Button` component is imported and functional to close the modal as intended.
 * - This component includes links to external IRS resources for further assistance.
 * - Styling for the modal, including overlay and close button, can be adjusted in `docPrepModal.css`.
 * 
 * Modal Content:
 * - **Header:**
 *   - Displays the `SMTSIcon` image and the title "ITIN Checklist."
 *   - Includes a close "X" icon to dismiss the modal.
 * - **Body:**
 *   - Detailed ITIN-related information in a list format, covering topics such as:
 *     - Definition and purpose of ITIN.
 *     - Acceptable documentation for ITIN application.
 *     - Processing options (DIY, TAC, and CAA) with specific requirements.
 *     - Advantages of using a Certifying Acceptance Agent (CAA).
 *   - External links to relevant IRS resources for further reference.
 * - **Footer:**
 *   - Contains a close button for dismissing the modal.
 * 
 **/


// IMPORT REACT MAGIC
import{ useState } from 'react';

// IMPORT STYLE
import './docPrepModal.css';

// IMPORT IMAGES
import SMTSIcon from '../../../assets/images/SMTS_Icon_noBG.png'

// IMPORT SUBCOMPONENTS 
import Button from '../ButtonComponent/Button';

export default function ThadsTidBits () {
    
    // STATE
    const [isOpen, setIsOpen] = useState(false);
    
    // MODAL OPEN/CLOSE TRIGGERS
    function openModal () {
        document.body.classList.add("no-scroll");
        setIsOpen(true);
    } 
    function closeModal () {
        document.body.classList.remove("no-scroll");
        setIsOpen(false);
    }
    
    return (
    
        <>
            {/* MODAL OPENING TRIGGER */}
            <text className='modal_trigger' onClick={openModal} style={{ cursor: 'pointer' }}>
                Thad's Tid Bits
            </text>
            {/* START MODAL */}
            {isOpen && (
                <>
                {/* OVERLAY FOR MODAL */}
                <div className="modal_overlay" onClick={closeModal}></div>
                {/* MODAL CONTENT */}
                <div className="modal">
                    {/* MODAL HEADER */}
                    <div className="modal_header">
                        <img src={SMTSIcon} alt="SMTS Icon" />
                        <h2>ITIN Checklist</h2>
                        <span className='close_x' onClick={closeModal}>x</span>
                    </div>
                    {/* MODAL BODY */}
                    <div className="modal_body">
                        <h4>
                            Tidbits to Help Prepare You to File For an <br />
                            Individual Taxpayer Identification Number (ITIN)
                        </h4>
                        <ul className='modal_list'>
                            <li>
                                <p>
                                    What is an Individual Taxpayer Identification Number (ITIN)? It is a tax processing number, issued by the IRS for certain resident and nonresident aliens, their spouses, and dependents. ITINs are assigned only for federal tax purposes. ITINs provide a means to efficiently process and account for tax returns and payments for those not eligible for social security numbers.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Acceptable Documentation for ITIN. There are thirteen acceptable identification documents that can be used to obtain an ITIN. A passport is the only stand-alone document that requires no other forms of identification. See <a href="www.irs.gov" target="_blank" rel="noopener noreferrer">www.irs.gov</a> for other acceptable forms of identification.
                                </p>
                            </li>
                            <li>
                                <p>
                                    If a child is under 6 years of age, the parents must submit medical records showing dependent information and address and must be on the facility letterhead and a certified copy of the child’s passport. It must show contact information and must be signed. <b>Please note-</b> vaccination booklets do not work for this process.
                                </p>
                            </li>
                            <li>
                                <p>
                                    If the child is 6 years of age, but under 18 years of age, the parents must submit original school record signed by the principal, vice president, or secretary, including a certified copy of the child’s passport. The school record must be within a year, and must show student information, address, and grades.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Persons seeking ITIN Processing Option 1 for Do It Yourself (DIY)</b>
                                    <span class="spacer"><br /></span>
                                    • Taxpayer is responsible for the entire ITIN application process. 
                                    <span class="spacer"><br /></span>
                                    • Taxpayer must complete a tax return and attached Form W7
                                    <span class="spacer"><br /></span>
                                    • Taxpayer must assemble all supporting documents for the ITIN request.
                                    <span class="spacer"><br /></span>
                                    • Taxpayer must mail the complete package, along with the original forms of identification.
                                </p>
                            </li>

                            <li>
                                <p>
                                    <b>Persons seeking ITIN Processing Option 2 for Taxpayer Assistance Center (TAC)</b>
                                    <span class="spacer"><br /></span>
                                    • Taxpayers must complete a tax return.
                                    <span class="spacer"><br /></span>
                                    • Taxpayer must complete Form W7 application for each person listed on the tax return.
                                    <span class="spacer"><br /></span>
                                    • Taxpayers must make an appointment with the IRS Taxpayer Assistance Center for validation.
                                    <span class="spacer"><br /></span>
                                    • Taxpayer is responsible for mailing the completed package to the IRS ITIN Section
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Persons seeking ITIN Processing Option 3 for Certifying Assistance Agent (CAA)</b>
                                    <span class="spacer"><br /></span>
                                    • The CAA is responsible for the entire ITIN application process.
                                    <span class="spacer"><br /></span>
                                    • The CAA will complete the tax return, or ensure that a tax return is included in the ITIN package.
                                    <span class="spacer"><br /></span>
                                    • Taxpayer must make an appointment with the CAA to review original documents and to validate ID.
                                    <span class="spacer"><br /></span>
                                    • Taxpayer must provide original passports for everyone listed on the tax return.
                                    <span class="spacer"><br /></span>
                                    • <b>Note:</b> Must include medical records for children under age 6, including a wet signature
                                    <span class="spacer"><br /></span>
                                    • <b>Note:</b> Must include school records for children under age 18, including a wet signature
                                    <span class="spacer"><br /></span>
                                    • The CAA will complete Form W7 and Form W7(COA) for each applicate on the tax return.
                                    <span class="spacer"><br /></span>
                                    • The CAA is responsible for ensuring that all documents are either originals or authorized copies.
                                    <span class="spacer"><br /></span>
                                    • The CAA will mail ethe ITIN package to the IRS processing center with a signature confirmation.
                                    <span class="spacer"><br /></span>
                                    • The CAA will email the tracking number to the taxpayer once the package is mailed.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Is the CAA necessary to complete the ITIN process? No. But the CAA can assist with completing and submitting your ITIN package. The CAA will review and authenticate all required identifications during the in-person meeting and then return your passport back to you. <b>This is important:</b>  Do you really want to mail your valuable passport to the IRS?
                                </p>
                            </li>
                            <li>
                                <p>
                                    The taxpayer shall get a full copy of the ITIN package for their record.
                                </p>
                            </li>
                            <li>
                                <p>
                                    CAA can also help with completing Form 1040, if necessary, but not required if the taxpayer can complete it. There is an additional cost for preparing the federal and state income tax returns.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Seniors Mobile Tax Services LLC can offer CAA services to persons needing an ITIN. If you choose Option 3, the CAA services will cost you money. There is a range of costs. There are no hidden and surprise costs. You will know the cost for services, even over the telephone or email and at the initial face-to-face interview. To find a CAA near you, visit <a href="www.irs.gov" target="_blank" rel="noopener noreferrer">www.irs.gov</a>, search for Certifying Acceptance Agents for Virginia. Please note, IRS list Acceptance Agent (AA) and Certifying Acceptance Agent (CAA) on their website. AA cannot authenticate your identification documents. Certifying Acceptance Agents (CAA) can authenticate your identification and return them back to you.
                                </p>
                            </li>

                        </ul>
                        <p className='tidbit_note'>
                            <b>Please note:</b> providing CAA services is separate from preparing tax returns. The taxpayer may be a do it yourself (DIY) filer, which is acceptable. In this case, the CAA will review the tax return that the client completed for accuracy. If the return is accurate, then the CAA shall include the return in with the rest of the ITIN supporting documentation. 
                        </p>
                    </div>











                    {/* MODAL FOOTER / CLOSE BUTTON */}
                    <div className="modal_footer">
                        <Button onClick={closeModal} to="#" text="Close" color="white" />
                    </div>
                </div>
                </>
            )}
        </>
    );
};
