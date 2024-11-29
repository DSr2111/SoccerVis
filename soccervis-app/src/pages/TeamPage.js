import React from 'react';

const TeamPage = ({ teamName, players, setSelectedPlayer, setView }) => {
  const teamPlayers = players.filter((player) => player.team === teamName);
  const totalGoals = teamPlayers.reduce(
    (acc, player) => acc + (player.performance?.Gls || 0),
    0
  );
  const totalAssists = teamPlayers.reduce(
    (acc, player) => acc + (player.performance?.Ast || 0),
    0
  );

  return (
    <div className="team-page">
      <h2>{teamName} Team</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Assists: {totalAssists}</p>
      <h3>Players</h3>
      {teamPlayers.map((player) => (
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
    </div>
  );
};

export default TeamPage;
