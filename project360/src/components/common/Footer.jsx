import "./Footer.css";
import { PrivacyPopup, TeamPopup, AccessibilityPopup } from "./index";

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
          <div className="contact-icons">
            <p>facebook</p>
            <p>email</p>
            </div>
        </div>

        <div className="calendly-link-container">
          <p>Book a call</p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Middle of the footer - links to popups */}
      <div className="middle-footer-container">
        <div className="footer-popup-button-container" id="team-button">
          <p
            type="button"
            onClick={toggleTeamModal}
            className="footer-popup-button"
          >
            Design & Development Team
          </p>
        </div>

        <div className="footer-popup-button-container" id="privacy-button">
          <p
            type="button"
            onClick={togglePrivacyModal}
            className="footer-popup-button"
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
            className="footer-popup-button"
          >
            Web Accessibility Statement
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom of the footer - copyright info */}
      <div className="footer-copyright-bottom">
        <p>© 2024 ATEDO. </p>
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
