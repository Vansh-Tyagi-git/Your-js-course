// Introduction to Arrays
const content = document.getElementById('content');
const fruits = ['Apple', 'Banana', 'Cherry'];
content.innerHTML = `
  <b>Array Example:</b> <br>
  <code>const fruits = ['Apple', 'Banana', 'Cherry'];</code><br>
  <b>First fruit:</b> ${fruits[0]}<br>
  <b>All fruits:</b> ${fruits.join(', ')}
`;
