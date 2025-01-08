/**
 * Custom hook for validating form inputs.
 * @param {Object} fields - The input fields to validate.
 * @returns {boolean} isFormValid - Indicates if the form is valid.
**/


// IMPORT REACT MAGIC
import { useEffect, useState } from 'react';


export default function useFormValidation({ userName, subject, message, contact }) {
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        // Validate inputs
        const nameValid = userName.length >= 3;
        const subjectValid = subject.length >= 3;
        const messageValid = message.length >= 5;
        const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contact);

        // Update form validity
        setIsFormValid(nameValid && subjectValid && messageValid && emailValid);
    }, [userName, subject, message, contact]);

    return isFormValid;
}
