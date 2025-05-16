// Changes the image source
function changeImage() {
  let img = document.getElementById("myimg");
  img.setAttribute("src", "https://via.placeholder.com/100/ff0000");
  alert("New alt: " + img.getAttribute("alt"));
}
