const moves = ['rock', 'paper', 'scissors'];
let score = { wins: 0, losses: 0, ties: 0 };

function renderGame() {
  document.getElementById('content').innerHTML = `
    <h2>Rock Paper Scissors</h2>
    ${moves.map(move => `
      <button class="move-btn" onclick="play('${move}')">
        ${move.charAt(0).toUpperCase() + move.slice(1)}
      </button>
    `).join('')}
    <div id="result"></div>
    <p id="score">Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}</p>
  `;
}
window.play = (playerMove) => {
  const computerMove = moves[Math.floor(Math.random() * 3)];
  let result = '';

  if(playerMove === computerMove) {
    result = 'Tie!';
    score.ties++;
  } else if(
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win!';
    score.wins++;
  } else {
    result = 'You lose!';
    score.losses++;
  }

  document.getElementById('result').innerHTML = `
    You chose <b>${playerMove}</b><br>
    Computer chose <b>${computerMove}</b><br>
    <b>${result}</b>
  `;
  document.getElementById('score').textContent = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
};

// Render the game UI on page load
renderGame();
