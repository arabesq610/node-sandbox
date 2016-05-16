var elise, christy;

function Person(obj) {
    'use strict';
    this.first = obj.first;
    this.last = obj.last;
}

Person.prototype.greet = function () {
    'use strict';
    console.log('Hello, ' + this.first + ' ' + this.last);
};

elise = new Person({
    first: 'Elise',
    last: 'Linn'
});

christy = new Person({
    first: 'Christy',
    last: 'Linn'
});

elise.greet();
christy.greet();
