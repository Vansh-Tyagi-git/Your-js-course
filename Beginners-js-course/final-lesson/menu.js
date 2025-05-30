// menu.js
window.menu = [
  {
    name: "Margherita Pizza",
    desc: "Classic delight with 100% real mozzarella cheese.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    price: 299
  },
  {
    name: "Veggie Burger",
    desc: "Loaded with fresh veggies and a tangy sauce.",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    price: 199
  },
  {
    name: "Pasta Alfredo",
    desc: "Creamy white sauce pasta with herbs.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    price: 249
  },
  {
    name: "Paneer Tikka",
    desc: "Grilled paneer cubes marinated in spices.",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    price: 259
  },
  {
    name: "Caesar Salad",
    desc: "Fresh lettuce, croutons, and parmesan cheese.",
    img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad04?auto=format&fit=crop&w=400&q=80",
    price: 179
  },
  {
    name: "Chocolate Brownie",
    desc: "Rich chocolate brownie with nuts.",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    price: 99
  }
];

window.renderMenu = function() {
  return `
    <section id="menu" class="main-section">
      <h2>Our Menu</h2>
      <div class="menu-list">
        ${window.menu.map((item, idx) => `
          <div class="menu-card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">₹${item.price}</div>
            <button onclick="addToCart(${idx})">Add to Cart</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};
