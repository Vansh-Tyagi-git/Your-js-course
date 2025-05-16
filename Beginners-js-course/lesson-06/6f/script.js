// Object with a method
let dog = {
  name: "Tommy",
  bark: function() {
    alert("Woof! My name is " + this.name);
  }
};
dog.bark();
