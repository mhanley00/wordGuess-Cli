var Letter = require("./Letter.js");

function Word(word){
    this.wordArr = [];
    for (var i = 0; i< word.length; i++){
      console.log(word [i]);
      var anotherWord = new Letter(word[i]);
      this.wordArr.push(anotherWord);
    } //need 1 more for loop!
    this.guess = function (userGuess){
      for (var i=0; i<this.wordArr.length; i++){
        this.wordArr[i].checkLetUDstring(userGuess);
      }
    }
  }
  
  var daWord = new Word ('dog');
  console.log(daWord.wordArr) // what would this do?

module.exports = Letter;
