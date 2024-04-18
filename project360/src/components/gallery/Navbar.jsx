import { Link } from "react-router-dom";
import { Projct360Logo } from "../../assets";
import UploadButton from "../dashboard/UploadButton";
import "./Navbar.css";

export default function Navbar({
  burgerMenuOpen,
  setBurgerMenuOpen,
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
  isLoggedIn,
  logout,
}) {
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-side-container">
        <Link to="/">
          <img className="navbar-logo" src={Projct360Logo} alt="logo link to home" />
        </Link>
      </div>

      <div className="right-side-container">

      {/* Burger menu button */}
        {isLoggedIn && ( 
          <div
            className={`burger-menu ${burgerMenuOpen ? "open" : ""}`}
            onClick={toggleBurgerMenu}
          >
            <div className="bar" id="bar1"></div>
            <div className="bar" id="bar2"></div>
            <div className="bar" id="bar3"></div>
          </div>
        )}

        {/* Burger menu content */}
        {burgerMenuOpen && (
          <div className="burger-menu-content">
            <UploadButton
              formOpen={formOpen}
              setFormOpen={setFormOpen}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />

            <Link to="/dashboard" className="dashboard-link">
              <button className="submit-button">Dashboard</button>
            </Link>

            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        )}

        {/* Desktop menu content */}
        <div className="desktop-menu-content">
          {isLoggedIn && (
            <div className="desktop-menu-content-logged-in">
            <div id="upload-button-container">
              <UploadButton
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                formSubmitted={formSubmitted}
                setFormSubmitted={setFormSubmitted}
                className="navbar-button"
              />
            </div>
            <div id="dashboard-button-container">
              <Link to="/dashboard" className="dashboard-link navbar-button">
                <button className="submit-button">Dashboard</button>
              </Link>
            </div>
            <div id="logout-button-container">
              <button className="logout-button navbar-button" id="navbar-logout" onClick={logout}>
                Logout
              </button>
              </div>
            </div>
          )}
          </div>

          {!isLoggedIn && (
            <div className="login-button">
              <Link to="/login" className="login-link">
                <button className="submit-button">Login</button>
              </Link>
            </div>
          )}
      </div>
    </nav>
  );
}
