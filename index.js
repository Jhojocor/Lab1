const { random } = require('make-random')

// Return a random integer between 0 and 200
random(200)
.then(resp => console.log(resp))
