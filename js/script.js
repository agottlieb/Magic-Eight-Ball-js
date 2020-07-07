$(document).ready(function(){
var magic8ball = {};
magic8ball.listOfAnswers = ["Seems promising.", "Signs point to no.", "Definately yes.", "In your dreams.", "Indubitably."];
 $("#answer").hide ();

  $("#answer").hide ();
 magic8ball.askQuestion =function (question) {
   $("#answer").fadeIn(4000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
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
    magic8ball.askQuestion(question);
    $("#8ball").effect( "shake" );
};

$("#questionButton").click( onClick );
});
