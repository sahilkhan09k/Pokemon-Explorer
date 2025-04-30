// src/features/PokemonList/PokemonImage.jsx
const PokemonImage = ({ src, name }) => (
    <img
      src={src}
      alt={name}
      loading="lazy"
      className="w-50 h-50 object-contain mx-auto"
    />
  );
  
  export default PokemonImage;
  