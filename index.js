// ______________________________________________________________________________
// DEPENDENCIES - npm packages
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var express = require("express");
var Words = require("./Word.js");
var inquirer = require("inquirer");

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

var userGuess = process.argv[2];

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
  this.checkLetUDstring = function (){
      if (userGuess === this.letter){
          this.show = true;
      }
  }
};
console.log(userGuess);
var myGuess = new Letter ('p');
console.log(userGuess.checkLetUDstring());
var anotherGuess = new Letter('r');
console.log(myGuess.showLetter);
