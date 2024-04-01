import GalleryUploadForm from "../components/dashboard/GalleryUploadForm";

const UploadButton = ({
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
}) => {
  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="interested-button-container">
      <div className="text-link" onClick={toggleForm}>
        <p className="text-link">Upload a Video</p>
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

export default UploadButton;
