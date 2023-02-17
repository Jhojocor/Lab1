const { random } = require('make-random')

random(200)
.then(resp => console.log(resp))

const movieQuote = require("popular-movie-quotes");

console.log(movieQuote.getSomeRandom(10));