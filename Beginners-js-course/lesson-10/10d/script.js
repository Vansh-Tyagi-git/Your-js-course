// Colors all list items with class 'item'
function colorAll() {
  let items = document.querySelectorAll(".item");
  items.forEach(function(el) {
    el.style.color = "red";
  });
}
