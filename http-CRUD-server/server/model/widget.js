//we need the mongoose module to create our Widget Schema
var mongoose = require('mongoose')

//create the Widget Schema
var WidgetSchema = new mongoose.Schema ({
    title: String, 
    text: String
})

//register the schema as a model!
var Widget = mongoose.model('Widget', WidgetSchema)