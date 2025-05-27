document.getElementById('content').innerHTML = `
  <h2>CSS Grid Demo</h2>
  <div class="grid-container">
    ${Array.from({length: 6}, (_,i) => `<div class="grid-item">Item ${i+1}</div>`).join('')}
  </div>
`;
