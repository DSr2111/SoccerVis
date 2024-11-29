import React from 'react';

const PlayerProfile = ({ player }) => {
  if (!player) return <p>Loading player data...</p>;
  return (
    <div className="player-profile">
      <h1>{player.name}</h1>
      <h2>Team: {player.team}</h2>
      <h3>Position: {player.position}</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Stat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appearances (Domestic)</td>
            <td>{player.domestic.appearances}</td>
          </tr>
          <tr>
            <td>Goals (Domestic)</td>
            <td>{player.domestic.goals}</td>
          </tr>
          <tr>
            <td>Assists (Domestic)</td>
            <td>{player.domestic.assists}</td>
          </tr>
          <tr>
            <td>Appearances (Continental)</td>
            <td>{player.continental.appearances}</td>
          </tr>
          <tr>
            <td>Goals (Continental)</td>
            <td>{player.continental.goals}</td>
          </tr>
          <tr>
            <td>Assists (Continental)</td>
            <td>{player.continental.assists}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayerProfile;