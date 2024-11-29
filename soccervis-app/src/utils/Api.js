export const fetchPlayerData = async () => {
  try {
    const response = await fetch('/database.json'); // Fetching data from the public folder
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};
