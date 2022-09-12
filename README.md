![Interface before-after](/public/assets/Thumbnail.jpg)

# What is Clear Thought?

Clear-thought is a tool to help "pisciners" of 42 school better identify their errors after a correction by the Moulinette.

After every correction, we receive a "trace", which is an email showing us what tests were performed on our code. This email can guide us to understand what went wrong and how to improve our code. Unfortunatly, the way it's formated makes it difficult to seperate useful informations from boring details. So most students don't bother with it.

So my goal with this project, is to make those computer generated emails, human readable. I will do so by removing non critical informations and creating visual hierarchy for better readability.

# To-do List

## Major features

- [x] Create a form capable of receiving multi-line text input from user and send that to a back-end for processing
- [x] Create a node.js server that receives form data, cleans it and converts it into HTML content
- [x] Send HTML to front-end, associated with its CSS, for the users to see
- [ ] Deploy web app online (Heroku? Netlify?)

## Improvements

- [ ] Handle every type of trace (shell scripts, file rights, C code,...)
- [ ] Show exercice title
- [ ] add success/failed icons
- [ ] Show points when exercice is a success
- [ ] Make the erros standout (Segmentation fault, Bus error, does not compile, Nothing turned in, timed-out, )
