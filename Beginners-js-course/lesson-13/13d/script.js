// Anonymous Functions
document.getElementById('content').innerHTML = '<button id="btn">Click Me</button>';
document.getElementById('btn').addEventListener('click', function() {
  this.textContent = 'Clicked!';
});
