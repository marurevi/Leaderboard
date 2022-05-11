
const tableDisplay = document.querySelector('.dinamic-table');
tableDisplay.innerHTML = '<ul class="row"></ul>';
tableDisplay.className = 'dinamicTable';

const buildTable = (list) => {
  list.sort((a, b) => b.score -a.score);
  
  list.forEach((player) => {
    const line = document.createElement('li');
    line.innerHTML = `<div>${player.user}</div><div>${player.score}</div>`;
    line.className = 'line';
    line.classList.add('row');
    tableDisplay.appendChild(line);
  });
}
 
export default buildTable;
