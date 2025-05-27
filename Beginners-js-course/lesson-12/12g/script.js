// Nested Loops
const content = document.getElementById('content');
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let html = '<b>Nested loops (2D array):</b><br><table class="table">';
for(let i=0; i<matrix.length; i++) {
  html += '<tr>';
  for(let j=0; j<matrix[i].length; j++) {
    html += `<td>${matrix[i][j]}</td>`;
  }
  html += '</tr>';
}
html += '</table>';
content.innerHTML = html;
