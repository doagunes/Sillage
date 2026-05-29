import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/navbar/sillage-logo.svg";
import userIcon from "../assets/navbar/user-icon.svg";
import bagIcon from "../assets/navbar/bag-icon.png";
import instagramIcon from "../assets/navbar/instagram-icon.png";

function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="sillage" />
      </Link>

      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/create">Create Your Own Fragrance</Link>
        <Link to="/archive">Memory Archive</Link>
      </nav>

      <div className="nav-icons">
        <Link to={isLoggedIn ? "/account" : "/signup"} className="nav-icon-link">
          <img src={userIcon} alt="Account" />
        </Link>

        <Link to="/cart" className="nav-icon-link">
          <img src={bagIcon} alt="Cart" />
        </Link>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="nav-icon-link"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;