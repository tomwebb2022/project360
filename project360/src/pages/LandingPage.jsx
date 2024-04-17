import {
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
import "../App.css";
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

      <Hero />

      <WhatIs />

      <ImpactStatement />

      <ThreeVideosRow />

      <CalendlyWidget />

      <FAQDisplay />

      <Link to ="/gallery" alt="link to gallery">
        <h2 className="gallery-like-link">Projct360 Gallery</h2>
      </Link>  

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
