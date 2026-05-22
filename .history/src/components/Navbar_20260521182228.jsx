import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-svg-wrapper">
      <HeaderSvg className="navbar-svg" />

      <nav className="navbar-click-layer">
        <a href="/about" className="nav-hotspot about-hotspot" />
        <a href="/create" className="nav-hotspot create-hotspot" />
        <a href="/archive" className="nav-hotspot archive-hotspot" />
      </nav>
    </header>
  );
}
  
  export default Navbar;