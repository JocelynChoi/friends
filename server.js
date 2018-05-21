// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
//htmlRoutes.js
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

// Displays all characters
//apiRoutes.js

// Star Wars Characters (DATA)
//apiRoutes.js
// =============================================================
var friends = [
  {
    name: "Brad",
    photo: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F04%2Fbrad-pitt-1.jpg%3Fw%3D450&w=700&q=85",
    score: [5,1,4,4,5,1,2,5,4,1]
  },
  {
    name: "Orlando",
    photo: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F04%2Fbrad-pitt-1.jpg%3Fw%3D450&w=700&q=85",
    score: [3,4,3,3,3,3,2,5,4,1]
  },
  {
    name: "John",
    photo: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F04%2Fbrad-pitt-1.jpg%3Fw%3D450&w=700&q=85",
    score: [1,2,3,2,1,1,2,3,2,1]
  }
];


app.get("/api/friends", function(req, res) {
  return res.json(friends);
});
// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
// //   // req.body hosts is equal to the JSON post sent from the user
// //   // This works because of our body-parser middleware
var newFriend = req.body;

// //   // Using a RegEx Pattern to remove spaces from newCharacter
// //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
console.log(newFriend);
friends.push(newFriend);
res.json(newFriend);
 });

//  function total(){
//  var array = [5,1,4,4,5,1,2,5,4,1];
//   for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
//  }
//  console.log (array);
//  total();



//function total() {

//   // We will read the existing bank file
//   fs.readFile("bank.txt", "utf8", function(err, data) {
//     if (err) {
//       return console.log(err);
//     }

//     // Break down all the numbers inside
//     data = data.split(", ");
//     var result = 0;

//     // Loop through those numbers and add them together to get a sum.
//     for (var i = 0; i < data.length; i++) {
//       if (parseFloat(data[i])) {
//         result += parseFloat(data[i]);
//       }
//     }

//     // We will then print the final balance rounded to two decimal places.
//     console.log("You have a total of " + result.toFixed(2));
//   });
// }

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
