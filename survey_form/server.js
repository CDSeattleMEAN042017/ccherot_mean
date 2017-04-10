// Have the server render views/index.ejs that has the form for the user to fill out 
// The user fills out the form and submits 
// The submitted form gets sent to /result 
// The server recognizes when someone posts things to /result, 
// grabs information from the POST, and sends the POST data back as its renders views/results.ejs

// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

//body parser!
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

//create a reference to jquery for client-side use
app.use(express.static(path.join(__dirname, "./node_modules")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
//which has the sirvey form in it
app.get('/', function(req, res) {
    //TODO: PASS AN ARRAY OF LANGUAGES
    var arrLanguages = ["JavaScript", "Ruby", "Swift", "C#", "Python", "PHP", "LISP" ]
    var arrLocations = ["Seattle", "San Francisco", "New York", "Los Angeles"]
    res.render("index", { arrLang: arrLanguages, arrLoc: arrLocations } )
});

// post route for adding a user
app.post('/result', function(req, res) {
    console.log("POST DATA", req.body);
    console.log("stauscode is " + req.statusCode)
    // This is where we would add the survey form data to the database
    // Then redirect to the results display
    //TODO: need to pass the form data with this redirect
    surveyData =  {name: req.body.name, 
        loc: req.body.dojoLocationSelector, 
        lang: req.body.codingLanguageSelector, 
        comment: req.body.comment
    }

    //res.statusCode = req.statusCode
    /*, 
        */
    res.render('result', {name: req.body.name, 
        loc: req.body.dojoLocation, 
        lang: req.body.codingLanguageSelector});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
