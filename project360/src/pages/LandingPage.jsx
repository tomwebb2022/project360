import {
  BackgroundVideo,
  Hero,
  WhatIs,
  ImpactStatement,
  CalendlyWidget,
  FAQDisplay,
  ThreeVideosRow,
  SecretLoginButton,
  AreYouInterestedButton,
} from "../components";
import "./LandingPage.css";

const LandingPage = ({
  formOpen,
  setFormOpen,
  closeForm,
  emails,
  updateEmails,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <>
      {/* <BackgroundVideo /> */}

      <Hero />

      <WhatIs />

      <ImpactStatement />

      <ThreeVideosRow />

      <CalendlyWidget />

      <FAQDisplay />

      <SecretLoginButton />

      <AreYouInterestedButton
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        emails={emails}
        updateEmails={updateEmails}
      />
    </>
  );
};

export default LandingPage;
