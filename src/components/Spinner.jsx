import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <CircularProgress />
    </div>
  );
};

export default Spinner;
