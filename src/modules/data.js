import buildTable from './display.js';
import urlAPI from './url.js';

const ID = localStorage.getItem('keyID');
const URL = `${urlAPI + ID}/scores/`;

const displayScores = async () => {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => buildTable(json.result));
};

export default displayScores;
