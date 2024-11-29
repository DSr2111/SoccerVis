import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <p>Team: {player.team}</p>
      <p>Position: {player.position}</p>
      <h3>Domestic Competitions</h3>
      <p>Appearances: {player.domestic.appearances}</p>
      <p>Goals: {player.domestic.goals}</p>
      <p>Assists: {player.domestic.assists}</p>
      <h3>Continental Competitions</h3>
      <p>Appearances: {player.continental.appearances}</p>
      <p>Goals: {player.continental.goals}</p>
      <p>Assists: {player.continental.assists}</p>
    </div>
  );
};

export default PlayerCard;
