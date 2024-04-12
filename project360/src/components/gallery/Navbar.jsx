import { Link } from "react-router-dom"
import logo from "../../assets/atedo_gallery.png"
import logo2 from "../../assets/logo-camera.svg"


export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/">
                <img className="nav-logo" src={logo2} alt="logo" />
            </a>
            {/* {console.log(window.innerWidth)} */}

          
            <img className="nav-brand" src={logo} alt="logo" />
        

            <Link to="/">
                <h2>Home</h2>
            </Link>
        </div>
    );
}