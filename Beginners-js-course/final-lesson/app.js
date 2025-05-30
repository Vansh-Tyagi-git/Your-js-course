// app.js
window.renderHeader = function() {
  return `
    <header>FoodieExpress</header>
    <nav>
      <a href="#menu">Menu</a>
      <a href="#cart">Cart</a>
      <a href="#about">About</a>
    </nav>
  `;
};

window.renderApp = function() {
  document.getElementById('app').innerHTML = `
    ${window.renderHeader()}
    ${window.renderMenu()}
    ${window.renderCart()}
    ${window.renderAbout()}
  `;
};

// Initial render
window.renderApp();
