import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useUnsubMailSubmission({
    subject,
    contact,
    message,
    userName,
    phone,
    setSuccess,
    setMailError,
    setErrorCount,
    setMailFail,
    setIsButtonVisible,
    setSubject,
    setContact,
    setMessage,
    setUserName,
    setPhone,
}) {

    // const EmailURL = import.meta.env.VITE_EMAIL_URL + '/sendContactMail'
    const EmailURL = import.meta.env.VITE_EMAIL_URL + '/sendUnsubMail'

    const [isSubmitting, setIsSubmitting] = useState(false)


    const sendMail = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setIsButtonVisible(false)

        try{
            const res = await axios.post(EmailURL, {
                subject,
                message,
                contact,
                userName,
                phone,
            })
            if (res.status === 200) {
                setSuccess('Your information has been added to our list!')
                setMailError('')
                setErrorCount(0)
                setMailFail(false)
                setSubject('')
                setMessage('')
                setContact('')
                setUserName('')
                setPhone('')
                setMessage('')

                setTimeout(() => {
                    window.location.href = '/'
                }, 4000)
            } else {
                handleFailure()
            }
        } catch (err) {
            console.error('Error sending mail:', err)
            handleFailure()
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleFailure = () => {
        setMailError('An error has occurred, please try again')
        const newErrorCount = (prev) => prev + 1
        setErrorCount(newErrorCount)

        if (newErrorCount < 3) {
            setIsButtonVisible(true)
        } else {
            setMailFail(true)
        }
        setSuccess('')
    }
    return { sendMail, isSubmitting }
}

