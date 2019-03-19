window.onload = function() {
    function timer(){
        var sec = 30;
        var timer = setInterval(function(){
            document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
            sec--;
            document.getElementById("#timer").innerHTML = minutes + "m " + seconds + "s ";
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
}

//function to populate the quiz, check if ended, if it is no need to populate 
function populate() {
    if(quiz.isEnded()) { 
        showScores();
    } else {
        // show questions on HTML in <p>question
        var element = document.getElementById("question");
        //inner HTML to current question
        element.innerHTML = quiz.getQuestionIndex().text;
        // show choices 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i]; 
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of" + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
// function to populate the questions
var questions = [
    new Question("What movie is about a story of a mining apprentice, a legendary castle, air pirates, secret agents, and a luminous crystal?", ["Castle In The Sky", "Kiki's Delivery Service", "Howl's Moving Castle", "Princess Mononoke"], "Castle In The Sky"),
    new Question("What is the title of an animated film about a story of a new home in the country-side, a forest spirit, and a cat/bus?", ["My Neighbors the Yamadas", "My Neighbor Totoro", "The Cat Returns", "Whisper of the Heart"], "My Neighbor Totoro"),
    new Question("Which Miyazaki animated film is about a girl who works in a hat shop, a mysterious wizard, and a moving castle?", ["Castle In The Sky","Kiki's Delivery Service", "The Cat Returns", "Howl's Moving Castle"], "Howl's Moving Castle"),
    new Question("What Miyazaki movie is about a story of a girl and her parents, a bathhouse, a transforming boy, and an incredible world of spirits?", ["Whisper of the Heart", "My Neighbors, The Yamadas", "Spirited Away", "Porco Rosso"], "Spirited Away"),
    new Question("What is the name of the Flaming Creature in Howl's Moving Castle?", ["Calcifer", "Sheraton", "Brinks", "Bubbalo"], "Calcifer"),
    new Question("What is Kiki's cat named in Kiki's Delivery Service?", ["Binks", "Samson", "Kram", "Jiji"], "Jiji"),
    new Question("What Did Haku Tell Chichiro To Do While Crossing The Bridge?", ["Hold her breath", "Close her eyes", "Run", "Crawl"], "Hold her breath"),
    new Question("What Animal Did Sophie Think Howl Was Disguised As?", ["Rat", "Dog", "Wolf", "Dragon"], "Dog"),
    new Question("What language does the word Ghibli come from?", ["Latin", "Arabic", "Roman", "Greek"], "Arabic"),
    new Question("How Does The Big Baby Describe Chichiro in Spirited Away?", ["A nuisance", "A real problem", "A germ from the outside", "A stain in the bath house"], "A germ from the outside"),
];

var quiz = new Quiz(questions);

// display quiz
populate();