const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const saveData = async () => {
  const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sN1XA4iUm9JzCAVPL1P5/scores/';
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