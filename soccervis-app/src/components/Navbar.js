import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ setView }) => {
  return (
    <nav className="navbar">
      <h1>SoccerVis</h1>
      <button onClick={() => setView('home')}>Home</button>
      <button onClick={() => setView('playersPage')}>Players</button>
      <button onClick={() => setView('leaguePage')}>Teams</button>
    </nav>
  );
};

export default Navbar;
