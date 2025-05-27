// 2D Arrays
const content = document.getElementById('content');
const seats = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3']
];
let html = '<b>2D Array Example (Seats):</b><br><table class="table">';
for(let row of seats) {
  html += '<tr>';
  for(let seat of row) {
    html += `<td>${seat}</td>`;
  }
  html += '</tr>';
}
html += '</table>';
content.innerHTML = html;
