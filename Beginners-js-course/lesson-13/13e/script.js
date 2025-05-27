// Callback Functions
function fetchData(callback) {
  setTimeout(() => callback('Data received!'), 1000);
}
fetchData((result) => {
  document.getElementById('content').innerHTML = `
    <h2>Callback Demo</h2>
    <p>${result}</p>
  `;
});
