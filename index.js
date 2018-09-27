// ______________________________________________________________________________
// DEPENDENCIES - npm packages
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var express = require("express");
var Words = require("./Word.js");
var inquirer = require("inquirer");
//chalk for color
//look into push and pop, and making it a string
// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var app = express();
var PORT = process.env.PORT || 3000;

// // Express app will handle data parsing
// app.use(bodyParser.urlencoded({ extended: true })); if NEED, then add var bodyParser = require("body-parser"); to top
// app.use(bodyParser.json());

// ______________________________________________________________________________
// INQUIRER - setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });


// //______________________________________________________________________________
// //ROUTER - Connecting to .js data in routing folder
// // -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// app.use(serveStatic("./public/", {"index": ["index.html"]}));
//don't think we need this


// ______________________________________________________________________________
//LISTENER - start server
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

// ______________________________________________________________________________
//GAME LOGIC
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// if (userGuess ===letter) {
//     return "CORRECT"
// }
// // You got it right! Next word...
// // 🤓? Guess a letter
// var Classroom = require("./classroom.js"); //Words is already up there

// var newClass = new Classroom([], "Jared", "Suite 102"); //var newWord = newWord() blag blah

// newClass.addStudent("Irene", "Full Stack", 4.0); //newWord.addLetter ??
// newClass.addStudent("Keiyon", "Full Stack", 4.0);

// console.log(newClass);
var words = ["dog", "cat"];
var currentWordG = words[Math.floor(Math.random())*words.length];

var userGuess = 'p'; //process.argv[2];

function Letter(letter) {// word[i] ie a letter from the word
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
          Letter(userGuess);
      }
  }
};


console.log("userGuess: " + userGuess);
// var theLetter = new Letter ('p');

// var userGuess = new Letter(process.argv[2]);

// want to see if theLetter == userGuess aka 'p'
// theLetter.checkLetUDstring(userGuess);
// console.log(theLetter.show);

// module.exports = Letter;
// function Word(word){
//     this.wordArr = [];
//     for (var i = 0; i< word.length; i++){
//         console.log(word[i]);
//         var eachLetter = new Letter(word[i]); //each letter in the word
//         eachLetter.showLetter(); //replacing each letter with #### until each letter gets guessed
//         this.wordArr.push(eachLetter); //pushing our new word into #### until each letter gets guessed
//     }
//     this.guess = function (userGuess){
//         for (var i=0; i<this.wordArr.length; i++){
//             this.wordArr[i].checkLetUDstring(userGuess); //ze function from Letter constructor
//         }
//     }
    
// }

// Word(currentWordG);
console.log("currentWordG: " + currentWordG);
//   var daWord = new Word ('dog');
//   console.log(daWord.wordArr.toString()); // return whole thing as a string instead of commas between

