// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word✅

//   * A function that returns a string representing the word. This should call 
//the function on each letter object (the first function defined in `Letter.js`) 
//that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function
// on each letter object (the second function defined in `Letter.js`)✅

var Letter = require("./Letter.js");

function Word(word){
    this.wordArr = [];
    for (var i = 0; i< word.length; i++){
      console.log(word[i]);
      var eachLetter = new Letter(word[i]); //each letter in the word
      eachLetter.showLetter(); //replacing each letter with #### until each letter gets guessed
      this.wordArr.push(eachLetter); //pushing our new word into #### until each letter gets guessed
  }
    this.guess = function (userGuess){
      for (var i=0; i<this.wordArr.length; i++){
        this.wordArr[i].checkLetUDstring(userGuess); //ze function from Letter constructor
      }
    }

}
  
  var daWord = new Word ('dog');
  console.log(daWord.wordArr.toString()); // return whole thing as a string instead of commas between

module.exports = Letter;
