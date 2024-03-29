import EmailCollectionPopUpForm from "./EmailCollectionPopUpForm";

const AreYouInterestedButton = ({
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

      <EmailCollectionPopUpForm
        isOpen={formOpen}
        onClose={toggleForm}
        emails={emails}
        updateEmails={updateEmails}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
    </div>
  );
};

export default AreYouInterestedButton;
