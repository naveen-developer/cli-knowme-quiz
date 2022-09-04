var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

console.log(chalk.bold.underline.green("DO YOU KNOW NAVEEN QUIZ"));
console.log(" ");

var userName = readlineSync.question("What is Your Name? ");
console.log("Welcome " + chalk.blue.bold.underline(userName) + " to DO YOU KNOW Naveen ? Quiz!");
console.log(" ");
console.log(chalk.yellow("RULES OF THE QUIZ are..."));
console.log(chalk.cyan("Please enter 'a' or 'b' or 'c' for your answer"));
console.log(chalk.cyan("For every right answer, your score will be increased by 2"));
console.log(chalk.cyan("For every wrong answer, your score will be decreased by 1"));
console.log(" ");
console.log("Let's start playing");
console.log(".........................................................................");
console.log(" ");

function check(question, answer, correct, n) {
  var userAnswer = readlineSync.question(chalk.bold.blue("Q" + n + " : " + question));
  console.log(" ");
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("You're RIGHT!😊"));
    score = score + 2;
  } else {
    console.log(chalk.red("You're WRONG!😞"));
    console.log(chalk.yellow("Correct answer is - " + correct));
    score = score - 1;
  }
  console.log(chalk.green("Your Current Score is : " + score));
}

var questionList = [
  {
    question: `What is my favourite movie?
    a: Dhoom
    b: Bahubali
    c: Robo\n`,
    answer: "b",
    correct: "b: Bahubali"
  },
  {
    question: `Which drink does I like the most?
    a: Tea
    b: Coffee
    c: Juice\n`,
    answer: "a",
    correct: "a: Tea"
  },
  {
    question: `What I most enjoy doing in my spare time?
    a: Reading Books
    b: Scrolling Social Media
    c: Coding\n`,
    answer: "a",
    correct: "a: Reading Books"
  },
  {
    question: `What is my favorite holiday destination?
    a: Mountain
    b: Sea-Beach
    c: Jungle\n`,
    answer: "a",
    correct: "a: Mountain"
  },
  {
    question: `What type of movies I like most?
    a: Horror
    b: Comedy
    c: Romantic\n`,
    answer: "b",
    correct: "b: Comedy"
  },
  {
    question: `Which app is the best for me?
    a: Instagram
    b: LinkedIn
    c: Twitter\n`,
    answer: "b",
    correct: "b: LinkedIn"
  }
]

function play() {
  for (var i = 0; i < questionList.length; i++) {
    check(questionList[i].question, questionList[i].answer, questionList[i].correct, i + 1);
  }
}
play();

var highScore =
{
  name: "Sudipta",
  score: 12
};
var userScore =
{
  name: userName,
  score: score
};

console.log(" ");
console.log(".........................................................................");
console.log(chalk.blue("Thanks " + userName + " For Playing this game!😀"));
console.log(chalk.greenBright("YOU SCORED : " +score));

if (userScore.score >= highScore.score) {
  console.log(chalk.greenBright("HURRAH! You has beaten the highscore."));
} else {
  console.log(chalk.yellowBright("Highscore is : " + highScore.score));
}