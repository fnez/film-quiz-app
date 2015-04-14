$(document).ready(function() {
    //quiz question array of objects
    var questions = [{
        question: "1. Who directed the 1977 science fiction film Close Encounters of the Third Kind ?",
        choices: ["George Lucas", "Stephen Spielberg ", "Christopher Nolan"],
        qNum : 0,
        correct : 1,
        fact: ""
        },
        {
        question: "2. What film in 1999 made the “bullet time” visual effect popular?",
        choices: ["The Matrix", "Titanic", "The sixth sense."],
        qNum : 1,
        correct : 0,
        fact: ""
        },
        {
        question: "3. Which actor played Peter Pan in the film Hook ? ",
        choices: ["Tom Cruise", "Robin Williams", "Russel Crowe"],
        qNum : 2,
        correct : 1,
        fact: ""
        },
        {
        question: "4. Who directed the cult classic The shinning ? ",
        choices: ["Stephen King", "Stanley Kubrick", "Sam Mendes" ],
        qNum : 3,
        correct : 1,
        fact: ""
        },
        {
        question: "5. Which of these actors won an Academy Award for best actor in a leading role in the year 2000?",
        choices: ["Tom Hanks in Forrest Gump", "Russel Crowe in Gladiator", "Kevin Spacey in American Beauty" ],
        qNum : 4,
        correct : 0,
        fact: " "
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;

    // Add to currentQuestion, run nextQuestion function  
    $("#question_wrapper").on("click", "#submit", function () {
        updateAnswer();
        currentQuestion++;
        nextQuestion();
    });

    // Creates an answer and adds to correct
      function updateAnswer(e) {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;  
        } else if (answer == null) {
        	alert('Please choose an option!');
            e.preventDefault();
        }
    }

    // Retry button
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
        }
        else {
            $(".question").remove();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            	if (numberCorrect > 4) {
            		var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question(s). Great Job!'
                $("#answer_holder").html(finalScore);
            	} else {
            		var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question(s).You can do better!'
                $("#answer_holder").html(finalScore);
            	}
            }
        }
});