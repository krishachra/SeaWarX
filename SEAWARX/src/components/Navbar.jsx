import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/navbar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <img src={logo} alt="SeaWarX Logo" className="logo" />
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/Howtoplay">How to Play</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;