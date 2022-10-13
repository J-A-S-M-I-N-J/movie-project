// function to generate questions and load image // 

// all the variables for questions and answeers // 

const myQuestions = [{
        question: "Blade, is also known as?", // 0 //
        answers: {
            a: "The Daywalker",
            b: "The Nightslayer",
            c: "The Vampire Hunter"
        },
        correctAnswer: "a"
    },
    {
        question: "How many rings of power were made for the Elves in LOTR?", // 1 //
        answers: {
            a: "Three",
            b: "Seven",
            c: "Nine"
        },
        correctAnswer: "a"
    },
    {
        question: "Which 1976 movie with Robert DeNiro has the iconic 'You talkin to me?' line?", // 2 //
        answers: {
            a: "Heat",
            b: "A Bronx Tale",
            c: "Taxi Driver"
        },
        correctAnswer: "c"
    },
    {
        question: "Three Billboards Outside Ebbing, Missouri won how many Oscars in 2017?", // 3 //
        answers: {
            a: "1",
            b: "2",
            c: "3"
        },
        correctAnswer: "b"
    },
    {
        question: "What famous beach does White Man Cant Jump play out in?", // 4 //
        answers: {
            a: "Cancun",
            b: "Venice Beach",
            c: "Miami Beach"
        },
        correctAnswer: "b"
    },
    {
        question: "The movie Green Book is based on a travel guide for African Americans during the 1900's - how many states does it cover?", // 5 //
        answers: {
            a: "17",
            b: "50",
            c: "45"
        },
        correctAnswer: "b"
    },
    {
        question: "Who wrote and directed the horror/thriller-movie: Get Out?", // 6 //
        answers: {
            a: "Jordan Peele",
            b: "Jordan Poole",
            c: "Tyler Perry"
        },
        correctAnswer: "a"
    },
    {
        question: "The Big Lebowski, also known as:", // 7 //
        answers: {
            a: "The Guy",
            b: "The Bro",
            c: "The Dude"
        },
        correctAnswer: "c"
    },
    {
        question: "Based on a Victor Hugo novel, this movie with Sasha Baron Cohen, Russell Crowe and Hugh Jackman is called what?", // 8 //
        answers: {
            a: "Les Miserables",
            b: "The Ringer of Notre Dame",
            c: "Around The World in 80 Days"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the name of this figure?", // 9 //
        answers: {
            a: "Yubaba",
            b: "Mononoke",
            c: "Totoro"
        },
        correctAnswer: "c"
    },
    {
        question: "A Royale with Cheese, is what?", // 10 //
        answers: {
            a: "Same as Le Big Mac",
            b: "A fancy Cheeseburger",
            c: "A Quarter Pounder with Cheese"
        },
        correctAnswer: "c"
    },
    {
        question: "Finish the sentence: WHATS IN THE ?", // 11 //
        answers: {
            a: "BOX",
            b: "CAR",
            c: "SAUCE"
        },
        correctAnswer: "a"
    },
    {
        question: "In 'The Pursuit of Happyness' Will Smiths character gets 'X-mas gift of the year' What is it?", // 12 //
        answers: {
            a: "A Sewing Machine",
            b: "A CD-Player",
            c: "A Rubik's Cube"
        },
        correctAnswer: "c"
    },
    {
        question: "Who directed Pan's Labyrinth?", // 13 //
        answers: {
            a: "Miguel Del Toro",
            b: "Guillermo Del Toro",
            c: "Benicio Del Toro"
        },
        correctAnswer: "b"
    },
    {
        question: "Who made the voice for the genie in the original Disney movie Aladdin?", // 14 //
        answers: {
            a: "Robbie Williams",
            b: "Robin Williams",
            c: "William Roberts"
        },
        correctAnswer: "b"
    },
    {
        question: "Who plays the young goth girl in the movie Beetlejuice from 1988?", // 15 //
        answers: {
            a: "Natalie Portman",
            b: "Kiera Knightley",
            c: "Winona Ryder"
        },
        correctAnswer: "c"
    },
    {
        question: "What's the name of the evil sorceress in the West African-animation Kirikou?", // 16 //
        answers: {
            a: "Kirikou",
            b: "Agraba",
            c: "Karaba"
        },
        correctAnswer: "c"
    },
    {
        question: "In Coming to America, what was Prince Hakeem's home country/land called?", // 17 //
        answers: {
            a: "Wakanda",
            b: "Zamunda",
            c: "Atlanta"
        },
        correctAnswer: "b"
    },
    {
        question: "Michael J Fox plays con-artist that can see and speak to the dead and is haunted by the grim reaper.", // 18 //
        answers: {
            a: "Grim Reaper",
            b: "The Haunted",
            c: "The Frighteners"
        },
        correctAnswer: "c"
    },
    {
        question: "Bill Murray stars in the classic movie Groundhog day - Do you remember what day he always seems to repeat?", // 19 //
        answers: {
            a: "Wednesday",
            b: "Monday",
            c: "Friday"
        },
        correctAnswer: "b"
    },
    {
        question: "What position did Harry Potter play at Quidditch?", // 20 //
        answers: {
            a: "Seeker",
            b: "Striker",
            c: "Searcher"
        },
        correctAnswer: "a"
    },
];

let currentQuestion = myQuestions[0];
let currentQuestionIndex = 0;
let correctAnswer = null;


function showQuestion(question) {
    const questionText = document.getElementsByClassName('game-question')[0];
    const firstButton = document.getElementsByClassName('btn')[0];
    const secondButton = document.getElementsByClassName('btn')[1];
    const thirdButton = document.getElementsByClassName('btn')[2];
    questionText.innerText = question.question;
    firstButton.innerText = question.answers.a;
    secondButton.innerText = question.answers.b;
    thirdButton.innerText = question.answers.c;
}

function getNextQuestion() {
    currentQuestionIndex = currentQuestionIndex + 1;
    currentQuestion = myQuestions[currentQuestionIndex];

}

function isCorrectAnswer(question, answer) {
    return (question.answers[question.correctAnswer] === answer);
}

function correctAnswerHandler() {
    const oldScoreElement = document.getElementById("game-score");
    console.log(oldScoreElement)
    oldScoreElement.innerHTML = +oldScoreElement.innerText + 1;
}
/* function correctAnswerHandler() {
    let oldScore = +(document.getElementsByClassName("game-score").innerText);
    document.getElementsByClassName("game-score").innerText = oldScore + 1; */


const answerButtons = document.getElementsByClassName('btn');
for (let answerButton of answerButtons) {
    answerButton.addEventListener('click', function () {
        if (isCorrectAnswer(currentQuestion, answerButton.innerHTML)) {
            correctAnswerHandler();
        }
        getNextQuestion();
        showQuestion(currentQuestion);
    })
}



// function to make buttons submit answers and fetch correct answer, give a green/red color and go to next question // 

/* 

function generateQuiz(questions, quizContainer, resultsContainer, buttons)

function showQuestions(questions, quizContainer) {

    document.getElementById("game-question").value = "";

    function showQuestions(){
        const output = []
        const answers;

        for(const i=0; i<questions.length; i++){
            answers = [];

            for(letter in questions[i].answers){

                answers.push ?????


            
                output.push ?????

                --------



             if(userAnswer===questions[i].correctAnswer){
			
			numCorrect++;
			
			answerContainers[i].style.color = 'lightgreen';
		}
		else{
			
			answerContainers[i].style.color = 'red';
		}
	}
    

/* pasted from love math

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    */

/*  pasted from love math

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        MAKE THE BUTTON GO GREEN
        addScore();
    } else {
        MAKE BUTTON GO RED
    }

// function for countdown timer - and give alert when time is up

/*

function gameTimer()
{
  countDown=countDown-1;
  if (countDown <= 0)
  {
     clearInterval(counter);
     alert("GAME OVER!")
     return;
  }

 document.getElementById("game-timer").innerHTML=countDown + " secs"; 
}
 
*/

// function for keeping score //  pasted from love math 

/* 

function addScore() {
    let oldScore = parseInt(document.getElementById("game-score").innerText);
    document.getElementById("game-score").innerText = ++oldScore;

}
*/

// function for displaying results in the end // 

/*  pasted from love math

function displayResult () {
    let displayResult = parseInt(document.getElementById("game-score").innerText);
    document.getElementById("game-score").innerText = ++oldScore

    if (countDown <= 0)
    alert("displayResult?")

    */