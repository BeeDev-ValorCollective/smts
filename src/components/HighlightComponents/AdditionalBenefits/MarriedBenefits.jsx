


export default function MarriedBenefits() {

    return(
        <>
        <h2>For the Married folks</h2>
        <table>
            <tr>
                <th>Taxpayer 1 Age</th>
                <th>Taxpayer 2 Age</th>
                <th>Standard Deduction</th>
                <th>Additional Standard Deduction</th>
                <th>Seniors' Bonus Deduction</th>
                <th>Totals</th>
            </tr>
            <tr>
                <td>Under 65</td>
                <td>Under 65</td>
                <td>$31,500</td>
                <td>N/A</td>
                <td>N/A</td>
                <td></td>
            </tr>
            <tr>
                <td>Under 65</td>
                <td>65+</td>
                <td>$33,100</td>
                <td>N/A</td>
                <td>N/A</td>
                <td></td>
            </tr>
            <tr>
                <td>65+</td>
                <td>65+</td>
                <td>$31,500</td>
                <td>$3,200</td>
                <td>$12,000</td>
                <td>$46,700</td>
            </tr>
        </table>
        <strong><h3>Note:</h3></strong>
        <p>If your adjusted gross income (AGI) exceeds $150,000, you will begin losing the deductions.</p>
        </>
    )
}