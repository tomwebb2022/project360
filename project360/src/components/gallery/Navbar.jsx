import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="navbar">    
        <h1>Atedo 360</h1>   
        <Link to="/" ><h2>Home</h2></Link>  
        </div>
    )
}