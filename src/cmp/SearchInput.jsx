import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ word, setWord, fetchDefinition, darkMode, inputError }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && fetchDefinition()}
        className={`w-full p-4 pr-12 rounded-2xl border-2 focus:outline-none 
          ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'}
          ${inputError ? 'border-red-500' : 'focus:border-purple-500'}`}
        placeholder="Search for any word..."
      />
      <button 
        onClick={fetchDefinition} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-500"
      >
        <SearchIcon />
      </button>
      {inputError && <p className="text-red-500 mt-1">Whoops... cannot be empty</p>}
    </div>
  );
};

export default SearchInput;
