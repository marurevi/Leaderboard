import './style.css';
import table from './modules/data';

const tableDisplay = document.querySelector('.dinamic-table');
tableDisplay.innerHTML= '<ul class="row"></ul>';
tableDisplay.className= 'dinamicTable';

table.forEach(user => {
  const line = document.createElement('li');
  line.innerHTML= `<div>${user.name}</div><div>${user.score}</div>`;
  line.className = 'line';
  line.classList.add('row');
  tableDisplay.appendChild(line);
});
