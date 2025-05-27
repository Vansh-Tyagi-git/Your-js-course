// Get references to elements
const box = document.getElementById('box');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');

// Add 'colored' class to box
addBtn.onclick = function() {
  box.classList.add('colored');
};

// Remove 'colored' class from box
removeBtn.onclick = function() {
  box.classList.remove('colored');
};
