const path = require("path");

module.exports = function(app){

// Route to homepage by default
app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

app.get('/2000s_Darude_Sandstorm', function(req, res){
    res.sendFile(path.join(__dirname, "../public/secret.html"))
    // res.send("Hello World")
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

};