// Navbar.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';

const Navbar = ({ setView, players, teams, setFilteredResults }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">SoccerVis</h1>
        <div className="navbar-buttons">
          <button onClick={() => setView('home')}>Home</button>
          <button onClick={() => setView('playersPage')}>Players</button>
          <button onClick={() => setView('leaguePage')}>Teams</button>
        </div>
      </div>
      <div className="navbar-right">
        <SearchBar
          players={players}
          teams={teams}
          setFilteredResults={setFilteredResults}
        />
      </div>
    </nav>
  );
};

export default Navbar;
