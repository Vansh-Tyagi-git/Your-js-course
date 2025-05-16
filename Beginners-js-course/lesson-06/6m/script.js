// Using Object.freeze
let obj = { x: 10 };
Object.freeze(obj);
obj.x = 20; // This won't change the value
alert("x is still: " + obj.x);
