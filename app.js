// Summon the power of express
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const {writeToFile, textToHtml} = require('./libft');

// API Middlewares
app.use(express.static("public")); // Display HTML + CSS
app.use(express.json({limit: '50mb'})); // Accept data in JSON format
app.use(express.urlencoded({limit: '50mb'})); // Decode data send through HTML form

// When receive GETs request home page, send this
app.get('/', function(req,res){
    // Send HTTP responsWorlde to browser
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// When receive POST request
app.post('/', (req, res) =>{
    // Convert form data into HTML file
    textToHtml(req.body.trace ,'./public/output.html')
    // Send HTML to front-end
    res.sendFile(path.join(__dirname, "./public/output.html"))
})

app.listen(2000);