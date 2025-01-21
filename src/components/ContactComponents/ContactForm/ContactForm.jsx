// IMPORT REACT MAGIC
import { Link } from 'react-router-dom';
import { useState } from 'react';

// IMPORT STYLES
import './contactForm.css';

// IMPORT ICONS
import Spinner from '../../../assets/images/loading_spinner.png'

// IMPORT HOOKS
import useFormValidation from '../ContactHooks/useFormValidation';
import useMailSubmission from '../ContactHooks/useMailSubmission';


export default function ContactUs() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState('');
    const [userName, setUserName] = useState('');
    const [success, setSuccess] = useState('');
    const [mailError, setMailError] = useState('');
    const [errorCount, setErrorCount] = useState(0);
    const [mailFail, setMailFail] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const SupportEmail = import.meta.env.VITE_SUPPORT_EMAIL;

    // Custom hook for form validation
    const isFormValid = useFormValidation({ userName, subject, message, contact });

    // Custom hook for mail submission logic
    const { sendMail, isSubmitting } = useMailSubmission({
        subject,
        message,
        contact,
        userName,
        setSuccess,
        setMailError,
        setErrorCount,
        setMailFail,
        setIsButtonVisible,
        setSubject,
        setMessage,
        setContact,
        setUserName,
    });

    return (
        <div className="contact_container">
            {/* FORM SECTION */}
            <form onSubmit={sendMail}>
                {/* TITLE SECTION */}
                <h2>Send us a Message</h2>
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
                    <input
                        name="title"
                        type="text"
                        id="title"
                        required
                        minLength={3}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="" // Leave blank!!
                    />
                    <label htmlFor="title" className="label_line">
                        Subject:
                    </label>
                </div>
                {/* END CLIENT SUBJECT */}
                {/* CLIENT MESSAGE */}
                <div className="entry_area">
                    <textarea
                        name="description"
                        id="description"
                        required
                        minLength={5}
                        cols={10}
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="" // Leave blank!!
                    />
                    <label htmlFor="description" className="label_line">
                        Message:
                    </label>
                </div>
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
    );
}