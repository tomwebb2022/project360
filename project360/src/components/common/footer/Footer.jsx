import "./Footer.css";
import { PrivacyPopup, TeamPopup, AccessibilityPopup } from "../index";
import { instagramIcon, youtubeIcon } from "../../../assets";
import { Link } from "react-router-dom";

const Footer = ({ modalState, setModalState }) => {
  const { privacyOpen, teamOpen, accessibilityOpen } = modalState;

  const togglePrivacyModal = () => {
    setModalState({
      privacyOpen: !privacyOpen,
      teamOpen,
      accessibilityOpen,
    });
  };

  const toggleTeamModal = () => {
    setModalState({
      teamOpen: !teamOpen,
      privacyOpen,
      accessibilityOpen,
    });
  };

  const toggleAccessibilityModal = () => {
    setModalState({
      teamOpen,
      privacyOpen,
      accessibilityOpen: !accessibilityOpen,
    });
  };

  return (
    <div className="footer-container">
      {/* Top of the footer - contact links */}
      <div className="footer-contact-top">
      <div className="footer-contact-container">
      <div>
          <p>Find us on:</p>
        </div>
          <div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              alt="link to Instagram profile"
            >
              <img src={instagramIcon} alt="Instagram" className="contact-icon" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              alt="link to Youtube channel"
            >
              <img src={youtubeIcon} alt="Youtube" className="contact-icon" />
            </a>
            </div>
        </div>

        <div className="calendly-link-container">
          <a href="https://calendly.com/anastasiaadamoudi/30min?month=2024-03" target="_blank" rel="noreferrer">
          <button className="submit-button">Book a meeting</button>
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Middle of the footer - links to popups */}
      <div className="middle-footer-container">
        <div className="footer-popup-button-container" id="team-button">
          <p
            type="button"
            onClick={toggleTeamModal}
            className="text-link"
          >
            Design & Development Team
          </p>
        </div>

        <div className="footer-popup-button-container" id="privacy-button">
          <p
            type="button"
            onClick={togglePrivacyModal}
            className="text-link"
          >
            Privacy Policy
          </p>
        </div>

        <div
          className="footer-popup-button-container"
          id="accessibility-button"
        >
          <p
            type="button"
            onClick={toggleAccessibilityModal}
            className="text-link"
          >
            Web Accessibility Statement
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom of the footer - copyright info */}
      <div className="footer-copyright-bottom">
        <p>© 2024 Projct360 </p>
      </div>

      {/* Popups */}
      <div className="menu-container">
        <PrivacyPopup isOpen={privacyOpen} onClose={togglePrivacyModal} />
        <TeamPopup isOpen={teamOpen} onClose={toggleTeamModal} />
        <AccessibilityPopup
          isOpen={accessibilityOpen}
          onClose={toggleAccessibilityModal}
        />
      </div>
    </div>
  );
};

export default Footer;
