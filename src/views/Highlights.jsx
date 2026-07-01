import PageHero from "../components/ReusableComponents/HeroComponent/Hero";
import useScrollToTop from "../customHooks/useScrollToTop";

import '../components/HighlightComponents/highlights.css'

import Single from '../components/HighlightComponents/AdditionalBenefits/SingleBenefits'
import Married from '../components/HighlightComponents/AdditionalBenefits/MarriedBenefits'
import Glossary from '../components/HighlightComponents/AdditionalBenefits/Glossary'
import More from '../components/HighlightComponents/MoreBenefits/MoreBenefits'


export default function Hightlights() {
    useScrollToTop()

    return(
        <main>
            <PageHero Title1="Tax Highlights" />
            <h1 className="bbb">The Big Beautiful Bill Act: Additional Tax Benefits for Seniors & Disabled Veterans</h1>
            <div className="highlights">
                <h3>(4 July 2025)</h3>
                <p>Use the tables below to see how age affects your standard deduction under the Big Beautiful Bill Act.</p>
                <Single />
                <Married />
                <Glossary />
            </div>
            <span className="divide"></span>
            <h1 className="bbb">More Tax Tidbits for Seniors and Disabled Veterans</h1>
            <div className="highlights">
                <More />
            </div>
        </main>
    )
}