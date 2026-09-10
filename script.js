// let questions = [
//     {
//         question: "What does HTML stand for?",
//         options: [
//             "Hyper Text Markup Language",
//             "High Text Machine Language",
//             "Hyper Tool Markup Language",
//             "Home Text Markup Language"
//         ],
//         answer: 0
//     },

//     {
//         question: "Which language is used for styling a webpage?",
//         options: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         answer: 1
//     },

//     {
//         question: "Which language is used to make a webpage interactive?",
//         options: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "SQL"
//         ],
//         answer: 2
//     },

//     {
//         question: "Which keyword is used to declare a variable in JavaScript?",
//         options: [
//             "var",
//             "variable",
//             "int",
//             "string"
//         ],
//         answer: 0
//     }
// ];


// let currentQuestion = 0;
// let score = 0;


// let welcomePage = document.getElementById("welcomePage");
// let quizPage = document.getElementById("quizPage");
// let resultPage = document.getElementById("resultPage");



// let question = document.getElementById("question");
// let optionButtons = document.querySelectorAll(".option");

// let startBtn = document.getElementById("startBtn");
// let nextBtn = document.getElementById("nextBtn");

// let result = document.getElementById("result");
// let restartBtn = document.getElementById("restartBtn");



// startBtn.addEventListener("click", function () {

//     welcomePage.classList.add("hide");
//     quizPage.classList.remove("hide");

//     showQuestion();
// });


// function showQuestion() {

//     let current = questions[currentQuestion];

//     question.innerText = current.question;

//     optionButtons.forEach(function (button, index) {

//         button.innerText = current.options[index];

//         button.classList.remove("correct");
//         button.classList.remove("wrong");

//         button.disabled = false;

//         button.onclick = function(){
//             checkAnswer(index)
//         }
//     });
// }


// function checkAnswer(selectedAnswer) {

//     let correctAnswer = questions[currentQuestion].answer;

//     optionButtons.forEach(function (button) {
//         button.disabled = true;
//     });


//     if (selectedAnswer === correctAnswer) {

//         optionButtons[selectedAnswer].classList.add("correct");

//         score++;

//     } else {

//         optionButtons[selectedAnswer].classList.add("wrong");

//         optionButtons[correctAnswer].classList.add("correct");
//     }
// }


// nextBtn.addEventListener("click", function () {

//     currentQuestion++;

//     if (currentQuestion < questions.length) {

//         showQuestion();

//     } else {

//         quizPage.classList.add("hide");
//         resultPage.classList.remove("hide");

//         result.innerText =
//             "Your Score: " + score + " / " + questions.length;
//     }

// });


// restartBtn.addEventListener("click", function () {

//     currentQuestion = 0;
//     score = 0;

//     resultPage.classList.add("hide");
//     quizPage.classList.remove("hide");

//     showQuestion();
// }); 


<div id="box">Hello <b>Kashish</b></div>
