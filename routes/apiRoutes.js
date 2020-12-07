const db = require("../db/db.json")
const fs = require("fs");
const { json } = require("express");
const { v4 : uuidv4 } = require('uuid');

module.exports = function(app){

app.get("/api/notes", function(req, res){
    fs.readFile("./db/db.json", "utf8", function(err, data){
        if (err) throw err;
        var currentLibrary = JSON.parse(data);
        res.json(currentLibrary);
    })
})
 
// Posting received data from db.json
app.post("/api/notes", function(req, res){
    console.log(req.body)
    fs.readFile("./db/db.json", "utf8", function(err, data){
        if (err) throw err
        var jsonDataBase = JSON.parse(data)
        return jsonDataBase;
    })
    var entry = req.body
    entry.id = uuidv4();
    db.push(entry);
    fs.writeFile("./db/db.json", JSON.stringify(jsonDataBase), function(err){
        if(err) throw err
        res.json(true)
        } 
    )
})

app.delete("/api/notes/:id", function(req, res){
    console.log(req.params.id)
    fs.readFile("./db/db.json", "utf8", function(err, data){
        if (err) throw err;
        var savedNotes = JSON.parse(data)
        var id = req.params.id
        var updatedNotes = savedNotes.filter((note) => {
            if(note.id === id){
                return false
            } else return true
        });
        fs.writeFile("./db/db.json", JSON.stringify(updatedNotes), function(err){
            if(err) throw err
            res.json(true)
            } 
        )
        
    })
})

}; 