import displayGames from './displaygames.js';

// Fetch data from API
const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ukaI3OuXrr2bR6UArEV7/scores';
  const request = new Request(url);
  const results = await fetch(request);
  const gameObj = await results.json();
  const { result } = gameObj;
  displayGames(result);
};

export default getData;
