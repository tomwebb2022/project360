import {
  BackgroundVideo,
  WhatIs,
  ImpactStatement,
  CalendlyWidget,
  FAQDisplay,
  ThreeVideosRow,
  SecretLoginButton,
  AreYouInterestedButton
} from "../components";
import "./LandingPage.css";

const LandingPage = ({ formOpen, setFormOpen, closeForm, emails, updateEmails, isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <BackgroundVideo />

      <WhatIs />

      <ImpactStatement />

      <ThreeVideosRow />

      <CalendlyWidget />

      <FAQDisplay />

      <SecretLoginButton formOpen={formOpen} setFormOpen={setFormOpen}/>

      <AreYouInterestedButton formOpen={formOpen} setFormOpen={setFormOpen} emails={emails} updateEmails={updateEmails} />
    
    </>
  );
};

export default LandingPage;
