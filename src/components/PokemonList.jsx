import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  if (pokemonData.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No Pokémon found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
