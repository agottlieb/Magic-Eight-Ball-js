$(document).ready(function(){
var magic8ball = {};
magic8ball.listOfAnswers = ["Seems promising.", "Signs point to no.", "Definately yes.", "In your dreams.", "Indubitably."];

 magic8ball.askQuestion =function (question) {
   var randomNumber = Math.random();
   var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
   var randomIndex = Math.floor(randomNumberForListOfAnswers);
   var answer = this.listOfAnswers[randomIndex];
   $("#answer").text( answer );

     console.log(question);
     console.log(answer);
 };

var onClick = function() {
    var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion(question);

};

$("#questionButton").click( onClick );

});
