import './privacytermsunsubscribe.css'

const Owner = import.meta.env.VITE_OWNER_NAME;
const DCO = import.meta.env.VITE_DCO_NAME;
const DCOEmail = import.meta.env.VITE_DCO_EMAIL;
const DCO_AddressLine1 = import.meta.env.VITE_ADDRESS_DCO_LINE1;
const DCO_AddressLine2 = import.meta.env.VITE_ADDRESS_DCO_LINE2;
const DCO_AddressLine3 = import.meta.env.VITE_ADDRESS_DCO_LINE3;
const DCO_PhoneLink = import.meta.env.VITE_LINK_DCO_PHONE;
const DCO_PhoneDisplay = import.meta.env.VITE_DISPLAY_DCO_PHONE;
const PCO = import.meta.env.VITE_PCO_NAME;
const PCOEmail = import.meta.env.VITE_PCO_EMAIL;
const PCO_AddressLine1 = import.meta.env.VITE_ADDRESS_PCO_LINE1;
const PCO_AddressLine2 = import.meta.env.VITE_ADDRESS_PCO_LINE2;
const PCO_AddressLine3 = import.meta.env.VITE_ADDRESS_PCO_LINE3;
const PCO_PhoneLink = import.meta.env.VITE_LINK_PCO_PHONE;
const PCO_PhoneDisplay = import.meta.env.VITE_DISPLAY_PCO_PHONE;


export default function PrivacyPolicy() {


    return(
        <>
        <div className="privacy_header">
            <p>Type of website: Service</p>
            <p>Effective date: 1st day of January 2025</p>
        </div>
        <div className="general">
            <p>seniorsmobiletaxservices.com (the "Site") is owned and operated by {Owner}. {DCO} is the data controller and can be contacted at:</p>
            <address>
                <a href={`mailto:${DCOEmail}?subject=Regarding%20Privacy%20Policy...`}>{DCOEmail}</a>
                <a href={DCO_PhoneLink}>{DCO_PhoneDisplay}</a>
                <p>{DCO_AddressLine1}</p>
                <p>{DCO_AddressLine2}</p>
                <p>{DCO_AddressLine3}</p>
            </address>
        </div>
        <div className="privacy_content">
            <div className="section">
                <h3>Purpose</h3>
                <p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:</p>
                <ol>
                    <li>The personal data we will collect;</li>
                    <li>Use of collected data;</li>
                    <li>Who has access to the data collected;</li>
                    <li>The rights of Site users; and</li>
                    <li>The Site's cookie policy.</li>
                </ol>
                <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>
            </div>
            <div className="section">
                <h3>Consent</h3>
                <p>By using our Site users agree that they consent to:</p>
                <ol>
                    <li>The conditions set out in this Privacy Policy.</li>
                </ol>
            </div>
            <div className="section">
                <h3>Personal Data We Collect</h3>
                <p>We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect any additional data beyond the data listed below without notifying you first.</p>
            </div>
            <div className="section">
                <h3>Data Collected in a Non-Automatic Way</h3>
                <p>We may also collect the following data when you perform certain functions on our Site:</p>
                <ol>
                    <li>First and Last name;</li>
                    <li>Age;</li>
                    <li>Date of Birth;</li>
                    <li>Sex;</li>
                    <li>Email address;</li>
                    <li>Phone number;</li>
                    <li>Address;</li>
                    <li>Payment information;</li>
                    <li>Social Security Number;</li>
                    <li>Income Data; and</li>
                    <li>Drivers License.</li>
                </ol>
                <p>This data may be collected using the following methods:</p>
                <ol>
                    <li>Contact Form on Website; and</li>
                    <li>Agreements (Contract / Notary)</li>
                </ol>
            </div>
            <div className="section">
                <h3>How We Use Personal Data</h3>
                <p>Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy.</p>
                <p>The data we collect when the user performs certain functions may be used for the following purposes:</p>
                <ol>
                    <li>Communication; and</li>
                    <li>Preparation and or Filing of forms</li>
                </ol>
            </div>
            <div className="section">
                <h3>Who We Share Personal Data With</h3>
                <p><span>Employees</span></p>
                <p>We may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.</p>
                <p><span>Third Parties</span></p>
                <p>We may share user data with the following third parties:</p>
                <ol>
                    <li>Internal Revenue Service; and</li>
                    <li>Virginia Department of Taxation</li>
                </ol>
                <p>We may share the following user data with third parties:</p>
                <ol>
                    <li>Completed forms</li>
                </ol>
                <p>We may share user data with third parties for the following purposes:</p>
                <ol>
                    <li>Filing of forms</li>
                </ol>
                <p>Third parties will not be able to access user data beyond what is reasonably necessary to achieve the given purpose.</p>
                <p><span>Other Disclosures</span></p>
                <p>We will not sell or share your data with other third parties, except in the following cases:</p>
                <ol>
                    <li>If the law requires it;</li>
                    <li>If it is required for any legal proceeding;</li>
                    <li>To prove or protect our legal rights; and</li>
                    <li>To buyers or potential buyers of this company in the event that we seek to sell the company.</li>
                </ol>
                <p>If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices.</p>
            </div>
            <div className="section">
                <h3>How Long We Store Personal Data</h3>
                <p>User data will be stored for 3 years.</p>
                <p>You will be notified if your data is kept for longer than this period.</p>
            </div>
            <div className="section">
                <h3>How We Protect Your Personal Data</h3>
                <p>In order to protect your security, we use the strongest available browser encryption and store all of our data on servers in secure facilities. All data is only accessible to our employees. Our employees are bound by strict confidentiality agreements and a breach of this agreement would result in the employee's termination.</p>
                <p>While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.</p>
            </div>
            <div className="section">
                <h3>Children</h3>
                <p>The minimum age to use our website is 18 years of age. We do not knowingly collect or use personal data from children under 13 years of age. If we learn that we have collected personal data from a child under 13 years of age, the personal data will be deleted as soon as possible. If a child under 13 years of age has provided us with personal data their parent or guardian may contact our privacy officer.</p>
            </div>
            <div className="section">
                <h3>How to Access, Modify, Delete, or Challenge the Data Collected</h3>
                <p>If you would like to know if we have collected your personal data, how we have used your personal data, if we have disclosed your personal data and to who we disclosed your personal data, if you would like your data to be deleted or modified in any way, or if you would like to exercise any of your other rights under the GDPR, please contact our privacy officer here:</p>
                <address>
                    <p>{PCO}</p>
                    <a href={`mailto:${PCOEmail}?subject=Regarding%20Privacy%20Policy...`}>{PCOEmail}</a>
                    <a href={PCO_PhoneLink}>{PCO_PhoneDisplay}</a>
                    <p>{PCO_AddressLine1}</p>
                    <p>{PCO_AddressLine2}</p>
                    <p>{PCO_AddressLine3}</p>
                </address>
            </div>
            <div className="section">
                <h3>How to Opt-Out of Data Collection, Use or Disclosure</h3>
                <p>In addition to the method(s) described in the How to Access, Modify, Delete, or Challenge the Data Collected section, we provide the following specific opt-out methods for the forms of collection, use, or disclosure of your personal data specified below:</p>
                <ol>
                    <li>You can opt-out of the use of SMS Text and/or emails. You can opt-out by clicking "unsubscribe" link at the bottom of any emails.</li>
                </ol>
            </div>
            <div className="section">
                <h3>Cookie Policy</h3>
                <p>A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data relating to the user's browsing habits. You can choose to be notified each time a cookie is transmitted. You can also choose to disable cookies entirely in your internet browser, but this may decrease the quality of your user experience.</p>
                <p>We use the following types of cookies on our Site:</p>
                <ol>
                    <li>
                        <p><span>Analytical cookies</span></p>
                        <p>Analytical cookies allow us to improve the design and functionality of our Site by collecting data on how you access our Site, for example data on the content you access, how long you stay on our Site, etc.</p>
                    </li>
                </ol>
            </div>
            <div className="section">
                <h3>Modifications</h3>
                <p>This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the "Effective Date" at the top of this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.</p>
            </div>
            <div className="section">
                <h3>Contact Information</h3>
                <p>If you have any questions, concerns or complaints, you can contact our privacy officer, {PCO}, at:</p>
                <address>
                    <p>{PCO}</p>
                    <a href={`mailto:${PCOEmail}?subject=Regarding%20Privacy%20Policy...`}>{PCOEmail}</a>
                    <a href={PCO_PhoneLink}>{PCO_PhoneDisplay}</a>
                    <p>{PCO_AddressLine1}</p>
                    <p>{PCO_AddressLine2}</p>
                    <p>{PCO_AddressLine3}</p>
                </address>
            </div>
        </div>
        </>
    )
}