var greetings = require('./greetings.json');
var lang = 'en';

var greet = function () {
    'use strict';
    console.log(greetings[lang]);
};

module.exports = greet;
