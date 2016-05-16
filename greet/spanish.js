var greetings = require('./greetings.json');
var lang = 'es';

var greet = function () {
    'use strict';
    console.log(greetings[lang]);
};

module.exports = greet;
