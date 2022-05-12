const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
let ID = 'DIEeBnVnK9daqte6ChhC';
let URL = `${urlAPI + ID}/scores/`;

const changeID = async () => {
  const generateID = () => {
    fetch(urlAPI, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Maru games',
      }),
    })
      .then((response) => response.json())
      .then((json) => localStorage.setItem('keyID', json.result.slice(14, 35).trim()));
  };
  generateID();
};

export const clearBoard = () => {
  changeID();
};

ID = localStorage.getItem('keyID'); /* eslint-disable*/
URL = `${urlAPI + ID}/scores/`; /* eslint-enable */
export default urlAPI;
