import LoginForm from './LoginForm';

const SecretLoginButton = ({ formOpen, setFormOpen, isLoggedIn, setIsLoggedIn }) => {
  const toggleForm = () => {
    setFormOpen(!formOpen);
  }

  return (
    <div className="interested-button-container">
    <div
    className="text-link"
    onClick={toggleForm}
    >
        <p className="text-link">Are you interested?</p>
        
    </div>
  
    <LoginForm isOpen={formOpen} onClose={toggleForm} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default SecretLoginButton;
