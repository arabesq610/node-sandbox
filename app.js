var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

greet3.greeting = 'New and improved greeting';

var greet3b = require('./greet3'); // watch out! this one is just pointing to the same location in memory as greet3 because it caches the module

greet3b.greet(); // will reflect the changed value of greet3.greeting

var greet4 = require('./greet4');
var greeter = new greet4();
greeter.greet();
