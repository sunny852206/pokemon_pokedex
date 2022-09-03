import { computeHeadingLevel } from "@testing-library/react";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import PokemonThumbnail from "./components/PokemonThumbnail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset = 0"
  );

  // get pokemons on load
  const getAllPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      // loop through each pokemon
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const data = await response.json();

        // get currentlist and push new data(pokemon) to this list
        // same as allPokemons.push(data)
        await console.log(data);

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    await console.log(data.results);
  };

  // same as componentDidmount
  // call funtion on load
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <Router>
        <NavBar />

        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemon, index) => (
              <PokemonThumbnail
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            Load more
          </button>
        </div>
      </Router>
    </div>
  );
}

export default App;
