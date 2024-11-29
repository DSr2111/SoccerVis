import React from 'react';

const LeaguePage = ({ teams }) => {
  if (!teams || teams.length === 0) return <p>Loading league data...</p>;
  return (
    <div className="league-page">
      <h1>Spanish League Teams</h1>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaguePage;
