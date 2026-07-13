import { useEffect, useState } from 'react'

export default function useUnsubFormValidation({ userName, subject, contact, phone }) {

    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        const nameValid = userName.length >= 3
        const subjectValid = subject.length >= 3
        const phoneValid = (subject === "Phone" || subject === "Email and Phone") ? phone.length >= 10 : true
        const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contact)

        setIsFormValid(nameValid && subjectValid && phoneValid && emailValid)
    }, [userName, subject, phone, contact])

    return isFormValid
}