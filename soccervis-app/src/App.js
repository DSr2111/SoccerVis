// src/App.js

import React, { useState, useEffect } from 'react';
import PlayerProfile from './pages/PlayerProfile';
import LeaguePage from './pages/LeaguePage';
import TeamPage from './pages/TeamPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PlayersPage from './pages/PlayersPage';
import { fetchPlayerData } from './utils/Api';
import './styles/App.css';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [view, setView] = useState('home');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [filteredResults, setFilteredResults] = useState({
    players: [],
    teams: [],
  });

  useEffect(() => {
    const loadPlayerData = async () => {
      const data = await fetchPlayerData();
      if (data && data.players) {
        setPlayers(data.players);
        const uniqueTeams = [
          ...new Set(data.players.map((player) => player.team)),
        ].sort();
        setTeams(uniqueTeams);
      }
    };
    loadPlayerData();
  }, []);

  const renderView = () => {
    switch (view) {
      case 'playerProfile':
        return <PlayerProfile player={selectedPlayer} />;
      case 'playersPage':
        return (
          <PlayersPage
            players={players}
            setSelectedPlayer={setSelectedPlayer}
            setView={setView}
          />
        );
      case 'leaguePage':
        return (
          <LeaguePage
            teams={teams}
            setSelectedTeam={setSelectedTeam}
            setView={setView}
          />
        );
      case 'teamPage':
        return (
          <TeamPage
            teamName={selectedTeam}
            players={players}
            setSelectedPlayer={setSelectedPlayer}
            setView={setView}
          />
        );
      default:
        return (
          <Home
            players={players}
            teams={teams}
            setView={setView}
            setSelectedPlayer={setSelectedPlayer}
            setSelectedTeam={setSelectedTeam}
            filteredResults={filteredResults}
            setFilteredResults={setFilteredResults}
          />
        );
    }
  };

  return (
    <div className="app-container">
      <Navbar
        setView={setView}
        players={players}
        teams={teams}
        setFilteredResults={setFilteredResults}
      />
      <div className="content-container p-8">{renderView()}</div>
    </div>
  );
};

export default App;
