// Loop over object properties
let car = { brand: "Honda", year: 2020, color: "blue" };
let info = "";
for (let key in car) {
  info += key + ": " + car[key] + "\n";
}
alert(info);
