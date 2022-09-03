import React from "react";
import Pokedex from "../components/Pokedex";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        Home: Pokedex
        <Pokedex />
      </div>
    </div>
  );
}

export default Home;
