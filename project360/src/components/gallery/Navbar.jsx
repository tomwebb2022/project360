import { Link } from "react-router-dom"

import logo from "../../assets/atedo_gallery.png"
import logo2 from "../../assets/logo-camera.svg"
import logosm from "../../assets/atedo_gallery_sm.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/">
                <img className="nav-logo" src={logo2} alt="logo" />
            </a>
            {console.log(window.innerWidth)}

            {window.innerWidth > 1000 ? (
                <img className="nav-brand" src={logo} alt="logo" />
            ) : (
                <img className="nav-brand" src={logosm} alt="logo" />
            )}

            <Link to="/">
                <h2>Home</h2>
            </Link>
        </div>
    );
}