import { Link } from 'react-router-dom';

const SecretLoginButton = () => {
  return (
    <div className="secret-login-button-container">
      <Link to="/login" className="text-link">
        <p className="text-link">Admin login</p>
      </Link>
    </div>
  );
}

export default SecretLoginButton;
