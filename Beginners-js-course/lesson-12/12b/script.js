// Array Methods: push, pop, shift, unshift
const content = document.getElementById('content');
let arr = [1, 2, 3];
arr.push(4); // [1,2,3,4]
arr.pop();   // [1,2,3]
arr.unshift(0); // [0,1,2,3]
arr.shift();    // [1,2,3]
content.innerHTML = `
  <b>Array after push, pop, unshift, shift:</b> [${arr}]<br>
  <ul>
    <li><code>push()</code>: Add to end</li>
    <li><code>pop()</code>: Remove from end</li>
    <li><code>unshift()</code>: Add to start</li>
    <li><code>shift()</code>: Remove from start</li>
  </ul>
`;
