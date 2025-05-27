// Array map, filter, reduce
const content = document.getElementById('content');
const numbers = [2, 4, 6, 8];
const doubled = numbers.map(n => n*2);
const evens = numbers.filter(n => n%2===0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

content.innerHTML = `
  <b>Original:</b> [${numbers}]<br>
  <b>map (doubled):</b> [${doubled}]<br>
  <b>filter (evens):</b> [${evens}]<br>
  <b>reduce (sum):</b> ${sum}
`;
