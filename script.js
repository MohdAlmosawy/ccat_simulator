document.getElementById('start-test').addEventListener('click', startTest);

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    { question: "What is 5 + 3?", answers: ["5", "8", "10"], correct: "8" },
    { question: "Which is a prime number?", answers: ["4", "6", "7"], correct: "7" }
    // Add more questions
];

function startTest() {
    document.getElementById('start-test').style.display = 'none';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(answer));
        answersDiv.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById('test-area').style.display = 'none';
    document.getElementById('results').innerText = `You scored ${score} out of ${questions.length}`;
}
