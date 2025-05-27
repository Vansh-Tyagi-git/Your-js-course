// Looping with while
const content = document.getElementById('content');
const nums = [5, 10, 15];
let i = 0;
let html = '<b>While loop over array:</b><br><ul>';
while(i < nums.length) {
  html += `<li>Index ${i}: Value ${nums[i]}</li>`;
  i++;
}
html += '</ul>';
content.innerHTML = html;
