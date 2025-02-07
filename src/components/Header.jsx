import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#A445ED',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Header = ({ darkMode, setDarkMode, fontFamily, setFontFamily }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <img src="https://i.ibb.co/YTdKsr2T/logo.png" alt="Logo" className="w-8 h-10 md:w-12 md:h-14" />
      <div className="flex items-center gap-4">
        <select 
          className={`p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Mono</option>
        </select>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          label={<DarkModeOutlinedIcon />}
        />
      </div>
    </header>
  );
};

export default Header;
