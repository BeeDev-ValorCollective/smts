


export default function SingleBenefits() {

    return(
        <>
        <h2>For the Single folks</h2>
        <table>
            <tr>
                <th>Age</th>
                <th>Standard Deduction</th>
                <th>Additional Standard Deduction</th>
                <th>Seniors' Bonus Deduction</th>
                <th>Totals</th>
                <th>AGI Max</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td>Under 65</td>
                <td>%15,750</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>$15,700</td>
                <td>$75,000</td>
                <td>No additional senior deductions</td>
            </tr>
            <tr>
                <td>65+</td>
                <td>$15,750</td>
                <td>$2,000</td>
                <td>$6,000</td>
                <td>$23,700</td>
                <td>$75,000</td>
                <td>Can you itemize?</td>
            </tr>
        </table>
        </>
    )
}