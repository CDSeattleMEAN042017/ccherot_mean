//require the mongoose module
var mongoose = require('mongoose')

//we are going to need a reference to the fs and path modules
//so we can slurp up all the models in the models folder
var fs = require('fs')
var path = require('path')

//connect to MongoDB!!
mongoose.connect('mongodb://localhost/widgets')

//set a path to the models
models_path = path.join(__dirname, './../model')

//read in all the js files in the models folder
fs.readdirSync(models_path).forEach(function (file){
    //is it a JS files
    if (file.indexOf('.js') >= 0)
    {
        //require this js file
        require(models_path + "/" + file)
    }
})


