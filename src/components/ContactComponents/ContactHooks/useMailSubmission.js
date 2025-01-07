/**
 * Custom hook for handling mail submission.
 * @param {Object} params - Parameters for the hook.
 * @returns {Object} { sendMail, isSubmitting } - The mail submission handler and submission status.
*/


// IMPORT REACT MAGIC
import { useState } from 'react';
import axios from 'axios';


export default function useMailSubmission({
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
}) {

    // Get URL for fetching
    const EmailURL = import.meta.env.VITE_EMAIL_URL;
    // STATES
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendMail = async (e) => {
        e.preventDefault();

        // Start submitting
        setIsSubmitting(true);
        // Hide button during submission
        setIsButtonVisible(false);

        try {
            // Make Axios POST request
            const response = await axios.post(EmailURL, {
                subject,
                message,
                contact,
                userName,
            });

            // Reset form validity state
            if (response.status === 200) {
                // If successful, set success message
                setSuccess('Your message was successfully sent!');
                // Clear any existing error messages
                setMailError('');
                // Reset the error count
                setErrorCount(0);
                // Clear any mail failure
                setMailFail(false);
                // Clear Form
                setSubject('');
                setMessage('');
                setContact('');
                setUserName('');

                // Redirect to the home page after 4 seconds
                setTimeout(() => {
                    window.location.href = '/';
                }, 4000);
            } else {
                handleFailure();
            }
        } catch (error) {
            console.error('Error sending mail:', error);
            handleFailure();
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFailure = () => {
        setMailError('An error has occurred, please try again.');
        const newErrorCount = (prev) => prev + 1;
        setErrorCount(newErrorCount);

        if (newErrorCount < 3) {
            setIsButtonVisible(true);
        } else {
            setMailFail(true);
        }

        // Clear success messages
        setSuccess('');
    };

    return { sendMail, isSubmitting };
}