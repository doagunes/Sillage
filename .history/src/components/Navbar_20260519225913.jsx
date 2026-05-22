import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header className="navbar">
        <Link to="/" className="logo">sillage</Link>
  
        <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/about">About</Link>
          <a>Memory Archive</a>
        </nav>
  
        <div className="nav-icons">
          <span>♙</span>
          <span>▢</span>
          <span>◎</span>
        </div>
      </header>
    );
  }
  
  export default Navbar;