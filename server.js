// Dependencies 
const express = require("express");
// const path = require("path");


// Sets express app
const app = express();
// Set's port to assigned port or 300 if port is not assigned by environment
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// SERVER ROUTES - HTML and API
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)


// Telling the server which port to listen in on
// Either the port set by the environment or 3001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});