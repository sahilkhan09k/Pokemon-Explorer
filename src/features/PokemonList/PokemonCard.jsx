// src/features/PokemonList/PokemonCard.jsx
import PokemonImage from './PokemonImage';
import TypeBadge from './TypeBadge';

const PokemonCard = ({ pokemon }) => {

    console.log(pokemon, "pokemon");
    console.log(pokemon.id, "pokemon.image");
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:scale-105 transition-transform">
      <PokemonImage src={pokemon.image} name={pokemon.name} />
      <h2 className="mt-2 font-bold text-lg capitalize">{pokemon.name}</h2>
      <h2 className="mt-2 font-bold text-lg">ID : {pokemon.id}</h2>
      
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
