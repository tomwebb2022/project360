import EmailCollectionPopUpForm from './EmailCollectionPopUpForm';

const AreYouInterestedButton = ({ formOpen, setFormOpen, emails, updateEmails }) => {
  
  const toggleForm = () => {
    setFormOpen(!formOpen);
  }

  return (
    <div className="interested-button-container">
    <div
    className="interested-button"
    onClick={toggleForm}
    >
        <p className="interested-button-text">Are you interested?</p>
        
    </div>
  
    <EmailCollectionPopUpForm isOpen={formOpen} onClose={toggleForm} emails={emails} updateEmails={updateEmails} />
    </div>
  )
}

export default AreYouInterestedButton;
