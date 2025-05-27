// setTimeout and Async Operations
document.getElementById('content').innerHTML = `
  <h2>setTimeout Demo</h2>
  <p id="timer">Waiting...</p>
`;
setTimeout(() => {
  document.getElementById('timer').textContent = '3 seconds passed!';
}, 3000);
