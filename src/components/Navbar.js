import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <h1> Pokédex </h1>
      <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default NavBar;
