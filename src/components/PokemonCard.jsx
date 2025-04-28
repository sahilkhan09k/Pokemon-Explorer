const PokemonCard = ({ pokemon }) => {
    return (
      <div className="bg-white cursor-pointer rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform ">
        <img src={pokemon.image} alt={pokemon.name} className="w-50 h-50" />
        <h2 className="mt-2 font-bold capitalize text-[30px]">{pokemon.name}</h2>
        <p className="text-gray-500 text-[18px]">ID: {pokemon.id}</p>
        <div className="flex gap-2 mt-4">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="text-[20px] bg-gray-200 px-2 py-1 rounded-full capitalize"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default PokemonCard;
  