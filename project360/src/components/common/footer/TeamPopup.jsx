import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const TeamPopup = ({ isOpen, onClose }) => {

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

      <h1 className="title-popup-footer">Design & Development Team</h1>
      <h2 className="subtitle-popup-footer">Anastasia Adamoudi, Sara Thampi, Thomas Vincent and Tom Webb</h2>
      </div>
    </Modal>
  );
};

export default TeamPopup;
