// Looping with forEach
const content = document.getElementById('content');
const cities = ['Delhi', 'Mumbai', 'Chennai'];
let html = '<b>forEach loop:</b><br><ul>';
cities.forEach((city, index) => {
  html += `<li>Index ${index}: ${city}</li>`;
});
html += '</ul>';
content.innerHTML = html;
