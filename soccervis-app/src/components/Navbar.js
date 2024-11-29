import React from 'react';

const Navbar = ({ setView }) => {
  return (
    <nav className="navbar">
      <h1>Soccer Stats App</h1>
      <button onClick={() => setView('home')}>Home</button>
      <button onClick={() => setView('leaguePage')}>League</button>
    </nav>
  );
};

export default Navbar;
