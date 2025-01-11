
import './Pricing.css'

export default function Pricing({ service, cost}) {


    return (
        <>
        <div className="pricing_box">
            <h3>{ service }:</h3>
            <h3>${ cost }</h3>
        </div>
        </>
    )
}