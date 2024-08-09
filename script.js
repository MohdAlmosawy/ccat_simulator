document.getElementById('start-test').addEventListener('click', startTest);

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 900; // 15 minutes in seconds
let timerInterval;
let questionStartTime;
let categoryPerformance = {
    "Verbal Reasoning": { correct: 0, timeSpent: 0 },
    "Math and Logic": { correct: 0, timeSpent: 0 },
    "Spatial Reasoning": { correct: 0, timeSpent: 0 }
};

const selectedQuestions = selectQuestions();

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
    if (currentQuestionIndex >= selectedQuestions.length) {
        endTest();
        return;
    }

    const questionObj = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => {
            recordPerformance(questionObj);
            checkAnswer(answer, questionObj);
            updateProgressBar();
        });
        answersDiv.appendChild(button);
    });

    // Record the start time of this question
    questionStartTime = Date.now();
}

function checkAnswer(answer, questionObj) {
    if (answer === questionObj.correct) {
        score++;
        categoryPerformance[questionObj.category].correct++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function recordPerformance(questionObj) {
    const timeSpent = Date.now() - questionStartTime;
    categoryPerformance[questionObj.category].timeSpent += timeSpent;
}

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / selectedQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function endTest() {
    document.getElementById('test-area').style.display = 'none';
    clearInterval(timerInterval);
    displayResults();
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <h2>Your Score: ${score} out of ${selectedQuestions.length}</h2>
        <h3>Performance Insights:</h3>
        <p><strong>Verbal Reasoning:</strong> Correct Answers: ${categoryPerformance["Verbal Reasoning"].correct}, Time Spent: ${formatTime(categoryPerformance["Verbal Reasoning"].timeSpent)}</p>
        <p><strong>Math and Logic:</strong> Correct Answers: ${categoryPerformance["Math and Logic"].correct}, Time Spent: ${formatTime(categoryPerformance["Math and Logic"].timeSpent)}</p>
        <p><strong>Spatial Reasoning:</strong> Correct Answers: ${categoryPerformance["Spatial Reasoning"].correct}, Time Spent: ${formatTime(categoryPerformance["Spatial Reasoning"].timeSpent)}</p>
        ${generateFeedback()}
    `;

    resultsDiv.style.display = 'block';  // Ensure the results are visible
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
}

function selectQuestions() {
    // Shuffle questions within each difficulty level
    const easyQuestions = shuffleArray([...verbalQuestions.filter(q => q.difficulty === "Easy"),
                                        ...mathLogicQuestions.filter(q => q.difficulty === "Easy"),
                                        ...spatialQuestions.filter(q => q.difficulty === "Easy")]);
    
    const mediumQuestions = shuffleArray([...verbalQuestions.filter(q => q.difficulty === "Medium"),
                                          ...mathLogicQuestions.filter(q => q.difficulty === "Medium"),
                                          ...spatialQuestions.filter(q => q.difficulty === "Medium")]);
    
    const hardQuestions = shuffleArray([...verbalQuestions.filter(q => q.difficulty === "Hard"),
                                        ...mathLogicQuestions.filter(q => q.difficulty === "Hard"),
                                        ...spatialQuestions.filter(q => q.difficulty === "Hard")]);

    const selected = [];

    // Select predominantly easy questions with a few medium and hard
    selected.push(...getRandomQuestions(easyQuestions, 13));  // e.g., 13 easy questions
    selected.push(...getRandomQuestions(mediumQuestions, 2)); // e.g., 2 medium questions
    selected.push(...getRandomQuestions(hardQuestions, 1));   // e.g., 1 hard question

    // Select predominantly medium questions with a few easy and hard
    selected.push(...getRandomQuestions(mediumQuestions, 12)); // e.g., 12 medium questions
    selected.push(...getRandomQuestions(easyQuestions, 3));    // e.g., 3 easy questions
    selected.push(...getRandomQuestions(hardQuestions, 2));    // e.g., 2 hard questions

    // Select predominantly hard questions with a few medium and easy
    selected.push(...getRandomQuestions(hardQuestions, 14));   // e.g., 14 hard questions
    selected.push(...getRandomQuestions(mediumQuestions, 2));  // e.g., 2 medium questions
    selected.push(...getRandomQuestions(easyQuestions, 1));    // e.g., 1 easy question

    // The questions are now in a mixed order that gradually increases in difficulty

    return shuffleWithinSections(selected);
}

// Function to shuffle within sections
function shuffleWithinSections(array) {
    const firstSection = array.slice(0, 16);  // Easy section (16 questions)
    const secondSection = array.slice(16, 33); // Medium section (17 questions)
    const thirdSection = array.slice(33);    // Hard section (17 questions)
    
    return [
        ...shuffleArray(firstSection), 
        ...shuffleArray(secondSection), 
        ...shuffleArray(thirdSection)
    ];
}

function getRandomQuestions(questionArray, numQuestions) {
    const shuffled = shuffleArray([...questionArray]);
    return shuffled.slice(0, numQuestions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateFeedback() {
    let feedback = "<h3>Feedback:</h3>";

    // Identify the category where the user spent the most time
    const maxTimeCategory = Object.keys(categoryPerformance).reduce((a, b) => categoryPerformance[a].timeSpent > categoryPerformance[b].timeSpent ? a : b);
    feedback += `<p>You spent the most time on <strong>${maxTimeCategory}</strong>.</p>`;

    // Identify the category where the user scored the highest
    const maxScoreCategory = Object.keys(categoryPerformance).reduce((a, b) => categoryPerformance[a].correct > categoryPerformance[b].correct ? a : b);
    feedback += `<p>Your best performance was in <strong>${maxScoreCategory}</strong>.</p>`;

    // Identify the category where the user scored the lowest
    const minScoreCategory = Object.keys(categoryPerformance).reduce((a, b) => categoryPerformance[a].correct < categoryPerformance[b].correct ? a : b);
    feedback += `<p>Your weakest performance was in <strong>${minScoreCategory}</strong>.</p>`;

    return feedback;
}
