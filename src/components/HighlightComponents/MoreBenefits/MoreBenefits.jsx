import { useState, useEffect } from 'react'

// Import Json data
const TidbitData = import.meta.env.VITE_TIDBITS_API


export default function MoreBenefits() {

    const [tidbits, setTidbits] = useState([])
    const [jsonError, setJsonError] = useState(null)

    // useEffect(() => {
    //     fetch(import.meta.env.VITE_TIDBITS_API)
    //         .then(res => res.json())
    //         .then(data => console.log('JSON loaded:', data))
    //         .catch(err => console.error('Fetch error:', err))
    // })
    useEffect(() => {
        fetch(TidbitData)
            .then((res) => {
                if(!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
            })
            .then((data) => {
                const activeTidbits = data.filter((tidbits) => tidbits.isActive)
                setTidbits(activeTidbits)
            })
            .catch((err) => {
                setJsonError(err.message)
            })
    }, [])

    if (jsonError) {
        return <p>Error loading tidbits: {jsonError}</p>
    }

    return(
        <>
        {tidbits.map((tidbit) => {
            return (
                <div className="bits">
                    <h2>{tidbit.tidbit_title}</h2>
                    <p>{tidbit.tidbit_desc}</p>
                </div>
            )
        })}
        </>
    )
}