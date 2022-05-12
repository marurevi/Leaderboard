import urlAPI from './url.js';

const ID = localStorage.getItem('keyID');
const URL = `${urlAPI + ID}/scores/`;

const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const saveData = async () => {
  if (nameInput.value !== '' && scoreInput.value !== '') {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Succes', data);
      });
  }
};

export default saveData;