// **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter ✅

//   * A boolean value that stores whether that letter has been guessed yet✅

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


function Letter(letter) {
    this.letter = letter; 
    this.show = false; //default do not show the actual letter
    this.showLetter = function(){
        if (this.show === false){
            return "#";
            
        }
        else { //(this.show ===true) - don't think we need this part / can take out to make code cleaner
            return this.letter;
    }
  };
  this.checkLetUDstring = function (userGuess){
      if (userGuess === this.letter){
          this.show = true;
      }
  }
};


console.log(userGuess);
var theLetter = new Letter ('p');

var otherGuess = new Letter(process.argv[2]);

// want to see if theLetter == userGuess aka 'p'
var userGuess = 'adsf' // process.argv[2]; // 'p'?  for testing
theLetter.checkLetUDstring(userGuess);
console.log(theLetter.show);

module.exports = Letter;
  
