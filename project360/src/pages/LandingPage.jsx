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
import { Link } from "react-router-dom";
import logo from "../../src/assets/atedo_gallery_sm.png";

const LandingPage = ({
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
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

      <Link to ="/gallery"><img src={logo} alt="link to gallery"/></Link>  

      <SecretLoginButton />

      <AreYouInterestedButton
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
        emails={emails}
        updateEmails={updateEmails}
      />
    </>
  );
};

export default LandingPage;
