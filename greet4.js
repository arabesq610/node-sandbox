function Greeter() {
    'use strict';
    this.greeting = 'Hello world!!!!';
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = Greeter;
