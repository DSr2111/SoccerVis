import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Home = ({
  players,
  teams,
  setView,
  setSelectedPlayer,
  setSelectedTeam,
}) => {
  const [filteredResults, setFilteredResults] = useState({
    players: [],
    teams: [],
  });

  const displayResults = () => {
    if (!players || players.length === 0) {
      return <p>Loading player data...</p>;
    }
    if (
      filteredResults.players.length === 0 &&
      filteredResults.teams.length === 0
    ) {
      return null;
    } else {
      return (
        <div>
          <h2>Players</h2>
          {filteredResults.players.map((player) => (
            <div
              key={player.id}
              onClick={() => {
                setSelectedPlayer(player);
                setView('playerProfile');
              }}
            >
              <p>{player.name}</p>
            </div>
          ))}
          <h2>Teams</h2>
          {filteredResults.teams.map((team) => (
            <button
              key={team}
              onClick={() => {
                setSelectedTeam(team);
                setView('teamPage');
              }}
            >
              View {team} Team
            </button>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="home-page">
      <SearchBar
        players={players}
        teams={teams}
        setFilteredResults={setFilteredResults}
      />
      {displayResults()}
    </div>
  );
};

export default Home;
