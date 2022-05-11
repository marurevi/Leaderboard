import './style.css';
import displayScores from './modules/data.js';
import saveData from './modules/sendData.js';


const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

submitBtn.addEventListener('click', () => {
  saveData();
});

displayScores();
