// Our constructor function 
// question index is the question we are currently on 
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
function Quiz(questions) {
    this.score = 0; 
    this.questions = questions; 
    this.questionIndex = 0; 
}

// function to get index of current question 
Quiz.prototype.getQuestionIndex = function() { 
    return this.questions[this.questionIndex];
}

// guess function to check if current answer is the answer selected by user 
// navigate to a new question, so no need for return
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

// function to check if our quiz has ended or not
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}