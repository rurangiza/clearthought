// Library of functions
const fs = require('fs') // Access to file system

// Save processed text to file
function writeToFile(line, destFile, mode){
    fs.writeFileSync(
        destFile,
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

function textToHtml(request, destFile) {
    // Store raw form data (plaintext)
    let raw_content = request.body.trace;
    // Ignore useless informations & convert [string] to [array of strings]
    raw_content = raw_content.substring(raw_content.indexOf("= ex00")).split('\n');

    // Access HTML structure
    let htmlStruct = fs.readFileSync('./public/html_struct.txt', 'utf8').split('\n')
    // Convert text to HTML & write to output.html
    for (j = 0; j < htmlStruct.length;j++)
    {
        // Erase content of output.html
        if (j === 0) {
            writeToFile("", destFile, "w")
        }
        // Insert new content
        if (/^<start_here>/.test(htmlStruct[j])){
            // Style the content
            for (i = 0; i < raw_content.length; i++)
            {
                // Error handling: retour a la ligne
                raw_content[i] = raw_content[i].replace(/\r/, ''); // Enlever retour a la ligne
                // Gerer les titres
            if (/^= ex/.test(raw_content[i])){
                raw_content[i] = raw_content[i].replace(/= ex/, '<h1> ex').replace(/=+/, "</h1>");
                writeToFile(raw_content[i], destFile, "a");
            }
            // Gerer les sous-titres
            else if (/^= Test/.test(raw_content[i])){
                raw_content[i] = raw_content[i].replace(/= Test/, '<h3> Test').replace(/=+/, '</h3>');
                writeToFile(raw_content[i], destFile, "a");
            }
            // Gerer les scripts Shell
            else if (/^\$>/.test(raw_content[i])){
                raw_content[i] = raw_content[i].replace(/^\$>/, '<p><span>$></span>')
                writeToFile(`${raw_content[i]}</p>`, destFile, "a");
            }
            // Gerer le reste
            else {
                writeToFile(`<p>${raw_content[i]}</p>`, destFile, "a");
                //   if (raw_content[i]) {
                //   }
            }
            }

        }
        // 
        writeToFile(htmlStruct[j], destFile, "a");
    }
}

module.exports = { writeToFile, textToHtml }