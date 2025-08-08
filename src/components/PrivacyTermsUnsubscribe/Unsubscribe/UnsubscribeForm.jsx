import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../../../assets/images/loading_spinner.png'
import './unsub.css'

import useUnsubFormValidation from "../UnsubscribeHooks/useUnsubFormValidation"
import useUnsubMailSubmission from '../UnsubscribeHooks/useUnsubMailSubmission'

export default function UnsubscribeForm() {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('');
    const [contact, setContact] = useState('');
    const [userName, setUserName] = useState('');
    const [success, setSuccess] = useState('');
    const [mailError, setMailError] = useState('');
    const [errorCount, setErrorCount] = useState(0);
    const [mailFail, setMailFail] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const SupportEmail = import.meta.env.VITE_SUPPORT_EMAIL

    const isFormValid = useUnsubFormValidation({ userName, subject, contact, phone });

    useEffect(() => {
        if (subject) {
            const subjectLower = subject.toLowerCase()
            let baseMessage = ""
            if (subject === "Email and Phone") {
                baseMessage = `The following have been added to our unsubscribe list:\n\n- Email: ${contact}\n- Phone: ${phone}`
            } else if (subject === "Email") {
                baseMessage = `The following email has been added to our unsubscribe list:\n\n- Email: ${contact}`
            } else if (subject === "Phone") {
                baseMessage = `The following phone number has been added to our unsubscribe list:\n\n- Phone: ${phone}`
            }
            // Final message with instructions
        const messageBody = `${baseMessage}\n\nIf you wish to remove your ${subjectLower} from this list, please email us at ${SupportEmail} or fill out our contact form at ${window.location.origin}/contact.\n\nThank you for reaching out.`;

        setMessage(messageBody)
        }
    }, [userName, subject, message, phone, contact])

    const { sendMail, isSubmitting } = useUnsubMailSubmission({
        subject: `Unsubscribe ${subject}`,
        message,
        contact,
        userName,
        phone,
        setSuccess,
        setMailError,
        setErrorCount,
        setMailFail,
        setIsButtonVisible,
        setSubject,
        setMessage,
        setContact,
        setUserName,
        setPhone,
    })

    console.log('message',message, 'subject', subject)

    return(
        <>
        <div className="contact_container">
            {/* FORM SECTION */}
            <form onSubmit={sendMail}>
                {/* TITLE SECTION */}
                <h2>Unsubscribe</h2>
                {/* CLIENT NAME */}
                <div className="entry_area">
                    <input
                        name="userName"
                        type="text"
                        id="userName"
                        required
                        minLength={3}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="" // Leave blank!!
                    />
                    <label htmlFor="userName" className="label_line">
                        Name:
                    </label>
                </div>
                {/* END CLIENT NAME */}
                {/* CLIENT CONTACT EMAIL */}
                <div className="entry_area">
                    <input
                        name="contact"
                        type="email"
                        id="contact"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="" // Leave blank!!
                    />
                    <label htmlFor="contact" className="label_line">
                        Email:
                    </label>
                </div>
                {/* END CLIENT CONTACT EMAIL */}
                {/* CLIENT SUBJECT */}
                <div className="entry_area">
                    <select
                        name="title"
                        id="title"
                        required
                        minLength={3}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value="" disabled>Select and Option</option>
                        <option value="Email">Email Only</option>
                        <option value="Phone">Phone Only</option>
                        <option value="Email and Phone">Both Email and Phone</option>
                    </select>
                </div>
                {/* END CLIENT SUBJECT */}
                {/* CLIENT PHONE NUMBER */}
                {(subject === "Phone" || subject === "Email and Phone") && (
                    <div className="entry_area">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required={subject === "Phone" || subject === "Email and Phone"}
                            pattern="\d{3}-?\d{3}-?\d{4}" // Adjust for your validation needs
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder=""
                        />
                        <label htmlFor="phone" className="label_line">
                            Phone Number:
                        </label>
                    </div>
                )}
                {/* END CLIENT PHONE NUMBER */}
                {/* CLIENT MESSAGE */}
                
                {/* END CLIENT MESSAGE */}
                {/* SUBMIT BUTTON AND SPINNER */}
                {isSubmitting ? (
                    <div className="form_button_box">
                        {!mailError && !mailFail && !success ? (
                            <img src={ Spinner } alt="Spinner Icon" className="spinner"/>
                        ) : (
                            <>&nbsp;</>
                        )}
                    </div>
                ) : null}
                {!isSubmitting && (
                    <div className="form_button_box">
                        <button hidden={!isButtonVisible} type="submit" disabled={!isFormValid}>
                            SUBMIT
                        </button>
                    </div>
                )}
                {/* END SUBMIT BUTTON AND SPINNER */}
                {/* ERROR / SUCCESS MESSAGES */}
                <div>
                    {mailError && !mailFail && (
                        <div className="mailer_messages">
                            <h3>{mailError}</h3>
                            <p>Please try again</p>
                        </div>
                    )}
                    {mailFail && (
                        <div className="mailer_messages failure">
                            <h3>We are experiencing technical problems</h3>
                            <p>Please contact us directly at -</p>
                            <a
                                href={`mailto:${SupportEmail}?subject=Customer%20Contact%20Support&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about`}
                            >
                                <b>{SupportEmail}</b>
                            </a>
                        </div>
                    )}
                    {success && (
                        <div className="mailer_messages success">
                            <h2>{success}</h2>
                            <p>Redirecting you home...</p>
                            <p>
                                Click <Link to="/">HERE</Link> if you are not redirected
                            </p>
                        </div>
                    )}
                </div>
                {/* END ERROR / SUCCESS MESSAGES */}
            </form>
            {/* FORM SECTION */}
        </div>
        </>
    )
}