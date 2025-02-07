import React from 'react';
import { styled } from '@mui/material/styles';

const PlayButton = styled('button')({
  minWidth: 75,
  height: 75,
  borderRadius: '50%',
  background: `url('https://i.ibb.co/0RGGtmYQ/play1.png') no-repeat center center`,
  backgroundSize: 'cover',
  border: 'none',
  outline: 'none',
  '&:hover': {
    background: `url('https://i.ibb.co/4wkfRZpP/playhover.png') no-repeat center center`,
    backgroundSize: 'cover',
  },
});

const DefinitionDisplay = ({ definition, darkMode, handlePlayAudio, isPlaying }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">{definition.word}</h1>
          <p className="text-purple-500">{definition.phonetic}</p>
        </div>
        {definition.phonetics?.[0]?.audio && (
          <PlayButton onClick={() => handlePlayAudio(definition.phonetics[0].audio)} disabled={isPlaying} />
        )}
      </div>

      {definition.meanings.map((meaning, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl italic">{meaning.partOfSpeech}</h2>
            <div className={`flex-1 h-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
          </div>

          <div className="space-y-4">
            <p className="text-gray-500">Meaning</p>
            <ul className="list-disc pl-10 space-y-4">
              {meaning.definitions.map((def, idx) => (
                <li key={idx}>
                  <p>{def.definition}</p>
                  {def.example && <p className="text-gray-500 mt-2">"{def.example}"</p>}
                </li>
              ))}
            </ul>

            {meaning.synonyms?.length > 0 && (
              <div className="flex gap-4 mt-4">
                <span className="text-gray-500">Synonyms</span>
                <span className="text-purple-500">{meaning.synonyms.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      ))}

      {definition.sourceUrls && (
        <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <span className="text-gray-500 text-sm">
            Source:{' '}
            <a 
              href={definition.sourceUrls[0]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline"
            >
              {definition.sourceUrls[0]}
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default DefinitionDisplay;
