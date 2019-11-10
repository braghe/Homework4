var number = 75;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var questions = [
    {
      title: "Where did Harry Potter go to school?",
      choices: [ "Hogwarts" , "Neverland" , "Dreamland" , "Mordor"],
      answer: "Hogwarts"
    },
    {
      title: "What is Darth Vader's real name?",
      choices: ["Nat Skywalker", "Cade Skywalker", "Ben Skywalker", "Anakin Skywalker"],
      answer: "Anakin Skywalker"
    },
    {
      title: "Who sang the theme song from Titanic?",
      choices: ["Celine Dion", "Madonna", "Beyonce", "Barbra Streisand"],
      answer: "Celine Dion"
    },
    {
      title: "Who was the main villain in Avengers: Infinity War?",
      choices: ["Ronan", "Thanos", "Malekith", "Nebula"],
      answer: "Thanos"
    },
    {
      title: "What Volcano does Frodo Baggins toss the One Ring into?",
      choices: ["Mount Peril", "Mount Fate", "Mount Doom", "Mount Fire"],
      answer: "Mount Doom"
    },
    
  ];
   
  $("#start").on("click", function() {
    $(this).hide();
    $("#time").html("<h2>Time Remaining: 15 Seconds</h2>" + "<br>");
    run();

    $("#question1").html("<h3>" + questions[0].title + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].choices[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].choices[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].choices[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].choices[3] + "</label><br><br>"
    );
    $("#question2").html("<h3>" + questions[1].title + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].choices[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].choices[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].choices[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].choices[3] + "</label><br><br>"
    );
    $("#question3").html("<h3>" + questions[2].title + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].choices[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].choices[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].choices[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].choices[3] + "</label><br><br>"
    );
    $("#question4").html("<h3>" + questions[3].title + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].choices[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].choices[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].choices[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].choices[3] + "</label><br><br>"
    );
    $("#question5").html("<h3>" + questions[4].title + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].choices[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].choices[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].choices[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].choices[3] + "</label><br><br>"
    );
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    $("#done").on("click", function() {
      keepingScore();
      displayResults();
    });
  });

  function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
  function decrement() {

  number--;
  $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

  if (number === 0) {
      stop();

      keepingScore();
      displayResults();

  }
}
  function stop() {
  clearInterval(intervalId);
}
function displayResults() {

  $("#time").hide();
  $("#question1").hide();
  $("#answer1").hide();
  $("#question2").hide();
  $("#answer2").hide();
  $("#question3").hide();
  $("#answer3").hide();
  $("#question4").hide();
  $("#answer4").hide();
  $("#question5").hide();
  $("#answer5").hide();

  $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

function keepingScore() {

  var userAnswer1 = $("input[name='answer1']:checked").val();
  var userAnswer2 = $("input[name='answer2']:checked").val();
  var userAnswer3 = $("input[name='answer3']:checked").val();
  var userAnswer4 = $("input[name='answer4']:checked").val();
  var userAnswer5 = $("input[name='answer5']:checked").val();
  
  if (userAnswer1 === undefined) {

    unanswered++;
}
else if (userAnswer1 == questions[0].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

if (userAnswer2 === undefined) {

    unanswered++;
}
else if (userAnswer2 == questions[1].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

if (userAnswer3 === undefined) {

    unanswered++;
}
else if (userAnswer3 == questions[2].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

if (userAnswer4 === undefined) {

    unanswered++;
}
else if (userAnswer4 == questions[3].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

if (userAnswer5 === undefined) {

    unanswered++;
}
else if (userAnswer5 == questions[4].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}
}