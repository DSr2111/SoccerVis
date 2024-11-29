import React, { useState, useEffect } from 'react';
import PlayerCard from './components/PlayerCard';
import PlayerProfile from './pages/PlayerProfile';
import LeaguePage from './pages/LeaguePage';
import TeamPage from './pages/TeamPage';
import { fetchPlayerData } from './utils/Api';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [view, setView] = useState('home');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const loadPlayerData = async () => {
      const data = await fetchPlayerData();
      setPlayers(data.players);
      const uniqueTeams = [
        ...new Set(data.players.map((player) => player.team)),
      ];
      setTeams(uniqueTeams);
    };
    loadPlayerData();
  }, []);

  const renderView = () => {
    switch (view) {
      case 'playerProfile':
        return <PlayerProfile player={selectedPlayer} />;
      case 'leaguePage':
        return <LeaguePage teams={teams} />;
      case 'teamPage':
        return <TeamPage teamName={selectedTeam} players={players} />;
      default:
        return (
          <div>
            {players.map((player) => (
              <div
                key={player.id}
                onClick={() => {
                  setSelectedPlayer(player);
                  setView('playerProfile');
                }}
              >
                <PlayerCard player={player} />
              </div>
            ))}
            <button onClick={() => setView('leaguePage')}>View League</button>
            {teams.map((team) => (
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

  return <div>{renderView()}</div>;
};

export default App;
