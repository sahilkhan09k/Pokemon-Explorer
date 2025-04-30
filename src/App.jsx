// src/App.jsx
import PokemonList from './features/PokemonList/PokemonList.jsx';
import Header from './features/Header/Header.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <PokemonList />
    </div>
  );
};

export default App;
