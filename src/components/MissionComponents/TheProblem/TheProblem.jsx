/**
 * TheProblem Component
 * 
 * This component highlights the challenges faced by individuals, particularly seniors and veterans, in harsh winter conditions when accessing in-person tax services. 
 * It describes a scenario where someone is injured due to winter weather and emphasizes the need for mobile tax services.
 * 
 * Dependencies:
 * - CSS: './theProblem.css'
 * - Icons:
 *   - CarCrash: '../../../assets/images/car_fire_icon.png'
 *   - WalkingWithCane: '../../../assets/images/walking_cane_icon.png'
 *   - Hospital: '../../../assets/images/hospital_icon.png'
 */

// IMPORT STYLE
import './theProblem.css'

// IMPORT ICONS
import CarCrash from '../../../assets/images/car_fire_icon.png'
import WalkingWithCane from '../../../assets/images/walking_cane_icon.png'
import Hospital from '../../../assets/images/hospital_icon.png'

export default function TheProblem() {

    return(
        <div className='the_problem'>
            <hr />
            <h2>The Problem</h2>
            <p>
                Winter can be unpredictable. Imagine this scenario: On February 10th, you have an appointment at a local tax office. The night before, freezing rain coats the roads. While driving to your appointment, you hit black ice, lose control of your vehicle, and strike a tree. You’re injured and taken to the ER, spending hours there before being released. Now, you’re recovering with a broken leg and a crutch, all for a tax appointment.
            </p>
            <div className="problem_images">
                <img src={ CarCrash } alt="car crash icon" />
                <img src={ Hospital } alt="hospital icon" />
                <img src={ WalkingWithCane } alt="walking with a cane icon" />
            </div>
            <p>
                For seniors and veterans, harsh winter conditions add unnecessary risk. Many drive, use rideshares, or even walk to brick-and-mortar tax offices to file their returns. Why endure this stress and danger when the tax office can come to you?
            </p>
            <hr />
        </div>
    );
};