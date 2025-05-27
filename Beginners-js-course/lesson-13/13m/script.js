// Error Handling with Try/Catch
document.getElementById('content').innerHTML = `
  <h2>Error Handling Demo</h2>
  <button onclick="dangerousOperation()">Test</button>
  <p id="error"></p>
`;

window.dangerousOperation = () => {
  try {
    undefinedFunction();
  } catch (error) {
    document.getElementById('error').textContent = `Error: ${error.message}`;
  }
};
