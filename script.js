"use strict";

let questions = [
  {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correct: 1
  },
  {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2
  },
  {
      question: "What color is the sky?",
      answers: ["Green", "Blue", "Red", "Yellow"],
      correct: 1
  },
  {
      question: "What is 10 / 2?",
      answers: ["3", "4", "5", "6"],
      correct: 2
  }
];

let currentQuestion = 0;
let correctAnswers = 0;
let lifeBar = document.getElementById("life-bar");

function loadQuestion() {
  if (currentQuestion >= questions.length) {
      endGame();
      return;
  }

  let q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("btn0").textContent = q.answers[0];
  document.getElementById("btn1").textContent = q.answers[1];
  document.getElementById("btn2").textContent = q.answers[2];
  document.getElementById("btn3").textContent = q.answers[3];
}

function checkAnswer(answerIndex) {
  let isCorrect = answerIndex === questions[currentQuestion].correct;
  updateLifeBar(isCorrect);
  currentQuestion++;
  loadQuestion();
}

function updateLifeBar(isCorrect) {
  if (isCorrect) {
      correctAnswers++;
  }

  let lifePercentage = (correctAnswers / questions.length) * 100;
  lifeBar.style.width = lifePercentage + "%";

  if (correctAnswers >= 3) {
      lifeBar.classList.add("pulse");
  }

  if (currentQuestion >= questions.length) {
      endGame();
  }
}

function endGame() {
  let result = document.getElementById("result");
  if (correctAnswers >= 3) {
      lifeBar.style.backgroundColor = "green";
      result.textContent = "You won!";
      lifeBar.classList.add("pulse");
  } else {
      lifeBar.style.backgroundColor = "red";
      result.textContent = "Game over!";
      lifeBar.classList.add("explode");
  }
}

loadQuestion();