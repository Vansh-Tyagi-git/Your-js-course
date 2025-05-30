// cart.js
window.cart = [];

window.renderCart = function() {
  const total = window.cart.reduce((sum, item) => sum + window.menu[item.idx].price * item.qty, 0);
  return `
    <section id="cart" class="cart-section main-section">
      <h2>Your Cart</h2>
      <ul class="cart-list">
        ${window.cart.length === 0 ? '<li>Your cart is empty.</li>' : window.cart.map(item => `
          <li>
            <span class="item-name">${window.menu[item.idx].name}</span>
            <button onclick="updateQty(${item.idx}, -1)">-</button>
            <span class="item-qty">${item.qty}</span>
            <button onclick="updateQty(${item.idx}, 1)">+</button>
            <span>₹${window.menu[item.idx].price * item.qty}</span>
            <button onclick="removeFromCart(${item.idx})" title="Remove">&times;</button>
          </li>
        `).join('')}
      </ul>
      <div class="cart-summary">Total: ₹${total}</div>
      <button class="checkout-btn" onclick="checkout()" ${window.cart.length === 0 ? 'disabled' : ''}>Checkout</button>
    </section>
  `;
};

window.addToCart = function(idx) {
  const found = window.cart.find(item => item.idx === idx);
  if (found) {
    found.qty += 1;
  } else {
    window.cart.push({ idx, qty: 1 });
  }
  window.renderApp();
};

window.updateQty = function(idx, delta) {
  const found = window.cart.find(item => item.idx === idx);
  if (found) {
    found.qty += delta;
    if (found.qty <= 0) {
      window.cart = window.cart.filter(item => item.idx !== idx);
    }
  }
  window.renderApp();
};

window.removeFromCart = function(idx) {
  window.cart = window.cart.filter(item => item.idx !== idx);
  window.renderApp();
};

window.checkout = function() {
  alert('Thank you for your order! (This is a demo)');
  window.cart = [];
  window.renderApp();
};
