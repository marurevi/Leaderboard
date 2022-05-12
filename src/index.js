import './style.css';
import displayScores from './modules/data.js';
import saveData from './modules/sendData.js';
import { clearBoard } from './modules/url.js';

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
const clearBtn = document.getElementById('clearBtn');

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

submitBtn.addEventListener('click', () => {
  saveData();
});

clearBtn.addEventListener('click', () => {
  clearBoard();
});

displayScores();
