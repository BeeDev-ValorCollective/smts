import PrivacyPolicy from "../components/PrivacyTermsUnsubscribe/PrivacyPolicy";
import PageHero from "../components/ReusableComponents/HeroComponent/Hero";
import useScrollToTop from "../customHooks/useScrollToTop";

export default function Privacy() {
  useScrollToTop();

  return (
    <main>
      <PageHero Title1="Privacy Policy" />
      <PrivacyPolicy />
    </main>
  );
}
