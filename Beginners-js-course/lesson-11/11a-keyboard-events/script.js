// Get references to DOM elements
const input = document.getElementById('input');
const output = document.getElementById('output');

// Listen for keydown event
input.onkeydown = function(event) {
  output.textContent = 'Key Down: ' + event.key;
};

// Listen for keyup event
input.onkeyup = function(event) {
  output.textContent = 'Key Up: ' + event.key;
};
