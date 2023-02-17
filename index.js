var casual = require('casual');

let numero_random = casual.day_of_week;

console.log(numero_random);


const movieQuote = require("popular-movie-quotes");

console.log(movieQuote.getSomeRandom(numero_random));