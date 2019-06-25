'use strict';

function renderStartPage() {
    //reset questionNumber and quizScore
    //renders the initial quiz starting page
    $('.js-container').html(
    `<div id="quiz-homepage">
            <h1>Car Quiz</h1>
            <h2>Test your basic car knowledge!</h2>
            <div><i class="material-icons">directions_car</i></div>
            <button class="quiz-begin js-quiz-begin">
                <span class="button-label">Ready? Set. Go!</span>
            </button>
        </div>`);
    console.log('renderStartPage ran');
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
        <div class="answer-options">
            <button class="answer-choice js-answer-choice">${STORE[questionIndex].answers[0]}</button>
            <button class="answer-choice js-answer-choice">${STORE[questionIndex].answers[1]}</button>
            <button class="answer-choice js-answer-choice">${STORE[questionIndex].answers[2]}</button>
            <button class="answer-choice js-answer-choice">${STORE[questionIndex].answers[3]}</button>
        </div>
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

function renderResultsPage() {
    $('.js-container').on('click', '.js-results', event => {
        console.log(questionNumber);
    });
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
        $('.js-container').append(`<div id="answer-feedback">
            <h1>Correct!</h1>
            <h2>"${userAnswer}" is right!</h2>
            <div><i class="material-icons" id="correct">check</i></div>
            <button class="next-question js-next-question">
                <span class="button-label">Next Question</span>
            </button>
        </div>`
    )}
    else {
        $('.js-container').append(`<div id="answer-feedback">
            <h1>Correct!</h1>
            <h2>"${userAnswer}" is right!</h2>
            <div><i class="material-icons" id="correct">check</i></div>
            <button class="results js-results">
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
        `<div id="answer-feedback">
            <h1>Incorrect</h1>
            <h2>"${userAnswer}" is wrong.</h2>
            <div><i class="material-icons" id="wrong">close</i></div>
            <button class="next-question js-next-question">
                <span class="button-label">Next Question</span>
            </button>
        </div>`
    )}
    else {
        $('.js-container').append(
            `<div id="answer-feedback">
                <h1>Incorrect</h1>
                <h2>"${userAnswer}" is wrong.</h2>
                <div><i class="material-icons" id="wrong">close</i></div>
                <button class="results js-results">
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
            <div id="results">
                <h1>You scored ${quizScore} out of 10</h1>
                <button class="quiz-begin js-quiz-begin">
                    <span class="button-label">Restart?</span>
                </button>
            </div>`)
        beginQuiz();
    });
}



// function will render the initial quiz page, activate initial
//functions that handle user answer clicks, displaying answer feedback (if correct
//or incorrect) and restart the quiz @ the end
function handleQuiz() {
    renderStartPage();
    beginQuiz();
    handleAnswer();
    handleNextQuestion();
    renderResultsPage();
};

//when the page loads, call 'handleQuiz'
$(handleQuiz);