document.getElementById('start-test').addEventListener('click', startTest);

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 900; // 15 minutes in seconds
let timerInterval;

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
            checkAnswer(answer);
            updateProgressBar();
        });
        answersDiv.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === selectedQuestions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / selectedQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function endTest() {
    document.getElementById('test-area').style.display = 'none';
    document.getElementById('results').innerText = `You scored ${score} out of ${selectedQuestions.length}`;
    clearInterval(timerInterval);
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
