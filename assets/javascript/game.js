var computerChoices = ["a", "b", "c"]
//, "d"]
//,"e","f","g","h","i","j","k","l","m","n","o","p","q","r",
//"s","t","u","v","w","x","y","z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guesses_left = 9;
    var guesses_sofar = [];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c")) {

        if (userGuess === computerGuess) {
          wins++;
         } else {losses++;}
        }
        
        var html = 
      
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses_left +"</p>" +
        "<p>Your Guesses So Far: " + "</p>"
        // } else if ((userGuess === "r") && (computerGuess === "p")) {
        //   losses++;
        // } else if ((userGuess === "s") && (computerGuess === "r")) {
        //   losses++;
        // } else if ((userGuess === "s") && (computerGuess === "p")) {
        //   wins++;
        // } else if ((userGuess === "p") && (computerGuess === "r")) {
        //   wins++;
        // } else if ((userGuess === "p") && (computerGuess === "s")) {
        //   losses++;
        // } else if (userGuess === computerGuess) {
        //   wins++;
        // }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        // var html =
        //   "<p>You chose: " + userGuess + "</p>" +
        //   "<p>The computer chose: " + computerGuess + "</p>" +
        //   "<p>wins: " + wins + "</p>" +
        //   "<p>losses: " + losses + "</p>" +
        //   "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#score").innerHTML = html;
    }
