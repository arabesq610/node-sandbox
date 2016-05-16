function greet() {
    'use strict';
    console.log('hi');
}

// Functions are first-class
function logGreeting(fn) {
    'use strict';
    fn();
}

logGreeting(greet);

// Function expression
var greetMe = function () {
    'use strict';
    console.log('Hello, Elise');
};

logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function () {
    console.log('This is an anonymous function.');
});
