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
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Projct360Logo} alt="logo link to home" />
        </Link>
      </div>
      <div className="title-container">
        <h1 className="navbar-title">Gallery</h1>
      </div>
      <div className="right-side-container">
        {isLoggedIn && ( // If logged in, display burger menu
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
          </div>

          {!isLoggedIn && (
            <div className="desktop-menu-content-logged-out">
              <Link to="/login" className="login-link">
                <button className="submit-button">Login</button>
              </Link>
            </div>
          )}
      </div>
    </nav>
  );
}
