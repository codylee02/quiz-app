let questionNumber = 1;
let quizScore = 0;


const STORE = [
    {
        question: 'What ignites the fuel inside of an engine?',
        answers: ['Glow Plugs', 'Spark Plugs', 'Alternator', 'Ignition Switch' ],
        correctAnswer: 'Spark Plugs',
        imgSrc: 'question1.jpg',
        altText: 'picture of engine bay'
    },
    {
        question: 'What is the most common oil change interval for conventional oil?',
        answers: ['2,000 miles', '3,000 miles', '10,000 miles', 'Never'],
        correctAnswer: '3,000 miles',
        imgSrc: 'question2.jpg',
        altText: 'picture of a person checking oil'
    },
    {
        question: 'What device uses a belt to generate electricity for a vehicle\'s electronics?',
        answers: ['Alternator', 'Starter', 'Battery', 'Solar Panels'],
        correctAnswer: 'Alternator',
        imgSrc: 'question3.jpg',
        altText: 'picture of car\'s generator'
    },
    {
        question: 'What can a failure of the radiator cause?',
        answers: ['Nothing', 'Better fuel economy', 'Overheating', 'Tire over-inflation'],
        correctAnswer: 'Overheating',
        imgSrc: 'question4.jpg',
        altText: 'picture of car\'s radiator'
    },
    {
        question: 'What do glow plugs do on a diesel motor?',
        answers: ['Give light so you can work on the motor in the dark', 'Help with cold engine starts', 'Glow plugs don\'t exist', 'Light a cigarrette'],
        correctAnswer: 'Help with cold engine starts',
        imgSrc: 'question5.jpg',
        altText: 'picture of glow plug'
    },
    {
        question: 'What can happen if your car runs out of oil and you continue to operate it?',
        answers: ['The engine uses gasoline to lubricate the engine', 'The car doors will lock', 'The car will call your mechanic', 'The engine will seize'],
        correctAnswer: 'The engine will seize',
        imgSrc: 'question6.jpeg',
        altText: 'picture of car\'s dipstick'
    },
    {
        question: 'Will a gas motor run if you put diesel in by accident?',
        answers: ['Yes, as long as the vehicle is a hybrid', 'No, never', 'Yes, the two fuels are interchangeable', 'Yes, because the handle is green and green means go'],
        correctAnswer: 'No, never',
        imgSrc: 'question7.jpg',
        altText: 'picture of diesel fuel pump'
    },
    {
        question: 'How often do most tire shops recommend that you rotate your tires?',
        answers: ['Never, they rotate when you drive the car', 'Every other week', 'Every 5,000 miles', 'Every day'],
        correctAnswer: 'Every 5,000 miles',
        imgSrc: 'question8.jpeg',
        altText: 'picture of car tire'
    },
    {
        question: 'How many total cylinders does a V8 engine have?',
        answers: ['2', '6', '4', '8'],
        correctAnswer: '8',
        imgSrc: 'question9.jpeg',
        altText: 'picture of V8 engine'
    },
    {
        question: 'Which of the following car companies is no longer in business?',
        answers: ['Ford', 'GMC', 'Fiat', 'Saturn'],
        correctAnswer: 'Saturn',
        imgSrc: 'question10.jpg',
        altText: 'picture of various manufacturer logos'
    }
]