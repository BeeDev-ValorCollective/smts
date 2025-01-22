/**
 * Custom Hook for Handling Mail Submission
 * 
 * This hook is responsible for submitting a contact form's data to a backend service via an HTTP POST request.
 * It handles the submission process, manages form states, and provides feedback on the submission status.
 * 
 * Returns:
 * - **sendMail** (`function`): A function that handles the mail submission process when the form is submitted.
 * - **isSubmitting** (`boolean`): A state indicating whether the form is currently being submitted.
 *   - `true`: The form is in the process of being submitted.
 *   - `false`: The form is not being submitted.
 * 
 * Params:
 * - **params** (`object`): An object containing the following values:
 *   - **subject** (`string`): The subject of the message to be sent.
 *   - **message** (`string`): The content of the message to be sent.
 *   - **contact** (`string`): The user's email address.
 *   - **userName** (`string`): The user's name.
 *   - **setSuccess** (`function`): A setter function to update the success state.
 *   - **setMailError** (`function`): A setter function to update the error message state.
 *   - **setErrorCount** (`function`): A setter function to update the error count state.
 *   - **setMailFail** (`function`): A setter function to update the mail failure state.
 *   - **setIsButtonVisible** (`function`): A setter function to control the visibility of the submit button.
 *   - **setSubject** (`function`): A setter function to reset the subject field.
 *   - **setMessage** (`function`): A setter function to reset the message field.
 *   - **setContact** (`function`): A setter function to reset the contact field.
 *   - **setUserName** (`function`): A setter function to reset the userName field.
 * 
 * Usage:
 * ```jsx
 * const { sendMail, isSubmitting } = useMailSubmission({
 *   subject,
 *   message,
 *   contact,
 *   userName,
 *   setSuccess,
 *   setMailError,
 *   setErrorCount,
 *   setMailFail,
 *   setIsButtonVisible,
 *   setSubject,
 *   setMessage,
 *   setContact,
 *   setUserName,
 * });
 * ```
 * 
 * When the user submits the form, the `sendMail` function is invoked. It sends the data to a backend API and provides feedback
 * on success or failure. If the submission is successful, a success message is displayed and the form is cleared. If the submission
 * fails, an error message is shown and the error count is incremented. After three failures, a mail failure state is triggered.
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
};