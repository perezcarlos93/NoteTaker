const db = require("../db/db.json")
const fs = require("fs")


module.exports = function(app){

// Express receiving JSON data from db.json
app.get("/api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../db/db.json"))
})

// Posting received data from db.json
app.post("/api/notes", function(req, res){
    let saved = JSON.parse(fs.readFile("../db/db.json"));
    let newNote = req.body;
    let noteId = (saved.length).toString()
    newNote.id = noteId;
})

};