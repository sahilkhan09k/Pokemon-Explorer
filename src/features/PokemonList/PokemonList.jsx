// src/features/PokemonList/PokemonList.jsx
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemonList, fetchPokemonDetails } from './pokemonAPI';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const loadMore = async () => {
    setLoading(true);
    try {
      const list = await fetchPokemonList(offset, 20);
      const details = await Promise.all(list.map(p => fetchPokemonDetails(p.url)));
      const simplified = details.map(p => ({
        id : p.id,
        name: p.name,
        image: p.sprites.front_default,
        types: p.types.map(t => t.type.name),
      }));
      setPokemonData(prev => [...prev, ...simplified]);
      setOffset(prev => prev + 20);
    } catch (error) {
      console.error("Failed to load Pokémon", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemonData.map((pokemon, idx) => (
        <PokemonCard key={`${pokemon.name}-${idx}`} pokemon={pokemon} />
      ))}
      {loading && <p className="col-span-full text-center">Loading...</p>}
      {!loading && (
        <button onClick={loadMore} className="col-span-full mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Load More
        </button>
      )}
    </main>
  );
};

export default PokemonList;
