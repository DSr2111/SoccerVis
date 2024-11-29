import React from 'react';

const LeaguePage = ({ teams, setSelectedTeam, setView }) => {
  return (
    <div className="league-page">
      <h2>Teams</h2>
      {teams.map((team) => (
        <div
          key={team}
          onClick={() => {
            setSelectedTeam(team);
            setView('teamPage');
          }}
        >
          <p>{team}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaguePage;
