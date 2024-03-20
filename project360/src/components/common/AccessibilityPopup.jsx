import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const AccessibilityPopup = ({ isOpen, onClose }) => {

  const closeIcon = (
    <svg fill="#b7572f" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4" stroke="#b7572f" strokeWidth="3"
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
    aria-labelledby="accessibility-modal"
  aria-describedby="accessibility-statement"
    >
      <div className="text-popups-container">

      <h1 className="text-popup-footer">Web Accessibility Statement</h1>

      </div>
    </Modal>
  );
};

export default AccessibilityPopup;
