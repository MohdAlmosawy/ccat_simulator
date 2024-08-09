document.getElementById('start-test').addEventListener('click', startTest);

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 900; // 15 minutes in seconds
let timerInterval;

const questions = [
    { category: "Verbal Reasoning", question: "Choose the word that is most nearly opposite to the word in capital letters.", answers: ["Uncaring", "Languorous", "Zealous", "Empty", "Whimsical"], correct: "Zealous" },
    { category: "Math and Logic", question: "A group of 4 numbers has an average of 23. The first three numbers are 23, 16, and 8. What is the fourth number?", answers: ["92", "50", "44", "45", "23"], correct: "45" },
    { category: "Spatial Reasoning", question: "Which of these does not belong?", answers: ["A", "B", "C", "D"], correct: "B" },
    // Add more questions from each category...
];

function startTest() {
    document.getElementById('start-test').style.display = 'none';
    startTimer();
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        displayTime();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endTest();
        }
    }, 1000);
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endTest();
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => {
            checkAnswer(answer);
            updateProgressBar();
        });
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

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function endTest() {
    document.getElementById('test-area').style.display = 'none';
    document.getElementById('results').innerText = `You scored ${score} out of ${questions.length}`;
    clearInterval(timerInterval);
}
