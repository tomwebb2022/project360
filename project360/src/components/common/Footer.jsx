import './Footer.css';
import TeamPopup from "./TeamPopup";
import AccessibilityPopup from "./AccessibilityPopup";

const Footer = ({ modalState, setModalState }) => {

  const { teamOpen, accessibilityOpen } = modalState;

  const toggleTeamModal = () => {
    setModalState({
      teamOpen: !teamOpen,
      accessibilityOpen
    });
  };

  const toggleAccessibilityModal = () => {
    setModalState({
      teamOpen,
      accessibilityOpen: !accessibilityOpen,
    });
  };

  return (
    <div className="footer-container">
      <div className="left-side-header-container">
        <p>social media links</p>
      </div>

        <div className="right-side-footer-container">
        <div className="footer-popup-button-container" id="team-button">
        <p>© 2024 ATEDO. - </p>
          <p type="button" onClick={toggleTeamModal} className="footer-popup-button">
            Design & Development Team
          </p>
        </div>

        <div className="footer-popup-button-container" id="accessibility-button">
          <p type="button" onClick={toggleAccessibilityModal} className="footer-popup-button">
            Web Accessibility Statement
          </p>
        </div>

        <div className="menu-container">
          <TeamPopup isOpen={teamOpen} onClose={toggleTeamModal} />
          <AccessibilityPopup isOpen={accessibilityOpen} onClose={toggleAccessibilityModal} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
