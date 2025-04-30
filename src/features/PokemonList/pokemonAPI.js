export const fetchPokemonList = async (offset = 0, limit = 20) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();
    return data.results;
  };
  
  export const fetchPokemonDetails = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };