import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h2>{player?.name || 'N/A'}</h2>
      <p>Team: {player?.team || 'N/A'}</p>
      <p>Position: {player?.position || 'N/A'}</p>
      <h3>Domestic Competitions</h3>
      <p>Appearances: {player?.domestic?.appearances || 'N/A'}</p>
      <p>Goals: {player?.domestic?.goals || 'N/A'}</p>
      <p>Assists: {player?.domestic?.assists || 'N/A'}</p>
      <h3>Continental Competitions</h3>
      <p>Appearances: {player?.continental?.appearances || 'N/A'}</p>
      <p>Goals: {player?.continental?.goals || 'N/A'}</p>
      <p>Assists: {player?.continental?.assists || 'N/A'}</p>
    </div>
  );
};

export default PlayerCard;
