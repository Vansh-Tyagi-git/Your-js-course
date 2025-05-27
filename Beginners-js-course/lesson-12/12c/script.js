// Looping with for
const content = document.getElementById('content');
const nums = [10, 20, 30, 40];
let html = '<b>For loop over array:</b><br><ul>';
for(let i=0; i<nums.length; i++) {
  html += `<li>Index ${i}: Value ${nums[i]}</li>`;
}
html += '</ul>';
content.innerHTML = html;
