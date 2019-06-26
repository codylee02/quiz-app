'use strict';

function renderStartPage() {
    //renders the initial quiz starting page
    $('.js-container').html(
    `<div id="quiz-homepage">
            <h1>Car Quiz</h1>
            <h2>Test your basic car knowledge!</h2>
            <div><i class="material-icons" id="car">directions_car</i></div>
            <button class="quiz-begin js-quiz-begin">
                <span class="button-label">Ready? Set. Go!</span>
            </button>
        </div>`);
    console.log('renderStartPage ran');
    beginQuiz();
}

function beginQuiz() {
    //listen for the start button to be clicked
    $('.js-quiz-begin').on('click', event => {
        console.log(`you clicked begin quiz`);
        
        //reset questionNumber and quizScore
        questionNumber = 1;
        quizScore = 0;
        generateQuestion();
    });
    
}

function renderQuizStatus() {
    let quizStatus = `<div class='status'>
    <span class='question-num'>Question: ${questionNumber} of 10</span>
    <span class='score'>Score: ${quizScore} of 10</span>
</div>`;

    $('.js-container').html(quizStatus);
}

function generateQuestion() {
    //generate the question to display to the user in a string
    let questionIndex = questionNumber - 1;
    let questionAnswerString = `<div class="question-container">
        <span class="question">${STORE[questionIndex].question}</span>
        <img class="question-image" src="images/${STORE[questionIndex].imgSrc}" alt="${STORE[questionIndex].altText}">
        <form>
            <fieldset>
                <button class="js-answer-choice">${STORE[questionIndex].answers[0]}</button>
                <button class="js-answer-choice">${STORE[questionIndex].answers[1]}</button>
                <button class="js-answer-choice">${STORE[questionIndex].answers[2]}</button>
                <button class="js-answer-choice">${STORE[questionIndex].answers[3]}</button>
            </fieldset>
        </form>
    </div>`
    
    renderQuestion(questionAnswerString);
    console.log('generateQuestion ran');
}

function renderQuestion(questionAnswerString) {
    renderQuizStatus();
    $('.js-container').append(questionAnswerString);
}

function updateQuestionNum () {
    questionNumber++;
}

function handleNextQuestion () {
    //proceeds to the next question after the user has gotten answer feedback
    $('.js-container').on('click', '.js-next-question', event => {
        console.log('nextQuestionRun')
        updateQuestionNum();
        generateQuestion();
    })
}

function handleCorrectAnswer(userAnswer) {
    quizScore++;
    renderQuizStatus();
    //handles correct answers and if user at end of quiz, displays different result page
    if (questionNumber < 10) {
        $('.js-container').append(`<div class="feedback-container">
            <h1>Correct!</h1>
            <i class="material-icons" id="correct">check</i>
            <h2>"${userAnswer}" is right!</h2>
            <button class="js-next-question">
                <span class="button-label">Next Question</span>
            </button>
        </div>`
    )}
    else {
        $('.js-container').append(`<div class="feedback-container">
            <h1>Correct!</h1>
            <i class="material-icons" id="correct">check</i>
            <h2>"${userAnswer}" is right!</h2>
            <button class="js-results">
                <span class="button-label">Results</span>
            </button>
        </div>`
        )};


}

function handleWrongAnswer(userAnswer) {
    //handles incorrect answers and if user at end of quiz, displays different result page
    renderQuizStatus();
    if (questionNumber < 10) {
    $('.js-container').append(
        `<div class="feedback-container">
            <h1>Incorrect</h1>
            <i class="material-icons" id="wrong">close</i>
            <h2>"${userAnswer}" is wrong.</h2>
            <h2>"${STORE[questionNumber - 1].correctAnswer}" is the correct answer.</h2>
            <button class="js-next-question">
                <span class="button-label">Next Question</span>
            </button>
        </div>`
    )}
    else {
        $('.js-container').append(
            `<div class="feedback-container">
                <h1>Incorrect</h1>
                <i class="material-icons" id="wrong">close</i>
                <h2>"${userAnswer}" is wrong.</h2>
                <h2>"${STORE[questionNumber - 1].correctAnswer}" is the correct answer.</h2>
                <button class="js-results">
                    <span class="button-label">Results</span>
                </button>
            </div>`
        )};
}

function handleAnswer() {
    //checks if the answer is correct or not

    $('.js-container').on('click', '.js-answer-choice', event => {
        let userAnswer = $(event.currentTarget).text();
        if (userAnswer === STORE[questionNumber - 1].correctAnswer) {
            console.log("correct answer selected");
            handleCorrectAnswer(userAnswer);
        } else {
            console.log('incorrect answer selected');
            handleWrongAnswer(userAnswer);
        }

        console.log('handleAnswer ran');
    });
    


}

function renderResultsPage() {
    //when results is clicked, display feedback
    $('.js-container').on('click', '.js-results', event => {
        $('.js-container').html(`
            <div class="feedback-container">
                <h1 class="feedback">You scored ${quizScore} out of 10</h1>
                <img class="results-image" src="images/finishline.png" alt="drawing of finishline">
                <button class="js-quiz-begin">Try again?</button>
            </div>`)
        beginQuiz();
    });
}



// function will render the initial quiz page, activate initial
//functions that handle user answer clicks, displaying answer feedback (if correct
//or incorrect) and restart the quiz @ the end
function handleQuiz() {
    renderStartPage();
    handleAnswer();
    handleNextQuestion();
    renderResultsPage();
};

//when the page loads, call 'handleQuiz'
$(handleQuiz);