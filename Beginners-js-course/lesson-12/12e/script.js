// Looping with for...of
const content = document.getElementById('content');
const colors = ['Red', 'Green', 'Blue'];
let html = '<b>for...of loop:</b><br><ul>';
for(const color of colors) {
  html += `<li>${color}</li>`;
}
html += '</ul>';
content.innerHTML = html;
