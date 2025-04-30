// src/features/PokemonList/TypeBadge.jsx
const TypeBadge = ({ type }) => {
    const typeColors = {
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      grass: 'bg-green-500',
      ghost : 'bg-black',
      electric: 'bg-yellow-500',
      poison : 'bg-purple-500',
      bug : 'bg-green-700',
      normal: 'bg-gray-300',
      rock : 'bg-brown-500',
      steel : 'bg-gray-600',
    };
  
    return (
      <span
        className={`text-white text-[20px] px-2 py-1 rounded-full ${typeColors[type] || 'bg-gray-400'}`}
      >
        {type}
      </span>
    );
  };
  
  export default TypeBadge;
  