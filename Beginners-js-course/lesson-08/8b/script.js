// Convert JSON string back to object
let jsonString = '{"name":"Amit","age":15}';
let person = JSON.parse(jsonString);
alert("Name: " + person.name + ", Age: " + person.age);
