// Library of functions

const fs = require('fs') // Access to file system

// Save processed text to file
function writeToFile(line, mode){
    fs.writeFileSync(
        './public/output.html',
        line + "\n",
        {
            encoding: "utf8",
            flag: mode
        },
        (err) => {
            if (err) {
                console.log(err);
            }
    })
}

module.exports = { writeToFile }