// Summon the power of express
const express = require('express');
const app = express();

const fs = require('fs');

// API Middlewares
app.use(express.static("public")); // Display HTML + CSS

app.use(express.json()); // Accept data in JSON format
app.use(express.urlencoded()); // Decode data send through HTML form

// When receive GET request home page, send this
app.get('/', function(req,res){
    // Send HTTP responsWorlde to browser
    res.sendFile(__dirname + '/public/index.html');
});

// When receive POST request
app.post('/', (req, res) =>{
    const content = req.body.trace;
    console.log(content);
    fs.writeFile('./content/form_data.txt', content, 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
        // File written successfully
        console.log("Content -> form_data.txt");
    })
})



app.listen(2000);