import {
  BackgroundVideo,
  WhatIs,
  ImpactStatement,
  CalendlyWidget,
  FAQDisplay,
  ThreeVideosRow,
  AreYouInterestedButton
} from "../components";
import "./LandingPage.css";

const LandingPage = ({ formOpen, setFormOpen, closeForm, emails, updateEmails }) => {
  return (
    <>
      <BackgroundVideo />

      <WhatIs />

      <ImpactStatement />

      <ThreeVideosRow />

      <CalendlyWidget />

      <FAQDisplay />

      <AreYouInterestedButton formOpen={formOpen} setFormOpen={setFormOpen} emails={emails} updateEmails={updateEmails} />
    
    </>
  );
};

export default LandingPage;
