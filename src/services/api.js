import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async () => {
  const response = await axios.get(`${API_URL}/pokemon?limit=150`);
  return response.data.results;
};

export const getPokemonDetails = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
