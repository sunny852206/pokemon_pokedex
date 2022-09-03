import { useState } from "react";
import "../styles/search.css";
import Axios from "axios";

function Search() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: response.data.species.name,
          img: response.data.sprites.other.home.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        console.log(pokemon.type);
        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input
          type="text"
          onChange={(event) => {
            //set pokemon name to event target value(user input)
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}> Search Pokemon</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1>Please choose a Pokemon</h1>
        ) : (
          <>
            <h1>{pokemon.name} </h1>
            <img src={pokemon.img} />
            <h3>Type: {pokemon.type} </h3>
            <h3>HP: {pokemon.hp} </h3>
            <h3>Attack: {pokemon.attack} </h3>
            <h3>Defense: {pokemon.defense} </h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
