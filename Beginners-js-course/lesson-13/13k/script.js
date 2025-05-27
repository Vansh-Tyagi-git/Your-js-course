// Number Guessing Game
let secretNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById('content').innerHTML = `
  <h2>Guess the Number (1-100)</h2>
  <input type="number" id="guess" min="1" max="100">
  <button onclick="checkGuess()">Check</button>
  <p id="result"></p>
`;

window.checkGuess = () => {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');
  
  if(guess === secretNumber) {
    result.textContent = 'Correct! You won!';
    result.style.color = 'green';
  } else {
    result.textContent = `Too ${guess > secretNumber ? 'high' : 'low'}! Try again.`;
    result.style.color = 'red';
  }
};
