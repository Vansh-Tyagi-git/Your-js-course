// Quiz Application
const quizData = [
  { question: "What is 2+2?", options: ["3", "4", "5"], correct: 1 },
  { question: "Capital of France?", options: ["London", "Paris", "Berlin"], correct: 1 }
];

let currentQuestion = 0;
document.getElementById('content').innerHTML = `
  <div id="quiz"></div>
  <button onclick="nextQuestion()">Next</button>
`;

function showQuestion() {
  const quiz = document.getElementById('quiz');
  quiz.innerHTML = `
    <h2>Question ${currentQuestion + 1}</h2>
    <p>${quizData[currentQuestion].question}</p>
    ${quizData[currentQuestion].options.map((opt, i) => `
      <label><input type="radio" name="answer" value="${i}"> ${opt}</label><br>
    `).join('')}
  `;
}

window.nextQuestion = () => {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  showQuestion();
};
showQuestion();
