import GalleryUploadForm from "../components/dashboard/GalleryUploadForm";

const UploadButton = ({
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
  emails,
  updateEmails,
}) => {
  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="interested-button-container">
      <div className="text-link" onClick={toggleForm}>
        <p className="text-link">Are you interested?</p>
      </div>

      <GalleryUploadForm
        isOpen={formOpen}
        onClose={toggleForm}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
    </div>
  );
};

export default AreYouInterestedButton;
