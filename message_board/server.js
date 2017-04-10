// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');

//removing this as per the instructions for this assigment
// Setting our Static Folder Directory
//app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//mongoose stuff goes here
var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema

var PostSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 4},
 text: {type: String, required: true}, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });


var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    name: {type: String, required: true, minlength: 4}, 
    text: {type:String, required: true}
}, {timestamps: true})

// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');



// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    Post.find({}).populate('comments').exec(function (err, posts){
        if (err)
        {
            console.log("ERROR: Error retrieving posts from database")
        }
        else
        {
            if (posts && posts.length != 0)
            {
                console.log(posts.length + " posts were retrieved from the database")
            }
            res.render('index', {arrPosts: posts});
        }
    })
})

app.post('/new_post', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new Post with the name and age corresponding to those from req.body
  var post = new Post({name: req.body.name, text: req.body.message});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  post.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong while saving a new post');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a new post!');
      res.redirect('/');
    }
  })
})

app.post('/new_comment', function(req, res) {
  console.log("POST DATA", req.body);

  //find the post that the comment is attached to
  Post.findOne({_id: req.body._post}, function (err, post){

    // create a new comment with the name and age corresponding to those from req.body
    var comment = new Comment(req.body);
    //comment._post = post._id
    console.log("comment is " + comment)
    //Have to do nested saves here...one for the comment and one for the post
    comment.save(function(err) {
        if (err)
        {
            console.log("Error saving comment: " + err)
        }
        
        //push the new comment into the comments array of the post
        post.comments.push(comment)
        //then save the post!
        post.save(function(err){
            if (err)
            {
                console.log("Error saving post after adding new comment")
            }
            else{
                //if the post is saved successfully then redirect back to the root
                console.log("Post with new comment saved successfully")
                res.redirect('/');
            }
        })
    })        
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
