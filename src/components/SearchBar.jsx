const SearchBar = ({ searchTerm, onSearchChange, selectedType, onTypeChange, types }) => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border rounded p-2 w-64"
        />
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="border rounded p-2 w-48"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SearchBar;
  