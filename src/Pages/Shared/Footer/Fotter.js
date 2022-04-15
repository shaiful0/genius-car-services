import React from 'react';

const Fotter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='text-center mt-5'>
      <p><small>copyright @{year}</small></p>
    </footer>
  );
};

export default Fotter;