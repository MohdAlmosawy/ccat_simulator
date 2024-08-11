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

let hypothesisTimeLeft = 18; // 18 seconds for each question
let hypothesisTimerInterval;

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endTest();
        return;
    }

    const questionObj = selectedQuestions[currentQuestionIndex];
    const questionDiv = document.getElementById('question');
    questionDiv.innerHTML = ''; // Clear previous question content

    // Set the text for the question
    const questionText = document.createElement('p');
    questionText.innerText = questionObj.question;
    questionDiv.appendChild(questionText);

    // Check if the question has pairs and display them
    if (questionObj.pairs) {
        const pairsDiv = document.createElement('div');
        pairsDiv.classList.add('pairs-container');
        
        questionObj.pairs.forEach(pair => {
            const pairDiv = document.createElement('div');
            pairDiv.classList.add('pair');
            
            const leftSpan = document.createElement('span');
            leftSpan.innerText = pair.left;
            pairDiv.appendChild(leftSpan);

            const rightSpan = document.createElement('span');
            rightSpan.innerText = pair.right;
            pairDiv.appendChild(rightSpan);

            pairsDiv.appendChild(pairDiv);
        });

        questionDiv.appendChild(pairsDiv);
    }

    // Check if the question has an associated image and display it
    if (questionObj.imageSrc) {
        const image = document.createElement('img');
        image.src = questionObj.imageSrc;
        image.alt = "Spatial Reasoning Question Image";
        image.style.maxWidth = "100%";  // Ensure the image fits within the container
        questionDiv.appendChild(image);
    }

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = ''; // Clear previous answer buttons

    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => {
            clearInterval(hypothesisTimerInterval); // Stop hypothesis timer
            recordPerformance(questionObj);
            checkAnswer(answer, questionObj);
            updateProgressBar();
        });
        answersDiv.appendChild(button);
    });

    // Start the hypothesis timer
    startHypothesisTimer();

    // Record the start time of this question
    questionStartTime = Date.now();
}



function checkAnswer(answer, questionObj) {
    const isCorrect = answer === questionObj.correct;
    questionObj.answeredCorrectly = isCorrect;  // Track if the answer was correct
    questionObj.userAnswer = answer; // Store the user's answer

    const timeSpent = Date.now() - questionStartTime;
    questionObj.timeSpent = timeSpent;  // Track time spent on this specific question

    clearInterval(hypothesisTimerInterval); // Stop the hypothesis timer

    if (isCorrect) {
        score++;
        categoryPerformance[questionObj.category].correct++;
    }
    categoryPerformance[questionObj.category].timeSpent += timeSpent;

    currentQuestionIndex++;
    loadQuestion();
    return isCorrect;
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

    // New: Accuracy by Difficulty
    const difficultyAccuracy = calculateAccuracyByDifficulty();
    feedback += `
        <h4>Accuracy by Difficulty:</h4>
        <p><strong>Easy:</strong> ${difficultyAccuracy.easy}% accuracy</p>
        <p><strong>Medium:</strong> ${difficultyAccuracy.medium}% accuracy</p>
        <p><strong>Hard:</strong> ${difficultyAccuracy.hard}% accuracy</p>
    `;

    // New: Time Management
    feedback += `<p>You tended to spend more time on questions you got <strong>${difficultyAccuracy.timeComparison}</strong>.</p>`;

    return feedback;
}

function calculateAccuracyByDifficulty() {
    const accuracy = {
        easy: calculateAccuracyForDifficulty('Easy'),
        medium: calculateAccuracyForDifficulty('Medium'),
        hard: calculateAccuracyForDifficulty('Hard'),
        timeComparison: compareTimeSpentOnCorrectVsIncorrect(),
    };
    return accuracy;
}

function calculateAccuracyForDifficulty(difficulty) {
    const totalQuestions = selectedQuestions.filter(q => q.difficulty === difficulty).length;
    const correctAnswers = selectedQuestions.filter(q => q.difficulty === difficulty && q.answeredCorrectly).length;
    if (totalQuestions === 0) return 0;
    return Math.round((correctAnswers / totalQuestions) * 100);
}



function compareTimeSpentOnCorrectVsIncorrect() {
    const correctQuestions = selectedQuestions.filter(q => q.answeredCorrectly);
    const incorrectQuestions = selectedQuestions.filter(q => !q.answeredCorrectly);

    const timeOnCorrect = correctQuestions.reduce((total, q) => total + categoryPerformance[q.category].timeSpent, 0);
    const timeOnIncorrect = incorrectQuestions.reduce((total, q) => total + categoryPerformance[q.category].timeSpent, 0);

    return timeOnCorrect > timeOnIncorrect ? 'correct' : 'incorrect';
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    
    let detailedResults = `
        <h2>Your Score: ${score} out of ${selectedQuestions.length}</h2>
        <h3>Performance Insights:</h3>
        <p><strong>Verbal Reasoning:</strong> Correct Answers: ${categoryPerformance["Verbal Reasoning"].correct}, Time Spent: ${formatTime(categoryPerformance["Verbal Reasoning"].timeSpent)}</p>
        <p><strong>Math and Logic:</strong> Correct Answers: ${categoryPerformance["Math and Logic"].correct}, Time Spent: ${formatTime(categoryPerformance["Math and Logic"].timeSpent)}</p>
        <p><strong>Spatial Reasoning:</strong> Correct Answers: ${categoryPerformance["Spatial Reasoning"].correct}, Time Spent: ${formatTime(categoryPerformance["Spatial Reasoning"].timeSpent)}</p>
        ${generateFeedback()}
        <h3>Detailed Results:</h3>
        <ul>
    `;
    
    selectedQuestions.forEach((questionObj, index) => {
        const userAnswer = questionObj.userAnswer || "No Answer";
        const correctness = questionObj.answeredCorrectly ? "Correct" : "Incorrect";
        const timeSpent = formatTime(questionObj.timeSpent);

        detailedResults += `
            <li>
                <p><strong>Question ${index + 1}:</strong> ${questionObj.question}</p>
                <p><strong>Your Answer:</strong> ${userAnswer}</p>
                <p><strong>Correct Answer:</strong> ${questionObj.correct}</p>
                <p><strong>Time Spent:</strong> ${timeSpent}</p>
                <p><strong>Result:</strong> ${correctness}</p>
                <hr>
            </li>
        `;
    });

    detailedResults += `</ul>`;
    resultsDiv.innerHTML = detailedResults;
    resultsDiv.style.display = 'block';  // Ensure the results are visible
}

function startHypothesisTimer() {
    hypothesisTimeLeft = 18; // Reset to 18 seconds
    const hypothesisTimerBar = document.getElementById('hypothesis-timer-bar');
    const hypothesisTimerText = document.getElementById('hypothesis-timer-text');

    hypothesisTimerBar.style.width = '100%';
    hypothesisTimerText.innerText = `Expected Time: ${hypothesisTimeLeft}s`;

    const initialWidth = 100; // 100% width
    const widthDecrement = initialWidth / hypothesisTimeLeft; // Decrement per second

    hypothesisTimerInterval = setInterval(() => {
        hypothesisTimeLeft--;
        hypothesisTimerText.innerText = `Expected Time: ${hypothesisTimeLeft}s`;

        const currentWidth = Math.max(0, initialWidth - widthDecrement * (18 - hypothesisTimeLeft));
        hypothesisTimerBar.style.width = `${currentWidth}%`;

        if (hypothesisTimeLeft <= 0) {
            clearInterval(hypothesisTimerInterval);
            hypothesisTimerText.innerText = `Time Exceeded`;
            hypothesisTimerBar.style.width = '0%';
        }
    }, 1000);
}
