import { useEffect, useState } from "react";
import { getPokemonList, getPokemonDetails } from "./services/api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const types = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic",
    "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPokemonList();
        const promises = list.map((pokemon) => getPokemonDetails(pokemon.url));
        const results = await Promise.all(promises);

        const formattedData = results.map((poke) => ({
          id: poke.id,
          name: poke.name,
          types: poke.types.map((type) => type.type.name),
          image: poke.sprites.front_default,
        }));

        setPokemonData(formattedData);
        setFilteredData(formattedData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = pokemonData;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedType, pokemonData]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading Pokémon...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Failed to load Pokémon. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        types={types}
      />
      <PokemonList pokemonData={filteredData} />
    </div>
  );
}

export default App;
