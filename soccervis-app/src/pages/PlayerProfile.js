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
          {/* Performance Stats */}
          <tr>
            <td>Goals</td>
            <td>{player.performance?.Gls || 'N/A'}</td>
          </tr>
          <tr>
            <td>Assists</td>
            <td>{player.performance?.Ast || 'N/A'}</td>
          </tr>
          <tr>
            <td>Penalties</td>
            <td>{player.performance?.PK || 'N/A'}</td>
          </tr>
          <tr>
            <td>Shots</td>
            <td>{player.performance?.Sh || 'N/A'}</td>
          </tr>
          <tr>
            <td>Shots on Target</td>
            <td>{player.performance?.SoT || 'N/A'}</td>
          </tr>
          <tr>
            <td>Yellow Cards</td>
            <td>{player.performance?.CrdY || 'N/A'}</td>
          </tr>
          <tr>
            <td>Red Cards</td>
            <td>{player.performance?.CrdR || 'N/A'}</td>
          </tr>

          {/* Expected Stats */}
          <tr>
            <td>Expected Goals (xG)</td>
            <td>{player.expected?.xG || 'N/A'}</td>
          </tr>
          <tr>
            <td>Non-Penalty Expected Goals (npxG)</td>
            <td>{player.expected?.npxG || 'N/A'}</td>
          </tr>
          <tr>
            <td>Expected Assists (xAG)</td>
            <td>{player.expected?.xAG || 'N/A'}</td>
          </tr>

          {/* Shot Creating Actions */}
          <tr>
            <td>Shot Creating Actions (SCA)</td>
            <td>{player.sca?.SCA || 'N/A'}</td>
          </tr>
          <tr>
            <td>Goal Creating Actions (GCA)</td>
            <td>{player.sca?.GCA || 'N/A'}</td>
          </tr>

          {/* Passing Stats */}
          <tr>
            <td>Completed Passes</td>
            <td>{player.passes?.Cmp || 'N/A'}</td>
          </tr>
          <tr>
            <td>Pass Attempts</td>
            <td>{player.passes?.Att || 'N/A'}</td>
          </tr>
          <tr>
            <td>Pass Completion %</td>
            <td>{player.passes?.['Cmp%'] || 'N/A'}</td>
          </tr>
          <tr>
            <td>Progressive Passes</td>
            <td>{player.passes?.PrgP || 'N/A'}</td>
          </tr>

          {/* Carrying Stats */}
          <tr>
            <td>Carries</td>
            <td>{player.carries?.Carries || 'N/A'}</td>
          </tr>
          <tr>
            <td>Progressive Carries</td>
            <td>{player.carries?.PrgC || 'N/A'}</td>
          </tr>

          {/* Take-On Stats */}
          <tr>
            <td>Take-On Attempts</td>
            <td>{player.takeOns?.Att || 'N/A'}</td>
          </tr>
          <tr>
            <td>Successful Take-Ons</td>
            <td>{player.takeOns?.Succ || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayerProfile;
