// Break and Continue in Loops
let output = '';
for(let i=1; i<=10; i++) {
  if(i === 5) break; // Exit loop at 5
  if(i % 2 === 0) continue; // Skip even numbers
  output += i + ' ';
}
document.getElementById('content').innerHTML = `
  <h2>Break/Continue Demo</h2>
  <p>Odd numbers before 5: ${output}</p>
`;
