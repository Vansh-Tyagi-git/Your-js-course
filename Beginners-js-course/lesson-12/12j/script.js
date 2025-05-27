// Finding/searching in arrays
const content = document.getElementById('content');
const names = ['Alice', 'Bob', 'Charlie', 'David'];
const search = 'Charlie';
const found = names.includes(search);
const index = names.indexOf(search);

content.innerHTML = `
  <b>Names:</b> [${names.join(', ')}]<br>
  <b>Searching for "${search}":</b> ${found ? 'Found at index '+index : 'Not found'}
`;
