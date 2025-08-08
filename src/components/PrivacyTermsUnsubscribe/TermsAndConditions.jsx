import './privacytermsunsubscribe.css'


const Owner = import.meta.env.VITE_OWNER_NAME;
const OwnerEmail = import.meta.env.VITE_OWNEREMAIL;
const AddressLine1 = import.meta.env.VITE_ADDRESS_LINE1;
const AddressLine2 = import.meta.env.VITE_ADDRESS_LINE2;
const AddressLine3 = import.meta.env.VITE_ADDRESS_LINE3;
const PhoneLink = import.meta.env.VITE_LINK_PHONE;
const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;

export default function TermsAndConditions() {



    return(
        <>
        <div className="terms_header">
            <p>Effective date: 16th day of January, 2024</p>
            <p>These terms and conditions (the "Terms and Conditions") govern the use of seniorsmobiletaxservices.com (the "Site"). This Site is owned and operated by {Owner}. This Site is a service.</p>
            <p>By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.</p>
        </div>
        <div className="terms_content">
            <div className="section">
                <h3>Intellectual Property</h3>
                <p>All content published and made available on our Site is the property of {Owner} and the Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.</p>
            </div>
            <div className="section">
                <h3>Acceptable Use</h3>
                <p>As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not to:</p>
                <ul>
                    <li>Violate the intellectual property rights of the Site owners or any third party to the Site; or</li>
                    <li>Act in any way that could be considered fraudulent.</li>
                </ul>
                <p>If we believe you are using our Site illegally or in a manner that violates these Terms and Conditions, we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to take any legal steps necessary to prevent you from accessing our Site.</p>
            </div>
            <div className="section">
                <h3>Links to Other Websites</h3>
                <p>Our Site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.</p>
            </div>
            <div className="section">
                <h3>Limitation of Liability</h3>
                <p>{Owner} and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.</p>
            </div>
            <div className="section">
                <h3>Indemnity</h3>
                <p>Except where prohibited by law, by using this Site you indemnify and hold harmless {Owner} and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.</p>
            </div>
            <div className="section">
                <h3>Applicable Law</h3>
                <p>These Terms and Conditions are governed by the laws of the Commonwealth of Virginia.</p>
            </div>
            <div className="section">
                <h3>Severability</h3>
                <p>If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.</p>
            </div>
            <div className="section">
                <h3>Changes</h3>
                <p>These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.</p>
            </div>
            <div className="section">
                <h3>Contact Details</h3>
                <p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
                <address>
                <a href={`mailto:${OwnerEmail}?subject=Regarding%20Terms%20and%20Conditions...`}>{OwnerEmail}</a>
                <a href={PhoneLink}>{PhoneDisplay}</a>
                <p>{AddressLine1}</p>
                <p>{AddressLine2}</p>
                <p>{AddressLine3}</p>
            </address>
            <p>You can also contact us through the feedback form available on our Site.</p>
            </div>
        </div>
        </>
    )
}