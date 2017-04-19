
//we need mongoose so we can create our models
var mongoose = require('mongoose')
var Widget = mongoose.model('Widget')

//this mudule.exports object wil contain 
//of our CRUD operations

module.exports = {
    
    //fetch all of the widgets in the db
    fetch: function (req, res) {
        Widget.find({}, function (err, widgets){
            //first check to see if there was an error while
            //fetching the widgets from the db
            if (err) {
                console.log("ERROR: http-CRUD-server > controllers/widgets.js > fetch > there was an error retrieving the widgets")
            }
            else {
                console.log("SUCCESS: http-CRUD-server > controllers/widgets.js > returning " + widgets.length + " widgets")
                res.json(widgets)
            }
        })
    },

    create: function (req, res){
        //create a new Widget with the data sent from the client
        //just pass in re
        var widget = new Widget({title: req.body.title, text: req.body.text})
        //console.log("http-CRUD-server > controllers/widgets.js > create > req is ", req)
        console.log("http-CRUD-server > controllers/widgets.js > create > req.body is ", req.body)

        //save the new Widget
        widget.save(function (err)
        {
            if (err){
                console.log('ERROR: http-CRUD-server > controllers/widgets.js > create > erorr saving new widget')
                res.json({status: 'error'})
            }
            else{
                res.json({staus: 'ok'})
                console.log("http-CRUD-server > controllers/widgets.js > create: widget saved successfully")
            }
        })
    },

    //delete a widget
    delete: function (req, res){
        console.log("http-CRUD-server > controllers/widgets.js > delete > req.body is ", req.body)
        console.log("http-CRUD-server > controllers/widgets.js > delete > req.body.id is ", req.body.id)
        Widget.remove({_id: req.body.id}, function (err){
            if (err){
                console.log('ERROR: http-CRUD-server > controllers/widgets.js > delete > there was an error deleting widget ' + req.body.id + " from the MongoDB")
            }
            else{
                console.log('http-CRUD-server > controllers/widgets.js > successfully deleted widget ' + req.body.id + " from the MongoDB")
                res.json({status: 'ok'})
            }
        })
    },

    update: function (req, res) {
        console.log("http-CRUD-server > controllers/widgets.js > update > req.body is ", req.body )
        Widget.update({_id: req._id}, req.body, function(err){
            if (err){
                console.log('ERROR: http-CRUD-server > controllers/widgets.js > update > there was an error updating widget: ' + req.body.id)
            }
            else{
                console.log('http-CRUD-server > controllers/widgets.js > update > successfully updated widget: ' + req.body.id)
                res.json({status: 'ok'})
            }
        })
    }

    
}