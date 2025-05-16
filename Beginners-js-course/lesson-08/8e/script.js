// Snake-Water-Gun game with localStorage to remember last result

window.onload = function() {
  let last = localStorage.getItem('swgLastResult');
  if (last) {
    document.getElementById('last').innerText = "Last result: " + last;
  }
};

function play(userChoice) {
  const choices = ['snake', 'water', 'gun'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a draw! Both chose " + userChoice;
  } else if (
    (userChoice === 'snake' && computerChoice === 'water') ||
    (userChoice === 'water' && computerChoice === 'gun') ||
    (userChoice === 'gun' && computerChoice === 'snake')
  ) {
    result = "You win! Computer chose " + computerChoice;
  } else {
    result = "You lose! Computer chose " + computerChoice;
  }
  document.getElementById('result').innerText = result;
  localStorage.setItem('swgLastResult', result);
  alert(result);
}
