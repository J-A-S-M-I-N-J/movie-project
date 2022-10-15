
startTimer(60, document.querySelector('#game-timer'));


const myQuestions = [{
        question: "Blade, is also known as?", // 0 //
        answers: {
            a: "The Daywalker",
            b: "The Nightslayer",
            c: "The Vampire-Hunter"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-0.jpeg",
    },
    {
        question: "How many rings of power were made for the Elves in LOTR?", // 1 //
        answers: {
            a: "Three",
            b: "Seven",
            c: "Nine"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-1.jpeg",
    },
    {
        question: "Which 1976 movie with Robert DeNiro has the iconic 'You talkin to me?' line?", // 2 //
        answers: {
            a: "Heat",
            b: "A Bronx Tale",
            c: "Taxi Driver"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-2.jpeg",
    },
    {
        question: "Three Billboards Outside Ebbing, Missouri won how many Oscars in 2017?", // 3 //
        answers: {
            a: "1",
            b: "2",
            c: "3"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-3.jpeg",
    },
    {
        question: "What famous beach does White Man Cant Jump play out in?", // 4 //
        answers: {
            a: "Cancun",
            b: "Venice Beach",
            c: "Miami Beach"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-4.jpeg",
    },
    {
        question: "The movie Green Book is based on a travel guide for African Americans during the 1900's - how many states does it cover?", // 5 //
        answers: {
            a: "17",
            b: "50",
            c: "45"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-5.jpeg",
    },
    {
        question: "Who wrote and directed the horror/thriller-movie: Get Out?", // 6 //
        answers: {
            a: "Jordan Peele",
            b: "Jordan Poole",
            c: "Tyler Perry"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-6.jpeg",
    },
    {
        question: "The Big Lebowski, also known as:", // 7 //
        answers: {
            a: "The Guy",
            b: "The Bro",
            c: "The Dude"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-7.jpeg",
    },
    {
        question: "Based on a Victor Hugo novel, this movie with Sasha Baron Cohen, Russell Crowe and Hugh Jackman is called what?", // 8 //
        answers: {
            a: "Les Miserables",
            b: "The Ringer of Notre Dame",
            c: "Around The World in 80 Days"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-8.jpeg",
    },
    {
        question: "What's the name of this figure?", // 9 //
        answers: {
            a: "Yubaba",
            b: "Mononoke",
            c: "Totoro"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-9.jpeg",
    },
    {
        question: "A Royale with Cheese, is what?", // 10 //
        answers: {
            a: "Same as Le Big Mac",
            b: "A fancy Cheeseburger",
            c: "A Quarter Pounder with Cheese"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-10.jpeg",
    },
    {
        question: "Finish the sentence: WHATS IN THE ?", // 11 //
        answers: {
            a: "BOX",
            b: "CAR",
            c: "SAUCE"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-11.jpeg",
    },
    {
        question: "In 'The Pursuit of Happyness' Will Smiths character gets 'X-mas gift of the year' What is it?", // 12 //
        answers: {
            a: "A Sewing Machine",
            b: "A CD-Player",
            c: "A Rubik's Cube"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-12.jpeg",
    },
    {
        question: "Who directed Pan's Labyrinth?", // 13 //
        answers: {
            a: "Miguel Del Toro",
            b: "Guillermo Del Toro",
            c: "Benicio Del Toro"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-13.jpeg",
    },
    {
        question: "Who made the voice for the genie in the original Disney movie Aladdin?", // 14 //
        answers: {
            a: "Robbie Williams",
            b: "Robin Williams",
            c: "William Roberts"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-14.jpeg",
    },
    {
        question: "Who plays the young goth girl in the movie Beetlejuice from 1988?", // 15 //
        answers: {
            a: "Natalie Portman",
            b: "Kiera Knightley",
            c: "Winona Ryder"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-15.jpeg",
    },
    {
        question: "What's the name of the evil sorceress in the West African-animation Kirikou?", // 16 //
        answers: {
            a: "Kirikou",
            b: "Agraba",
            c: "Karaba"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-16.jpeg",
    },
    {
        question: "In Coming to America, what was Prince Hakeem's home country/land called?", // 17 //
        answers: {
            a: "Wakanda",
            b: "Zamunda",
            c: "Atlanta"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-17.jpeg",
    },
    {
        question: "Michael J Fox plays con-artist that can see and speak to the dead and is haunted by the grim reaper.", // 18 //
        answers: {
            a: "Grim Reaper",
            b: "The Haunted",
            c: "The Frighteners"
        },
        correctAnswer: "c",
        image: "../assets/images/img-question-18.jpeg",
    },
    {
        question: "Bill Murray stars in the classic movie Groundhog day. Do you remember what day he always seems to repeat?", // 19 //
        answers: {
            a: "Wednesday",
            b: "Monday",
            c: "Friday"
        },
        correctAnswer: "b",
        image: "../assets/images/img-question-19.jpeg",
    },
    {
        question: "What position did Harry Potter play at Quidditch?", // 20 //
        answers: {
            a: "Seeker",
            b: "Striker",
            c: "Searcher"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-20.jpeg",
    },
    {
        question: "GAME OVER", // 21 //
        answers: {
            a: "Seeker",
            b: "Striker",
            c: "Searcher"
        },
        correctAnswer: "a",
        image: "../assets/images/img-question-21.jpeg",
    },
];

document.getElementById('submit').addEventListener('click', sendEmail);

let currentQuestion = myQuestions[0];
let currentQuestionIndex = 0;
let correctAnswer = null;
var timer = null;

function showQuestion(question) {
    const questionText = document.getElementsByClassName('game-question')[0];
    const firstButton = document.getElementsByClassName('btn')[0];
    const secondButton = document.getElementsByClassName('btn')[1];
    const thirdButton = document.getElementsByClassName('btn')[2];
    const gameImage = document.getElementsByClassName("game-images")[0];
    questionText.innerText = question.question;
    firstButton.innerText = question.answers.a;
    secondButton.innerText = question.answers.b;
    thirdButton.innerText = question.answers.c;
    gameImage.src = question.image;

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

function timeFunction() {
    return new Promise((resolve) => {
        setTimeout(resolve, 250);

    })

}
const answerButtons = document.getElementsByClassName('btn');
for (let answerButton of answerButtons) {
    answerButton.addEventListener('click', async function () {
        if (isCorrectAnswer(currentQuestion, answerButton.innerHTML)) {
            answerButton.style.backgroundColor = 'lightgreen';
            correctAnswerHandler();
        } else {
            answerButton.style.backgroundColor = 'red';
        }
        await timeFunction();
        getNextQuestion();
        showQuestion(currentQuestion);
        answerButton.style.backgroundColor = '';
        showPopup();
    })
}

function startTimer(duration, display) {
    timer = duration;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);


        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function showPopup() {
    const popupElement = document.getElementById('popup');
    const finalScore = document.getElementById('final-score');
    if (currentQuestionIndex === myQuestions.length - 1 || timer < 1) {
        popupElement.style.display = "block"
        finalScore.innerText = document.getElementById("game-score").innerText;
    }
}

function sendEmail() {
    const finalScore = document.getElementById("game-score").innerText;
    const emailAdress = document.getElementById("email-adress").value;
    const playerName = document.getElementById("playerName").value;
    if (emailAdress !== "" & playerName !== "") {
        emailjs.send("service_qkue0kz", "template_rixgjxw", {
            Subject: emailAdress,
            playerName: playerName,
            Body: playerName + " Your score is: " + finalScore,
            From: "Jasmin",
            To: " Hi, thank you for playing " + playerName + " your score is " + finalScore,
        }).then(function () {
            alert("Thank you for submitting your score")
            location.reload();
        }, function (error) {
            console.log('FAILED...', error);
        });
    } else {
        alert("Please fill in the form!");
    }
}
