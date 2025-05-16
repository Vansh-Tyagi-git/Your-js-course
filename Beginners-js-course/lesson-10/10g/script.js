// Adds a new paragraph to the container
function addPara() {
  let p = document.createElement("p");
  p.innerText = "This is a new paragraph!";
  document.getElementById("container").appendChild(p);
}
