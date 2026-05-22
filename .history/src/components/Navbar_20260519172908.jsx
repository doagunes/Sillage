import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header className="navbar">
        <div className="logo">sillage</div>
  
        <nav className="nav-links">
        <Link to="/about">About</Link>
          <a>Create Your Own Fragrance</a>
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