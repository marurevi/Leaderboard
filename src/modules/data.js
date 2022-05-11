import buildTable from './display.js';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sN1XA4iUm9JzCAVPL1P5/scores/';

const displayScores = async () => {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => buildTable(json.result));
};

export default displayScores;
