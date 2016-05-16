var greet = (function () {
    var sayHello = function () {
        // This will be required by app.js
        console.log('Hello!');
    }

    return {
        sayHello: sayHello
    }
}());

module.exports = greet;
