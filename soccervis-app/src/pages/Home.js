// src/pages/Home.js

import React from 'react';
import '../styles/Home.css';

const Home = ({
  players,
  teams,
  setView,
  setSelectedPlayer,
  setSelectedTeam,
  filteredResults,
}) => {
  const displayResults = () => {
    if (
      filteredResults.players.length === 0 &&
      filteredResults.teams.length === 0
    ) {
      return <p>No results found. Please enter a search term above.</p>;
    } else {
      return (
        <div className="search-results mt-6">
          {/* Display Players */}
          {filteredResults.players.length > 0 && (
            <>
              <h2 className="text-lg font-semibold">Players</h2>
              {filteredResults.players.map((player) => (
                <div
                  key={player.id}
                  onClick={() => {
                    setSelectedPlayer(player);
                    setView('playerProfile');
                  }}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                >
                  <p>{player.name}</p>
                </div>
              ))}
            </>
          )}
          {/* Display Teams */}
          {filteredResults.teams.length > 0 && (
            <>
              <h2 className="text-lg font-semibold mt-4">Teams</h2>
              {filteredResults.teams.map((team) => (
                <button
                  key={team}
                  onClick={() => {
                    setSelectedTeam(team);
                    setView('teamPage');
                  }}
                  className="team-button p-2 bg-blue-600 text-white rounded mb-2 hover:bg-blue-700"
                >
                  {team}
                </button>
              ))}
            </>
          )}
        </div>
      );
    }
  };

  return (
    <div className="home-page p-8">
      {filteredResults.players.length === 0 &&
        filteredResults.teams.length === 0 && (
          <div>
            <h2 className="welcome-message text-2xl font-bold mb-4">
              Welcome to SoccerVis, your go-to app for soccer stats and
              insights!
            </h2>
            <p className="intro-message">
              Use the search bar above to look up your favorite players or
              teams.
            </p>
          </div>
        )}
      {displayResults()}
    </div>
  );
};

export default Home;
