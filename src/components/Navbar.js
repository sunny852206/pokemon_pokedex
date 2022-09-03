import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <h1> Pokédex </h1>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/search"> Search </Link>
        <button onClick={toggleNavbar}></button>
      </div>
    </div>
  );
}

export default NavBar;
