import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const PrivacyPopup = ({ isOpen, onClose }) => {

  const closeIcon = (
    <svg fill="#000" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4" stroke="#000" strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <Modal
    open={isOpen}
    onClose={onClose}
    center
    closeIcon={closeIcon}
    classNames={{
      overlay: 'customOverlay',
      modal: 'customModal',
    }}
    aria-labelledby="design-development-team-modal"
  aria-describedby="info-about-design-development-team"
    >
      <div className="text-popups-container">

      <h2 className="title-popup-footer">Privacy Policy</h2>

      <p className="text-popup-footer">
      If you subscribe to our newsletter, we will use your email address to send you updates about our products and services. We will never share your name and email address with third parties.
      </p>

      </div>
    </Modal>
  );
};

export default PrivacyPopup;
