import React from 'react';

const TeamPage = ({ teamName, players }) => {
  if (!players || players.length === 0) return <p>Loading player data...</p>;
  const teamPlayers = players.filter((player) => player.team === teamName);

  return (
    <div className="team-page">
      <h1>{teamName} - Player Roster</h1>
      <ul>
        {teamPlayers.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
