import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header className="navbar">
        <Link to="/" className="logo">sillage</Link>
  
        <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/create">Create Your Own Fragnance</Link>
        <Link to="/archive">Memory Archive</Link>
          <a></a>
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