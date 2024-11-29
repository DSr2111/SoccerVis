import React, { useState } from 'react';

const SearchBar = ({ players, teams, setFilteredResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    if (searchQuery.length > 0) {
      const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchQuery)
      );
      const filteredTeams = teams.filter((team) =>
        team.toLowerCase().includes(searchQuery)
      );
      setFilteredResults({ players: filteredPlayers, teams: filteredTeams });
    } else {
      setFilteredResults({ players: [], teams: [] });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for players or teams..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
