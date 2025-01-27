/**
 * DocPrepModal Component
 * 
 * Overview:
 * The `DocPrepModal` component is a React-based modal that provides a detailed checklist to help users prepare for filing their federal and Virginia state income taxes. 
 * It guides users through gathering essential documents and information required for accurate tax preparation and submission.
 * 
 * Key Features:
 * - **Modal Trigger:** A clickable text element ("Tax Prep Checklist") to open the modal.
 * - **Informative Modal:** Contains a checklist of items, including personal identification, income sources, deductions, and tax-related documentation.
 * - **Interactive Close Options:** Users can close the modal using the "Close" button, the overlay, or the "X" icon.
 * - **Scrolling Control:** Adds and removes a "no-scroll" class to/from the `body` element to prevent background scrolling when the modal is open.
 * 
 * Props:
 * - This component does not require any props. All functionality is self-contained.
 * 
 * State:
 * - `isOpen` (boolean): Tracks whether the modal is open (`true`) or closed (`false`).
 * 
 * Dependencies:
 * - **Assets:** 
 *   - `SMTSIcon`: An image displayed in the modal header.
 * - **Subcomponents:** 
 *   - `Button`: A reusable button component for the modal's footer.
 * - **Styles:**
 *   - `docPrepModal.css`: Styles for the modal, overlay, and content.
 * 
 * Functions:
 * - `openModal`: Opens the modal and adds a "no-scroll" class to the `body`.
 * - `closeModal`: Closes the modal and removes the "no-scroll" class from the `body`.
 * 
 * Usage:
 * The component can be used on any page where users need guidance on gathering documents for tax filing.
 * 
 * Modal Content:
 * - **Header:**
 *   - Displays the `SMTSIcon` image and the title "Tax Prep Checklist."
 *   - Includes a close "X" icon for dismissing the modal.
 * - **Body:**
 *   - Provides a detailed checklist for tax preparation, including:
 *     - Personal information such as SSNs, ITINs, and driver’s license details.
 *     - Banking details for direct deposit or debit.
 *     - Identity Protection PINs (IP PINs) for federal and state filing.
 *     - Sources of income (e.g., W2, 1099 forms, dividends, etc.).
 *     - Documentation for itemized deductions (e.g., donations, medical expenses, real estate, investments).
 *     - Information about previous tax returns and rental properties.
 * - **Footer:**
 *   - Includes a "Close" button to dismiss the modal.
 * 
 * Notes:
 * - Verify all checklist items for accuracy based on the latest tax regulations.
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

export default function DocPrepModal () {
    
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
                Tax Prep Checklist
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
                        <h2>Tax Prep Checklist</h2>
                        <span className='close_x' onClick={closeModal}>x</span>
                    </div>
                    {/* MODAL BODY */}
                    <div className="modal_body">
                        <h4>Tidbits to Help Prepare You to File Federal & VA State Income Taxes</h4>
                        <ul className='modal_list'>
                            <li>
                                <p className='blue_check'>
                                    Gather SSNs or ITINs, full names and birth dates for all persons on the tax return.
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Gather your driver's livense information, include your spouse's information.
                                </p>
                            </li>
                            <li>
                                <p className='blue_check'>
                                    Gather your bank account and routing numbers. Why? For direct deposit and direct debit.
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Did you and anyone else on your return receive an Identity Protection Personal Identification Number (IP PIN)? Have you applied for this number at the federal and state levels? If not, maybe you should. These numbers must be included on your return... If not, the return will be rejected.
                                </p>
                            </li>
                            <li>
                                <p className='blue_check'>
                                    Did you make any federal or state estimated quarterly tax payments? Do you have a record of payments?
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Gather all your sources of income... social security, retirement, railroad retirement, dividend and interest income, W2, 1099-K, 1099-MISC, 1099-DA, 1099-G, etc.
                                </p>
                            </li>
                            <li>
                                <p className='blue_check'>
                                    Are you able to itemize? Probably not. Why? The standard deduction threshold may be higher than your itemized deductions. But just in case, locate the following documents: Items that you donated: when did you donate the items? Where did you donate the items? How much did you pay for the items? What was the fair market value (FMV) of the items when you donated them?
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Any cash contributions: Churches, non-profit organizations, charitable miles, etc.
                                </p>
                            </li>
                            <li>
                                <p className='blue_check'>
                                    Medical expenses: Must be 7.5% of your adjusted gross income (AGI): doctors, dentists, psychiatrists, prescriptions, medical mileage, medical alert devices, etc. 
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Intestments: Need the transaction documents for date of purchase, date sold, cost at purchase, selling price. Did you purchase or sell any cryptocurrency?
                                </p>
                            </li>
                            <li>
                                <p className='blue_check'>
                                    Do you own real estate? Did you sell any real estate? Do you own rental property? Are you renting any rental property? Description of rental property. Any expenses for the rental property.
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Did you sell your home in 2024? Any improvements? Need that HUD-1 statement to determine whether you had a capital gain.
                                </p>
                            </li>
                            <li>
                                <p className='blue_check'>
                                    Do you have any charitable mileages?
                                </p>
                            </li>
                            <li>
                                <p className='red_check'>
                                    Where is your 2023 federal and state income tax return?
                                </p>
                            </li>
                        </ul>
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