import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h2>{player?.name || 'N/A'}</h2>
      <p>Team: {player?.team || 'N/A'}</p>
      <p>Position: {player?.position || 'N/A'}</p>
      <h3>Performance Stats</h3>
      <p>Goals: {player?.performance?.Gls || 'N/A'}</p>
      <p>Assists: {player?.performance?.Ast || 'N/A'}</p>
      <p>Penalties: {player?.performance?.PK || 'N/A'}</p>
      <p>Shots: {player?.performance?.Sh || 'N/A'}</p>
      <p>Shots on Target: {player?.performance?.SoT || 'N/A'}</p>
      <p>Yellow Cards: {player?.performance?.CrdY || 'N/A'}</p>
      <p>Red Cards: {player?.performance?.CrdR || 'N/A'}</p>
      <p>Touches: {player?.performance?.Touches || 'N/A'}</p>
      <h3>Expected Goals (xG)</h3>
      <p>xG: {player?.expected?.xG || 'N/A'}</p>
      <p>Non-penalty xG: {player?.expected?.npxG || 'N/A'}</p>
      <p>Expected Assists (xAG): {player?.expected?.xAG || 'N/A'}</p>
      <h3>Shot Creating Actions (SCA)</h3>
      <p>SCA: {player?.sca?.SCA || 'N/A'}</p>
      <p>GCA: {player?.sca?.GCA || 'N/A'}</p>
      <h3>Passing Stats</h3>
      <p>Completed Passes: {player?.passes?.Cmp || 'N/A'}</p>
      <p>Attempts: {player?.passes?.Att || 'N/A'}</p>
      <p>Completion %: {player?.passes?.['Cmp%'] || 'N/A'}</p>
      <p>Progressive Passes: {player?.passes?.PrgP || 'N/A'}</p>
      <h3>Carrying Stats</h3>
      <p>Carries: {player?.carries?.Carries || 'N/A'}</p>
      <p>Progressive Carries: {player?.carries?.PrgC || 'N/A'}</p>
      <h3>Take On Stats</h3>
      <p>Take On Attempts: {player?.takeOns?.Att || 'N/A'}</p>
      <p>Successful Take Ons: {player?.takeOns?.Succ || 'N/A'}</p>
    </div>
  );
};

export default PlayerCard;
