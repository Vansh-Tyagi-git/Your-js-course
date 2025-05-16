// Using 'this' in an object method
let cat = {
  name: "Kitty",
  speak: function() {
    alert("Meow! I am " + this.name);
  }
};
cat.speak();
