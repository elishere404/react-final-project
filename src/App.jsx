import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './cmp/Spinner';
import Header from './cmp/Header';
import SearchInput from './cmp/SearchInput';
import DefinitionDisplay from './cmp/DefinitionDisplay';

function App() {
  const [word, setWord] = useState('chess');
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [isPlaying, setIsPlaying] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchDefinition = async () => {
    if (!word) {
      setInputError(true);
      setError({ emoji: "😡", title: "No Definitions Found", message: "FILL THAT INPUT BAR!!!" });
      setDefinition(null);
      return;
    }
    setInputError(false);
    setLoading(true);
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (response.data.title === "No Definitions Found") {
        setError({
          emoji: "😕",
          title: response.data.title,
          message: response.data.message,
        });
        setDefinition(null);
      } else {
        setDefinition(response.data[0]);
        setError(null);
      }
    } catch (error) {
      setError({
        emoji: "👾",
        title: "Error",
        message: "There was an error.",
      });
      setDefinition(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDefinition(); }, []);

  const handlePlayAudio = (audioUrl) => {
    if (!isPlaying) {
      setIsPlaying(true);
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => setIsPlaying(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} style={{ fontFamily }}>
      <div className="max-w-3xl mx-auto p-6 md:p-12">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}  fontFamily={fontFamily} setFontFamily={setFontFamily} />
        <SearchInput word={word} setWord={setWord} fetchDefinition={fetchDefinition} darkMode={darkMode} inputError={inputError} />
        {loading && <Spinner />}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
            <div className="text-6xl mb-4">{error.emoji}</div>
            <h2 className="text-xl font-bold mb-2">{error.title}</h2>
            <p className="text-gray-500 max-w-md">{error.message}</p>
          </div>
        )}
        <br />
        {!loading && definition && !error && (<DefinitionDisplay definition={definition} darkMode={darkMode} handlePlayAudio={handlePlayAudio} isPlaying={isPlaying} /> )}
      </div>
    </div>
  );
}

export default App;
