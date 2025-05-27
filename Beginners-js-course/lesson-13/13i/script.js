let calculation = '';
document.getElementById('content').innerHTML = `
  <div class="calculator">
    <div id="display">0</div>
    <div class="buttons">
      ${[7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','=','/'].map(btn => `
        <button class="${isNaN(btn) && btn !== '.' && btn !== '=' ? 'operator' : ''}" 
                onclick="handleInput('${btn}')">${btn}</button>
      `).join('')}
      <button class="clear" onclick="clearDisplay()">C</button>
    </div>
  </div>
`;

window.handleInput = (value) => {
  if(value === '=') {
    try {
      calculation = eval(calculation).toString();
    } catch {
      calculation = 'Error';
    }
  } else {
    calculation += value;
  }
  updateDisplay();
};

window.clearDisplay = () => {
  calculation = '';
  updateDisplay();
};

function updateDisplay() {
  document.getElementById('display').textContent = 
    calculation || '0';
}

