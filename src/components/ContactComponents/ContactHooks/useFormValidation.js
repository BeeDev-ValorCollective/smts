/**
 * Custom Hook for Validating Form Inputs
 * 
 * This hook is used to validate the input fields in a contact form.
 * It checks if the input fields meet certain criteria, and returns a boolean 
 * indicating whether the form is valid for submission.
 * 
 * Validation Criteria:
 * - **Name**: Must be at least 3 characters long.
 * - **Subject**: Must be at least 3 characters long.
 * - **Message**: Must be at least 5 characters long.
 * - **Email**: Must match the standard email pattern (e.g., `someone@example.com`).
 * 
 * Returns:
 * - **isFormValid** (`boolean`): A state value that indicates whether the form is valid.
 *   - `true`: All input fields are valid and the form is ready for submission.
 *   - `false`: One or more input fields are invalid.
 * 
 * Params:
 * - **fields** (`object`): An object containing the form fields to be validated.
 *   - **userName** (`string`): The user's name entered in the form.
 *   - **subject** (`string`): The subject of the contact message.
 *   - **message** (`string`): The message content entered by the user.
 *   - **contact** (`string`): The user's email address.
 * 
 * Usage:
 * ```jsx
 * const isFormValid = useFormValidation({ userName, subject, message, contact });
 * ```
 * This hook will return a boolean value based on the validity of the form inputs.
 */

// IMPORT REACT MAGIC
import { useEffect, useState } from 'react';

export default function useFormValidation({ userName, subject, message, contact }) {
    
    // STATE
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
