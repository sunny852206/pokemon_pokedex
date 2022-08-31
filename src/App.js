import { computeHeadingLevel } from "@testing-library/react";
import { useState, useEffect } from "react";
function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
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
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  // same as componentDidmount
  // call funtion on load
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1> Pokédex </h1>
      <div className="pokemon-container">
        <div className="all-container"></div>
        <button className="load-more"> Load more</button>
      </div>
    </div>
  );
}

export default App;
