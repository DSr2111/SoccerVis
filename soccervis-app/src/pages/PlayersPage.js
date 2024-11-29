import React from 'react';

const PlayersPage = ({ players, setSelectedPlayer, setView }) => {
  return (
    <div className="players-page">
      <h2>Players</h2>
      {players.map((player) => (
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

export default PlayersPage;
