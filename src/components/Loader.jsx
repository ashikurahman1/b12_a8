import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center mt-20">
      <PacmanLoader color="#632EE3" />
    </div>
  );
};

export default Loader;
