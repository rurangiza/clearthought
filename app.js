// Summon the power of express
const express = require('express');
const fs = require('fs');
const path = require('path');
const {writeToFile, textToHtml} = require('./libft');

const PORT = process.env.PORT || 2000

// Where de final file will be saved
const dest = "./public/output.html";

const app = express();
// API Middlewares
app.use(express.static("public")); // Display HTML + CSS
app.use(express.json({limit: '50mb'})); // Accept data in JSON format
app.use(express.urlencoded({limit: '50mb'})); // Decode data send through HTML form

// When receive GETs request home page, send this
app.get('/', function(req,res){
    //res.setHeader('Content-Type', 'text/html');
    // Send HTTP responsWorlde to browser
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// soemthing here
// When receive POST request
app.post('/', (req, res) =>{
    // Convert form data into HTML file
    textToHtml(req , dest)
    // Send HTML to front-end
    res.sendFile(path.join(__dirname, dest))
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
