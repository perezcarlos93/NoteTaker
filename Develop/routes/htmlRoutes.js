const path = require("path");

module.exports = function(app){

// Route to homepage by default
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

app.get('/test', function(req, res){
    res.sendFile(path.join(__dirname, "../public/test.html"))
})

};
