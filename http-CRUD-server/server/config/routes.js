//I am pretty sure we do not need these lines but they were
//in a similar project 

// var mongoose = require('mongoose')
// var Widget = mongoose.model('Widget')

//we need a reference to our task controller thay is going to 
//do the heavy lifting with the MongoDB
var widgets = require('../controllers/widgets.js')

//we are going to put the routing we need for this app in the 
//module.exports function that we are passing the express app var to
module.exports = function (app){
    //we need a post route for saving new widgets to the db
    //so we're just going to send the req and res over to the controller
    app.post('/widgets', function (req, res){
        widgets.create(req, res)
    })

    //this will get us a list of all the widgets
    app.get('/widgets', function (req, res){
        widgets.fetch(req, res)
    })

    //this will delete a widget
    app.delete('/widgets/:id', function (req, res){
        widgets.delete(req, res)
    })

    app.patch('/widgets', function(req, res){
        widgets.update(req, res)
    })
}
