// Dependencies 
const express = require("express");
const path = require("path");


// Sets express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// SERVER ROUTES
// require('./routes/htmlRoutes')(app)


app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.get('/test', function(req, res){
    // res.sendFile(path.join(__dirname, "./public/test.html"))
    res.send("Hello World")
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"))
});


// Telling the server which port to listen in on
// Either the port set by the environment or 3001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});