// Synchronous vs Asynchronous
document.getElementById('content').innerHTML = `
  <h2>Sync/Async Demo</h2>
  <p id="output"></p>
`;
document.getElementById('output').textContent = 'Start';
setTimeout(() => document.getElementById('output').textContent += ' (Async)', 0);
document.getElementById('output').textContent += ' (Sync)';
