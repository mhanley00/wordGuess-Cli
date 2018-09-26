// ______________________________________________________________________________
// DEPENDENCIES - npm packages
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var express = require("express");
var words = require("./Word.js");
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
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });


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