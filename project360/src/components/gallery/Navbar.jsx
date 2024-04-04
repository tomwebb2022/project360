import { Link } from "react-router-dom"

import logo from "../../assets/atedo_logo.png"

export default function Navbar() {
    return(
        <div className="navbar"> 
        <img className="nav-logo" src={logo} alt="logo" />   
        <h1>Atedo 360 Gallery</h1>   
        <Link to="/" ><h2>Home</h2></Link>  
        </div>
    )
}