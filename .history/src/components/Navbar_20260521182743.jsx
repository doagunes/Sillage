import "./Navbar.css";
import HeaderSvg from "./HeaderSvg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-svg-wrapper">
      <HeaderSvg className="navbar-svg" />

      <nav className="navbar-click-layer">
        <Link to="/about" className="nav-hotspot about-hotspot" />
        <Link to="/create" className="nav-hotspot create-hotspot" />
        <Link to="/archive" className="nav-hotspot archive-hotspot" />
      </nav>
    </header>
  );
}

export default Navbar;