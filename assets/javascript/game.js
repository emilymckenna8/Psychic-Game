
//creating array of letters for the computer to choose from
var computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins, losses, and ties. W.
var wins = 0;
var losses = 0;
var guesses_left = 9;
var guesses_sofar = [];
var magicLetter = null;
// Randomly chooses a choice from the array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updatemagicLetter = function() {
  this.magicLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

updatemagicLetter();


//resets the score whenever user wins or loses and chooses a new computerGuess
  var reset = function() {
        
        guesses_left = 9;
        guesses_sofar = [];
        updatemagicLetter();
        console.log(magicLetter);
  }

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      //decreased number of guesses left every time user presses key
      guesses_left--;
      //pushes the userGuess to the score HTML
      guesses_sofar.push(userGuess); 

    
      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number      
      if (guesses_left>0){
        if (userGuess === magicLetter) {
            wins++;
            alert("You're psychic!");
            reset()
          } 
        //else {losses++;}
        }
      else if (guesses_left==0){
        losses++;
        alert("Sorry, today's not your day!");
        reset();
      }

    
        var html = 
      
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses_left +"</p>" +
        "<p>Your Guesses So Far: " + guesses_sofar + "</p>"


        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#score").innerHTML = html;
    }
