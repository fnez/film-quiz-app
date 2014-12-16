$(document).ready(function() {
	// quiz questions array 
	var questions = [
		{questions: "1. Who directed the 1977 science fiction film Close Encounters of the Third Kind ?",
		choices: ["George Lucas", "Stephen Spielberg", "Christopher Nolan"],
		{questions: "2. What film in 1999 made the “bullet time” visual effect popular?",
		choices: ["The Matrix", "Titanic", "The sixth sense"],
		{questions: "3. Which actor played Peter Pan in the film Hook ?", 
        choices: ["Tom Cruise", "Russel Crowe", "Robin Williams"],
        {questions: "4. Who directed the cult classic The shinning ?", 
        choices: ["Sam Mendes", "Stanley Kubrick", "Stephen King"],
        {questions: "5. Which of these actors won an Academy Award for best actor in a leading role in the year 2000?", 
        choices: ["Tom Hanks in Forrest Gump", "Russel Crowe in Gladiator", "Kevin Spacey in American Beauty"]
	}]

	// global variables 
	var Correct = 0;
	var currentQuestion = 0;

	$("#question_wrapper").on("click", "#submit", function() {

	});