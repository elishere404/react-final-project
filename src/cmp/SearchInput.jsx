import React from 'react';

const SearchInput = ({ word, setWord, fetchDefinition, darkMode, inputError }) => {
  return (
    <>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && fetchDefinition()}
        className={`w-full p-4 rounded-2xl mb-2 font-bold ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'} ${inputError ? 'border-red-500' : ''} focus:outline-none focus:ring-2 focus:ring-purple-500`}
        placeholder="Search for any word..."
      />
      {inputError && <p className="text-red-500 mb-4">Whoops... cannot be empty</p>}
    </>
  );
};

export default SearchInput;
