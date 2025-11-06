import PageHero from "../components/ReusableComponents/HeroComponent/Hero";
import TermsAndConditions from "../components/PrivacyTermsUnsubscribe/TermsAndConditions";
import useScrollToTop from "../customHooks/useScrollToTop";

export default function Terms() {
  useScrollToTop();

  return (
    <main>
      <PageHero Title1="Terms and Conditions" />
      <TermsAndConditions />
    </main>
  );
}
