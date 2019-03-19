// our constructor function
// recieving 3 parameters, and storing the parameters into the variables 
function Question(text, choices, answer) {
    this.text = text; 
    this.choices = choices; 
    this.answer = answer; 
}

// select the constructor function and use a prototype 
Question.prototype.isCorrectAnswer = function(choice) {
    return choice === this.answer; 
}