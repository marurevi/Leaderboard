import './style.css';

const tableDisplay = document.querySelector('.dinamic-table');
tableDisplay.innerHTML= '<ul class="row"></ul>';
tableDisplay.className= 'dinamicTable';

const table = [
  {
    name: 'Mariana',
    score: 12345
  },
  {
    name: 'Fernando',
    score: 12345
  },
  {
    name: 'Daniela',
    score: 12345
  },
  {
    name: 'Julio',
    score: 12345
  },
  {
    name: 'Viviana',
    score: 12345
  },
  {
    name: 'Marcos',
    score: 12345
  }
];

table.forEach(user => {
  const line = document.createElement('li');
  line.innerHTML= `<div>${user.name}</div><div>${user.score}</div>`;
  line.className = 'line';
  line.classList.add('row');
  tableDisplay.appendChild(line);
})