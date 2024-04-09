import GalleryUploadForm from "./GalleryUploadForm";

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
        <button className="submit-button">Upload a Video</button>
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
